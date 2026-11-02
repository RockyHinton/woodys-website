import type { Metadata } from "next";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FilmCard from "@/components/FilmCard";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { getAllFilms } from "@/lib/films";

export const metadata: Metadata = {
  title: "Films",
  description: "The complete filmography of Woody Allen.",
};

/**
 * The filmography. The grid scales naturally to dozens of films —
 * the posters themselves are the interface, with no card chrome.
 */
export default function FilmsPage() {
  const films = getAllFilms();

  return (
    <Container>
      <PageIntro
        eyebrow="The Work"
        title="Films"
        lede="The filmography will be presented here in full, newest first. Two sample records are in place while the architecture is established."
      />
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
        {films.map((film) => (
          <FilmCard key={film.slug} film={film} />
        ))}
        {/* Quiet slots indicating the scale of the eventual collection. */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} aria-hidden="true" className="opacity-60">
            <ImagePlaceholder label="Poster" aspect="2/3" />
            <div className="mt-4 h-5 w-2/3 border-b border-hairline" />
          </div>
        ))}
      </div>
    </Container>
  );
}
