import type { Film } from "@/lib/types";

// Source: films.md — SEPTEMBER record. Key sources: [S002], [S020]
const september: Film = {
  title: "September",
  year: 1987,
  slug: "september",
  roles: ["Director", "Writer"],
  releaseDate: "1987-12-18",
  shortSynopsis:
    "The end of summer at a Vermont country house that Lane, recovering from a breakdown, is preparing to sell. Over one evening, with her mother, a friend and two men in love with the wrong women gathered in the house, an old family violence is spoken aloud and every attachment is exposed as misdirected.",
  cast: [
    { name: "Mia Farrow", as: "Lane" },
    { name: "Dianne Wiest", as: "Stephanie" },
    { name: "Elaine Stritch", as: "Diane" },
    { name: "Denholm Elliott", as: "Howard" },
    { name: "Sam Waterston", as: "Peter" },
    { name: "Jack Warden", as: "Lloyd" },
    { name: "Rosemary Murphy", as: "Mrs. Mason" },
  ],
  legacyUrl: "https://woodyallen.com/september/#synopsis",
};

export default september;
