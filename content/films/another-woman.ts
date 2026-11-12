import type { Film } from "@/lib/types";

// Source: films.md — ANOTHER WOMAN record. Key sources: [S002], [S020]
const anotherWoman: Film = {
  title: "Another Woman",
  year: 1988,
  slug: "another-woman",
  roles: ["Director", "Writer"],
  releaseDate: "1988-10-14",
  shortSynopsis:
    "Marion Post, a fifty-year-old philosophy professor, rents a quiet apartment to finish a book and finds she can hear a psychiatrist's sessions through the wall. A patient's unhappiness begins to describe her own, and in memory, dream and overheard confession she reconsiders her marriage and the life she has built.",
  cast: [
    { name: "Gena Rowlands", as: "Marion Post" },
    { name: "Ian Holm", as: "Ken Post" },
    { name: "Mia Farrow", as: "Hope" },
    { name: "Gene Hackman", as: "Larry Lewis" },
    { name: "Blythe Danner", as: "Lydia" },
    { name: "John Houseman", as: "Marion's father" },
    { name: "Sandy Dennis", as: "Claire" },
  ],
  legacyUrl: "https://woodyallen.com/another-woman/",
};

export default anotherWoman;
