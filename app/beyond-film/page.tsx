import type { Metadata } from "next";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MetaLabel from "@/components/MetaLabel";
import { beyondFilmSections } from "@/content/beyond-film";

export const metadata: Metadata = {
  title: "Beyond Film",
  description:
    "Woody Allen's work beyond the filmography — books and writing, theatre, music and television.",
};

/**
 * A second body of creative work, presented on its own terms: each
 * area gets an editorial introduction, its principal works, and room
 * for its own kind of imagery (book covers, playbills, performance
 * photography, stills).
 */
export default function BeyondFilmPage() {
  return (
    <Container>
      <PageIntro
        eyebrow="The Work"
        title="Beyond Film"
        lede="The movies are half the story. There are also the books and the New Yorker pieces, the plays, a lifetime of Monday-night jazz, and the television writing where the career began."
      />

      {beyondFilmSections.map((section, index) => (
        <section
          key={section.slug}
          aria-label={section.title}
          className="border-t border-hairline py-14 sm:py-20"
        >
          <div className="grid gap-10 sm:grid-cols-5 sm:gap-16">
            <div
              className={`sm:col-span-3 ${index % 2 === 1 ? "sm:order-2" : ""}`}
            >
              <h2 className="font-display text-4xl leading-none tracking-tight sm:text-5xl">
                {section.title}
              </h2>
              <div className="mt-6 max-w-prose space-y-5">
                {section.intro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-ink-muted sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
                {section.works.map((work) => (
                  <li
                    key={work.title}
                    className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[6rem_minmax(0,1fr)]"
                  >
                    <span className="text-xs tabular-nums text-ink-muted sm:pt-1">
                      {work.year}
                    </span>
                    <span>
                      <span className="font-display text-lg tracking-tight">
                        {work.title}
                      </span>
                      {work.note ? (
                        <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">
                          {work.note}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`sm:col-span-2 ${index % 2 === 1 ? "sm:order-1" : ""}`}
            >
              {section.slug === "books-and-writing" ? (
                <div className="grid grid-cols-3 gap-3 sm:sticky sm:top-24 sm:gap-4">
                  <ImagePlaceholder label="" aspect="2/3" />
                  <ImagePlaceholder label="" aspect="2/3" />
                  <ImagePlaceholder label="" aspect="2/3" />
                  <div className="col-span-3">
                    <MetaLabel className="mt-1">{section.mediaLabel}</MetaLabel>
                  </div>
                </div>
              ) : (
                <div className="sm:sticky sm:top-24">
                  <ImagePlaceholder
                    label={section.mediaLabel}
                    aspect={section.mediaAspect}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </Container>
  );
}
