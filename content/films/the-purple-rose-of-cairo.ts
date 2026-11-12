import type { Film } from "@/lib/types";

// Source: films.md — THE PURPLE ROSE OF CAIRO record. Key sources: [S002], [S020], [S021]
const thePurpleRoseOfCairo: Film = {
  title: "The Purple Rose of Cairo",
  year: 1985,
  slug: "the-purple-rose-of-cairo",
  roles: ["Director", "Writer"],
  releaseDate: "1985-03-01",
  shortSynopsis:
    "New Jersey, 1935. Cecilia, a waitress with an unemployed and brutal husband, escapes repeatedly into the same film, until its explorer hero notices her, steps off the screen and walks out of the cinema with her. She finds herself choosing between a fictional man who cannot change and a real one who can lie.",
  cast: [
    { name: "Mia Farrow", as: "Cecilia" },
    { name: "Jeff Daniels", as: "Tom Baxter / Gil Shepherd" },
    { name: "Danny Aiello", as: "Monk" },
    { name: "Dianne Wiest", as: "Emma" },
    { name: "Van Johnson", as: "Larry Wilde" },
    { name: "Milo O'Shea", as: "Father Donnelly" },
    { name: "Edward Herrmann", as: "Henry" },
  ],
  legacyUrl: "https://woodyallen.com/the-purple-rose-of-cairo/",
};

export default thePurpleRoseOfCairo;
