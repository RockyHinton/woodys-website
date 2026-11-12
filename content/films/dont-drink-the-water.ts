import type { Film } from "@/lib/types";

// Source: films.md — DON'T DRINK THE WATER (television film) record. Key sources: [S002], [S003], [S020], [S029]
const dontDrinkTheWater: Film = {
  title: "Don't Drink the Water",
  year: 1994,
  slug: "dont-drink-the-water",
  roles: ["Director", "Writer", "Actor"],
  kind: "television",
  kindNote: "A television film",
  releaseDate: "1994-12-18",
  shortSynopsis:
    "Walter Hollander, a New Jersey caterer on holiday with his wife and daughter, photographs the wrong things in an Eastern-bloc country and is accused of espionage. The family takes refuge in the American embassy, where the ambassador's well-meaning but incompetent son has been left in charge. Adapted by Allen from his own first Broadway play.",
  cast: [
    { name: "Woody Allen", as: "Walter Hollander" },
    { name: "Julie Kavner", as: "Marion Hollander" },
    { name: "Mayim Bialik", as: "Susan Hollander" },
    { name: "Michael J. Fox", as: "Axel Magee" },
    { name: "Dom DeLuise", as: "Father Drobney" },
    { name: "Josef Sommer", as: "Ambassador Magee" },
    { name: "Edward Herrmann", as: "Mr. Kilroy" },
  ],
  legacyUrl: "https://woodyallen.com/dont-drink-the-water/",
};

export default dontDrinkTheWater;
