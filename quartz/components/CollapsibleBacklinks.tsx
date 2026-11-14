import { componentRegistry } from "./registry"
import type { QuartzComponent, QuartzComponentConstructor } from "./types"

export function registerCollapsibleBacklinks() {
  const plugin = componentRegistry.get("backlinks")
  if (!plugin) return

  const createBacklinks = plugin.component as QuartzComponentConstructor<
    Record<string, unknown> | undefined
  >
  const createCollapsibleBacklinks: typeof createBacklinks = (options) => {
    const Backlinks = createBacklinks(options)
    const CollapsibleBacklinks: QuartzComponent = (props) => {
      const backlinks = Backlinks(props)
      if (!backlinks) return null

      const {
        children: [heading, list],
        ...attributes
      } = backlinks.props
      return (
        <details {...attributes} open>
          <summary>{heading}</summary>
          {list}
        </details>
      )
    }
    CollapsibleBacklinks.css = Backlinks.css
    CollapsibleBacklinks.afterDOMLoaded = Backlinks.afterDOMLoaded
    CollapsibleBacklinks.beforeDOMLoaded = Backlinks.beforeDOMLoaded
    return CollapsibleBacklinks
  }

  for (const [name, registration] of componentRegistry.getAll()) {
    if (registration.component === plugin.component) {
      componentRegistry.register(
        name,
        createCollapsibleBacklinks,
        registration.source,
        registration.manifest,
      )
    }
  }
}
