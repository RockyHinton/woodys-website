import type { Film } from "@/lib/types";

// Source: films.md — MELINDA AND MELINDA record. Key sources: [S002], [S020]
const melindaAndMelinda: Film = {
  title: "Melinda and Melinda",
  year: 2004,
  slug: "melinda-and-melinda",
  roles: ["Director", "Writer"],
  releaseDate: "2004-09-17",
  shortSynopsis:
    "Four playwrights at a Manhattan restaurant argue about whether life is essentially comic or tragic, and each proposes a version of the same situation: a woman named Melinda arrives unannounced at the apartment of old friends. The film alternates between the tragic and comic tellings, with the same actress playing both Melindas.",
  cast: [
    { name: "Radha Mitchell", as: "Melinda Robicheaux" },
    { name: "Will Ferrell", as: "Hobie" },
    { name: "Amanda Peet", as: "Susan" },
    { name: "Chiwetel Ejiofor", as: "Ellis Moonsong" },
    { name: "Chloë Sevigny", as: "Laurel" },
    { name: "Jonny Lee Miller", as: "Lee" },
    { name: "Wallace Shawn", as: "Sy" },
  ],
  legacyUrl: "https://woodyallen.com/melinda-and-melinda",
};

export default melindaAndMelinda;
