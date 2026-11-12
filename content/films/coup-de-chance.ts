import type { Film } from "@/lib/types";

// Source: films.md — COUP DE CHANCE record. Key sources: [S008], [S020], [S033]
const coupDeChance: Film = {
  title: "Coup de Chance",
  year: 2023,
  slug: "coup-de-chance",
  roles: ["Director", "Writer"],
  releaseDate: "2023-09-27",
  shortSynopsis:
    "Fanny, who works at a Paris auction house and is married to a wealthy and attentive financier, meets Alain, a writer who was at school with her and has loved her since; the affair that follows is immediate. Her husband begins to suspect, and her visiting mother notices more than either of them intends.",
  cast: [
    { name: "Lou de Laâge", as: "Fanny Fournier" },
    { name: "Melvil Poupaud", as: "Jean Fournier" },
    { name: "Niels Schneider", as: "Alain Aubert" },
    { name: "Valérie Lemercier", as: "Camille Moreau" },
    { name: "Grégory Gadebois", as: "Henri Delany" },
    { name: "Elsa Zylberstein", as: "Caroline Blanc" },
    { name: "Guillaume de Tonquédec", as: "Marcel Blanc" },
  ],
  legacyUrl: "https://woodyallen.com/coup-de-chance/",
};

export default coupDeChance;
