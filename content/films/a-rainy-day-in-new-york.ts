import type { Film } from "@/lib/types";

// Source: films.md — A RAINY DAY IN NEW YORK record. Key sources: [S002], [S005], [S020], [S041]
const aRainyDayInNewYork: Film = {
  title: "A Rainy Day in New York",
  year: 2019,
  slug: "a-rainy-day-in-new-york",
  roles: ["Director", "Writer"],
  releaseDate: "2019-07-26",
  shortSynopsis:
    "Gatsby Welles, a wealthy and dissatisfied student at a small upstate college, comes to Manhattan for a weekend with his girlfriend Ashleigh, whose interview with a celebrated film director keeps expanding. Left to drift through the city he actually loves, Gatsby reconsiders the life his mother has planned for him.",
  cast: [
    { name: "Timothée Chalamet", as: "Gatsby Welles" },
    { name: "Elle Fanning", as: "Ashleigh Enright" },
    { name: "Selena Gomez", as: "Chan Tyrell" },
    { name: "Jude Law", as: "Ted Davidoff" },
    { name: "Liev Schreiber", as: "Roland Pollard" },
    { name: "Diego Luna", as: "Francisco Vega" },
    { name: "Rebecca Hall", as: "Connie Davidoff" },
  ],
  legacyUrl: "https://woodyallen.com/a-rainy-day-in-new-york/",
};

export default aRainyDayInNewYork;
