import type { Film } from "@/lib/types";

// Source: films.md — MANHATTAN record. Key sources: [S006][S009][S020][S030]
// Credits per the AFI Catalog record [S009].
// No quotations: quotes.md lists no verified film dialogue for this film.
const manhattan: Film = {
  title: "Manhattan",
  year: 1979,
  slug: "manhattan",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1979-04-25",
  shortSynopsis:
    "Isaac Davis, a television comedy writer who has quit his job to write a book, moves between a seventeen-year-old girlfriend, an ex-wife publishing a memoir of their marriage, and his best friend's mistress. The city is photographed in black-and-white widescreen and scored entirely to Gershwin.",
  longSynopsis: [
    "Isaac Davis, a forty-two-year-old television comedy writer, quits his job to write a book. He is involved with Tracy, a seventeen-year-old high-school student, while his ex-wife Jill prepares to publish a memoir of their marriage.",
    "His married friend Yale is having an affair with Mary Wilkie, a brittle, well-read journalist; when Yale breaks it off, Isaac takes up with her.",
    "The film moves between Manhattan's cultural institutions and apartments, scored entirely to Gershwin and photographed in black-and-white widescreen, and ends with Isaac reconsidering what he has discarded.",
  ],
  cast: [
    { name: "Woody Allen", as: "Isaac Davis" },
    { name: "Diane Keaton", as: "Mary Wilkie" },
    { name: "Michael Murphy", as: "Yale Pollack" },
    { name: "Mariel Hemingway", as: "Tracy" },
    { name: "Meryl Streep", as: "Jill Davis" },
    { name: "Anne Byrne", as: "Emily Pollack" },
    { name: "Karen Ludwig", as: "Connie" },
    { name: "Michael O'Donoghue", as: "Dennis" },
    { name: "Wallace Shawn", as: "Jeremiah" },
    { name: "Bella Abzug", as: "Guest of honour" },
  ],
  locations: [
    {
      name: "Riverview Terrace at Sutton Square",
      place: "New York, New York",
      note: "Isaac and Mary watch the dawn beneath the Queensboro Bridge; the bench was brought in by the crew.",
    },
    {
      name: "Hayden Planetarium, American Museum of Natural History",
      place: "New York, New York",
      note: "The rainstorm shelter; partly a built set.",
    },
    {
      name: "Guggenheim Museum, Fifth Avenue",
      place: "New York, New York",
      note: "Isaac and Mary's first meeting.",
    },
    {
      name: "Museum of Modern Art, West 53rd Street",
      place: "New York, New York",
      note: "The sculpture garden.",
    },
    {
      name: "Elaine's, Second Avenue",
      place: "New York, New York",
      note: "The opening foursome; the restaurant closed in 2011.",
    },
    {
      name: "Russian Tea Room, West 57th Street",
      place: "New York, New York",
    },
    {
      name: "Palisades, Englewood Cliffs",
      place: "New Jersey",
      note: "Isaac reads Jill's book.",
    },
  ],
  productionNotes: [
    "The film was Woody Allen's first in black-and-white and in 2.35:1 Panavision — the widescreen monochrome was the project's founding idea.",
    "The film grew out of Allen's attachment to Gershwin's music rather than from a story.",
    "The Queensboro Bridge shot was taken at 5 a.m.; the bridge's lights were on a city timer and went out during the take, and the crew supplied their own bench.",
    "Principal photography began in August 1978, on location in New York City with portions in Englewood, New Jersey.",
  ],
  awards: [
    "Two BAFTA Awards — Best Film and Best Screenplay.",
    "César Award for Best Foreign Film.",
    "Best Director from both the New York Film Critics Circle and the National Society of Film Critics.",
  ],
  musicNote:
    "Scored to George Gershwin throughout, with Rhapsody in Blue over the opening montage, played by the New York Philharmonic under Zubin Mehta and the Buffalo Philharmonic under Michael Tilson Thomas.",
  archiveMaterial: [
    {
      slug: "manhattan-cast-bios",
      title: "Cast bios — Michael Murphy, Meryl Streep, Anne Byrne",
      category: "production-material",
    },
    {
      slug: "manhattan-gallery",
      title: "Gallery — three film stills",
      category: "photography",
    },
    {
      slug: "manhattan-international-artwork",
      title: "International artwork — stylised poster",
      category: "posters-and-artwork",
    },
  ],
  legacyUrl: "https://woodyallen.com/manhattan/",
};

export default manhattan;
