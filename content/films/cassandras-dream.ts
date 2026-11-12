import type { Film } from "@/lib/types";

// Source: films.md — CASSANDRA'S DREAM record. Key sources: [S002], [S020]
const cassandrasDream: Film = {
  title: "Cassandra's Dream",
  year: 2007,
  slug: "cassandras-dream",
  roles: ["Director", "Writer"],
  releaseDate: "2007-10-31",
  shortSynopsis:
    "Two brothers in south London — a gambling garage hand and a restaurant manager with investment ambitions — are each short of the money their plans require. Their rich uncle, who has always bailed the family out, now needs something in return that neither brother is equipped to refuse.",
  cast: [
    { name: "Colin Farrell", as: "Terry Blaine" },
    { name: "Ewan McGregor", as: "Ian Blaine" },
    { name: "Tom Wilkinson", as: "Howard Swann" },
    { name: "Hayley Atwell", as: "Angela Stark" },
    { name: "Sally Hawkins", as: "Kate" },
    { name: "Clare Higgins", as: "Dorothy Blaine" },
    { name: "John Benfield", as: "Brian Blaine" },
  ],
  legacyUrl: "https://woodyallen.com/cassandras-dream",
};

export default cassandrasDream;
