/**
 * Global site structure.
 *
 * Navigation, section descriptions and the category architecture for
 * Archive, Explore and Beyond Film live here so that structural copy
 * stays out of presentation components.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Films", href: "/films" },
  { label: "Beyond Film", href: "/beyond-film" },
  { label: "Archive", href: "/archive" },
  { label: "Explore", href: "/explore" },
  { label: "Biography", href: "/biography" },
  { label: "News", href: "/news" },
];

/*
 * Archive category content lives in content/archive.ts, including the
 * confirmed holdings sourced from the legacy-site audit.
 */

/**
 * Explore = new ways of discovering relationships across the work.
 * status: "live" experiences carry real content; "foundation" pages
 * mark where a future experience will live.
 */
export const EXPLORE_EXPERIENCES = [
  {
    slug: "timeline",
    title: "Timeline",
    href: "/explore/timeline",
    concept: "The work through time.",
    description:
      "Films, books, theatre and music in one chronology, 1935 to now.",
    status: "live",
  },
  {
    slug: "by-the-numbers",
    title: "By the Numbers",
    href: "/explore/by-the-numbers",
    concept: "The career in figures.",
    description:
      "Fifty features, three editors, one language change — counted carefully.",
    status: "live",
  },
  {
    slug: "quotes",
    title: "Quotes",
    href: "/explore/quotes",
    concept: "Lines from the films and the writing.",
    description:
      "A verified collection, grown slowly — with a note on why that matters.",
    status: "live",
  },
  {
    slug: "map",
    title: "Map",
    href: "/explore/map",
    concept: "The films through place.",
    description:
      "Every confirmed filming location, from Coney Island to San Sebastián.",
    status: "foundation",
  },
  {
    slug: "on-this-day",
    title: "On This Day",
    href: "/explore/on-this-day",
    concept: "Moments from the archive, by date.",
    description: "Releases, openings and premieres, matched to today.",
    status: "foundation",
  },
] as const;

/*
 * Beyond Film section content lives in content/beyond-film.ts
 * (single source for both the landing page and homepage teaser).
 */
