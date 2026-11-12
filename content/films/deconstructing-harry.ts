import type { Film } from "@/lib/types";

// Source: films.md — DECONSTRUCTING HARRY record. Key sources: [S002], [S020]
const deconstructingHarry: Film = {
  title: "Deconstructing Harry",
  year: 1997,
  slug: "deconstructing-harry",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1997-12-12",
  shortSynopsis:
    "Harry Block, a successful novelist who has used his friends' and wives' lives as material without disguise, travels to receive an honour from the university that once expelled him, accompanied by a sex worker, a dying friend and his son. The journey is interleaved with dramatisations of his own fiction.",
  cast: [
    { name: "Woody Allen", as: "Harry Block" },
    { name: "Judy Davis", as: "Lucy" },
    { name: "Billy Crystal", as: "Larry / the Devil" },
    { name: "Kirstie Alley", as: "Joan" },
    { name: "Elisabeth Shue", as: "Fay Sexton" },
    { name: "Robin Williams", as: "Mel" },
    { name: "Demi Moore", as: "Helen" },
  ],
  legacyUrl: "https://woodyallen.com/deconstructing-harry/",
};

export default deconstructingHarry;
