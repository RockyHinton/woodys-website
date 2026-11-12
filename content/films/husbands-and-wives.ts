import type { Film } from "@/lib/types";

// Source: films.md — HUSBANDS AND WIVES record. Key sources: [S002], [S020]
const husbandsAndWives: Film = {
  title: "Husbands and Wives",
  year: 1992,
  slug: "husbands-and-wives",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1992-09-18",
  shortSynopsis:
    "Jack and Sally arrive for dinner and announce, amiably, that they are separating — disturbing their friends Gabe and Judy more than the couple themselves. Over the following months all four test new attachments, intercut with talking-head interviews given to an unseen documentarian.",
  cast: [
    { name: "Woody Allen", as: "Gabe Roth" },
    { name: "Mia Farrow", as: "Judy Roth" },
    { name: "Judy Davis", as: "Sally" },
    { name: "Sydney Pollack", as: "Jack" },
    { name: "Juliette Lewis", as: "Rain" },
    { name: "Liam Neeson", as: "Michael Gates" },
    { name: "Lysette Anthony", as: "Sam" },
  ],
  legacyUrl: "https://woodyallen.com/husbands-and-wives/",
};

export default husbandsAndWives;
