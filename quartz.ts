import { registerCollapsibleBacklinks } from "./quartz/components/CollapsibleBacklinks"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { RecentNotesPageType } from "./quartz/plugins/pageTypes/recentNotes"
import { Flashcards, PrepareFlashcards } from "./quartz/plugins/transformers/flashcards"
import { TagLabels } from "./quartz/plugins/transformers/tagLabels"

const config = await loadQuartzConfig(undefined, registerCollapsibleBacklinks)
const markdownFlavor = config.plugins.transformers.findIndex(
  (plugin) =>
    plugin.name === "GitHubFlavoredMarkdown" || plugin.name === "ObsidianFlavoredMarkdown",
)
config.plugins.transformers.splice(
  markdownFlavor === -1 ? 0 : markdownFlavor,
  0,
  PrepareFlashcards(),
)
const obsidianMarkdown = config.plugins.transformers.findIndex(
  (plugin) => plugin.name === "ObsidianFlavoredMarkdown",
)
config.plugins.transformers.splice(
  obsidianMarkdown === -1 ? config.plugins.transformers.length : obsidianMarkdown + 1,
  0,
  Flashcards(),
)
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
