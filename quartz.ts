import { RecentNotes } from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { RecentNotesPageType } from "./quartz/plugins/pageTypes/recentNotes"
import { type FullSlug, simplifySlug } from "./quartz/util/path"

const RECENT_NOTES_PAGE_SLUG = "recent-notes"

function isRecentNotesPage(slug: string | undefined): boolean {
  if (!slug) return false
  return simplifySlug(slug as FullSlug) === RECENT_NOTES_PAGE_SLUG
}

const config = await loadQuartzConfig()
RecentNotes({
  filter: (page: { slug?: string }) => !isRecentNotesPage(page.slug),
})
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
