import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FilmCard from "@/components/FilmCard";
import MetaLabel from "@/components/MetaLabel";
import { getAllFilms } from "@/lib/films";
import { BEYOND_FILM_AREAS, EXPLORE_EXPERIENCES } from "@/content/site";

/**
 * Homepage — the curator of the archive. Each section establishes
 * rhythm and hierarchy for a future feature; none is fully built yet.
 */
export default function HomePage() {
  const films = getAllFilms();

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
                Six decades of films, writing, theatre and music, in one
                place.
              </p>
            </Container>
          </div>
        </div>
      </section>

      {/* 2 — Films */}
      <section aria-labelledby="home-films" className="pt-20 sm:pt-28">
        <Container>
          <SectionHeader
            eyebrow="The Work"
            id="home-films"
            title="Films"
            description="The complete filmography, from the first picture to the most recent."
            link={{ label: "All films", href: "/films" }}
          />
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
            {films.slice(0, 2).map((film) => (
              <FilmCard key={film.slug} film={film} />
            ))}
            {/* Placeholder slots until the filmography is populated. */}
            <div className="hidden lg:block">
              <ImagePlaceholder label="Poster" aspect="2/3" />
            </div>
            <div className="hidden lg:block">
              <ImagePlaceholder label="Poster" aspect="2/3" />
            </div>
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
                <p id="home-on-this-day" className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                  A daily note from the archive — premieres, openings and
                  moments, matched to the date.
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
            eyebrow="The Material"
            id="home-archive"
            title="From the Archive"
            description="Screenplays, photography, posters and production material — the original record behind the finished work."
            link={{ label: "Enter the archive", href: "/archive" }}
          />
          <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-3">
            <ImagePlaceholder label="Screenplay page" aspect="3/4" />
            <ImagePlaceholder label="Photography" aspect="3/4" />
            <ImagePlaceholder
              label="Poster artwork"
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
            eyebrow="New Ways In"
            id="home-explore"
            title="Explore"
            description="Map, Timeline, On This Day, Quotes, By the Numbers — different routes through the same body of work."
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
                  <span className="hidden max-w-sm text-right text-sm text-ink-muted sm:block">
                    {experience.description}
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
            eyebrow="Also"
            id="home-beyond"
            title="Beyond Film"
            description="Books, theatre, music, television."
            link={{ label: "Beyond film", href: "/beyond-film" }}
          />
          <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
            {BEYOND_FILM_AREAS.map((area) => (
              <div key={area.slug}>
                <ImagePlaceholder label={area.title} aspect="4/5" />
                <p className="mt-3 text-sm">{area.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7 — Latest */}
      <section aria-labelledby="home-latest" className="pt-20 sm:pt-28">
        <Container>
          <SectionHeader
            eyebrow="Current"
            id="home-latest"
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
