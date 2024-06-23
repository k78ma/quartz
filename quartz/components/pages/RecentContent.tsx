import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "../styles/listPage.scss"
import { PageList } from "../PageList"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"

function RecentContent(props: QuartzComponentProps) {
  const { tree, fileData, allFiles, cfg } = props

  const content =
    (tree as Root).children.length === 0
      ? fileData.description
      : htmlToJsx(fileData.filePath!, tree)
  const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? []
  const classes = ["popover-hint", ...cssClasses].join(" ")

  const listProps = {
    ...props,
    allFiles: allFiles.sort((a, b) => {
      const dateA = a.dates?.created ?? a.dates?.modified
      const dateB = b.dates?.created ?? b.dates?.modified
      if (dateA && dateB) {
        return dateB.getTime() - dateA.getTime()
      }
      return 0
    }),
  }

  return (
    <div class={classes}>
      <article>{content}</article>
      <div class="page-listing">
        {/* <p>Sorted by date of creation + alphabetical order.</p> */}
        <div>
          <PageList {...listProps} />
        </div>
      </div>
    </div>
  )
}

RecentContent.css = style + PageList.css
export default (() => RecentContent) satisfies QuartzComponentConstructor