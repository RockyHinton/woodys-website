import type { Metadata } from "next";
import Container from "@/components/Container";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MetaLabel from "@/components/MetaLabel";
import { biographyOpening, biographySections } from "@/content/biography";
import type { BiographySection } from "@/lib/types";

export const metadata: Metadata = {
  title: "Biography",
  description:
    "The life and career of Woody Allen — Brooklyn, television, stand-up, fifty films, the writing, the stage and the clarinet.",
};

/**
 * Long-form editorial biography. Each section pairs restrained text
 * with a deliberate space for archival photography; the media variant
 * on each content record sets the composition, so the page reads with
 * a varied rhythm rather than one long column.
 */

function SectionMedia({ media }: { media: NonNullable<BiographySection["media"]> }) {
  if (media.variant === "pair") {
    const [first, second] = media.label.split("·").map((part) => part.trim());
    return (
      <div className="grid grid-cols-2 gap-5 sm:gap-8">
        <ImagePlaceholder label={first ?? media.label} aspect="3/4" />
        <ImagePlaceholder label={second ?? media.label} aspect="3/4" />
      </div>
    );
  }
  const aspect =
    media.variant === "portrait"
      ? "3/4"
      : media.variant === "landscape"
        ? "3/2"
        : "21/9";
  return <ImagePlaceholder label={media.label} aspect={aspect} />;
}

export default function BiographyPage() {
  return (
    <>
      <Container>
        <header className="pt-16 sm:pt-24">
          <MetaLabel className="mb-5">The Life</MetaLabel>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            Biography
          </h1>
          <div className="mt-10 max-w-2xl space-y-6">
            {biographyOpening.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "font-display text-2xl leading-snug tracking-tight sm:text-3xl"
                    : "text-base leading-relaxed text-ink-muted sm:text-lg"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </header>
      </Container>

      <div className="mt-16 border-t border-hairline sm:mt-24">
        <Container>
          {biographySections.map((section, index) => {
            const media = section.media;
            const fullWidth = media?.variant === "full";
            const reversed = index % 2 === 1;

            return (
              <section
                key={section.heading}
                aria-label={section.heading}
                className="border-b border-hairline py-16 last:border-b-0 sm:py-24"
              >
                {fullWidth ? (
                  <>
                    <div className="max-w-2xl">
                      {section.eyebrow ? (
                        <MetaLabel className="mb-4">{section.eyebrow}</MetaLabel>
                      ) : null}
                      <h2 className="font-display text-4xl leading-none tracking-tight sm:text-6xl">
                        {section.heading}
                      </h2>
                      <div className="mt-7 space-y-5">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-relaxed text-ink-muted sm:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    {media ? (
                      <div className="mt-12 sm:mt-16">
                        <SectionMedia media={media} />
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className="grid gap-10 sm:grid-cols-5 sm:gap-16">
                    <div
                      className={`sm:col-span-3 ${reversed ? "sm:order-2" : ""}`}
                    >
                      {section.eyebrow ? (
                        <MetaLabel className="mb-4">{section.eyebrow}</MetaLabel>
                      ) : null}
                      <h2 className="font-display text-4xl leading-none tracking-tight sm:text-6xl">
                        {section.heading}
                      </h2>
                      <div className="mt-7 max-w-prose space-y-5">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-relaxed text-ink-muted sm:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    {media ? (
                      <div
                        className={`sm:col-span-2 sm:self-center ${
                          reversed ? "sm:order-1" : ""
                        }`}
                      >
                        <SectionMedia media={media} />
                      </div>
                    ) : null}
                  </div>
                )}
              </section>
            );
          })}
        </Container>
      </div>
    </>
  );
}
