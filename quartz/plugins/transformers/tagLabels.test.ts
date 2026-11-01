import assert from "node:assert/strict"
import test from "node:test"
import { Element, Root } from "hast"
import { unified } from "unified"
import { TagLabels } from "./tagLabels"
import { BuildCtx } from "../../util/ctx"

function link(slug: string, label: string, classes = ["tag-link", "internal"]): Element {
  return {
    type: "element",
    tagName: "a",
    properties: { href: `../../${slug}`, className: classes, "data-slug": slug },
    children: [{ type: "text", value: label }],
  }
}

test("restores nested tag labels without changing tag destinations or ordinary links", async () => {
  const links = [
    link("tags/lin-alg", "lin-alg"),
    link("tags/cards/lin-alg", "lin-alg"),
    link("tags/cards/math/lin-alg", "lin-alg"),
    link("notes/lin-alg", "lin-alg", ["internal"]),
  ]
  const tree: Root = { type: "root", children: links }
  const destinations = links.map((node) => node.properties.href)
  const processor = unified().use(TagLabels().htmlPlugins!({} as BuildCtx))
  await processor.run(tree)

  assert.deepEqual(
    links.map((node) => node.children),
    ["lin-alg", "cards/lin-alg", "cards/math/lin-alg", "lin-alg"].map((value) => [
      { type: "text", value },
    ]),
  )
  assert.deepEqual(
    links.map((node) => node.properties.href),
    destinations,
  )
})
