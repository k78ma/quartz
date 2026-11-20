import { EditorView, WidgetType } from "@codemirror/view"
import { MarkdownRenderChild, MarkdownRenderer, type Plugin } from "obsidian"
import { toCalloutMarkdown } from "./callout"
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
    wrapper.className = "fc-widget markdown-rendered"
    const child = this.plugin.addChild(new MarkdownRenderChild(wrapper))
    let disposed = false
    child.register(() => {
      disposed = true
    })
    renderedCards.set(wrapper, { dispose: () => this.plugin.removeChild(child) })

    const measure = () => {
      if (!disposed && wrapper.isConnected) view.requestMeasure()
    }
    // Native callouts animate their content height. Report those changes to CodeMirror without
    // moving its selection, focus, or scroll anchor. This also covers late-loading math and embeds.
    const resize = new ResizeObserver(measure)
    resize.observe(wrapper)
    child.register(() => resize.disconnect())

    const rendered = wrapper.createDiv()
    const actions = wrapper.createDiv({ cls: "fc-actions" })
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

    const render = async () => {
      try {
        await MarkdownRenderer.render(
          this.plugin.app,
          toCalloutMarkdown(this.card),
          rendered,
          this.path,
          child,
        )
        if (disposed) return
        const callout = rendered.querySelector<HTMLElement>(":scope > .callout")
        const title = callout?.querySelector<HTMLElement>(":scope > .callout-title")
        const prompt = title?.querySelector<HTMLElement>(":scope > .callout-title-inner")
        if (!callout || !title || !prompt)
          throw new Error("Native callout renderer returned no title")
        callout.addClass("fc-callout")
        callout.toggleClass("fc-cloze", this.card.kind === "cloze")
        title.addClass("fc-title")
        title.querySelector(":scope > .callout-icon")?.classList.add("fc-icon")
        prompt.addClass("fc-prompt")
        const answer = callout.querySelector<HTMLElement>(":scope > .callout-content")
        answer?.addClass("fc-answer")
        callout.append(actions)

        if (this.card.kind === "reversed" && answer) {
          const reverse = actions.createEl("button", {
            text: "Reverse",
            attr: { type: "button", "aria-pressed": "false" },
          })
          actions.prepend(reverse)
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
        measure()
      } catch (error) {
        if (disposed) return
        console.error("Flashcard Callouts: rendering failed", error)
        rendered.setText(this.card.prompt + (this.card.answer ? "\n\n" + this.card.answer : ""))
        wrapper.append(actions)
        measure()
      }
    }
    void render()
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
