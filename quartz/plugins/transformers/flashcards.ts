import type { Blockquote, Paragraph, Root } from "mdast"
import type { Properties } from "hast"
import type { Plugin } from "unified"
import type { Node, Position } from "unist"
import { visit } from "unist-util-visit"
import type { QuartzTransformerPlugin } from "../types"

const schedule = /^\s*<!--SR:[^\n]*-->\s*$/

function block(
  tag: string,
  children: Blockquote["children"],
  properties: Properties = {},
): Blockquote {
  return { type: "blockquote", data: { hName: tag, hProperties: properties }, children }
}

function callout(children: Blockquote["children"], cloze = false): Blockquote {
  return block("div", children, {
    className: ["callout", "flashcard", ...(cloze ? ["flashcard-cloze"] : [])],
    "data-callout": "flashcard",
  })
}

function renderCard(prompt: Paragraph, answer: Blockquote, reversible: boolean): Blockquote {
  const summary = block("summary", [
    { ...prompt, data: { hName: "span", hProperties: { className: ["flashcard-prompt"] } } },
  ])
  const details = block(
    "details",
    [summary, block("div", answer.children, { className: ["callout-content"] })],
    { open: true },
  )
  const children = [details]

  if (reversible) {
    const button = block(
      "button",
      [
        {
          type: "paragraph",
          children: [{ type: "text", value: "Reverse" }],
          data: { hName: "span" },
        },
      ],
      {
        type: "button",
        className: ["flashcard-reverse"],
        "aria-pressed": "false",
      },
    )
    children.push(button)
  }

  return callout(children)
}

function quote(source: string) {
  return source
    .split("\n")
    .map((line) => "> > " + line)
    .join("\n")
}

const remarkFlashcards: Plugin<[], Root> = function () {
  const processor = this
  return (tree, file) => {
    const source = file.toString()
    if (!/::|==|\{=|^ {0,3}\?\s*$/m.test(source) || file.path?.endsWith(".excalidraw.md")) return

    const lines = source.split(/\r\n?|\n/)
    const paragraphs = new Map<number, Paragraph>()
    const headings = new Set<number>()
    const schedules = new Set<number>()
    for (const node of tree.children) {
      if (!node.position) continue
      const start = node.position.start.line - 1
      if (node.type === "paragraph") {
        for (let line = start; line < node.position.end.line; line++) paragraphs.set(line, node)
      } else if (node.type === "heading") {
        headings.add(start)
      } else if (node.type === "html" && schedule.test(node.value)) {
        schedules.add(start)
      }
    }

    let marker = "quartz-flashcard"
    while (source.includes(marker)) marker += "-"
    // This prefix keeps single-line faces in a paragraph even when they start
    // with block syntax like "- ", while allowing inline Markdown to parse.
    const inlineMarker = `<span data-${marker}></span>`
    const generated: string[] = []
    let changed = false

    function addCard(prompt: string, answer: string, kind: "block" | "inline" | "reverse") {
      generated.push(
        "",
        "> " + marker + " " + kind,
        ">",
        quote(inlineMarker + prompt),
        ">",
        "> ---",
        ">",
        quote(kind === "block" ? answer : inlineMarker + answer),
        "",
      )
      changed = true
    }

    function isMarker(line: number, marker: string) {
      const raw = lines[line]
      const paragraph = paragraphs.get(line)
      if (!paragraph || raw.trim() !== marker) return false
      return paragraph.children.some(
        (child) =>
          child.type === "text" &&
          child.position &&
          child.position.start.line <= line + 1 &&
          child.position.end.line >= line + 1,
      )
    }

    for (let line = 0; line < lines.length; line++) {
      const paragraph = paragraphs.get(line)
      const inlineSchedule = paragraph?.children.find(
        (child) =>
          child.type === "html" &&
          child.position?.start.line === line + 1 &&
          schedule.test(child.value) &&
          !lines[line].slice(child.position.end.column - 1).trim(),
      )
      const raw = lines[line].slice(
        0,
        inlineSchedule ? inlineSchedule.position!.start.column - 1 : undefined,
      )
      const text = raw.trim()
      if (!paragraph || !text || /^(?: {4}|\t)/.test(raw)) {
        generated.push(lines[line])
        continue
      }

      let separator = line + 1
      while (lines[separator]?.trim() === "") separator++
      if (isMarker(separator, "?")) {
        let end = separator + 1
        for (; end < lines.length; end++) {
          if (schedules.has(end) || isMarker(end, "+++")) break
          if (headings.has(end) || isMarker(end, "?")) {
            end = lines.length
            break
          }
        }

        if (end < lines.length) {
          const answer = lines
            .slice(separator + 1, end)
            .join("\n")
            .replace(/^(?:[ \t]*\n)+/, "")
            .trimEnd()
          if (answer.trim()) {
            addCard(text, answer, "block")
            if (schedules.has(end)) {
              let terminator = end + 1
              while (lines[terminator]?.trim() === "") terminator++
              if (isMarker(terminator, "+++")) end = terminator
            }
            line = end
            continue
          }
        }
      }

      // Require delimiters to be in Markdown text, while allowing the content
      // between them to contain math, code, links, or other inline formatting.
      function isText(startColumn: number, length: number) {
        return (
          paragraph?.children.some((child) => {
            if (child.type !== "text" || !child.position) return false
            const { start, end } = child.position
            return (
              (start.line < line + 1 ||
                (start.line === line + 1 && start.column - 1 <= startColumn)) &&
              (end.line > line + 1 ||
                (end.line === line + 1 && end.column - 1 >= startColumn + length))
            )
          }) ?? false
        )
      }

      const clozes: { start: number; end: number; answer: string }[] = []
      for (const opening of raw.matchAll(/(?<!\\)\{=/g)) {
        const start = opening.index
        if (start < (clozes.at(-1)?.end ?? 0) || !isText(start, 2)) continue
        const closing = [...raw.slice(start + 2).matchAll(/(?<!\\)=\}/g)].find((match) =>
          isText(start + 2 + match.index, 2),
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

      const separatorMatch = [...raw.matchAll(/(?<![:\\]):::{0,1}(?!:)/g)].find(
        (match) =>
          isText(match.index, match[0].length) &&
          !clozes.some(({ start, end }) => start <= match.index && match.index < end),
      )
      if (separatorMatch) {
        const prompt = raw.slice(0, separatorMatch.index).trim()
        const answer = raw.slice(separatorMatch.index + separatorMatch[0].length).trim()
        if (prompt && answer) {
          addCard(prompt, answer, separatorMatch[0].length === 3 ? "reverse" : "inline")
          if (schedules.has(line + 1)) line++
          continue
        }
      }

      if (clozes.length === 0 && (inlineSchedule || schedules.has(line + 1))) {
        const highlights: Position[] = []
        visit(paragraph, (child: Node) => {
          const position = child.position
          if (
            child.type === "highlight" &&
            position?.start.line === line + 1 &&
            position.end.line === line + 1
          ) {
            highlights.push(position)
          }
        })
        for (const highlight of highlights) {
          const start = highlight.start.column - 1
          const end = highlight.end.column - 1
          clozes.push({ start, end, answer: raw.slice(start + 2, end - 2).trim() })
        }
      }

      if (clozes.length) {
        let body = ""
        let previous = 0
        for (const { start, end, answer } of clozes) {
          body += raw.slice(previous, start) + '<span class="text-highlight">' + answer + "</span>"
          previous = end
        }
        body += raw.slice(previous)
        generated.push("", "> " + marker + " cloze", ">", quote(inlineMarker + body.trim()), "")
        changed = true
        if (schedules.has(line + 1)) line++
        continue
      }

      generated.push(lines[line])
    }

    if (!changed) return
    // Reparse with the configured Markdown extensions and the original document's definitions.
    const parsed = processor.parse(generated.join("\n")) as Root
    tree.children = parsed.children.map((node) => {
      if (node.type !== "blockquote") return node
      const [directive, front, divider, back] = node.children
      if (
        directive?.type !== "paragraph" ||
        directive.children[0]?.type !== "text" ||
        front?.type !== "blockquote"
      )
        return node
      const value = directive.children[0].value
      if (!value.startsWith(marker + " ")) return node
      const prompt = front.children[0]
      if (prompt?.type !== "paragraph") return node
      for (const face of [prompt, back?.type === "blockquote" ? back.children[0] : undefined]) {
        if (face?.type !== "paragraph") continue
        const [start, end] = face.children
        if (
          start?.type === "html" &&
          end?.type === "html" &&
          start.value + end.value === inlineMarker
        ) {
          face.children.splice(0, 2)
        }
      }
      if (value === marker + " cloze") return callout([prompt], true)
      if (divider?.type !== "thematicBreak" || back?.type !== "blockquote") return node
      return renderCard(prompt, back, value.endsWith(" reverse"))
    })
  }
}

function enableReverseFlashcards() {
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return
    const button = event.target.closest<HTMLButtonElement>(".flashcard-reverse")
    const card = button?.closest(".flashcard")
    const details = card?.querySelector("details")
    const prompt = details?.querySelector(".flashcard-prompt")
    const answer = details?.querySelector(".callout-content > p")
    if (!button || !details || !prompt || !answer) return

    const promptContent = Array.from(prompt.childNodes)
    prompt.replaceChildren(...answer.childNodes)
    answer.replaceChildren(...promptContent)
    button.setAttribute(
      "aria-pressed",
      button.getAttribute("aria-pressed") === "true" ? "false" : "true",
    )
  })
}

export const Flashcards: QuartzTransformerPlugin = () => ({
  name: "Flashcards",
  markdownPlugins: () => [remarkFlashcards],
  externalResources: () => ({
    js: [
      {
        script: `(${enableReverseFlashcards.toString()})()`,
        loadTime: "afterDOMReady",
        contentType: "inline",
      },
    ],
  }),
})
