import type { Film } from "@/lib/types";

// Source: films.md — MATCH POINT record. Key sources: [S002], [S020], [S030]
const matchPoint: Film = {
  title: "Match Point",
  year: 2005,
  slug: "match-point",
  roles: ["Director", "Writer"],
  releaseDate: "2005-12-28",
  shortSynopsis:
    "Chris Wilton, a former professional tennis player from a modest background, marries into a wealthy London family while carrying on with Nola, his brother-in-law's American fiancée. When Nola becomes pregnant and insists he choose, his new life and his desire become irreconcilable, and he resolves the problem by other means.",
  cast: [
    { name: "Jonathan Rhys Meyers", as: "Chris Wilton" },
    { name: "Scarlett Johansson", as: "Nola Rice" },
    { name: "Emily Mortimer", as: "Chloe Hewett Wilton" },
    { name: "Matthew Goode", as: "Tom Hewett" },
    { name: "Brian Cox", as: "Alec Hewett" },
    { name: "Penelope Wilton", as: "Eleanor Hewett" },
    { name: "James Nesbitt", as: "Detective Mike Banner" },
  ],
  legacyUrl: "https://woodyallen.com/match-point-2",
};

export default matchPoint;
