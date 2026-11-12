import type { Film } from "@/lib/types";

// Source: films.md — SMALL TIME CROOKS record. Key sources: [S002], [S020]
const smallTimeCrooks: Film = {
  title: "Small Time Crooks",
  year: 2000,
  slug: "small-time-crooks",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "2000-05-19",
  shortSynopsis:
    "Ray Winkler, an ex-convict dishwasher, persuades his wife Frenchy and three equally limited friends to rent an empty shop next to a bank and tunnel through the wall. The robbery fails comprehensively, but the cookie business set up as cover becomes a success, and the Winklers find themselves rich.",
  cast: [
    { name: "Woody Allen", as: "Ray Winkler" },
    { name: "Tracey Ullman", as: "Frances \"Frenchy\" Fox-Winkler" },
    { name: "Hugh Grant", as: "David Perrette" },
    { name: "Elaine May", as: "May Sloane" },
    { name: "Michael Rapaport", as: "Denny Doyle" },
    { name: "Tony Darrow", as: "Tommy Walker" },
    { name: "Jon Lovitz", as: "Benjamin \"Benny\" Bukowski" },
  ],
};

export default smallTimeCrooks;
