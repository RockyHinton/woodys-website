import type { Film } from "@/lib/types";

/**
 * SAMPLE RECORD — representative data used to develop the film
 * template. A fuller record (gallery, trailer, production notes,
 * artwork, archive material, watch links) will be introduced when the
 * verified research document is available.
 */
const annieHall: Film = {
  title: "Annie Hall",
  year: 1977,
  slug: "annie-hall",
  roles: ["Director", "Writer", "Actor"],
  shortSynopsis:
    "Comedian Alvy Singer looks back on his relationship with Annie Hall, and on love, New York and himself.",
  longSynopsis: [
    "Alvy Singer, a Manhattan comedian, sifts through the memory of his relationship with Annie Hall — how it began, how it changed them both, and why it ended.",
    "Moving freely between past and present, the film follows the two of them through New York and, eventually, to Los Angeles.",
  ],
  cast: [
    { name: "Woody Allen", as: "Alvy Singer" },
    { name: "Diane Keaton", as: "Annie Hall" },
    { name: "Tony Roberts", as: "Rob" },
    { name: "Carol Kane", as: "Allison" },
    { name: "Paul Simon", as: "Tony Lacey" },
    { name: "Shelley Duvall", as: "Pam" },
    { name: "Christopher Walken", as: "Duane Hall" },
  ],
  quotations: [
    {
      text: "La-di-da, la-di-da.",
      attribution: "Annie Hall",
    },
  ],
  locations: [
    { name: "Manhattan", place: "New York City" },
    { name: "Brooklyn", place: "New York City" },
    { name: "Los Angeles", place: "California" },
  ],
};

export default annieHall;
