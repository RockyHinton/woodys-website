import type { Film } from "@/lib/types";

// Source: films.md — BROADWAY DANNY ROSE record. Key sources: [S002], [S020], [S030]
const broadwayDannyRose: Film = {
  title: "Broadway Danny Rose",
  year: 1984,
  slug: "broadway-danny-rose",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1984-01-27",
  shortSynopsis:
    "In the Carnegie Delicatessen, veteran comedians trade stories about Danny Rose, a devoted and unsuccessful theatrical manager. The story they settle on has Danny escorting a lounge singer's mistress to a crucial engagement, being mistaken for her lover, and pursued by her former fiancé's family.",
  cast: [
    { name: "Woody Allen", as: "Danny Rose" },
    { name: "Mia Farrow", as: "Tina Vitale" },
    { name: "Nick Apollo Forte", as: "Lou Canova" },
    { name: "Gerald Schoenfeld", as: "Sid Bacharach" },
    { name: "Paul Greco", as: "Vito Rispoli" },
    { name: "Frank Renzulli", as: "Joe Rispoli" },
  ],
  legacyUrl: "https://woodyallen.com/broadway-danny-rose/",
};

export default broadwayDannyRose;
