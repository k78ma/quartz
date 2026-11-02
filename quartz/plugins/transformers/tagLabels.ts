import { Root } from "hast"
import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"

export const TagLabels: QuartzTransformerPlugin = () => ({
  name: "TagLabels",
  htmlPlugins() {
    return [
      () => (tree: Root) => {
        visit(tree, "element", (node) => {
          const classes = node.properties.className
          const slug = node.properties["data-slug"]
          if (
            node.tagName === "a" &&
            Array.isArray(classes) &&
            classes.includes("tag-link") &&
            typeof slug === "string" &&
            slug.startsWith("tags/") &&
            node.children.length === 1 &&
            node.children[0].type === "text"
          ) {
            // CrawlLinks prettyLinks removes parent segments from inline tag labels.
            node.children[0].value = slug.slice("tags/".length)
          }
        })
      },
    ]
  },
})
