import type { Film } from "@/lib/types";

// Source: films.md — TO ROME WITH LOVE record. Key sources: [S002], [S020], [S032]
const toRomeWithLove: Film = {
  title: "To Rome with Love",
  year: 2012,
  slug: "to-rome-with-love",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "2012-04-20",
  shortSynopsis:
    "Four unconnected Roman stories: a mortician who sings magnificently, but only in the shower; a newly married provincial couple separated on their first day in the city; an ordinary clerk who wakes up inexplicably famous; and a young architect whose affair is observed by an older architect only he can see.",
  cast: [
    { name: "Woody Allen", as: "Jerry" },
    { name: "Judy Davis", as: "Phyllis" },
    { name: "Alison Pill", as: "Hayley" },
    { name: "Flavio Parenti", as: "Michelangelo Santoli" },
    { name: "Fabio Armiliato", as: "Giancarlo Santoli" },
    { name: "Roberto Benigni", as: "Leopoldo Pisanello" },
    { name: "Penélope Cruz", as: "Anna" },
  ],
  legacyUrl: "https://woodyallen.com/to-rome-with-love/",
};

export default toRomeWithLove;
