import type { Film } from "@/lib/types";

// Source: films.md — CAFÉ SOCIETY record. Key sources: [S002], [S020], [S043]
const cafeSociety: Film = {
  title: "Café Society",
  year: 2016,
  slug: "cafe-society",
  roles: ["Director", "Writer", "Narrator"],
  releaseDate: "2016-07-15",
  shortSynopsis:
    "In the 1930s, Bobby Dorfman leaves the Bronx for Hollywood and a job running errands for his uncle Phil, a powerful agent, and falls for Phil's secretary Vonnie — who is seeing a married man, Phil himself. Bobby returns to New York to run a nightclub, and years later Phil and Vonnie visit the club.",
  cast: [
    { name: "Jesse Eisenberg", as: "Bobby Dorfman" },
    { name: "Kristen Stewart", as: "Veronica \"Vonnie\" Sybil" },
    { name: "Steve Carell", as: "Phil Stern" },
    { name: "Blake Lively", as: "Veronica Hayes" },
    { name: "Corey Stoll", as: "Ben Dorfman" },
    { name: "Parker Posey", as: "Rad Taylor" },
    { name: "Jeannie Berlin", as: "Rose Dorfman" },
  ],
  legacyUrl: "https://woodyallen.com/cafe-society/",
};

export default cafeSociety;
