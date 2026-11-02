import type { Film } from "@/lib/types";

/**
 * SAMPLE RECORD — deliberately sparse, to verify that the film
 * template renders gracefully when only some sections have data.
 */
const manhattan: Film = {
  title: "Manhattan",
  year: 1979,
  slug: "manhattan",
  roles: ["Director", "Writer", "Actor"],
  shortSynopsis:
    "A television writer navigates love and friendship in the city he adores, photographed in black and white.",
  cast: [
    { name: "Woody Allen", as: "Isaac Davis" },
    { name: "Diane Keaton", as: "Mary Wilkie" },
    { name: "Michael Murphy", as: "Yale" },
    { name: "Mariel Hemingway", as: "Tracy" },
    { name: "Meryl Streep", as: "Jill" },
  ],
};

export default manhattan;
