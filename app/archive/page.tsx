import type { Metadata } from "next";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ARCHIVE_CATEGORIES } from "@/content/site";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "The original material behind the work — screenplays, photography, posters, production material and documents.",
};

/**
 * Archive landing page. Films are the finished work; the Archive is
 * the original material behind it. The page is an editorial index —
 * numbered category rows rather than a poster grid — so the two
 * pillars feel distinct from the start.
 */
export default function ArchivePage() {
  return (
    <Container>
      <PageIntro
        eyebrow="The Material"
        title="Archive"
        lede="Where Films presents the finished work, the Archive holds what stands behind it: screenplay drafts, photography, poster artwork, production paperwork and working notes. Each category below will open as material is catalogued."
      />
      <ol className="border-t border-hairline">
        {ARCHIVE_CATEGORIES.map((category, index) => (
          <li key={category.slug} className="border-b border-hairline">
            <div className="group grid gap-x-8 gap-y-4 py-8 sm:grid-cols-[4rem_minmax(0,1fr)_10rem] sm:items-center sm:py-10">
              <span className="text-xs tabular-nums text-ink-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {category.description}
                </p>
              </div>
              <div className="hidden sm:block">
                <ImagePlaceholder label="" aspect="4/3" />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
}
