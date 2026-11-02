import type { Metadata } from "next";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { BEYOND_FILM_AREAS } from "@/content/site";

export const metadata: Metadata = {
  title: "Beyond Film",
  description:
    "Woody Allen's work beyond the filmography — books, theatre, music and television.",
};

export default function BeyondFilmPage() {
  return (
    <Container>
      <PageIntro
        eyebrow="The Work"
        title="Beyond Film"
        lede="The work did not stop at the movies. Books and short prose, plays for the stage, a lifetime of jazz, and television — each area will open here as its material is added."
      />
      <div className="grid gap-x-8 gap-y-14 border-t border-hairline pt-12 sm:grid-cols-2">
        {BEYOND_FILM_AREAS.map((area) => (
          <section key={area.slug} aria-label={area.title}>
            <ImagePlaceholder label={area.title} aspect="3/2" />
            <h2 className="mt-5 font-display text-2xl tracking-tight sm:text-3xl">
              {area.title}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
              {area.description}
            </p>
          </section>
        ))}
      </div>
    </Container>
  );
}
