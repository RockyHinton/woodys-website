import type { Film } from "@/lib/types";
import { films } from "@/content/films";

/** All films, newest first. */
export function getAllFilms(): Film[] {
  return films;
}

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((film) => film.slug === slug);
}
