import type { Film } from "@/lib/types";

// Source: films.md — ALICE record. Key sources: [S002], [S020]
const alice: Film = {
  title: "Alice",
  year: 1990,
  slug: "alice",
  roles: ["Director", "Writer"],
  releaseDate: "1990-12-25",
  shortSynopsis:
    "Alice Tate, the wife of a wealthy Manhattan businessman, takes her back pain to a Chinatown herbalist whose remedies turn out to be magical. Pursuing a jazz musician she has noticed at the school gate, she is forced through these enchantments to examine her marriage and her abandoned ambitions.",
  cast: [
    { name: "Mia Farrow", as: "Alice Tate" },
    { name: "Joe Mantegna", as: "Joe Ruffalo" },
    { name: "William Hurt", as: "Doug Tate" },
    { name: "Keye Luke", as: "Dr. Yang" },
    { name: "Blythe Danner", as: "Dorothy" },
    { name: "Judy Davis", as: "Vicki" },
    { name: "Alec Baldwin", as: "Ed" },
  ],
  legacyUrl: "https://woodyallen.com/alice/",
};

export default alice;
