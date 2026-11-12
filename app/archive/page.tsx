import type { Metadata } from "next";
import Container from "@/components/Container";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MetaLabel from "@/components/MetaLabel";
import { archiveCategories, archiveIntro } from "@/content/archive";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "The original material behind the work — screenplays, photography, posters, production material and documents.",
};

/**
 * Archive landing page. Films are the finished work; the Archive is
 * the material behind it. An editorial index — numbered category rows,
 * each stating only what is genuinely confirmed to exist — so the page
 * feels archival and honest without faux-vintage effects.
 */
export default function ArchivePage() {
  return (
    <Container>
      <header className="pt-16 sm:pt-24">
        <MetaLabel className="mb-5">The Material</MetaLabel>
        <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
          Archive
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 pb-12 sm:pb-16">
          {archiveIntro.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "text-base leading-relaxed sm:text-lg"
                  : "text-sm leading-relaxed text-ink-muted sm:text-base"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      <ol className="border-t border-hairline">
        {archiveCategories.map((category, index) => (
          <li key={category.slug} className="border-b border-hairline">
            <div className="grid gap-x-8 gap-y-6 py-10 sm:grid-cols-[4rem_minmax(0,1fr)_minmax(0,14rem)] sm:py-14">
              <span className="text-xs tabular-nums text-ink-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-3xl leading-none tracking-tight sm:text-5xl">
                  {category.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {category.description}
                </p>
                {category.confirmedHoldings.length > 0 ? (
                  <div className="mt-6">
                    <MetaLabel className="mb-3">In the Collection</MetaLabel>
                    <ul className="max-w-xl space-y-2">
                      {category.confirmedHoldings.map((holding) => (
                        <li
                          key={holding}
                          className="border-l border-hairline-strong pl-4 text-sm leading-relaxed text-ink-muted"
                        >
                          {holding}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="mt-6 text-xs text-ink-muted">
                    Being catalogued.
                  </p>
                )}
              </div>
              <div className="hidden sm:block">
                <ImagePlaceholder
                  label={category.title}
                  aspect={category.slug === "screenplays" ? "3/4" : "4/3"}
                />
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="max-w-xl py-10 text-xs leading-relaxed text-ink-muted">
        Films are the finished work. The Archive is what surrounds it — and
        everything listed here exists; nothing is promised that is not held.
      </p>
    </Container>
  );
}
