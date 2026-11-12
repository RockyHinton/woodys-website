import type { Film } from "@/lib/types";

// Source: films.md — YOU WILL MEET A TALL DARK STRANGER record. Key sources: [S002], [S020]
const youWillMeetATallDarkStranger: Film = {
  title: "You Will Meet a Tall Dark Stranger",
  year: 2010,
  slug: "you-will-meet-a-tall-dark-stranger",
  roles: ["Director", "Writer"],
  releaseDate: "2010-09-22",
  shortSynopsis:
    "Alfie Shepridge, afraid of age and death, leaves his wife of forty years for a call girl with expensive tastes, while his ex-wife begins arranging her life around a fortune teller's predictions. Their daughter and her blocked novelist husband face temptations of their own, in four interlocking self-deceptions.",
  cast: [
    { name: "Anthony Hopkins", as: "Alfie Shepridge" },
    { name: "Gemma Jones", as: "Helena Shepridge" },
    { name: "Naomi Watts", as: "Sally Channing" },
    { name: "Josh Brolin", as: "Roy Channing" },
    { name: "Antonio Banderas", as: "Greg Clemente" },
    { name: "Lucy Punch", as: "Charmaine Foxx" },
    { name: "Freida Pinto", as: "Dia" },
  ],
};

export default youWillMeetATallDarkStranger;
