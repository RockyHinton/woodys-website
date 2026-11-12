import type { Film } from "@/lib/types";

// Source: films.md — HOLLYWOOD ENDING record. Key sources: [S002], [S020]
const hollywoodEnding: Film = {
  title: "Hollywood Ending",
  year: 2002,
  slug: "hollywood-ending",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "2002-05-03",
  shortSynopsis:
    "Val Waxman, once an Academy Award-winning director now reduced to commercials, is handed a large studio picture through his ex-wife — then goes psychosomatically blind days before shooting. Rather than admit it, he conceals the condition and directs the film by proxy.",
  cast: [
    { name: "Woody Allen", as: "Val Waxman" },
    { name: "Téa Leoni", as: "Ellie" },
    { name: "Treat Williams", as: "Hal Jaeger" },
    { name: "Debra Messing", as: "Lori Fox" },
    { name: "George Hamilton", as: "Ed" },
    { name: "Mark Rydell", as: "Al Hack" },
    { name: "Tiffani Thiessen", as: "Sharon Bates" },
  ],
  legacyUrl: "https://woodyallen.com/hollywood-ending/",
};

export default hollywoodEnding;
