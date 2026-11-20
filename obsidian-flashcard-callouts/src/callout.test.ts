import assert from "node:assert/strict"
import { test } from "node:test"
import { toCalloutMarkdown } from "./callout"
import { parseFlashcards } from "./parser"

test("basic and reversed cards use native expanded callout syntax", () => {
  for (const separator of ["::", ":::"]) {
    const [card] = parseFlashcards(`**Question** $x$${separator}[[Answer]]`)
    assert.equal(toCalloutMarkdown(card), "> [!flashcard]+ **Question** $x$\n>\n> [[Answer]]")
  }
})

test("multiline answers preserve Markdown nesting inside the native callout", () => {
  const answer = "1. First\n\n$$\nx+y\n$$\n\n```js\na::b\n```\n\n> Nested quote"
  const [card] = parseFlashcards(`Question\n?\n${answer}\n\n+++`)
  const rendered = toCalloutMarkdown(card).split("\n")
  assert.equal(rendered[0], "> [!flashcard]+ Question")
  assert.equal(rendered[1], ">")
  assert.equal(
    rendered
      .slice(2)
      .map((line) => line.slice(2))
      .join("\n"),
    answer,
  )
})

test("clozes use native non-collapsible callouts with highlights in context", () => {
  const [card] = parseFlashcards("A {=highlighted answer=} in context.")
  assert.equal(toCalloutMarkdown(card), "> [!flashcard] A ==highlighted answer== in context.")
})
