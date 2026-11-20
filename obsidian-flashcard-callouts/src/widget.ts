import { EditorView, WidgetType } from "@codemirror/view"
import { MarkdownRenderChild, MarkdownRenderer, type Plugin } from "obsidian"
import type { Flashcard } from "./parser"

// DOM can survive replacement of its WidgetType by an equivalent instance.
const renderedCards = new WeakMap<HTMLElement, { dispose(): void }>()

export class FlashcardWidget extends WidgetType {
  constructor(
    private readonly plugin: Plugin,
    private readonly card: Flashcard,
    private readonly path: string,
    private readonly showSource: () => void,
  ) {
    super()
  }

  eq(other: FlashcardWidget): boolean {
    // Source offsets may shift when prose is edited. Preserve folding and reversal in that case.
    return (
      this.plugin === other.plugin &&
      this.path === other.path &&
      this.card.prompt === other.card.prompt &&
      this.card.answer === other.card.answer &&
      this.card.kind === other.card.kind
    )
  }

  toDOM(view: EditorView): HTMLElement {
    const wrapper = view.dom.ownerDocument.createElement("div")
    wrapper.className = "fc-callout callout"
    wrapper.dataset.callout = "flashcard"
    const child = this.plugin.addChild(new MarkdownRenderChild(wrapper))
    let disposed = false
    child.register(() => {
      disposed = true
    })
    renderedCards.set(wrapper, { dispose: () => this.plugin.removeChild(child) })

    const measure = () => {
      if (!disposed && wrapper.isConnected) view.requestMeasure()
    }
    const render = async (markdown: string, target: HTMLElement) => {
      try {
        await MarkdownRenderer.render(this.plugin.app, markdown, target, this.path, child)
      } catch (error) {
        if (disposed) return
        console.error("Flashcard Callouts: rendering failed", error)
        target.setText(markdown)
      }
      measure()
    }

    const { card } = this
    const cloze = card.kind === "cloze"
    // A cloze has no answer to fold; do not expose a disclosure control for it.
    const content = cloze ? wrapper.createDiv() : wrapper.createEl("details")
    if (content.tagName === "DETAILS") {
      content.setAttribute("open", "")
      child.registerDomEvent(content, "toggle", measure)
    }
    wrapper.toggleClass("fc-cloze", cloze)
    const title = cloze
      ? content.createDiv({ cls: "fc-title", attr: { "aria-label": "Cloze flashcard" } })
      : content.createEl("summary", { cls: "fc-title" })
    title.createSpan({ cls: "fc-icon", attr: { "aria-hidden": "true" } })
    const prompt = title.createDiv({ cls: "fc-prompt" })
    const promptReady = render(card.prompt, prompt)
    const actions = wrapper.createDiv({ cls: "fc-actions" })

    if (!cloze) {
      const answer = content.createDiv({ cls: "callout-content fc-answer" })
      const answerReady = render(card.answer, answer)
      if (card.kind === "reversed") {
        const reverse = actions.createEl("button", {
          text: "Reverse",
          attr: { type: "button", "aria-pressed": "false" },
        })
        // Wait for both faces so pending Markdown output cannot land on the wrong face.
        reverse.disabled = true
        void Promise.all([promptReady, answerReady]).then(() => {
          if (!disposed) reverse.disabled = false
        })
        child.registerDomEvent(reverse, "click", () => {
          const front = Array.from(prompt.childNodes)
          prompt.replaceChildren(...answer.childNodes)
          answer.replaceChildren(...front)
          reverse.setAttribute(
            "aria-pressed",
            String(reverse.getAttribute("aria-pressed") !== "true"),
          )
          measure()
        })
      }
    }

    const edit = actions.createEl("button", {
      text: "Edit",
      attr: { type: "button", "aria-label": "Show flashcard source for editing" },
    })
    child.registerDomEvent(edit, "click", () => {
      // Resolve before disabling decorations; captured offsets may be stale after prose edits.
      const anchor = view.posAtDOM(wrapper)
      this.showSource()
      view.dispatch({ selection: { anchor }, scrollIntoView: true })
      view.focus()
    })
    return wrapper
  }

  destroy(dom: HTMLElement): void {
    renderedCards.get(dom)?.dispose()
    renderedCards.delete(dom)
  }

  ignoreEvent(): boolean {
    return true
  }
}
