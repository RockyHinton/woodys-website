import type { Film } from "@/lib/types";

// Source: films.md — THE CURSE OF THE JADE SCORPION record. Key sources: [S001], [S002], [S020]
const theCurseOfTheJadeScorpion: Film = {
  title: "The Curse of the Jade Scorpion",
  year: 2001,
  slug: "the-curse-of-the-jade-scorpion",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "2001-08-10",
  shortSynopsis:
    "New York, 1940. C. W. Briggs, a star insurance investigator, and the efficiency expert he despises are both hypnotised at a party by a stage magician who plants a trigger word. Briggs begins committing jewel robberies in a trance, then investigating them by day without any memory of the thefts.",
  cast: [
    { name: "Woody Allen", as: "C. W. Briggs" },
    { name: "Helen Hunt", as: "Betty Ann Fitzgerald" },
    { name: "Dan Aykroyd", as: "Chris Magruder" },
    { name: "Charlize Theron", as: "Laura Kensington" },
    { name: "Wallace Shawn", as: "George Bond" },
    { name: "David Ogden Stiers", as: "Voltan" },
    { name: "Brian Markinson", as: "Al" },
  ],
  legacyUrl: "https://woodyallen.com/the-curse-of-the-jade-scorpion/",
};

export default theCurseOfTheJadeScorpion;
