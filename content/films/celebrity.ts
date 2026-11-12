import type { Film } from "@/lib/types";

// Source: films.md — CELEBRITY record. Key sources: [S002], [S020], [S030]
const celebrity: Film = {
  title: "Celebrity",
  year: 1998,
  slug: "celebrity",
  roles: ["Director", "Writer"],
  releaseDate: "1998-11-20",
  shortSynopsis:
    "Lee Simon, a travel journalist who has left his wife to write a novel, moves through New York's celebrity economy — film stars, models, volatile young actors — while his ex-wife Robin becomes, without seeking it, a celebrity herself. Shot in black-and-white, the film sets his decline against her ascent.",
  cast: [
    { name: "Kenneth Branagh", as: "Lee Simon" },
    { name: "Judy Davis", as: "Robin Simon" },
    { name: "Joe Mantegna", as: "Tony Gardella" },
    { name: "Leonardo DiCaprio", as: "Brandon Darrow" },
    { name: "Winona Ryder", as: "Nola" },
    { name: "Melanie Griffith", as: "Nicole Oliver" },
    { name: "Famke Janssen", as: "Bonnie" },
  ],
  legacyUrl: "https://woodyallen.com/celebrity/",
};

export default celebrity;
