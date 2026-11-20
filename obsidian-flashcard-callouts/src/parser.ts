import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkMath from "remark-math"
import type { Paragraph, Root } from "mdast"

export interface Flashcard {
  readonly from: number
  readonly to: number
  readonly prompt: string
  readonly answer: string
  readonly kind: "basic" | "reversed" | "cloze"
}

const parser = unified().use(remarkParse).use(remarkFrontmatter).use(remarkMath)
const schedule = /^[ \t]*<!--SR:[^\r\n]*-->[ \t]*\r?$/

/** Pure source-to-ranges parser: never changes the Markdown or scheduling data. */
export function parseFlashcards(source: string, path = ""): Flashcard[] {
  if (path.endsWith(".excalidraw.md") || !/::|\{=|==|^\s*\?\??\s*$/m.test(source)) return []
  const tree = parser.parse(source) as Root
  const lines = source.split("\n")
  const offsets: number[] = []
  let offset = 0
  for (const line of lines) {
    offsets.push(offset)
    offset += line.length + 1
  }
  const paragraphs = new Map<number, Paragraph>()
  const headings = new Set<number>()
  const schedules = new Set<number>()
  for (const node of tree.children) {
    if (!node.position) continue
    const start = node.position.start.line - 1
    if (node.type === "paragraph") {
      for (let line = start; line < node.position.end.line; line++) paragraphs.set(line, node)
    } else if (node.type === "heading") headings.add(start)
    else if (node.type === "html") {
      // CommonMark can group consecutive scheduling comments into one HTML block.
      const comments = node.value.split(/\r?\n/)
      if (comments.every((comment) => schedule.test(comment))) {
        for (let line = start; line < start + comments.length; line++) schedules.add(line)
      }
    }
  }
  const cards: Flashcard[] = []
  function isText(line: number, column: number, length: number): boolean {
    const from = offsets[line] + column
    // Wiki links are plain text to CommonMark, but separators inside them are not cards.
    for (const link of lines[line].matchAll(/!?\[\[[^\n]*?\]\]/g)) {
      if (column >= link.index && column < link.index + link[0].length) return false
    }
    return (
      paragraphs
        .get(line)
        ?.children.some(
          (child) =>
            child.type === "text" &&
            child.position &&
            child.position.start.offset! <= from &&
            child.position.end.offset! >= from + length,
        ) ?? false
    )
  }
  function marker(line: number, value: string): boolean {
    return lines[line]?.trim() === value && isText(line, lines[line].indexOf(value), value.length)
  }
  function consumeEnd(line: number): number {
    let end = line
    while (schedules.has(end + 1)) end++
    let next = end + 1
    while (lines[next]?.trim() === "") next++
    if (marker(next, "+++")) end = next
    while (schedules.has(end + 1)) end++
    return end
  }
  function add(
    start: number,
    end: number,
    prompt: string,
    answer: string,
    kind: Flashcard["kind"] = "basic",
  ) {
    cards.push({ from: offsets[start], to: offsets[end] + lines[end].length, prompt, answer, kind })
  }
  for (let line = 0; line < lines.length; line++) {
    const paragraph = paragraphs.get(line)
    if (!paragraph || /^(?: {4}|\t)/.test(lines[line])) continue
    // Only hide actual HTML metadata, preserving escaped or code-formatted comment text.
    const inlineSchedule = paragraph.children.find(
      (child) =>
        child.type === "html" &&
        schedule.test(child.value) &&
        child.position?.start.line === line + 1 &&
        child.position.end.line === line + 1 &&
        !lines[line].slice(child.position.end.column - 1).trim(),
    )
    const raw = lines[line]
      .slice(0, inlineSchedule?.position ? inlineSchedule.position.start.column - 1 : undefined)
      .trimEnd()
    const text = raw.trim()
    if (!text || marker(line, "?") || marker(line, "??") || marker(line, "+++")) continue
    let separator = line + 1
    while (lines[separator]?.trim() === "") separator++
    if (marker(separator, "?") || marker(separator, "??")) {
      let end = separator + 1
      for (; end < lines.length; end++) {
        if (schedules.has(end) || marker(end, "+++")) break
        if (headings.has(end) || marker(end, "?") || marker(end, "??")) {
          end = lines.length
          break
        }
      }
      if (end < lines.length) {
        const answer = lines
          .slice(separator + 1, end)
          .join("\n")
          .trim()
        if (answer) {
          const last = consumeEnd(end)
          add(line, last, text, answer, marker(separator, "??") ? "reversed" : "basic")
          line = last
          continue
        }
      }
    }
    const clozes: { start: number; end: number; answer: string }[] = []
    for (const opening of raw.matchAll(/(?<!\\)\{=/g)) {
      const start = opening.index
      if (start < (clozes.at(-1)?.end ?? 0) || !isText(line, start, 2)) continue
      const closing = [...raw.slice(start + 2).matchAll(/(?<!\\)=\}/g)].find((match) =>
        isText(line, start + 2 + match.index, 2),
      )
      if (!closing) continue
      const end = start + closing.index + 4
      const answer = raw
        .slice(start + 2, end - 2)
        .replace(/^(?:\d+|[ash]+);;/, "")
        .split(";;", 1)[0]
        .trim()
      if (answer) clozes.push({ start, end, answer })
    }
    const inline = [...raw.matchAll(/(?<![:\\]):::{0,1}(?!:)/g)].find(
      (match) =>
        isText(line, match.index, match[0].length) &&
        !clozes.some((cloze) => cloze.start <= match.index && match.index < cloze.end),
    )
    if (inline) {
      const prompt = raw.slice(0, inline.index).trim()
      const answer = raw.slice(inline.index + inline[0].length).trim()
      if (prompt && answer) {
        const last = consumeEnd(line)
        add(line, last, prompt, answer, inline[0].length === 3 ? "reversed" : "basic")
        line = last
        continue
      }
    }
    // Only treat legacy highlights as clozes when SR metadata marks the line as a card.
    if (!clozes.length && (inlineSchedule || schedules.has(line + 1))) {
      for (const match of raw.matchAll(/(?<![=\\])==([^=\n]+)==(?![=])/g)) {
        if (isText(line, match.index, 2) && isText(line, match.index + match[0].length - 2, 2)) {
          clozes.push({ start: match.index, end: match.index + match[0].length, answer: match[1] })
        }
      }
    }
    if (clozes.length) {
      let body = ""
      let previous = 0
      for (const cloze of clozes) {
        body += raw.slice(previous, cloze.start) + "==" + cloze.answer + "=="
        previous = cloze.end
      }
      body += raw.slice(previous)
      const last = consumeEnd(line)
      add(line, last, body.trim(), "", "cloze")
      line = last
    }
  }
  return cards
}
