import type { Film } from "@/lib/types";

// Source: films.md — SLEEPER record. Key sources: [S002], [S020]
const sleeper: Film = {
  title: "Sleeper",
  year: 1973,
  slug: "sleeper",
  roles: ["Director", "Writer", "Actor", "Performer"],
  releaseDate: "1973-12-17",
  shortSynopsis:
    "Miles Monroe, a Greenwich Village health-food store owner and clarinettist, is cryogenically preserved after a minor operation fails and revived two hundred years later in an authoritarian future state. On the run, he takes a poet hostage, and she gradually becomes a revolutionary herself.",
  cast: [
    { name: "Woody Allen", as: "Miles Monroe" },
    { name: "Diane Keaton", as: "Luna Schlosser" },
    { name: "John Beck", as: "Erno Windt" },
    { name: "Mary Gregory", as: "Dr. Melik" },
    { name: "Don Keefer", as: "Dr. Tryon" },
    { name: "Bartlett Robinson", as: "Dr. Orva" },
    { name: "Mews Small", as: "Dr. Nero" },
  ],
  legacyUrl: "https://woodyallen.com/sleeper/",
};

export default sleeper;
