import type { Film } from "@/lib/types";
import annieHall from "./annie-hall";
import manhattan from "./manhattan";

/**
 * The filmography.
 *
 * One file per film in this directory, registered here. The full
 * filmography will be populated from the verified research document
 * in a later phase — do not bulk-add films before that source exists.
 *
 * Order: newest first (matches the /films listing).
 */
export const films: Film[] = [manhattan, annieHall].sort(
  (a, b) => b.year - a.year
);
