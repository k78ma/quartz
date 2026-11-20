import type { Extension } from "@codemirror/state"
import { editorInfoField, MarkdownView, Notice, Plugin } from "obsidian"
import { createFlashcardField } from "./editor"
import { FlashcardWidget } from "./widget"

export default class FlashcardCallouts extends Plugin {
  private enabled = false
  private toggling = false
  private unloading = false
  private readonly extensions: Extension[] = []
  private ribbon!: HTMLElement
  private status!: HTMLElement
  private field!: Extension

  onload(): void {
    this.field = createFlashcardField({
      sourcePath: (state) => state.field(editorInfoField, false)?.file?.path ?? "",
      widget: (card, path) => new FlashcardWidget(this, card, path, () => this.setEnabled(false)),
    })
    this.registerEditorExtension(this.extensions)
    this.ribbon = this.addRibbonIcon("panels-top-left", "Render flashcards as callouts", () => {
      void this.toggle()
    })
    this.ribbon.addClass("fc-ribbon")
    this.status = this.addStatusBarItem()
    this.status.addClass("fc-status")
    this.status.setAttribute("role", "button")
    this.status.tabIndex = 0
    this.registerDomEvent(this.status, "click", () => {
      void this.toggle()
    })
    this.registerDomEvent(this.status, "keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        void this.toggle()
      }
    })
    this.addCommand({
      id: "toggle",
      name: "Toggle callout rendering",
      callback: () => {
        void this.toggle()
      },
    })
    this.updateControls()
    // Start in editing mode each session; toggling never writes note contents.
  }

  onunload(): void {
    this.unloading = true
  }

  private async toggle(): Promise<void> {
    if (this.toggling || this.unloading) return
    this.toggling = true
    try {
      if (!this.enabled) {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView)
        if (view && view.getMode() !== "source") {
          await view.setState({ ...view.getState(), mode: "source" }, { history: false })
        }
      }
      if (this.unloading) return
      this.setEnabled(!this.enabled)
      new Notice(this.enabled ? "Flashcards: callout preview" : "Flashcards: editable source", 1600)
    } catch (error) {
      console.error("Flashcard Callouts: could not toggle preview", error)
      new Notice("Could not toggle flashcard preview. See the console for details.")
    } finally {
      this.toggling = false
    }
  }

  private setEnabled(enabled: boolean): void {
    if (this.enabled === enabled) return
    this.enabled = enabled
    this.extensions.splice(0, this.extensions.length, ...(enabled ? [this.field] : []))
    this.app.workspace.updateOptions()
    this.updateControls()
  }

  private updateControls(): void {
    this.ribbon.toggleClass("is-active", this.enabled)
    this.ribbon.setAttribute("aria-pressed", String(this.enabled))
    this.ribbon.setAttribute(
      "aria-label",
      this.enabled ? "Show flashcard source" : "Render flashcards as callouts",
    )
    this.status.setText(this.enabled ? "Cards: callouts" : "Cards: source")
    this.status.setAttribute("aria-label", "Toggle flashcard callouts")
    this.status.setAttribute("aria-pressed", String(this.enabled))
  }
}
