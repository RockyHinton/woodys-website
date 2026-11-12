import type { BiographySection } from "@/lib/types";

/**
 * Biography page content.
 *
 * Source: research/woody-allen-master-dossier/biography-timeline.md
 * (Biographical Foundation), with career facts from films.md,
 * beyond-film.md and statistics.md. Key sources: [S020][S022][S041].
 *
 * Editorial register: factual, restrained, human. No promotional
 * claims; the chronology and the work carry the significance.
 * Facts flagged [CHECK]/[CONFLICT] in the dossier are not used.
 */

export const biographyOpening: string[] = [
  "Woody Allen was born Allan Stewart Konigsberg in the Bronx on November 30, 1935, and grew up in Brooklyn. He began writing jokes at fifteen, selling them to newspaper columnists while still at Midwood High School, and by nineteen he was writing professionally for television.",
  "In the six decades since, he has directed fifty feature films, and written every one of them. He has also published books of humour, a memoir and a novel; written for Broadway and off-Broadway; and spent roughly fifty years of Monday nights playing New Orleans jazz clarinet in New York.",
  "The work is the biography. What follows is a short account of how it unfolded.",
];

export const biographySections: BiographySection[] = [
  {
    eyebrow: "1935–1952",
    heading: "Brooklyn",
    paragraphs: [
      "He was born at Mount Eden Hospital in the Bronx and raised in Brooklyn, in a Jewish household — eight years of Hebrew school included. His mother, Nettie, kept the books at the family delicatessen; his father, Martin, worked at various times as a jewellery engraver, a waiter and an egg candler. His younger sister, Letty Aronson, would much later become his principal film producer.",
      "At fifteen he started writing jokes. Within a year he was selling them to Broadway columnists and comedians. He graduated from Midwood High School in 1953, tried New York University and then City College, and dropped out of both.",
    ],
    media: { variant: "portrait", label: "Early photograph — Brooklyn" },
  },
  {
    eyebrow: "1950–1964",
    heading: "Jokes, Television, Stand-Up",
    paragraphs: [
      "In 1955, aged nineteen, he joined the NBC Writer's Development Program and became a staff writer for the humorist Herb Shriner. The following year he was writing for Caesar's Hour, in a room that included Mel Brooks, Carl Reiner, Larry Gelbart and Neil Simon — the formative professional environment of his career. His prose began appearing in The New Yorker in the 1960s.",
      "In 1960, at the urging of his manager Jack Rollins, he began performing his own material in Manhattan clubs — the Bitter End, the Cafe Au Go Go. He made his first appearance on The Tonight Show in November 1963, and recorded three live comedy albums between 1964 and 1968. The stand-up years built the voice; Rollins and his partner Charles H. Joffe would go on to produce the films for decades.",
    ],
    media: { variant: "landscape", label: "Stand-up photograph — 1960s" },
  },
  {
    eyebrow: "1965–1976",
    heading: "Into the Movies",
    paragraphs: [
      "His first produced screenplay was What's New Pussycat? (1965). The script was heavily reworked in production — the experience he has cited as the reason he insisted on control of his own films thereafter. His first directing credit came in 1966 with What's Up, Tiger Lily?, and his first wholly original film as writer, director and star, Take the Money and Run, in 1969. That same year he gave up performing stand-up.",
      "Through the early 1970s the comedies came quickly — Bananas, Everything You Always Wanted to Know About Sex*, Sleeper, Love and Death — each written or co-written by him, most starring him.",
    ],
    media: { variant: "full", label: "On set — 1970s" },
  },
  {
    eyebrow: "1977–2004",
    heading: "New York",
    paragraphs: [
      "Annie Hall (1977) won four Academy Awards, including Best Director and Best Original Screenplay. He followed it not with another romantic comedy but with Interiors, his first drama — a pattern of refusing the obvious next step that recurs across the career. Manhattan, photographed in black and white, came in 1979.",
      "From there the rhythm was close to annual: a new film nearly every year for four decades, made in and around New York. The range ran from formal experiment (Zelig) to ensemble film (Hannah and Her Sisters, three Academy Awards) to moral drama (Crimes and Misdemeanors). In 1987 he released two complete features — Radio Days, a nostalgic ensemble comedy, and September, a chamber drama — eleven months apart.",
      "The continuity behind the films is part of the record: Gordon Willis then Carlo Di Palma behind the camera, Susan E. Morse and later Alisa Lepselter editing, Juliet Taylor casting across four decades.",
    ],
    media: { variant: "pair", label: "Film still · Behind the scenes" },
  },
  {
    eyebrow: "1966–2014",
    heading: "The Page and the Stage",
    paragraphs: [
      "The writing never stopped. Five collections of humour pieces, most first published in The New Yorker, appeared between 1971 and 2022. A memoir, Apropos of Nothing, was published in 2020, and a first novel, What's With Baum?, in 2025.",
      "For the stage: Don't Drink the Water (1966) and Play It Again, Sam (1969) were Broadway hits — the latter the production in which he first worked with Diane Keaton and Tony Roberts. The Floating Light Bulb followed in 1981, one-act plays off-Broadway in the 1990s and 2000s, and the book for Bullets Over Broadway The Musical in 2014.",
    ],
    media: { variant: "portrait", label: "Typewriter photograph" },
  },
  {
    eyebrow: "2005–2023",
    heading: "Europe",
    paragraphs: [
      "Match Point (2005) was written for New York and relocated to London for financing. It began a European period that lasted nearly two decades: four films in London, then Barcelona, Paris, Rome, the French Riviera and San Sebastián. Midnight in Paris (2011) opened the Cannes Film Festival, became his highest-grossing film, and won him a fourth Academy Award, for its screenplay.",
      "Coup de Chance (2023), made in Paris, was his fiftieth feature and his first in the French language. He was eighty-seven when it was released.",
    ],
    media: { variant: "full", label: "European location photograph" },
  },
  {
    eyebrow: "c. 1970–2020",
    heading: "Monday Nights",
    paragraphs: [
      "Alongside everything else, there was the clarinet. Allen plays New Orleans–style jazz, self-taught, and for close to fifty years he kept a Monday-night residency in New York — first at Michael's Pub, then from 1997 at the Café Carlyle — unadvertised, whenever he was not filming or touring. The band was led from 1985 by the banjoist Eddy Davis, until Davis's death in 2020.",
      "The band first toured Europe in 1996, a trip documented in the film Wild Man Blues. The residency ended in March 2020, when New York's nightlife closed.",
    ],
    media: { variant: "landscape", label: "Performance photograph — clarinet" },
  },
  {
    eyebrow: "Now",
    heading: "Continuing",
    paragraphs: [
      "The work continues. A fifty-first feature, set in Madrid, began shooting in October 2026 — his first film made in that city. He turned ninety during production.",
    ],
    media: { variant: "full", label: "Recent photograph" },
  },
];
