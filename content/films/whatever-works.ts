import type { Film } from "@/lib/types";

// Source: films.md — WHATEVER WORKS record. Key sources: [S002], [S020]
const whateverWorks: Film = {
  title: "Whatever Works",
  year: 2009,
  slug: "whatever-works",
  roles: ["Director", "Writer"],
  releaseDate: "2009-06-19",
  shortSynopsis:
    "Boris Yellnikoff, a retired New York physicist who believes the universe is meaningless and tells the audience so directly, takes in Melodie, a runaway from Mississippi with unbreakable good humour, and marries her. Her mother arrives to reclaim her, discovers a vocation as a photographer, and does not leave.",
  cast: [
    { name: "Larry David", as: "Boris Yellnikoff" },
    { name: "Evan Rachel Wood", as: "Melodie St. Ann Celestine" },
    { name: "Patricia Clarkson", as: "Marietta" },
    { name: "Ed Begley Jr.", as: "John" },
    { name: "Michael McKean", as: "Leo Brockman" },
    { name: "Henry Cavill", as: "Randy Lee James" },
    { name: "John Gallagher Jr.", as: "Perry" },
  ],
  legacyUrl: "https://woodyallen.com/whatever-works/",
};

export default whateverWorks;
