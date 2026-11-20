import { StateField, type EditorState } from "@codemirror/state"
import { Decoration, EditorView, type DecorationSet, type WidgetType } from "@codemirror/view"
import { parseFlashcards, type Flashcard } from "./parser"

interface FlashcardEditorOptions {
  sourcePath(state: EditorState): string
  widget(card: Flashcard, path: string): WidgetType
}

interface FlashcardEditorState {
  readonly path: string
  readonly decorations: DecorationSet
}

/** Decorations change presentation only; document edits and Markdown mode stay with Obsidian. */
export function createFlashcardField(
  options: FlashcardEditorOptions,
): StateField<FlashcardEditorState> {
  function decorate(state: EditorState): FlashcardEditorState {
    const path = options.sourcePath(state)
    const decorations = Decoration.set(
      parseFlashcards(state.doc.toString(), path).map((card) =>
        Decoration.replace({ block: true, widget: options.widget(card, path) }).range(
          card.from,
          card.to,
        ),
      ),
    )
    return { path, decorations }
  }

  return StateField.define<FlashcardEditorState>({
    create: decorate,
    update: (value, transaction) => {
      // Keep a path snapshot: Obsidian's file-info object may be mutable across transactions.
      const pathChanged = value.path !== options.sourcePath(transaction.state)
      return transaction.docChanged || pathChanged ? decorate(transaction.state) : value
    },
    provide: (field) => [
      EditorView.decorations.from(field, (value) => value.decorations),
      // Skip rendered cards during cursor movement, without making the editor read-only.
      EditorView.atomicRanges.of((view) => view.state.field(field).decorations),
    ],
  })
}
