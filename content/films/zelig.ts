import type { Film } from "@/lib/types";

// Source: films.md — ZELIG record. Key sources: [S002], [S020], [S021]
const zelig: Film = {
  title: "Zelig",
  year: 1983,
  slug: "zelig",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1983-07-15",
  shortSynopsis:
    "A documentary reconstructs the career of Leonard Zelig, a man of the 1920s and 1930s with no fixed personality, who physically transforms into whoever he is standing near. He becomes a newsreel fixture and the subject of a psychiatric case study by Dr. Eudora Fletcher, who treats him and falls in love with him.",
  cast: [
    { name: "Woody Allen", as: "Leonard Zelig" },
    { name: "Mia Farrow", as: "Dr. Eudora Nesbitt Fletcher" },
    { name: "Patrick Horgan", as: "Narrator" },
    { name: "John Rothman", as: "Paul Deghuee" },
    { name: "Deborah Rush", as: "Lita Fox" },
    { name: "Mary Louise Wilson", as: "Ruth Zelig" },
    { name: "Stephanie Farrow", as: "Meryl Fletcher" },
  ],
  legacyUrl: "https://woodyallen.com/zelig/",
};

export default zelig;
