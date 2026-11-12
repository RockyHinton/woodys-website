import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FilmCard from "@/components/FilmCard";
import MetaLabel from "@/components/MetaLabel";
import { getFeaturesByDecade, getOtherDirectedWorks } from "@/lib/films";

export const metadata: Metadata = {
  title: "Films",
  description:
    "The complete filmography — fifty feature films written and directed by Woody Allen, 1966–2023.",
};

/**
 * The filmography as an exhibition wall: features grouped by decade,
 * newest first, each film carried by its poster (or its typographic
 * placeholder until artwork arrives). No card chrome, no metadata
 * clutter — poster, title, year.
 */
export default function FilmsPage() {
  const decades = getFeaturesByDecade();
  const otherWorks = getOtherDirectedWorks();

  return (
    <Container>
      <PageIntro
        eyebrow="The Work"
        title="Films"
        lede="Fifty feature films, 1966 to 2023, every one of them written or co-written by Woody Allen. A fifty-first began shooting in Madrid in October 2026. Poster artwork is being restored to the archive and will appear here film by film."
      />

      {decades.map(({ decade, films }) => (
        <section
          key={decade}
          aria-label={decade}
          className="border-t border-hairline py-12 sm:py-16"
        >
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-[8rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)]">
            <h2 className="font-display text-4xl leading-none tracking-tight text-ink-muted sm:sticky sm:top-24 sm:self-start sm:text-5xl">
              {decade}
            </h2>
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
              {films.map((film) => (
                <FilmCard key={film.slug} film={film} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Beyond the fifty features */}
      <section
        aria-label="Also directed"
        className="border-t border-hairline py-12 sm:py-16"
      >
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-[8rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)]">
          <MetaLabel>Also Directed</MetaLabel>
          <div>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {otherWorks.map((work) => (
                <li key={work.slug}>
                  <Link
                    href={`/films/${work.slug}`}
                    className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
                  >
                    <span className="font-display text-xl tracking-tight sm:text-2xl">
                      <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-ink-muted">
                        {work.title}
                      </span>
                    </span>
                    <span className="text-xs text-ink-muted">
                      {work.kindNote} · {work.year}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-muted">
              A fifty-first feature — as yet untitled — entered production in
              Madrid in October 2026. It will join the filmography on release.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
