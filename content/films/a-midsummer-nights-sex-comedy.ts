import type { Film } from "@/lib/types";

// Source: films.md — A MIDSUMMER NIGHT'S SEX COMEDY record. Key sources: [S002], [S020]
const aMidsummerNightsSexComedy: Film = {
  title: "A Midsummer Night's Sex Comedy",
  year: 1982,
  slug: "a-midsummer-nights-sex-comedy",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1982-07-16",
  shortSynopsis:
    "In the summer of 1906, an inventor and his wife host a weekend party in the countryside north of New York City, and over one evening the couples rearrange themselves in the woods while a pompous rationalist professor insists that nothing exists beyond the measurable.",
  cast: [
    { name: "Woody Allen", as: "Andrew Hobbes" },
    { name: "Mia Farrow", as: "Ariel Weymouth" },
    { name: "José Ferrer", as: "Professor Leopold Sturges" },
    { name: "Julie Hagerty", as: "Dulcy Ford" },
    { name: "Tony Roberts", as: "Dr. Maxwell Jordan" },
    { name: "Mary Steenburgen", as: "Adrian Hobbes" },
  ],
  legacyUrl: "https://woodyallen.com/a-midsummer-nights-sex-comedy/",
};

export default aMidsummerNightsSexComedy;
