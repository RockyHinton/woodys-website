import type { Film } from "@/lib/types";

// Source: films.md — ANNIE HALL record. Key sources: [S005][S020][S030][S021]
// No quotations: quotes.md lists no verified film dialogue for this film.
const annieHall: Film = {
  title: "Annie Hall",
  year: 1977,
  slug: "annie-hall",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1977-04-20",
  shortSynopsis:
    "Alvy Singer, a New York comedian, works backwards through his failed relationship with Annie Hall, a hesitant singer from Chippewa Falls, Wisconsin. The romance is reassembled out of sequence, as a problem of memory rather than of plot.",
  longSynopsis: [
    "Alvy Singer, a New York comedian in his forties, addresses the camera directly and then works backwards through his relationship with Annie Hall, a hesitant singer from Chippewa Falls, Wisconsin. Their courtship, cohabitation and separation are presented out of sequence.",
    "The telling draws on a repertoire of devices — split screen, subtitles for unspoken thoughts, animation, Alvy walking into his own childhood memories, characters addressing passers-by.",
    "Annie moves towards a career and, eventually, Los Angeles; Alvy remains committed to New York and to his own pessimism. The film treats a romance as a problem of memory rather than of plot.",
  ],
  cast: [
    { name: "Woody Allen", as: "Alvy Singer" },
    { name: "Diane Keaton", as: "Annie Hall" },
    { name: "Tony Roberts", as: "Rob" },
    { name: "Carol Kane", as: "Allison Portchnik" },
    { name: "Paul Simon", as: "Tony Lacey" },
    { name: "Shelley Duvall", as: "Pam" },
    { name: "Janet Margolin", as: "Robin" },
    { name: "Colleen Dewhurst", as: "Mrs. Hall" },
    { name: "Christopher Walken", as: "Duane Hall" },
    { name: "Donald Symington", as: "Mr. Hall" },
  ],
  locations: [
    {
      name: "Under the Thunderbolt rollercoaster, Coney Island",
      place: "Brooklyn, New York",
      note: "Alvy's childhood home.",
    },
    {
      name: "Beekman Theatre, Second Avenue",
      place: "New York, New York",
      note: "The cinema queue and the Marshall McLuhan scene.",
    },
    {
      name: "Thalia Cinema, Broadway",
      place: "New York, New York",
      note: "The Sorrow and the Pity screenings.",
    },
    {
      name: "Central Park Zoo",
      place: "New York, New York",
    },
    {
      name: "The Hamptons, South Fork",
      place: "Long Island, New York",
      note: "The beach house and lobster sequence.",
    },
    {
      name: "Source Restaurant, Sunset Boulevard",
      place: "West Hollywood, California",
      note: "The alfalfa-sprouts lunch.",
    },
  ],
  productionNotes: [
    "The film was Woody Allen's first collaboration with cinematographer Gordon Willis, the first of eight films together.",
    "An early draft was a murder mystery; the abandoned plot resurfaced sixteen years later as Manhattan Murder Mystery.",
    "Allen's working title was Anhedonia.",
    "The role of Annie was written for Diane Keaton, whose own family name is Hall.",
  ],
  awards: [
    "Four Academy Awards — Best Picture, Best Director, Best Actress and Best Original Screenplay.",
    "Golden Globe for Best Actress in a Comedy or Musical for Diane Keaton.",
    "Selected for the National Film Registry by the Library of Congress in 1992.",
  ],
  musicNote:
    "No original score — a compilation of popular standards, with \"It Had to Be You\" and \"Seems Like Old Times\" both sung on screen by Diane Keaton.",
  archiveMaterial: [
    {
      slug: "annie-hall-screenplay",
      title: "Screenplay — ≈275 scanned pages",
      category: "screenplays",
    },
    {
      slug: "annie-hall-international-artwork",
      title: "International artwork — Australia, Japan, France",
      category: "posters-and-artwork",
    },
    {
      slug: "annie-hall-cast-bios",
      title: "Seven typewritten cast bio pages",
      category: "production-material",
    },
  ],
  legacyUrl: "https://woodyallen.com/annie-hall/",
};

export default annieHall;
