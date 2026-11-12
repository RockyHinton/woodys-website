import type { Film } from "@/lib/types";

// Source: films.md — EVERYONE SAYS I LOVE YOU record. Key sources: [S002], [S020], [S030]
const everyoneSaysILoveYou: Film = {
  title: "Everyone Says I Love You",
  year: 1996,
  slug: "everyone-says-i-love-you",
  roles: ["Director", "Writer", "Actor"],
  shortSynopsis:
    "The romances of a wealthy, liberal New York family unfold across New York, Venice and Paris, narrated by a teenage daughter. The characters break into standards from the 1920s and 1930s, sung mostly in their own untrained voices.",
  cast: [
    { name: "Woody Allen", as: "Joe Berlin" },
    { name: "Goldie Hawn", as: "Steffi Dandridge" },
    { name: "Alan Alda", as: "Bob Dandridge" },
    { name: "Julia Roberts", as: "Von Sidell" },
    { name: "Drew Barrymore", as: "Skylar Dandridge" },
    { name: "Edward Norton", as: "Holden Spence" },
    { name: "Natalie Portman", as: "Laura Dandridge" },
  ],
  legacyUrl: "https://woodyallen.com/everyone-says-i-love-you/",
};

export default everyoneSaysILoveYou;
