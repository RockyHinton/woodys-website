import type { StatisticGroup } from "@/lib/types";

/**
 * By the Numbers content (/explore/by-the-numbers).
 *
 * Source: research/woody-allen-master-dossier/statistics.md — every
 * figure below is methodologically sound there (unflagged, with its
 * inclusion rule stated). Figures the dossier marks [CHECK]/[CONFLICT]
 * or lists under "Numbers deliberately not published" are excluded:
 * no box office, no Golden Globe total, no aggregate award count.
 * Key sources: [S020][S021][S033][S041][S052], derived per statistics.md.
 */

/** One line stating the counting rule, shown on the page. */
export const statisticsMethodNote =
  "Counted from the research record behind this site. “Features” means the fifty theatrical features directed solely by Woody Allen, 1966–2023; every figure keeps its counting rule.";

export const statisticGroups: StatisticGroup[] = [
  {
    title: "The Films",
    items: [
      {
        value: "50",
        label: "Feature films directed",
        note: "Theatrical features, 1966–2023. A fifty-first entered production in Madrid in 2026.",
      },
      {
        value: "60",
        label: "Years directing",
        note: "From What's Up, Tiger Lily? (1966) to the Madrid production (2026).",
      },
      {
        value: "50 of 50",
        label: "Features he wrote",
        note: "There is no Allen-directed feature he did not write — 42 as sole writer, 8 co-written.",
      },
      {
        value: "10 + 10 + 10",
        label: "Films in the 1980s, 1990s and 2000s",
        note: "Three consecutive decades of exactly ten features — 39 features in the 40 years from 1980 to 2019.",
      },
      {
        value: "29",
        label: "Features he performs in",
        note: "27 on screen and 2 as narrator. The last on-screen role: To Rome with Love (2012).",
      },
      {
        value: "95",
        label: "Median runtime, in minutes",
        note: "19 of the 50 features run between 92 and 96 minutes — across 57 years and every genre.",
      },
    ],
  },
  {
    title: "The Places",
    items: [
      {
        value: "11",
        label: "Features shot outside the United States",
        note: "Love and Death (1975) — then nothing for twenty-one years, then ten features between 2005 and 2023.",
      },
      {
        value: "7",
        label: "Countries filmed in",
        note: "The US (plus Puerto Rico), the UK, France, Spain, Italy and Hungary. Never outside North America and Europe.",
      },
      {
        value: "≈30",
        label: "Features based in New York City",
        note: "More than half the filmography. Approximate by design — the research says so.",
      },
      {
        value: "1",
        label: "Feature not in English",
        note: "Coup de Chance (2023), in French — the fiftieth film and the first in another language.",
      },
    ],
  },
  {
    title: "The Craft",
    items: [
      {
        value: "3",
        label: "Editors across 48 of the 50 features",
        note: "Ralph Rosenblum, Susan E. Morse (20 features), Alisa Lepselter (22, from 1999).",
      },
      {
        value: "8",
        label: "Films photographed by Gordon Willis",
        note: "From Annie Hall (1977) to The Purple Rose of Cairo (1985); Carlo Di Palma followed with eleven.",
      },
      {
        value: "41",
        label: "Years Juliet Taylor cast the films",
        note: "From Love and Death (1975) to Café Society (2016).",
      },
      {
        value: "13",
        label: "Films with Mia Farrow",
        note: "1982–1992, every one directed by Allen. Diane Keaton made seven of the directed films.",
      },
      {
        value: "35",
        label: "Years without a commissioned score",
        note: "Between 1972 and 2007 — thirty-two consecutive features — no original orchestral score was commissioned; the films drew on jazz and standards instead.",
      },
    ],
  },
  {
    title: "The Record",
    items: [
      {
        value: "4",
        label: "Academy Awards, from 24 nominations",
        note: "Best Director (Annie Hall) and Best Original Screenplay three times — Annie Hall, Hannah and Her Sisters, Midnight in Paris.",
      },
      {
        value: "12",
        label: "Academy Awards won by the films",
        note: "Across all categories; seven of them for acting, six of those by actresses. Dianne Wiest won twice.",
      },
      {
        value: "10",
        label: "BAFTA wins",
        note: "From 24 nominations — more than twice his Academy record — plus the BAFTA Fellowship in 1997.",
      },
      {
        value: "2",
        label: "Years without a new film, 1977–2019",
        note: "Only 1981 and 2018. In those forty-two years he released a film in forty.",
      },
      {
        value: "87",
        label: "His age at the release of Coup de Chance",
        note: "He was thirty when the first feature appeared, and turned ninety during the Madrid production.",
      },
    ],
  },
];
