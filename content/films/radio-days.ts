import type { Film } from "@/lib/types";

// Source: films.md — RADIO DAYS record. Key sources: [S002], [S020], [S030]
const radioDays: Film = {
  title: "Radio Days",
  year: 1987,
  slug: "radio-days",
  roles: ["Director", "Writer", "Narrator"],
  releaseDate: "1987-01-30",
  shortSynopsis:
    "A narrator recalls his childhood in Rockaway Beach, Queens, in the years when radio supplied the family's entire imaginative world. Episodes from the crowded household alternate with the glamorous Manhattan radio industry the family listens to, organised by songs and remembered public events rather than a central plot.",
  cast: [
    { name: "Seth Green", as: "Little Joe" },
    { name: "Woody Allen", as: "Joe, the adult narrator (voice)" },
    { name: "Mia Farrow", as: "Sally White" },
    { name: "Dianne Wiest", as: "Aunt Bea" },
    { name: "Julie Kavner", as: "Tess, Joe's mother" },
    { name: "Michael Tucker", as: "Martin, Joe's father" },
    { name: "Josh Mostel", as: "Uncle Abe" },
  ],
  legacyUrl: "https://woodyallen.com/radio-days/",
};

export default radioDays;
