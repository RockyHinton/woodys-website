import type { Film } from "@/lib/types";

// Source: films.md — STARDUST MEMORIES record. Key sources: [S002], [S020], [S021]
const stardustMemories: Film = {
  title: "Stardust Memories",
  year: 1980,
  slug: "stardust-memories",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1980-09-26",
  shortSynopsis:
    "Sandy Bates, a film-maker celebrated for comedies he no longer wants to make, attends a weekend retrospective of his own work at a faded seaside hotel, besieged by admirers, critics and petitioners. Between panels he moves through memories and fantasies involving three women.",
  cast: [
    { name: "Woody Allen", as: "Sandy Bates" },
    { name: "Charlotte Rampling", as: "Dorrie" },
    { name: "Jessica Harper", as: "Daisy" },
    { name: "Marie-Christine Barrault", as: "Isobel" },
    { name: "Tony Roberts", as: "Tony" },
    { name: "Helen Hanft", as: "Vivian Orkin" },
    { name: "John Rothman", as: "Jack Abel" },
  ],
  legacyUrl: "https://woodyallen.com/stardust-memories/",
};

export default stardustMemories;
