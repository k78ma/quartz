import { Date, getDate, ValidDateType } from "../../components/Date"
import { QuartzComponent } from "../../components/types"
import { GlobalConfiguration } from "../../cfg"
import { QuartzPageTypePlugin } from "../types"
import { QuartzPluginData } from "../vfile"
import { FullSlug, isFolderPath, resolveRelative, simplifySlug } from "../../util/path"

function isTagPageSlug(slug: string | undefined): boolean {
  if (!slug) return false
  return slug === "tags" || slug === "tags/index" || slug.startsWith("tags/")
}

function isSamePageSlug(a: string | undefined, b: string | undefined): boolean {
  if (!a || !b) return false
  return simplifySlug(a as FullSlug) === simplifySlug(b as FullSlug)
}

function shouldIncludeInRecentNotes(
  page: QuartzPluginData,
  currentSlug: string | undefined,
): boolean {
  const slug = page.slug as string | undefined
  return (
    slug !== undefined &&
    !isSamePageSlug(slug, currentSlug) &&
    page.unlisted !== true &&
    !isTagPageSlug(slug) &&
    !isFolderPath(slug)
  )
}

function resolveDefaultDateType(
  page: QuartzPluginData,
  cfg: GlobalConfiguration,
): ValidDateType | undefined {
  return (
    (page.defaultDateType as ValidDateType | undefined) ??
    ((cfg as unknown as Record<string, unknown>).defaultDateType as ValidDateType | undefined)
  )
}

function withResolvedDateType(page: QuartzPluginData, cfg: GlobalConfiguration): QuartzPluginData {
  const resolved = resolveDefaultDateType(page, cfg)
  if (!resolved) return page

  return { ...page, defaultDateType: resolved }
}

function byResolvedDateAndAlphabetical(cfg: GlobalConfiguration) {
  return (f1: QuartzPluginData, f2: QuartzPluginData) => {
    const p1 = withResolvedDateType(f1, cfg)
    const p2 = withResolvedDateType(f2, cfg)
    const d1 = p1.defaultDateType ? getDate(p1) : undefined
    const d2 = p2.defaultDateType ? getDate(p2) : undefined

    if (d1 && d2) {
      return d2.getTime() - d1.getTime()
    } else if (d1 && !d2) {
      return -1
    } else if (!d1 && d2) {
      return 1
    }

    const t1 = p1.frontmatter?.title?.toLowerCase() ?? ""
    const t2 = p2.frontmatter?.title?.toLowerCase() ?? ""
    return t1.localeCompare(t2)
  }
}

const RecentNotesPageBody: QuartzComponent = ({ allFiles, cfg, fileData }) => {
  const currentSlug = fileData.slug as string | undefined
  const pages = [...allFiles]
    .filter((page) => shouldIncludeInRecentNotes(page, currentSlug))
    .sort(byResolvedDateAndAlphabetical(cfg))

  return (
    <article class="recent-notes-page popover-hint">
      <ul class="section-ul">
        {pages.map((page) => {
          const title = page.frontmatter?.title ?? "Untitled"
          const pageWithDateType = withResolvedDateType(page, cfg)
          const date = pageWithDateType.defaultDateType ? getDate(pageWithDateType) : undefined
          const tags = page.frontmatter?.tags ?? []

          return (
            <li class="section-li">
              <div class="section">
                <p class="meta">{date && <Date date={date} locale={cfg.locale} />}</p>
                <div class="desc">
                  <h3>
                    <a
                      href={resolveRelative(fileData.slug!, page.slug!)}
                      class="internal internal-link"
                    >
                      {title}
                    </a>
                  </h3>
                </div>
                <ul class="tags">
                  {tags.map((tag) => (
                    <li>
                      <a
                        class="internal tag-link"
                        href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                      >
                        {tag}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

RecentNotesPageBody.css = `
ul.section-ul {
  list-style: none;
  margin-top: 2em;
  padding-left: 0;
}

li.section-li {
  margin-bottom: 1em;
}

li.section-li > .section {
  display: grid;
  grid-template-columns: fit-content(8em) 3fr 1fr;
}

@media all and (max-width: 600px) {
  li.section-li > .section > .tags {
    display: none;
  }
}

li.section-li > .section > .desc > h3 > a {
  background-color: transparent;
}

li.section-li > .section .meta {
  margin: 0 1em 0 0;
  opacity: 0.6;
}

.popover .section {
  grid-template-columns: fit-content(8em) 1fr !important;
}

.popover .section > .tags {
  display: none;
}

.recent-notes-page .section h3 {
  margin: 0;
}

.recent-notes-page .section > .tags {
  margin: 0;
}
`

export const RecentNotesPageType: QuartzPageTypePlugin = () => ({
  name: "RecentNotesPage",
  priority: 1000,
  match: ({ slug }) => slug === "recent-notes" || slug === "recent-notes/index",
  layout: "recentNotes",
  body: () => RecentNotesPageBody,
})
