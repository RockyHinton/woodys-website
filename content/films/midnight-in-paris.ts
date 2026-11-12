import type { Film } from "@/lib/types";

// Source: films.md — MIDNIGHT IN PARIS record. Key sources: [S007][S020][S030][S044]
// Allen does not appear in the film: roles are Director and Writer only.
// No quotations: quotes.md lists no verified film dialogue for this film.
const midnightInParis: Film = {
  title: "Midnight in Paris",
  year: 2011,
  slug: "midnight-in-paris",
  roles: ["Director", "Writer"],
  releaseDate: "2011-05-11",
  shortSynopsis:
    "Gil Pender, a Hollywood screenwriter trying to finish a novel, walks Paris alone after midnight and is collected by a 1920s car that delivers him to the Lost Generation. The film moves between three Parises as it examines nostalgia.",
  longSynopsis: [
    "Gil Pender, a successful Hollywood screenwriter trying to finish a novel, is in Paris with his fiancée Inez and her conservative parents. Walking alone after midnight, he is collected by a 1920s car and finds himself among the Lost Generation — the Fitzgeralds, Hemingway, and Gertrude Stein, who agrees to read his manuscript.",
    "He falls for Adriana, a woman moving between the era's artists, who in turn longs for the Belle Époque.",
    "The film moves between three Parises and ends with Gil drawing a conclusion about nostalgia that the structure has demonstrated rather than argued.",
  ],
  cast: [
    { name: "Owen Wilson", as: "Gil Pender" },
    { name: "Rachel McAdams", as: "Inez" },
    { name: "Marion Cotillard", as: "Adriana" },
    { name: "Michael Sheen", as: "Paul Bates" },
    { name: "Nina Arianda", as: "Carol Bates" },
    { name: "Léa Seydoux", as: "Gabrielle" },
    { name: "Carla Bruni", as: "Museum guide" },
    { name: "Tom Hiddleston", as: "F. Scott Fitzgerald" },
    { name: "Corey Stoll", as: "Ernest Hemingway" },
    { name: "Kathy Bates", as: "Gertrude Stein" },
  ],
  locations: [
    {
      name: "Église Saint-Étienne-du-Mont",
      place: "Paris, France",
      note: "The steps where Gil is collected by the 1920s Peugeot — the film's signature location.",
    },
    {
      name: "Pont Alexandre III",
      place: "Paris, France",
      note: "The closing scene in the rain.",
    },
    {
      name: "Monet's Garden, Giverny",
      place: "Giverny, France",
    },
    {
      name: "Château de Versailles",
      place: "Versailles, France",
      note: "The gardens, where Paul dismisses nostalgia.",
    },
    {
      name: "27 rue de Fleurus",
      place: "Paris, France",
      note: "Gertrude Stein's home.",
    },
    {
      name: "Shakespeare and Company, rue de la Bûcherie",
      place: "Paris, France",
    },
    {
      name: "Restaurant Polidor, rue Monsieur le Prince",
      place: "Paris, France",
      note: "Gil meets Hemingway.",
    },
    {
      name: "Musée Rodin, rue de Varenne",
      place: "Paris, France",
      note: "The museum tour, where Paul contradicts the guide.",
    },
  ],
  productionNotes: [
    "Principal photography began in Paris in July 2010.",
    "It was the first Allen film shot entirely on location in Paris, and the first to use a digital intermediate.",
    "Carla Bruni, then France's first lady, appears as a museum guide.",
  ],
  awards: [
    "Academy Award for Best Original Screenplay, with further nominations for Best Picture, Best Director and Best Art Direction.",
    "Golden Globe and Writers Guild of America awards for the screenplay.",
    "Grammy Award for Best Compilation Soundtrack for Visual Media.",
  ],
  musicNote:
    "A compiled soundtrack with Sidney Bechet's \"Si tu vois ma mère\" as the signature theme.",
  archiveMaterial: [
    {
      slug: "midnight-in-paris-international-artwork",
      title: "International artwork — eight poster variants",
      category: "posters-and-artwork",
    },
    {
      slug: "midnight-in-paris-production-photographs",
      title: "Production photographs — ≈127 images of Allen and crew on set",
      category: "behind-the-scenes",
    },
  ],
  legacyUrl: "https://woodyallen.com/midnight-in-paris",
};

export default midnightInParis;
