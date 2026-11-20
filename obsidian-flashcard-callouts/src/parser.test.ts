import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { test } from "node:test"
import { parseFlashcards } from "./parser"

test("inline and reversed cards preserve rich Markdown and consume SR metadata", () => {
  const source = "**Q** $x$::[[Answer]]\n<!--SR:!fsrs,data-->\n\nA:::B\n"
  const cards = parseFlashcards(source)
  assert.equal(cards.length, 2)
  assert.equal(cards[0].prompt, "**Q** $x$")
  assert.equal(cards[0].answer, "[[Answer]]")
  assert.equal(source.slice(cards[0].from, cards[0].to), source.split("\n\n")[0])
  assert.equal(cards[1].kind, "reversed")
})

test("multiline cards retain lists, display math, and code in the answer", () => {
  const answer = "1. First\n\n$$\nx::y\n$$\n\n```js\na::b\n```"
  const source = `Prompt\n?\n${answer}\n<!--SR:data-->\n+++\n\nOrdinary text`
  const [card] = parseFlashcards(source)
  assert.equal(card.answer, answer)
  assert.equal(source.slice(card.to), "\n\nOrdinary text")
  assert.equal(parseFlashcards(source.replace("\n?\n", "\n??\n"))[0].kind, "reversed")
})

test("clozes remove grouping and hint metadata and retain formatted answers", () => {
  const [card] = parseFlashcards("A {=1;;**bold**;;hint=} and {=$x$=}.")
  assert.equal(card.prompt, "A ==**bold**== and ==$x$==.")
  assert.equal(card.kind, "cloze")
  assert.equal(parseFlashcards("Normal ==highlight==").length, 0)
  assert.equal(parseFlashcards("A ==legacy==\n<!--SR:data-->")[0].kind, "cloze")
})

test("ignores syntax in frontmatter, code, HTML, math, links, headings and quotes", () => {
  const source =
    "---\ntitle: a::b\n---\n\n```\na::b\n```\n\n    a::b\n\n> a::b\n\n# a::b\n\n`a::b`\n\n$x::y$\n\n$$\nx::y\n$$\n\n[[a::b]]\n\n[a::b](https://example.com)\n\n<!-- a::b -->\n\na\\::b\n\na::::b"
  assert.deepEqual(parseFlashcards(source), [])
  assert.deepEqual(parseFlashcards("A::B", "drawing.excalidraw.md"), [])
})

test("incomplete multiline cards do not swallow the next section or card", () => {
  assert.equal(parseFlashcards("Prompt\n?\nAnswer\n\n## Section\nNext::Card").length, 1)
  assert.equal(parseFlashcards("Prompt\n?\nUnfinished").length, 0)
})

test("CRLF offsets, scheduled clozes and neighboring inline cards remain distinct", () => {
  const source = "A::B\r\n<!--SR:x-->\r\n\r\nC::D\r\n{=E=}\r\n<!--SR:y-->\r\n+++"
  const cards = parseFlashcards(source)
  assert.equal(cards.length, 3)
  assert.equal(cards[1].prompt, "C")
  assert.equal(cards[2].prompt, "==E==")
  for (let i = 1; i < cards.length; i++) assert.ok(cards[i].from > cards[i - 1].to)
})

test("consecutive scheduling comments are all hidden without consuming following prose", () => {
  const source = "Question::Answer\n<!--SR:first-->\n<!--SR:second-->\n+++\n\nKeep this prose."
  const [card] = parseFlashcards(source)
  assert.equal(source.slice(card.to), "\n\nKeep this prose.")
  assert.equal(card.answer, "Answer")
})

test("escaped scheduling syntax remains literal answer text", () => {
  const [card] = parseFlashcards("Question::\\<!--SR:literal-->")
  assert.equal(card.answer, "\\<!--SR:literal-->")
  const [scheduled] = parseFlashcards("Question::Answer <!--SR:actual-->")
  assert.equal(scheduled.answer, "Answer")
})

test("renders a portable mixed-card fixture with non-overlapping source ranges", () => {
  const source = readFileSync(new URL("./fixtures/mixed-cards.md", import.meta.url), "utf8")
  const cards = parseFlashcards(source)
  assert.equal(cards.length, 4)
  assert.ok(cards[0].answer.includes("\\begin{align}"))
  assert.equal(cards.filter((card) => card.kind === "cloze").length, 1)
  for (let i = 1; i < cards.length; i++) assert.ok(cards[i].from > cards[i - 1].to)
})
