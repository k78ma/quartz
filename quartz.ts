import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { RecentNotesPageType } from "./quartz/plugins/pageTypes/recentNotes"

const config = await loadQuartzConfig()
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
