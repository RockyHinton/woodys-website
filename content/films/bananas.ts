import type { Film } from "@/lib/types";

// Source: films.md — BANANAS record. Key sources: [S002], [S020]
const bananas: Film = {
  title: "Bananas",
  year: 1971,
  slug: "bananas",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1971-04-28",
  shortSynopsis:
    "Fielding Mellish, a timid New York products tester, travels to the Latin American dictatorship of San Marcos to impress a political activist, and is improbably carried to the leadership of the revolution. Back in the United States, he is put on trial for subversion.",
  cast: [
    { name: "Woody Allen", as: "Fielding Mellish" },
    { name: "Louise Lasser", as: "Nancy" },
    { name: "Carlos Montalbán", as: "Gen. Emilio Molina Vargas" },
    { name: "Natividad Abascal", as: "Yolanda" },
    { name: "Jacobo Morales", as: "Esposito" },
    { name: "Miguel Ángel Suárez", as: "Luis" },
    { name: "René Enríquez", as: "Díaz" },
  ],
  legacyUrl: "https://woodyallen.com/bananas/",
};

export default bananas;
