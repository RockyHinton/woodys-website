import type { Film } from "@/lib/types";

// Source: films.md — SWEET AND LOWDOWN record. Key sources: [S002], [S020]
const sweetAndLowdown: Film = {
  title: "Sweet and Lowdown",
  year: 1999,
  slug: "sweet-and-lowdown",
  roles: ["Director", "Writer", "Actor"],
  shortSynopsis:
    "A documentary reconstructs the life of Emmet Ray, presented as the second-greatest jazz guitarist of the 1930s after Django Reinhardt, whom he idolises and cannot bear to meet. Vain and dishonest but a formidable musician, he takes up with Hattie, a mute laundress who adores him, and leaves her for a writer who finds him fascinating as material.",
  cast: [
    { name: "Sean Penn", as: "Emmet Ray" },
    { name: "Samantha Morton", as: "Hattie" },
    { name: "Uma Thurman", as: "Blanche Williams" },
    { name: "Anthony LaPaglia", as: "Al Torrio" },
    { name: "Brian Markinson", as: "Bill Shields" },
    { name: "Gretchen Mol", as: "Ellie" },
    { name: "James Urbaniak", as: "Harry" },
  ],
  legacyUrl: "https://woodyallen.com/sweet-and-lowdown/",
};

export default sweetAndLowdown;
