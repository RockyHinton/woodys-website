import type { Film } from "@/lib/types";

// Source: films.md — IRRATIONAL MAN record. Key sources: [S002], [S020]
const irrationalMan: Film = {
  title: "Irrational Man",
  year: 2015,
  slug: "irrational-man",
  roles: ["Director", "Writer"],
  releaseDate: "2015-07-17",
  shortSynopsis:
    "Abe Lucas, a philosophy professor unable to find meaning in anything, arrives at a small Rhode Island college drinking heavily. Overhearing a stranger's custody case in a diner, he conceives an act that will be entirely unconnected to him and make the world measurably better — and, having decided, becomes happy and functional.",
  cast: [
    { name: "Joaquin Phoenix", as: "Abe Lucas" },
    { name: "Emma Stone", as: "Jill Pollard" },
    { name: "Parker Posey", as: "Rita Richards" },
    { name: "Jamie Blackley", as: "Roy" },
    { name: "Betsy Aidem", as: "Mrs. Pollard" },
    { name: "Ethan Phillips", as: "Mr. Pollard" },
    { name: "Robert Petkoff", as: "Paul" },
  ],
  legacyUrl: "https://woodyallen.com/irrational-man",
};

export default irrationalMan;
