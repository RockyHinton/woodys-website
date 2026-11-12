import type { Film } from "@/lib/types";

// Source: films.md — WONDER WHEEL record. Key sources: [S002], [S020]
const wonderWheel: Film = {
  title: "Wonder Wheel",
  year: 2017,
  slug: "wonder-wheel",
  roles: ["Director", "Writer"],
  releaseDate: "2017-12-01",
  shortSynopsis:
    "Coney Island, the early 1950s. Ginny, a former actress waiting tables at a clam house, lives above the amusement park with her carousel-operator husband and finds her affair with a lifeguard and aspiring playwright threatened when her husband's estranged daughter arrives, hiding from a gangster husband.",
  cast: [
    { name: "Kate Winslet", as: "Ginny Rannell" },
    { name: "Justin Timberlake", as: "Mickey Rubin" },
    { name: "Juno Temple", as: "Carolina Rannell" },
    { name: "Jim Belushi", as: "Humpty Rannell" },
    { name: "Jack Gore", as: "Richie Rannell" },
    { name: "Tony Sirico", as: "Angelo" },
    { name: "Steve Schirripa", as: "Nick" },
  ],
  legacyUrl: "https://woodyallen.com/wonder-wheel/",
};

export default wonderWheel;
