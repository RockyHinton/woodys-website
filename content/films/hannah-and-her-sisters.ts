import type { Film } from "@/lib/types";

// Source: films.md — HANNAH AND HER SISTERS record. Key sources: [S002][S020][S030][S041]
// No legacyUrl: the legacy filmography entry links to the wrong film [S002].
// No quotations: quotes.md lists no verified film dialogue for this film.
// No archiveMaterial: no working official page; no confirmed first-party holdings.
const hannahAndHerSisters: Film = {
  title: "Hannah and Her Sisters",
  year: 1986,
  slug: "hannah-and-her-sisters",
  roles: ["Director", "Writer", "Actor"],
  releaseDate: "1986-02-07",
  shortSynopsis:
    "Three Thanksgiving dinners, roughly two years apart, frame the lives of three Manhattan sisters — Hannah, the family's stable centre, Lee, with whom Hannah's husband becomes obsessed, and Holly, who lurches between catering, acting and writing.",
  longSynopsis: [
    "Three Thanksgiving dinners, roughly two years apart, frame the lives of three sisters. Hannah, a successful actress, is the family's stable centre; her husband Elliot becomes obsessed with her sister Lee, who is living with Frederick, a reclusive painter. The third sister, Holly, lurches between catering, acting and writing while competing with Hannah for approval.",
    "In a parallel strand, Hannah's ex-husband Mickey, a television producer, believes he is dying, survives the scare, and begins a search for religious meaning.",
    "The film interleaves the strands with chapter titles and voiceover, and resolves them at a fourth family gathering.",
  ],
  cast: [
    { name: "Mia Farrow", as: "Hannah" },
    { name: "Michael Caine", as: "Elliot" },
    { name: "Barbara Hershey", as: "Lee" },
    { name: "Dianne Wiest", as: "Holly" },
    { name: "Woody Allen", as: "Mickey Sachs" },
    { name: "Maureen O'Sullivan", as: "Norma" },
    { name: "Lloyd Nolan", as: "Evan" },
    { name: "Max von Sydow", as: "Frederick" },
    { name: "Carrie Fisher", as: "April" },
    { name: "Julie Kavner", as: "Gail" },
  ],
  locations: [
    {
      name: "The Langham, 135 Central Park West",
      place: "New York, New York",
      note: "Hannah's apartment — Mia Farrow's actual home, used as both story setting and filming location.",
    },
    {
      name: "Café Carlyle, Carlyle Hotel",
      place: "New York, New York",
      note: "Mickey takes Holly to hear Bobby Short — the room where Allen's own jazz band later played Mondays.",
    },
    {
      name: "Pomander Walk, West 94th–95th Streets",
      place: "New York, New York",
      note: "The architecture tour; normally closed to the public.",
    },
    {
      name: "Dakota Apartments, 1 West 72nd Street",
      place: "New York, New York",
      note: "The architecture tour.",
    },
    {
      name: "Chrysler Building, Lexington Avenue",
      place: "New York, New York",
      note: "The architecture tour.",
    },
    {
      name: "St Regis New York, East 55th Street",
      place: "New York, New York",
      note: "Elliot and Lee's affair.",
    },
    {
      name: "Metro Cinema, Broadway",
      place: "New York, New York",
      note: "Mickey watches Duck Soup.",
    },
  ],
  productionNotes: [
    "Mia Farrow's own apartment at The Langham on Central Park West served as Hannah's, making the story setting and the filming location identical.",
    "The film was Carlo Di Palma's first of eleven features as Allen's cinematographer.",
    "Maureen O'Sullivan, who plays the sisters' mother, was Mia Farrow's mother.",
    "It became Allen's highest-grossing film to that date.",
  ],
  awards: [
    "Three Academy Awards — Best Original Screenplay, Best Supporting Actor for Michael Caine and Best Supporting Actress for Dianne Wiest.",
    "Two BAFTA Awards — Best Direction and Best Original Screenplay.",
    "Golden Globe for Best Motion Picture, Comedy or Musical, and Best Film and Best Director from the New York Film Critics Circle.",
  ],
  musicNote:
    "A compiled score with no original music, drawing on classical pieces and standards in near-equal measure — Bach, Puccini and Harry James among them — with Bobby Short seen performing at the Café Carlyle.",
};

export default hannahAndHerSisters;
