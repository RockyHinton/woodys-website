import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MetaLabel from "@/components/MetaLabel";
import { getAllFilms, getFilmBySlug } from "@/lib/films";

export function generateStaticParams() {
  return getAllFilms().map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilmBySlug(slug);
  if (!film) return {};
  return {
    title: `${film.title} (${film.year})`,
    description: film.shortSynopsis,
  };
}

/**
 * The single film template. Every film page is rendered from one Film
 * record; sections appear only when the record carries their data, so
 * the page degrades gracefully across films with very different
 * depths of archival material.
 */
export default async function FilmPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = getFilmBySlug(slug);
  if (!film) notFound();

  return (
    <article>
      {/* Hero */}
      <div className="border-b border-hairline">
        {film.heroImage ? (
          <Image
            src={film.heroImage.src}
            alt={film.heroImage.alt}
            width={film.heroImage.width ?? 2400}
            height={film.heroImage.height ?? 1000}
            className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
            priority
          />
        ) : (
          <>
            <ImagePlaceholder
              label={`${film.title} — hero still`}
              aspect="4/3"
              className="border-0 sm:hidden"
            />
            <div className="hidden sm:block">
              <ImagePlaceholder
                label={`${film.title} — hero still`}
                aspect="21/9"
                className="border-0"
              />
            </div>
          </>
        )}
      </div>

      <Container>
        {/* Title block */}
        <header className="pt-12 sm:pt-16">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              {film.title}
            </h1>
            <span className="font-display text-2xl text-ink-muted sm:text-3xl">
              {film.year}
            </span>
          </div>
          {film.roles?.length ? (
            <MetaLabel className="mt-5">{film.roles.join(" · ")}</MetaLabel>
          ) : null}
        </header>

        {/* Poster + synopsis */}
        <div className="mt-12 grid gap-10 border-t border-hairline pt-12 sm:mt-16 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-16 sm:pt-16">
          <div className="max-w-xs sm:max-w-none">
            {film.poster ? (
              <Image
                src={film.poster.src}
                alt={film.poster.alt}
                width={film.poster.width ?? 600}
                height={film.poster.height ?? 900}
                className="aspect-[2/3] w-full object-cover"
              />
            ) : (
              <ImagePlaceholder label="Poster" aspect="2/3" />
            )}
          </div>
          <div>
            {film.shortSynopsis || film.longSynopsis ? (
              <section aria-label="Synopsis">
                <MetaLabel className="mb-5">Synopsis</MetaLabel>
                {film.shortSynopsis ? (
                  <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                    {film.shortSynopsis}
                  </p>
                ) : null}
                {film.longSynopsis?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ) : null}

            {film.cast?.length ? (
              <section aria-label="Cast" className="mt-12">
                <MetaLabel className="mb-5">Cast</MetaLabel>
                <ul className="divide-y divide-hairline border-y border-hairline">
                  {film.cast.map((member) => (
                    <li
                      key={member.name}
                      className="flex items-baseline justify-between gap-6 py-3"
                    >
                      <span className="text-sm">{member.name}</span>
                      {member.as ? (
                        <span className="text-sm text-ink-muted">
                          {member.as}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>

        {/* Gallery */}
        {film.gallery?.length ? (
          <section aria-label="Gallery" className="mt-20">
            <MetaLabel className="mb-6">Gallery</MetaLabel>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8">
              {film.gallery.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 1200}
                  height={image.height ?? 800}
                  className="w-full object-cover"
                />
              ))}
            </div>
          </section>
        ) : null}

        {/* Quotes */}
        {film.quotations?.length ? (
          <section
            aria-label="Quotations"
            className="mt-20 border-y border-hairline py-14 sm:py-20"
          >
            {film.quotations.map((quote) => (
              <figure key={quote.text} className="mx-auto max-w-3xl text-center">
                <blockquote className="font-display text-3xl leading-tight tracking-tight sm:text-5xl">
                  “{quote.text}”
                </blockquote>
                {quote.attribution ? (
                  <figcaption className="mt-6">
                    <MetaLabel as="span">{quote.attribution}</MetaLabel>
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </section>
        ) : null}

        {/* Production + locations */}
        {film.productionNotes?.length || film.locations?.length ? (
          <div className="mt-20 grid gap-12 sm:grid-cols-2 sm:gap-16">
            {film.productionNotes?.length ? (
              <section aria-label="Production">
                <MetaLabel className="mb-5">Production</MetaLabel>
                {film.productionNotes.map((note) => (
                  <p
                    key={note}
                    className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted"
                  >
                    {note}
                  </p>
                ))}
              </section>
            ) : null}
            {film.locations?.length ? (
              <section aria-label="Filming locations">
                <MetaLabel className="mb-5">Locations</MetaLabel>
                <ul className="divide-y divide-hairline border-y border-hairline">
                  {film.locations.map((location) => (
                    <li
                      key={location.name}
                      className="flex items-baseline justify-between gap-6 py-3"
                    >
                      <span className="text-sm">{location.name}</span>
                      {location.place ? (
                        <span className="text-sm text-ink-muted">
                          {location.place}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-ink-muted">
                  Locations will eventually be plotted on the{" "}
                  <Link
                    href="/explore/map"
                    className="underline decoration-hairline-strong underline-offset-4 transition-colors duration-200 hover:text-ink"
                  >
                    Explore map
                  </Link>
                  .
                </p>
              </section>
            ) : null}
          </div>
        ) : null}

        {/* From the archive */}
        {film.relatedArchiveItems?.length || film.archiveMaterial?.length ? (
          <section aria-label="From the archive" className="mt-20">
            <MetaLabel className="mb-6">From the Archive</MetaLabel>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-8">
              {[
                ...(film.archiveMaterial ?? []),
                ...(film.relatedArchiveItems ?? []),
              ].map((item) => (
                <div key={item.slug}>
                  <ImagePlaceholder label={item.title} aspect="3/4" />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Watch */}
        {film.watchLinks?.length ? (
          <section aria-label="Where to watch" className="mt-20">
            <MetaLabel className="mb-5">Watch</MetaLabel>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {film.watchLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    className="text-sm underline decoration-hairline-strong underline-offset-4 transition-colors duration-200 hover:decoration-ink-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Back link */}
        <nav aria-label="Filmography" className="mt-20 border-t border-hairline pt-8">
          <Link
            href="/films"
            className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
          >
            ← All films
          </Link>
        </nav>
      </Container>
    </article>
  );
}
