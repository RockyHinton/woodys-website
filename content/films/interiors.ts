import type { Film } from "@/lib/types";

// Source: films.md — INTERIORS record. Key sources: [S002], [S020], [S021]
const interiors: Film = {
  title: "Interiors",
  year: 1978,
  slug: "interiors",
  roles: ["Director", "Writer"],
  releaseDate: "1978-08-02",
  shortSynopsis:
    "Arthur, a successful lawyer, tells his wife Eve, an interior designer of exacting and controlling taste, that he wants to separate, and the announcement deepens her collapse. Their three adult daughters respond in different registers of resentment and guilt, and the family's careful surfaces give way when Arthur introduces the woman he intends to marry.",
  cast: [
    { name: "Geraldine Page", as: "Eve" },
    { name: "E. G. Marshall", as: "Arthur" },
    { name: "Diane Keaton", as: "Renata" },
    { name: "Mary Beth Hurt", as: "Joey" },
    { name: "Kristin Griffith", as: "Flyn" },
    { name: "Richard Jordan", as: "Frederick" },
    { name: "Sam Waterston", as: "Mike" },
  ],
  legacyUrl: "https://woodyallen.com/interiors/",
};

export default interiors;
