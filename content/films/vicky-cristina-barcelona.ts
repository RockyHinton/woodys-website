import type { Film } from "@/lib/types";

// Source: films.md — VICKY CRISTINA BARCELONA record. Key sources: [S002], [S020], [S030]
const vickyCristinaBarcelona: Film = {
  title: "Vicky Cristina Barcelona",
  year: 2008,
  slug: "vicky-cristina-barcelona",
  roles: ["Director", "Writer"],
  releaseDate: "2008-08-15",
  shortSynopsis:
    "Two American friends spend a summer in Barcelona, where both are drawn to Juan Antonio, a painter who candidly proposes they come away with him for a weekend. Cristina moves in with him and then with him and his volatile ex-wife; Vicky marries as planned and finds the summer unresolved.",
  cast: [
    { name: "Rebecca Hall", as: "Vicky" },
    { name: "Scarlett Johansson", as: "Cristina" },
    { name: "Javier Bardem", as: "Juan Antonio Gonzalo" },
    { name: "Penélope Cruz", as: "María Elena" },
    { name: "Patricia Clarkson", as: "Judy Nash" },
    { name: "Kevin Dunn", as: "Mark Nash" },
    { name: "Chris Messina", as: "Doug" },
  ],
  legacyUrl: "https://woodyallen.com/vicky-cristina-barcelona/",
};

export default vickyCristinaBarcelona;
