import type { ArchiveCategoryInfo } from "@/lib/types";

/**
 * Archive page content.
 *
 * Source: research/woody-allen-master-dossier/sources.md — the legacy
 * woodyallen.com archive audit. "Confirmed holdings" states only what
 * that audit verified as actually existing first-party material; the
 * counts are the audit's own. Nothing is promised that is not held.
 * Key sources: [S001][S005][S006][S007][S008].
 */

export const archiveIntro: string[] = [
  "Films are the finished work. The Archive is everything that stands behind it: screenplay drafts and spotting lists, publicity documents, poster artwork from around the world, production photography and working notes, collected over six decades.",
  "The collection is being re-catalogued for this site. The holdings below are confirmed; they will be published here category by category, properly scanned and properly described.",
];

export const archiveCategories: ArchiveCategoryInfo[] = [
  {
    slug: "screenplays",
    title: "Screenplays",
    description:
      "Script pages, spotting lists and dialogue notes from the productions.",
    confirmedHoldings: [
      "Annie Hall — a set of roughly 275 scanned pages: script, spotting lists, dialogue notes and a crew list",
    ],
  },
  {
    slug: "photography",
    title: "Photography",
    description:
      "Promotional and on-set photography from across the filmography.",
    confirmedHoldings: [
      "Promotional galleries from the film archives, including Annie Hall and Manhattan",
    ],
  },
  {
    slug: "posters-and-artwork",
    title: "Posters & International Artwork",
    description:
      "Release posters and the artwork each country made of the same film.",
    confirmedHoldings: [
      "Midnight in Paris — eight international posters",
      "Annie Hall — artwork from Australia, Japan and France",
    ],
  },
  {
    slug: "production-material",
    title: "Production Material",
    description:
      "Press-kit production notes, cast material and the paperwork of film-making.",
    confirmedHoldings: [
      "Coup de Chance — full production notes, with remarks from Allen and the crew, and extended cast interviews",
      "Annie Hall — seven typewritten cast biography documents; further cast bios for Manhattan and Midnight in Paris",
    ],
  },
  {
    slug: "notes-and-documents",
    title: "Notes & Documents",
    description: "Working notes, correspondence and documents.",
    confirmedHoldings: [],
  },
  {
    slug: "behind-the-scenes",
    title: "Behind the Scenes",
    description: "The work in progress, photographed.",
    confirmedHoldings: [
      "Midnight in Paris — approximately 127 production photographs",
    ],
  },
];
