import type { Film } from "@/lib/types";

// Source: films.md — EVERYTHING YOU ALWAYS WANTED TO KNOW ABOUT SEX* (*BUT WERE AFRAID TO ASK) record.
// Key sources: [S002], [S020]
const everythingYouAlwaysWantedToKnowAboutSex: Film = {
  title: "Everything You Always Wanted to Know About Sex* (*But Were Afraid to Ask)",
  year: 1972,
  slug: "everything-you-always-wanted-to-know-about-sex",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1972-08-06",
  shortSynopsis:
    "Seven unconnected comic sketches, each prompted by a question from a popular sex-advice book, move from a medieval court to a 1950s panel show to a mission-control operation inside the human body. The targets are sexual anxiety and the pseudo-clinical register of the source book.",
  cast: [
    { name: "Woody Allen", as: "The Fool / Fabrizio / Victor Shakapopulis / Sperm" },
    { name: "Lynn Redgrave", as: "The Queen" },
    { name: "Gene Wilder", as: "Dr. Doug Ross" },
    { name: "Louise Lasser", as: "Gina" },
    { name: "Lou Jacobi", as: "Sam Musgrave" },
    { name: "John Carradine", as: "Dr. Bernardo" },
    { name: "Burt Reynolds", as: "Switchboard Chief" },
  ],
};

export default everythingYouAlwaysWantedToKnowAboutSex;
