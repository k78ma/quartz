import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { ProcessedContent, defaultProcessedContent } from "../vfile"
import { FullPageLayout } from "../../cfg"
import { FilePath, FullSlug, joinSegments, pathToRoot } from "../../util/path"
import { defaultListPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { RecentContent } from "../../components"
import { write } from "./helpers"

export const RecentPage: QuartzEmitterPlugin<Partial<FullPageLayout>> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultListPageLayout,
    pageBody: RecentContent(),
    ...userOpts,
  }

  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  return {
    name: "RecentPage",
    getQuartzComponents() {
      return [Head, Header, Body, ...header, ...beforeBody, pageBody, ...left, ...right, Footer]
    },
    async emit(ctx, content, resources): Promise<FilePath[]> {
      const slug = "recent" as FullSlug
      const externalResources = pageResources(pathToRoot(slug), resources)
      const [tree, file] = defaultProcessedContent({
        slug,
        // text: "# Recent Notes",
        // description: "A list of recent notes",
        frontmatter: { title: "Recent Notes", tags: [] },
      })

      const componentData: QuartzComponentProps = {
        fileData: file.data,
        externalResources,
        cfg: ctx.cfg.configuration,
        children: [],
        tree,
        allFiles: content.map(([_tree, file]) => file.data),
      }

      const pageContent = renderPage(slug, componentData, opts, externalResources)
      const fp = await write({
        ctx,
        content: pageContent,
        slug,
        ext: ".html",
      })

      return [fp]
    },
  }
}