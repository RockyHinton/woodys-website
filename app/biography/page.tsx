import type { Metadata } from "next";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MetaLabel from "@/components/MetaLabel";

export const metadata: Metadata = {
  title: "Biography",
  description: "The life and career of Woody Allen.",
};

/**
 * Long-form editorial foundation. The alternating text/photography
 * rhythm below establishes the typographic system; the real biography
 * and archival photography will replace the placeholder passages.
 */
const BIOGRAPHY_SECTIONS = [
  {
    label: "Beginnings",
    placeholder:
      "The opening chapter — Brooklyn, early writing, the first jokes sold — will be written here, alongside archival photography from the period.",
  },
  {
    label: "The Films",
    placeholder:
      "The central chapters will trace the filmography decade by decade, with stills, posters and production photography carrying the story.",
  },
  {
    label: "The Writing & The Stage",
    placeholder:
      "Prose, plays and the work for the page will have their own chapter here.",
  },
  {
    label: "The Music",
    placeholder:
      "The clarinet and the weekly jazz sets — a quieter, parallel career — close the account.",
  },
];

export default function BiographyPage() {
  return (
    <>
      <Container>
        <PageIntro
          eyebrow="The Life"
          title="Biography"
          lede="A long-form account of the life and career, combining writing with archival photography. The structure below establishes the editorial rhythm; the text itself is still to come."
        />
      </Container>

      <div className="border-t border-hairline">
        <Container>
          {BIOGRAPHY_SECTIONS.map((section, index) => (
            <section
              key={section.label}
              aria-label={section.label}
              className="grid gap-10 border-b border-hairline py-16 last:border-b-0 sm:grid-cols-2 sm:gap-16 sm:py-24"
            >
              <div className={index % 2 === 1 ? "sm:order-2" : undefined}>
                <MetaLabel className="mb-4">
                  {String(index + 1).padStart(2, "0")}
                </MetaLabel>
                <h2 className="font-display text-4xl leading-none tracking-tight sm:text-5xl">
                  {section.label}
                </h2>
                <p className="mt-6 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
                  {section.placeholder}
                </p>
              </div>
              <div className={index % 2 === 1 ? "sm:order-1" : undefined}>
                <ImagePlaceholder label="Archival photograph" aspect="4/3" />
              </div>
            </section>
          ))}
        </Container>
      </div>
    </>
  );
}
