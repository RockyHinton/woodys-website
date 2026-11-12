import type { Film } from "@/lib/types";

// Source: films.md — TAKE THE MONEY AND RUN record. Key sources: [S002], [S020]
const takeTheMoneyAndRun: Film = {
  title: "Take the Money and Run",
  year: 1969,
  slug: "take-the-money-and-run",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1969-08-18",
  shortSynopsis:
    "A mock documentary traces the career of Virgil Starkwell, an inept petty criminal from a poor Brooklyn family, whose robberies fail as reliably as his attempts to go straight. Interviews with parents, teachers and a psychiatrist are intercut with re-enactments of his failures.",
  cast: [
    { name: "Woody Allen", as: "Virgil Starkwell" },
    { name: "Janet Margolin", as: "Louise" },
    { name: "Marcel Hillaire", as: "Fritz, the director" },
    { name: "Jacquelyn Hyde", as: "Miss Blair" },
    { name: "Lonny Chapman", as: "Jake" },
    { name: "Jan Merlin", as: "Al" },
    { name: "Dan Frazer", as: "Julius Epstein, the psychiatrist" },
  ],
  legacyUrl: "https://woodyallen.com/take-the-money-and-run/",
};

export default takeTheMoneyAndRun;
