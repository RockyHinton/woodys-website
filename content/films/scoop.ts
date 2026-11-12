import type { Film } from "@/lib/types";

// Source: films.md — SCOOP record. Key sources: [S002], [S020]
const scoop: Film = {
  title: "Scoop",
  year: 2006,
  slug: "scoop",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "2006-07-28",
  shortSynopsis:
    "Sondra Pransky, an American journalism student in London, is visited inside a magician's disappearing cabinet by the ghost of a dead investigative reporter, who names an aristocrat as the city's \"Tarot Card Killer\". With the magician posing as her father, she infiltrates the suspect's world — and finds herself attracted to him.",
  cast: [
    { name: "Scarlett Johansson", as: "Sondra Pransky" },
    { name: "Hugh Jackman", as: "Peter Lyman" },
    { name: "Woody Allen", as: "Sid Waterman / \"The Great Splendini\"" },
    { name: "Ian McShane", as: "Joe Strombel" },
    { name: "Charles Dance", as: "Mr. Malcolm" },
    { name: "Romola Garai", as: "Vivian" },
    { name: "Kevin McNally", as: "Mike Tinsley" },
  ],
  legacyUrl: "https://woodyallen.com/scoop-2/",
};

export default scoop;
