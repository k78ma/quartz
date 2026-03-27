const overflowClass = "is-overflowing"
const overflowTolerancePx = 1

let updateHandle = 0

function syncLatexOverflow() {
  cancelAnimationFrame(updateHandle)
  updateHandle = requestAnimationFrame(() => {
    const displays = document.getElementsByClassName("katex-display") as HTMLCollectionOf<HTMLElement>

    for (const display of displays) {
      const html = display.querySelector(":scope > .katex > .katex-html")
      if (!(html instanceof HTMLElement)) {
        display.classList.remove(overflowClass)
        continue
      }

      const displayRect = display.getBoundingClientRect()
      let minLeft = displayRect.right
      let maxRight = displayRect.left

      for (const child of html.children) {
        if (!(child instanceof HTMLElement)) {
          continue
        }

        const rect = child.getBoundingClientRect()
        if (rect.width === 0 && rect.height === 0) {
          continue
        }

        minLeft = Math.min(minLeft, rect.left)
        maxRight = Math.max(maxRight, rect.right)
      }

      const hasVisibleContent = minLeft <= maxRight
      const isOverflowing =
        hasVisibleContent &&
        (minLeft < displayRect.left - overflowTolerancePx ||
          maxRight > displayRect.right + overflowTolerancePx)

      display.classList.toggle(overflowClass, isOverflowing)
    }
  })
}

document.addEventListener("nav", syncLatexOverflow)
window.addEventListener("resize", syncLatexOverflow)
document.fonts?.ready.then(syncLatexOverflow)

syncLatexOverflow()
