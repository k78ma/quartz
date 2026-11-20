import type { Flashcard } from "./parser"

/** Use Obsidian's callout renderer and fold behavior rather than a separate disclosure widget. */
export function toCalloutMarkdown(card: Flashcard): string {
  const fold = card.kind === "cloze" ? "" : "+"
  const title = `> [!flashcard]${fold} ${card.prompt}`
  if (card.kind === "cloze") return title
  return [title, ">", ...card.answer.split("\n").map((line) => `> ${line}`)].join("\n")
}
