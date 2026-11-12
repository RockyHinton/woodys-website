import type { Film } from "@/lib/types";

// Source: films.md — BULLETS OVER BROADWAY record. Key sources: [S002], [S003], [S020], [S030]
const bulletsOverBroadway: Film = {
  title: "Bullets Over Broadway",
  year: 1994,
  slug: "bullets-over-broadway",
  roles: ["Director", "Writer"],
  releaseDate: "1994-10-14",
  shortSynopsis:
    "New York, 1928. David Shayne, an earnest young playwright, finally gets his work staged — on the condition that the gangster backing it can cast his girlfriend, who cannot act. Her minder, Cheech, sits through rehearsals in silent contempt and then begins suggesting rewrites, which are better than David's.",
  cast: [
    { name: "John Cusack", as: "David Shayne" },
    { name: "Dianne Wiest", as: "Helen Sinclair" },
    { name: "Chazz Palminteri", as: "Cheech" },
    { name: "Jennifer Tilly", as: "Olive Neal" },
    { name: "Jack Warden", as: "Julian Marx" },
    { name: "Joe Viterelli", as: "Nick Valenti" },
    { name: "Rob Reiner", as: "Sheldon Flender" },
  ],
  legacyUrl: "https://woodyallen.com/bullets-over-broadway/",
};

export default bulletsOverBroadway;
