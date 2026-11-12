import type { Film } from "@/lib/types";

// Source: films.md — LOVE AND DEATH record. Key sources: [S002], [S020], [S043]
const loveAndDeath: Film = {
  title: "Love and Death",
  year: 1975,
  slug: "love-and-death",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1975-06-10",
  shortSynopsis:
    "Boris Grushenko, a cowardly and philosophically inclined young man in Napoleonic-era Russia, survives a battle by accident, returns a decorated hero, and conspires with his cousin Sonja to assassinate Napoleon. A sustained parody of nineteenth-century Russian literature, with anxious disquisitions on God, morality and death between the pratfalls.",
  cast: [
    { name: "Woody Allen", as: "Boris Grushenko" },
    { name: "Diane Keaton", as: "Sonja" },
    { name: "Harold Gould", as: "Anton Ivanovich Lebedokov" },
    { name: "Olga Georges-Picot", as: "Countess Alexandrovna" },
    { name: "Jessica Harper", as: "Natasha" },
    { name: "Zvee Scooler", as: "Boris's father" },
    { name: "Despo Diamantidou", as: "Boris's mother" },
  ],
  legacyUrl: "https://woodyallen.com/love-and-death/",
};

export default loveAndDeath;
