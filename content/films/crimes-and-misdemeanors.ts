import type { Film } from "@/lib/types";

// Source: films.md — CRIMES AND MISDEMEANORS record. Key sources: [S002], [S020], [S031]
const crimesAndMisdemeanors: Film = {
  title: "Crimes and Misdemeanors",
  year: 1989,
  slug: "crimes-and-misdemeanors",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1989-10-13",
  shortSynopsis:
    "Two stories run in parallel and barely touch. Judah Rosenthal, an eminent ophthalmologist threatened with exposure by the woman he has been seeing, must decide whether he believes anyone is watching; Cliff Stern, a failing documentary film-maker, profiles a vacuous television producer while falling for the producer's associate.",
  cast: [
    { name: "Martin Landau", as: "Judah Rosenthal" },
    { name: "Woody Allen", as: "Cliff Stern" },
    { name: "Anjelica Huston", as: "Dolores Paley" },
    { name: "Alan Alda", as: "Lester" },
    { name: "Mia Farrow", as: "Halley Reed" },
    { name: "Jerry Orbach", as: "Jack Rosenthal" },
    { name: "Sam Waterston", as: "Ben" },
  ],
  legacyUrl: "https://woodyallen.com/crimes-and-misdemeanors/",
};

export default crimesAndMisdemeanors;
