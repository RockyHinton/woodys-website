import type { Film } from "@/lib/types";

// Source: films.md — ANYTHING ELSE record. Key sources: [S002], [S020]
const anythingElse: Film = {
  title: "Anything Else",
  year: 2003,
  slug: "anything-else",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "2003-09-19",
  shortSynopsis:
    "Jerry Falk, a young comedy writer in New York, is held together by other people's demands — a girlfriend whose moods govern the household, her mother, an agent who will not release him, a therapist he cannot leave. His one confidant is Dobel, an older gag writer with an apocalyptic worldview, who urges him to break every tie at once.",
  cast: [
    { name: "Jason Biggs", as: "Jerry Falk" },
    { name: "Christina Ricci", as: "Amanda Chase" },
    { name: "Woody Allen", as: "David Dobel" },
    { name: "Danny DeVito", as: "Harvey Wexler" },
    { name: "Stockard Channing", as: "Paula Chase" },
    { name: "Jimmy Fallon", as: "Bob Stiles" },
    { name: "KaDee Strickland", as: "Brooke" },
  ],
};

export default anythingElse;
