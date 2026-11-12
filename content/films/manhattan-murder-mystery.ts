import type { Film } from "@/lib/types";

// Source: films.md — MANHATTAN MURDER MYSTERY record. Key sources: [S002], [S020], [S030]
const manhattanMurderMystery: Film = {
  title: "Manhattan Murder Mystery",
  year: 1993,
  slug: "manhattan-murder-mystery",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1993-08-18",
  shortSynopsis:
    "When an elderly neighbour dies of an apparent heart attack and her husband seems unaccountably cheerful, Carol Lipton begins investigating while her husband Larry refuses to take it seriously. The amateur inquiry escalates into genuine danger, in a comic thriller that is also a portrait of a marriage repaired by distraction.",
  cast: [
    { name: "Woody Allen", as: "Larry Lipton" },
    { name: "Diane Keaton", as: "Carol Lipton" },
    { name: "Alan Alda", as: "Ted" },
    { name: "Anjelica Huston", as: "Marcia Fox" },
    { name: "Jerry Adler", as: "Paul House" },
    { name: "Lynn Cohen", as: "Lillian House" },
    { name: "Melanie Norris", as: "Helen Moss" },
  ],
  legacyUrl: "https://woodyallen.com/manhattan-murder-mystery/",
};

export default manhattanMurderMystery;
