import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FilmCard from "@/components/FilmCard";
import MetaLabel from "@/components/MetaLabel";
import { getFilmBySlug } from "@/lib/films";
import { beyondFilmSections } from "@/content/beyond-film";
import { EXPLORE_EXPERIENCES } from "@/content/site";

/**
 * Homepage — the curator of the archive. It selects; the sections
 * themselves live elsewhere.
 */

/** Curated homepage selection — the films with the deepest records. */
const FEATURED_FILM_SLUGS = [
  "annie-hall",
  "manhattan",
  "hannah-and-her-sisters",
  "midnight-in-paris",
];

export default function HomePage() {
  const featuredFilms = FEATURED_FILM_SLUGS.map(getFilmBySlug).filter(
    (film) => film !== undefined
  );

  return (
    <>
      {/* 1 — Cinematic hero: a full-bleed, image-led opening. */}
      <section aria-label="Introduction" className="border-b border-hairline">
        <div className="relative">
          <ImagePlaceholder
            label="Hero photography"
            aspect="4/5"
            className="border-0 sm:hidden"
          />
          <div className="hidden sm:block">
            <ImagePlaceholder
              label="Hero photography"
              aspect="21/9"
              className="border-0"
            />
          </div>
          <div className="absolute inset-0 flex items-end">
            <Container className="pb-12 sm:pb-16">
              <MetaLabel className="mb-4">Writer · Director · Actor</MetaLabel>
              <h1 className="font-display text-6xl leading-[0.9] tracking-tight sm:text-8xl">
                Woody Allen
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
                Fifty films, the books, the stage and the clarinet — six
                decades of work, in one place.
              </p>
            </Container>
          </div>
        </div>
      </section>

      {/* 2 — Films */}
      <section aria-labelledby="home-films" className="pt-20 sm:pt-28">
        <Container>
          <SectionHeader
            id="home-films"
            eyebrow="The Work"
            title="Films"
            description="Fifty features, 1966 to 2023 — every one of them written or co-written by Allen. A fifty-first is in production."
            link={{ label: "The complete filmography", href: "/films" }}
          />
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
            {featuredFilms.map((film) => (
              <FilmCard key={film.slug} film={film} />
            ))}
          </div>
        </Container>
      </section>

      {/* 3 — On This Day: compact editorial strip. */}
      <section aria-labelledby="home-on-this-day" className="pt-20 sm:pt-28">
        <Container>
          <div className="border-y border-hairline py-10 sm:py-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <MetaLabel className="mb-3">On This Day</MetaLabel>
                <p
                  id="home-on-this-day"
                  className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl"
                >
                  Releases, openings and premieres from six decades, matched
                  to the date — a daily note from the archive, in development.
                </p>
              </div>
              <Link
                href="/explore/on-this-day"
                className="shrink-0 text-sm text-ink-muted underline decoration-hairline-strong underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink-muted"
              >
                About this feature
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 — From the Archive */}
      <section aria-labelledby="home-archive" className="pt-20 sm:pt-28">
        <Container>
          <SectionHeader
            id="home-archive"
            eyebrow="The Material"
            title="From the Archive"
            description="The record behind the films — among it, some 275 scanned screenplay pages from Annie Hall, original cast documents, and poster artwork from around the world."
            link={{ label: "Enter the archive", href: "/archive" }}
          />
          <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-3">
            <ImagePlaceholder label="Annie Hall — screenplay page" aspect="3/4" />
            <ImagePlaceholder label="Cast biography document" aspect="3/4" />
            <ImagePlaceholder
              label="International poster artwork"
              aspect="3/4"
              className="hidden lg:flex"
            />
          </div>
        </Container>
      </section>

      {/* 5 — Explore */}
      <section aria-labelledby="home-explore" className="pt-20 sm:pt-28">
        <Container>
          <SectionHeader
            id="home-explore"
            eyebrow="New Ways In"
            title="Explore"
            description="Different routes through the same six decades. The Timeline and By the Numbers are open; the Map is in development."
            link={{ label: "Explore", href: "/explore" }}
          />
          <ul className="mt-10">
            {EXPLORE_EXPERIENCES.map((experience) => (
              <li key={experience.slug} className="border-b border-hairline">
                <Link
                  href={experience.href}
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <span className="font-display text-2xl tracking-tight sm:text-3xl">
                    <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-ink-muted">
                      {experience.title}
                    </span>
                  </span>
                  <span className="hidden text-right text-sm text-ink-muted sm:block">
                    {experience.concept}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6 — Beyond Film */}
      <section aria-labelledby="home-beyond" className="pt-20 sm:pt-28">
        <Container>
          <SectionHeader
            id="home-beyond"
            eyebrow="Also"
            title="Beyond Film"
            description="Seven books, a dozen works for the stage, fifty years of Monday-night jazz, and the television rooms where it all began."
            link={{ label: "Beyond film", href: "/beyond-film" }}
          />
          <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
            {beyondFilmSections.map((section) => (
              <Link
                key={section.slug}
                href="/beyond-film"
                className="group block"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none">
                    <ImagePlaceholder label={section.mediaLabel} aspect="4/5" />
                  </div>
                </div>
                <p className="mt-3 text-sm">
                  <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-ink-muted">
                    {section.title}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 7 — Latest */}
      <section aria-labelledby="home-latest" className="pt-20 sm:pt-28">
        <Container>
          <SectionHeader
            id="home-latest"
            eyebrow="Current"
            title="Latest"
            description="News and current work."
            link={{ label: "All news", href: "/news" }}
          />
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-muted">
            Recent articles will appear here once the news section carries
            real entries.
          </p>
        </Container>
      </section>
    </>
  );
}
