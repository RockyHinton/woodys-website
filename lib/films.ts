import type { Film } from "@/lib/types";
import { films } from "@/content/films";

/** All directed works, newest first. */
export function getAllFilms(): Film[] {
  return films;
}

/** The theatrical features only, newest first. */
export function getFeatureFilms(): Film[] {
  return films.filter((film) => !film.kind || film.kind === "feature");
}

/** Directed works outside the features: the segment and the TV film. */
export function getOtherDirectedWorks(): Film[] {
  return films.filter((film) => film.kind && film.kind !== "feature");
}

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((film) => film.slug === slug);
}

/** Features grouped by decade, newest decade first. */
export function getFeaturesByDecade(): { decade: string; films: Film[] }[] {
  const groups = new Map<number, Film[]>();
  for (const film of getFeatureFilms()) {
    const decade = Math.floor(film.year / 10) * 10;
    const group = groups.get(decade) ?? [];
    group.push(film);
    groups.set(decade, group);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => b - a)
    .map(([decade, decadeFilms]) => ({
      decade: `${decade}s`,
      films: decadeFilms.sort((a, b) => b.year - a.year),
    }));
}
