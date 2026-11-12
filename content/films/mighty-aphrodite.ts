import type { Film } from "@/lib/types";

// Source: films.md — MIGHTY APHRODITE record. Key sources: [S002], [S020]
const mightyAphrodite: Film = {
  title: "Mighty Aphrodite",
  year: 1995,
  slug: "mighty-aphrodite",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1995-10-27",
  shortSynopsis:
    "A Greek chorus introduces the story of Lenny Weinrib, a New York sportswriter who becomes fixated on finding his adopted son's birth mother. She turns out to be Linda Ash, a cheerful pornographic actress and sex worker, whose life Lenny sets about improving while the chorus comments, warns and eventually intervenes.",
  cast: [
    { name: "Woody Allen", as: "Lenny Weinrib" },
    { name: "Mira Sorvino", as: "Linda Ash" },
    { name: "Helena Bonham Carter", as: "Amanda Sloan Weinrib" },
    { name: "Michael Rapaport", as: "Kevin" },
    { name: "F. Murray Abraham", as: "Greek chorus leader" },
    { name: "Olympia Dukakis", as: "Jocasta" },
    { name: "David Ogden Stiers", as: "Laius" },
  ],
  legacyUrl: "https://woodyallen.com/mighty-aphrodite/",
};

export default mightyAphrodite;
