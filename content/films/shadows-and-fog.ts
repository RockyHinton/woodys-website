import type { Film } from "@/lib/types";

// Source: films.md — SHADOWS AND FOG record. Key sources: [S002], [S020]
const shadowsAndFog: Film = {
  title: "Shadows and Fog",
  year: 1991,
  slug: "shadows-and-fog",
  roles: ["Director", "Writer", "Actor"],
  shortSynopsis:
    "Night in an unnamed European city in the 1920s, with a strangler at large. Kleinman, a timid clerk, is woken by neighbours who have assigned him a role in a vigilante plan nobody will explain to him, and wanders the fog for the rest of the night, accused, interrogated and drawn into a travelling circus.",
  cast: [
    { name: "Woody Allen", as: "Kleinman" },
    { name: "Mia Farrow", as: "Irmy" },
    { name: "John Malkovich", as: "Paul, the clown" },
    { name: "Madonna", as: "Marie" },
    { name: "Donald Pleasence", as: "The doctor" },
    { name: "Kathy Bates", as: "Prostitute" },
    { name: "Jodie Foster", as: "Dorrie" },
  ],
};

export default shadowsAndFog;
