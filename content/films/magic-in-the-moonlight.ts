import type { Film } from "@/lib/types";

// Source: films.md — MAGIC IN THE MOONLIGHT record. Key sources: [S002], [S020]
const magicInTheMoonlight: Film = {
  title: "Magic in the Moonlight",
  year: 2014,
  slug: "magic-in-the-moonlight",
  roles: ["Director", "Writer"],
  releaseDate: "2014-07-25",
  shortSynopsis:
    "1928. Stanley Crawford, an English stage magician and committed rationalist who makes a sideline of exposing fraudulent mediums, is asked to debunk Sophie Baker, a young American clairvoyant attached to a wealthy family on the Côte d'Azur. Her demonstrations defeat him, and his certainties give way.",
  cast: [
    { name: "Colin Firth", as: "Stanley Crawford / \"Wei Ling Soo\"" },
    { name: "Emma Stone", as: "Sophie Baker" },
    { name: "Eileen Atkins", as: "Aunt Vanessa" },
    { name: "Marcia Gay Harden", as: "Mrs. Baker" },
    { name: "Hamish Linklater", as: "Brice Catledge" },
    { name: "Jacki Weaver", as: "Grace Catledge" },
    { name: "Simon McBurney", as: "Howard Burkan" },
  ],
  legacyUrl: "https://woodyallen.com/magic-in-the-moonlight",
};

export default magicInTheMoonlight;
