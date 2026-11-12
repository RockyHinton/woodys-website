import type { Film } from "@/lib/types";

// Source: films.md — BLUE JASMINE record. Key sources: [S002], [S020], [S030], [S045]
const blueJasmine: Film = {
  title: "Blue Jasmine",
  year: 2013,
  slug: "blue-jasmine",
  roles: ["Director", "Writer"],
  releaseDate: "2013-07-26",
  shortSynopsis:
    "Jasmine Francis, once a Park Avenue wife, arrives in San Francisco with designer luggage and no money, having lost everything when her husband's financial frauds collapsed. Moving in with her adoptive sister, a supermarket cashier in the Mission, she sets about rebuilding a version of herself.",
  cast: [
    { name: "Cate Blanchett", as: "Jeanette \"Jasmine\" Francis" },
    { name: "Sally Hawkins", as: "Ginger" },
    { name: "Alec Baldwin", as: "Hal Francis" },
    { name: "Bobby Cannavale", as: "Chili" },
    { name: "Peter Sarsgaard", as: "Dwight Westlake" },
    { name: "Andrew Dice Clay", as: "Augie" },
    { name: "Louis C.K.", as: "Al Munsinger" },
  ],
  legacyUrl: "https://woodyallen.com/blue-jasmine/",
};

export default blueJasmine;
