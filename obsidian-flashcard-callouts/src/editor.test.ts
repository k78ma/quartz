import assert from "node:assert/strict"
import { test } from "node:test"
import { EditorState, StateEffect, StateField } from "@codemirror/state"
import { EditorView, WidgetType } from "@codemirror/view"
import { createFlashcardField } from "./editor"
import type { Flashcard } from "./parser"

class TestWidget extends WidgetType {
  constructor(
    readonly card: Flashcard,
    readonly path: string,
  ) {
    super()
  }
  toDOM(): HTMLElement {
    throw new Error("State tests must not create DOM")
  }
}

const changePath = StateEffect.define<string>()
const sourcePath = StateField.define({
  create: () => "note.md",
  update: (path, transaction) =>
    transaction.effects.find((effect) => effect.is(changePath))?.value ?? path,
})

function setup(doc = "Prose before.\n\nQuestion::Answer\n\nProse after.") {
  const cards = createFlashcardField({
    sourcePath: (state) => state.field(sourcePath),
    widget: (card, path) => new TestWidget(card, path),
  })
  const state = EditorState.create({ doc, extensions: [sourcePath, cards] })
  return { state, cards }
}

test("card preview keeps the editor editable and preserves card source during prose edits", () => {
  const { state, cards } = setup()
  assert.equal(state.readOnly, false)
  assert.equal(state.facet(EditorView.editable), true)
  const updated = state.update({
    changes: [
      { from: 0, insert: "New introduction.\n\n" },
      { from: state.doc.length, insert: "\nMore prose." },
    ],
  }).state
  const range = updated.field(cards).decorations.iter()
  assert.equal(updated.doc.sliceString(range.from, range.to), "Question::Answer")
  assert.equal(updated.field(cards).decorations.size, 1)
  assert.equal(state.doc.toString(), "Prose before.\n\nQuestion::Answer\n\nProse after.")
})

test("card decorations follow edits to the card itself", () => {
  const { state, cards } = setup("Question::Answer")
  const updated = state.update({ changes: { from: 10, to: 16, insert: "Changed" } }).state
  const widget = updated.field(cards).decorations.iter().value!.spec.widget as TestWidget
  assert.equal(widget.card.answer, "Changed")
  assert.equal(updated.doc.toString(), "Question::Changed")
  assert.equal(
    updated.update({ changes: { from: 8, to: 10, insert: " " } }).state.field(cards).decorations
      .size,
    0,
  )
})

test("selection changes reuse decorations", () => {
  const { state, cards } = setup()
  const updated = state.update({ selection: { anchor: 2 } }).state
  assert.equal(updated.field(cards), state.field(cards))
})

test("switching files with identical text refreshes source paths and Excalidraw exclusion", () => {
  const { state, cards } = setup("Question::Answer")
  const moved = state.update({ effects: changePath.of("folder/other.md") }).state
  const widget = moved.field(cards).decorations.iter().value!.spec.widget as TestWidget
  assert.equal(widget.path, "folder/other.md")
  const drawing = moved.update({ effects: changePath.of("drawing.excalidraw.md") }).state
  assert.equal(drawing.field(cards).decorations.size, 0)
})

test("mutable Obsidian file info is compared against the stored source path", () => {
  const info = { path: "note.md" }
  const cards = createFlashcardField({
    sourcePath: () => info.path,
    widget: (card, path) => new TestWidget(card, path),
  })
  const state = EditorState.create({ doc: "Question::Answer", extensions: [cards] })
  info.path = "renamed.excalidraw.md"
  const updated = state.update({}).state
  assert.equal(updated.field(cards).decorations.size, 0)
})
