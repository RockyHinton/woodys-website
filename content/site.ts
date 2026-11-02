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

/** Archive = the original material behind the finished work. */
export const ARCHIVE_CATEGORIES = [
  {
    slug: "screenplays",
    title: "Screenplays",
    description:
      "Scripts, drafts and annotated pages from across the filmography.",
  },
  {
    slug: "photography",
    title: "Photography",
    description: "On-set and portrait photography from six decades of work.",
  },
  {
    slug: "posters-and-artwork",
    title: "Posters & International Artwork",
    description:
      "Original release posters and artwork from around the world.",
  },
  {
    slug: "production-material",
    title: "Production Material",
    description: "Call sheets, schedules and material from the productions.",
  },
  {
    slug: "notes-and-documents",
    title: "Notes & Documents",
    description: "Working notes, correspondence and documents.",
  },
  {
    slug: "behind-the-scenes",
    title: "Behind the Scenes",
    description: "The work in progress, photographed and recorded.",
  },
] as const;

/** Explore = new ways of discovering relationships across the work. */
export const EXPLORE_EXPERIENCES = [
  {
    slug: "map",
    title: "Map",
    href: "/explore/map",
    description:
      "The filming locations of every film, from Manhattan to Paris, plotted on a single map.",
  },
  {
    slug: "timeline",
    title: "Timeline",
    href: "/explore/timeline",
    description:
      "The complete body of work — films, books, theatre and music — laid out year by year.",
  },
  {
    slug: "on-this-day",
    title: "On This Day",
    href: "/explore/on-this-day",
    description:
      "Releases, openings and moments from the archive, matched to today's date.",
  },
  {
    slug: "quotes",
    title: "Quotes",
    href: "/explore/quotes",
    description: "Lines from the films and the writing, collected.",
  },
  {
    slug: "by-the-numbers",
    title: "By the Numbers",
    href: "/explore/by-the-numbers",
    description:
      "The career in figures — films, collaborators, cities, decades.",
  },
] as const;

/** Beyond Film = the work outside the filmography. */
export const BEYOND_FILM_AREAS = [
  {
    slug: "books-and-writing",
    title: "Books & Writing",
    description:
      "Collections, prose and pieces for the page, from The New Yorker onward.",
  },
  {
    slug: "theatre",
    title: "Theatre",
    description: "Plays and productions for the stage.",
  },
  {
    slug: "music",
    title: "Music",
    description: "The clarinet, the Eddy Davis New Orleans Jazz Band, and a lifetime of Monday nights.",
  },
  {
    slug: "television-and-other",
    title: "Television & Other",
    description: "Television work, stand-up and everything in between.",
  },
] as const;
