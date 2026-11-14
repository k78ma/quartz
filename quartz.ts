import { registerCollapsibleBacklinks } from "./quartz/components/CollapsibleBacklinks"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { RecentNotesPageType } from "./quartz/plugins/pageTypes/recentNotes"
import { Flashcards } from "./quartz/plugins/transformers/flashcards"
import { TagLabels } from "./quartz/plugins/transformers/tagLabels"

const config = await loadQuartzConfig(undefined, registerCollapsibleBacklinks)
const obsidianMarkdown = config.plugins.transformers.findIndex(
  (plugin) => plugin.name === "ObsidianFlavoredMarkdown",
)
// Flashcards use the Obsidian syntax nodes before OFM converts them to HTML.
config.plugins.transformers.splice(obsidianMarkdown === -1 ? 0 : obsidianMarkdown, 0, Flashcards())
config.plugins.transformers.push(TagLabels())
config.plugins.pageTypes ??= []
config.plugins.pageTypes.push(RecentNotesPageType())

export default config
export const layout = await loadQuartzLayout({
  byPageType: {
    recentNotes: {
      beforeBody: [],
      afterBody: [],
      left: [],
      right: [],
      frame: "full-width",
    },
  },
})
