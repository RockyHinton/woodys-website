import type { Film } from "@/lib/types";

// Source: films.md — WHAT'S UP, TIGER LILY? record. Key sources: [S002], [S020]
const whatsUpTigerLily: Film = {
  title: "What's Up, Tiger Lily?",
  year: 1966,
  slug: "whats-up-tiger-lily",
  roles: ["Director", "Writer", "Actor"],
  shortSynopsis:
    "A Japanese secret-agent thriller is re-dubbed with an entirely new comic script, recasting the plot as the hunt for a stolen recipe for the world's finest egg salad. Allen appears in newly shot framing footage, and the Lovin' Spoonful perform interpolated musical numbers.",
  cast: [
    { name: "Tatsuya Mihashi", as: "Phil Moskowitz" },
    { name: "Mie Hama", as: "Teri Yaki" },
    { name: "Akiko Wakabayashi", as: "Suki Yaki" },
    { name: "Tadao Nakamaru", as: "Shepherd Wong" },
    { name: "Susumu Kurobe", as: "Wing Fat" },
    { name: "Woody Allen", as: "Himself" },
    { name: "The Lovin' Spoonful", as: "Themselves" },
  ],
  legacyUrl: "https://woodyallen.com/whats-up-tiger-lily/",
};

export default whatsUpTigerLily;
