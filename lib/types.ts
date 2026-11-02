/**
 * Core content types.
 *
 * Content lives in /content as plain TypeScript records conforming to
 * these interfaces. Presentation components consume these types and
 * must render gracefully when optional fields are absent — different
 * works will carry very different depths of archival material.
 *
 * The same pattern (type here, records in /content, listing + detail
 * templates in /app) will later extend to books, theatre, music,
 * television and archive items.
 */

/** A single image asset committed to /public/images. */
export interface ImageAsset {
  /** Path relative to /public, e.g. "/images/films/annie-hall/poster/annie-hall-poster-us-1sheet.jpg" */
  src: string;
  /** Required for accessibility. Written when the asset is added. */
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
}

/** Roles Woody Allen held on a given work. */
export type Role = "Director" | "Writer" | "Actor" | "Performer" | "Producer";

export interface CastMember {
  name: string;
  /** Character name, where relevant. */
  as?: string;
}

export interface Quotation {
  text: string;
  /** e.g. a character name, or "Woody Allen" for off-screen remarks. */
  attribution?: string;
  /** e.g. the scene or source the line comes from. */
  source?: string;
}

export interface FilmingLocation {
  name: string;
  /** City / region, e.g. "New York City". */
  place?: string;
  note?: string;
  /** For the future Explore map. */
  coordinates?: { lat: number; lng: number };
}

export interface WatchLink {
  label: string; // e.g. "Apple TV", "The Criterion Channel"
  url: string;
}

/** A pointer to a future Archive item (screenplay, photography, etc.). */
export interface ArchiveItemRef {
  slug: string;
  title: string;
  category: ArchiveCategory;
}

export type ArchiveCategory =
  | "screenplays"
  | "photography"
  | "posters-and-artwork"
  | "production-material"
  | "notes-and-documents"
  | "behind-the-scenes";

/**
 * A film in the filmography.
 *
 * Only `title`, `year` and `slug` are required. Every film page is
 * rendered from this single record by the /films/[slug] template —
 * no per-film React pages.
 */
export interface Film {
  title: string;
  year: number;
  slug: string;

  /** Woody Allen's roles on the film. */
  roles?: Role[];

  poster?: ImageAsset;
  heroImage?: ImageAsset;

  /** One or two sentences, used on cards and list pages. */
  shortSynopsis?: string;
  /** Longer archival synopsis for the film page. Paragraphs. */
  longSynopsis?: string[];

  cast?: CastMember[];
  gallery?: ImageAsset[];
  /** Embed URL or local asset path — wiring deferred. */
  trailer?: { url: string; title?: string };
  quotations?: Quotation[];
  locations?: FilmingLocation[];
  productionNotes?: string[];
  /** International poster artwork. */
  internationalArtwork?: ImageAsset[];
  /** Screenplay pages, drafts and other archive material. */
  archiveMaterial?: ArchiveItemRef[];
  watchLinks?: WatchLink[];
  /** URL of the film's page on the previous woodyallen.com. */
  legacyUrl?: string;
  relatedArchiveItems?: ArchiveItemRef[];
}

export type NewsCategory =
  | "Films"
  | "Books"
  | "Theatre"
  | "Events"
  | "Interviews"
  | "Announcements";

export interface NewsArticle {
  title: string;
  slug: string;
  /** ISO date, e.g. "2026-01-15". */
  date: string;
  category: NewsCategory;
  /** One sentence for listing pages. */
  standfirst?: string;
  /** Article body as paragraphs. */
  body: string[];
  heroImage?: ImageAsset;
}
