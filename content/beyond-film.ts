import type { BeyondFilmSection } from "@/lib/types";

/**
 * Beyond Film page content.
 *
 * Source: research/woody-allen-master-dossier/beyond-film.md, with
 * derived figures from statistics.md §12. Facts flagged
 * [CHECK]/[CONFLICT]/[UNVERIFIED] are omitted (e.g. the announced 2026
 * story collection, the Play It Again, Sam performance count).
 * Key sources: [S003][S022][S023][S027][S028][S041][S050][S051][S052][S053].
 */
export const beyondFilmSections: BeyondFilmSection[] = [
  {
    slug: "books-and-writing",
    title: "Books & Writing",
    intro: [
      "Allen's prose career runs in parallel with the films. Five collections of humour pieces — most first published in The New Yorker — appeared between 1971 and 2022, with a twenty-seven-year gap in the middle that corresponds almost exactly to his densest film-making years. A memoir followed in 2020, and a first novel in 2025.",
    ],
    works: [
      { title: "Getting Even", year: "1971", note: "Humour collection" },
      { title: "Without Feathers", year: "1975", note: "Humour collection, including the one-act plays God and Death" },
      { title: "Side Effects", year: "1980", note: "Humour collection" },
      { title: "Mere Anarchy", year: "2007", note: "Humour collection" },
      { title: "Apropos of Nothing", year: "2020", note: "Autobiography" },
      { title: "Zero Gravity", year: "2022", note: "Humour collection" },
      { title: "What's With Baum?", year: "2025", note: "A first novel" },
    ],
    mediaLabel: "Book covers",
    mediaAspect: "2/3",
  },
  {
    slug: "theatre",
    title: "Theatre",
    intro: [
      "The theatre work spans more than fifty years, from sketch material in a 1960 Broadway revue to the book of a Broadway musical in 2014. Two early plays — Don't Drink the Water and Play It Again, Sam — were Broadway hits, and both became films. Play It Again, Sam is also where he first worked with Diane Keaton and Tony Roberts.",
    ],
    works: [
      { title: "From A to Z", year: "1960", note: "Sketch material — first Broadway credit" },
      { title: "Don't Drink the Water", year: "1966", note: "First play as author; Broadway" },
      { title: "Play It Again, Sam", year: "1969", note: "Broadway; Allen starred with Diane Keaton and Tony Roberts" },
      { title: "The Floating Light Bulb", year: "1981", note: "Broadway, at Lincoln Center" },
      { title: "Central Park West", year: "1995", note: "One act, in Death Defying Acts, off-Broadway" },
      { title: "Riverside Drive · Old Saybrook", year: "2003", note: "One acts, staged as Writer's Block, off-Broadway" },
      { title: "A Second Hand Memory", year: "2004", note: "Off-Broadway" },
      { title: "Honeymoon Motel", year: "2011", note: "One act, in Relatively Speaking, Broadway" },
      { title: "Bullets Over Broadway The Musical", year: "2014", note: "Book by Allen, from his own film; Broadway" },
    ],
    mediaLabel: "Production photography & playbills",
    mediaAspect: "4/3",
  },
  {
    slug: "music",
    title: "Music",
    intro: [
      "Allen plays clarinet in the New Orleans tradition — self-taught, in the lineage of Sidney Bechet and George Lewis. For close to fifty years he kept a Monday-night residency in New York: first at Michael's Pub, then from 1997 at the Café Carlyle, unadvertised throughout. The band was led by the banjoist Eddy Davis from 1985 until his death in 2020, and the residency ended in March 2020 when the city's nightlife closed.",
    ],
    works: [
      { title: "Monday-night residency, New York", year: "c. 1970s–2020", note: "Michael's Pub, then the Café Carlyle from 1997" },
      { title: "First European tour", year: "1996", note: "Including the Olympia, Paris, and the Royal Festival Hall, London — documented in Wild Man Blues" },
      { title: "Woody Allen", year: "1964", note: "Live comedy album — Mr. Kelly's, Chicago" },
      { title: "Woody Allen, Volume 2", year: "1965", note: "Live comedy album — The Shadows, Washington, D.C." },
      { title: "The Third Woody Allen Album", year: "1968", note: "Live comedy album — Eugene's, San Francisco" },
    ],
    mediaLabel: "Performance photography",
    mediaAspect: "3/2",
  },
  {
    slug: "television-and-other",
    title: "Television & Other",
    intro: [
      "Television is where the career began — as a staff and freelance writer through the 1950s, in rooms that included Caesar's Hour alongside Mel Brooks, Carl Reiner, Larry Gelbart and Neil Simon. It recurs only occasionally after that: a television film in 1994, a streaming series in 2016. He has also directed one opera.",
    ],
    works: [
      { title: "Television writing", year: "1955–1960s", note: "Caesar's Hour, The Ed Sullivan Show, The Tonight Show and others" },
      { title: "Don't Drink the Water", year: "1994", note: "Television film, from his own play — he directed and starred" },
      { title: "Crisis in Six Scenes", year: "2016", note: "Six-episode series — his only television series" },
      { title: "Gianni Schicchi", year: "2008", note: "Puccini — his only opera production; revived at Los Angeles Opera, 2015" },
    ],
    mediaLabel: "Stills",
    mediaAspect: "16/9",
  },
];
