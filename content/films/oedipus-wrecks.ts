import type { Film } from "@/lib/types";

// Source: films.md — NEW YORK STORIES — "OEDIPUS WRECKS" (segment) record. Key sources: [S002], [S020]
const oedipusWrecks: Film = {
  title: "Oedipus Wrecks",
  year: 1989,
  slug: "oedipus-wrecks",
  roles: ["Director", "Writer", "Actor"],
  kind: "segment",
  kindNote: "A segment of New York Stories",
  releaseDate: "1989-03-10",
  shortSynopsis:
    "Sheldon Mills, a Manhattan lawyer, is tormented by his mother Sadie, who criticises him publicly and relentlessly. At a magic show she is placed in a Chinese box and disappears — then rematerialises as an enormous head in the sky over Manhattan, freely discussing his private life with the whole city.",
  cast: [
    { name: "Woody Allen", as: "Sheldon Mills" },
    { name: "Mae Questel", as: "Sadie Millstein" },
    { name: "Mia Farrow", as: "Lisa" },
    { name: "Julie Kavner", as: "Treva" },
    { name: "George Schindler", as: "Shandu the Magician" },
    { name: "Larry David", as: "Theatre manager" },
    { name: "Mike Starr", as: "The hardhat" },
  ],
};

export default oedipusWrecks;
