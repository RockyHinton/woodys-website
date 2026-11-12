import type { TimelineEvent } from "@/lib/types";

/**
 * Curated public timeline for /explore/timeline.
 *
 * Source: research/woody-allen-master-dossier/biography-timeline.md
 * (Career Timeline, ~150 events). This is a deliberate selection of
 * the events needed to communicate the arc of the career — not the
 * full research database. Facts flagged [CHECK]/[CONFLICT] in the
 * dossier are omitted or reduced to their unflagged core.
 * Key sources: [S020][S021][S022][S028][S041][S052].
 */
export const timelineEvents: TimelineEvent[] = [
  // 1930s–1950s
  {
    year: 1935,
    title: "Born Allan Stewart Konigsberg in the Bronx, New York",
    detail: "November 30. Raised in Brooklyn.",
    category: "life",
    emphasis: true,
  },
  {
    year: 1950,
    title: "Begins writing jokes, aged fifteen",
    detail: "Selling to Broadway columnists and comedians within a year.",
    category: "writing",
  },
  {
    year: 1955,
    title: "Joins the NBC Writer's Development Program, aged nineteen",
    detail: "First staff writing work in television follows the same year.",
    category: "television",
  },
  {
    year: 1956,
    title: "Writes for Caesar's Hour",
    detail:
      "In a writers' room alongside Mel Brooks, Carl Reiner, Larry Gelbart and Neil Simon.",
    category: "television",
  },

  // 1960s
  {
    year: 1960,
    title: "First Broadway credit — sketch material for From A to Z",
    category: "theatre",
  },
  {
    year: 1960,
    title: "Begins performing stand-up",
    detail:
      "At the urging of his manager Jack Rollins — the start of a 55-year professional relationship.",
    category: "career",
    emphasis: true,
  },
  {
    year: 1963,
    title: "First appearance on The Tonight Show",
    category: "career",
  },
  {
    year: 1964,
    title: "First comedy album, recorded live in Chicago",
    detail: "The first of three live albums, 1964–1968.",
    category: "music",
  },
  {
    year: 1965,
    title: "What's New Pussycat? — first produced screenplay",
    detail:
      "Its reworking in production is his stated reason for insisting on control thereafter.",
    category: "film",
    emphasis: true,
  },
  {
    year: 1966,
    title: "What's Up, Tiger Lily? — first directing credit",
    category: "film",
    emphasis: true,
    href: "/films/whats-up-tiger-lily",
  },
  {
    year: 1966,
    title: "Don't Drink the Water opens on Broadway — first play as author",
    category: "theatre",
  },
  {
    year: 1969,
    title: "Play It Again, Sam opens on Broadway",
    detail:
      "Starring Allen with Diane Keaton and Tony Roberts — the beginning of both working relationships.",
    category: "theatre",
  },
  {
    year: 1969,
    title: "Take the Money and Run",
    detail: "The first film wholly written and directed by Allen.",
    category: "film",
    emphasis: true,
    href: "/films/take-the-money-and-run",
  },
  {
    year: 1969,
    title: "Gives up performing stand-up",
    category: "career",
  },

  // 1970s
  {
    year: 1971,
    title: "Getting Even — first book",
    category: "writing",
  },
  {
    year: 1973,
    title: "Sleeper",
    detail: "The first film scored with his own jazz playing.",
    category: "film",
    href: "/films/sleeper",
  },
  {
    year: 1975,
    title: "Love and Death — first foreign shoot",
    detail: "Won a Silver Bear at the Berlin International Film Festival.",
    category: "film",
    href: "/films/love-and-death",
  },
  {
    year: 1977,
    title: "Annie Hall",
    detail:
      "Four Academy Awards — Best Picture, Best Director, Best Actress and Best Original Screenplay.",
    category: "film",
    emphasis: true,
    href: "/films/annie-hall",
  },
  {
    year: 1978,
    title: "Interiors — first drama",
    detail: "A deliberate refusal of the obvious follow-up to Annie Hall.",
    category: "film",
    href: "/films/interiors",
  },
  {
    year: 1979,
    title: "Manhattan",
    detail: "His first black-and-white film.",
    category: "film",
    emphasis: true,
    href: "/films/manhattan",
  },

  // 1980s
  {
    year: 1980,
    title: "Side Effects published",
    detail:
      "Contains “The Kugelmass Episode”, the antecedent of The Purple Rose of Cairo.",
    category: "writing",
  },
  {
    year: 1981,
    title: "The Floating Light Bulb opens at Lincoln Center",
    category: "theatre",
  },
  {
    year: 1982,
    title: "A Midsummer Night's Sex Comedy",
    detail: "The first of thirteen films with Mia Farrow, 1982–1992.",
    category: "film",
    href: "/films/a-midsummer-nights-sex-comedy",
  },
  {
    year: 1983,
    title: "Zelig",
    detail: "The newsreel-compositing experiment.",
    category: "film",
    href: "/films/zelig",
  },
  {
    year: 1985,
    title: "The Purple Rose of Cairo",
    detail: "Gordon Willis's eighth and last film for Allen.",
    category: "film",
    href: "/films/the-purple-rose-of-cairo",
  },
  {
    year: 1985,
    title: "Eddy Davis joins the Monday-night jazz residency",
    detail: "He would lead the band for thirty-five years.",
    category: "music",
  },
  {
    year: 1986,
    title: "Hannah and Her Sisters",
    detail: "Three Academy Awards.",
    category: "film",
    emphasis: true,
    href: "/films/hannah-and-her-sisters",
  },
  {
    year: 1987,
    title: "Two features in one year",
    detail:
      "Radio Days, a nostalgic ensemble comedy, and September, a chamber drama — eleven months apart.",
    category: "film",
  },
  {
    year: 1989,
    title: "Crimes and Misdemeanors",
    detail:
      "Also this year: the segment “Oedipus Wrecks” in New York Stories.",
    category: "film",
    href: "/films/crimes-and-misdemeanors",
  },

  // 1990s
  {
    year: 1992,
    title: "Husbands and Wives",
    detail: "The last of the thirteen films with Mia Farrow.",
    category: "film",
    href: "/films/husbands-and-wives",
  },
  {
    year: 1992,
    title: "Annie Hall selected for the National Film Registry",
    category: "award",
  },
  {
    year: 1993,
    title: "Manhattan Murder Mystery",
    detail:
      "Grown from a 1976 Annie Hall draft; Diane Keaton's return after fourteen years.",
    category: "film",
    href: "/films/manhattan-murder-mystery",
  },
  {
    year: 1994,
    title: "Bullets Over Broadway",
    detail: "Seven Academy Award nominations — joint-highest of any Allen film.",
    category: "film",
    href: "/films/bullets-over-broadway",
  },
  {
    year: 1995,
    title: "Honorary Golden Lion, Venice International Film Festival",
    detail: "His first major career honour.",
    category: "award",
  },
  {
    year: 1996,
    title: "Everyone Says I Love You — his only musical",
    category: "film",
    href: "/films/everyone-says-i-love-you",
  },
  {
    year: 1996,
    title: "First European tour by the jazz band",
    detail: "Documented in the film Wild Man Blues.",
    category: "music",
  },
  {
    year: 1997,
    title: "BAFTA Fellowship",
    detail:
      "The same year, the Monday-night residency moves to the Café Carlyle.",
    category: "award",
  },

  // 2000s
  {
    year: 2001,
    title: "The Curse of the Jade Scorpion",
    detail: "The first film produced under Gravier Productions.",
    category: "film",
    href: "/films/the-curse-of-the-jade-scorpion",
  },
  {
    year: 2002,
    title: "Honorary Palme d'Or and Prince of Asturias Award",
    detail: "The most decorated single year of the career.",
    category: "award",
    emphasis: true,
  },
  {
    year: 2005,
    title: "Match Point",
    detail:
      "Written for New York, relocated to London for financing — the pivot to European production.",
    category: "film",
    emphasis: true,
    href: "/films/match-point",
  },
  {
    year: 2007,
    title: "Cassandra's Dream",
    detail:
      "Philip Glass's commissioned score — the first original score on an Allen film since 1972.",
    category: "film",
    href: "/films/cassandras-dream",
  },
  {
    year: 2007,
    title: "Mere Anarchy published",
    detail: "The first humour collection in twenty-seven years.",
    category: "writing",
  },
  {
    year: 2008,
    title: "Vicky Cristina Barcelona",
    detail: "Penélope Cruz's Academy Award followed.",
    category: "film",
    href: "/films/vicky-cristina-barcelona",
  },

  // 2010s
  {
    year: 2011,
    title: "Midnight in Paris opens the Cannes Film Festival",
    detail:
      "His highest-grossing film, and a fourth Academy Award — Best Original Screenplay.",
    category: "film",
    emphasis: true,
    href: "/films/midnight-in-paris",
  },
  {
    year: 2012,
    title: "To Rome with Love",
    detail: "His last on-screen role in one of his own films to date.",
    category: "film",
    href: "/films/to-rome-with-love",
  },
  {
    year: 2013,
    title: "Blue Jasmine",
    detail: "Cate Blanchett's Academy Award for Best Actress followed.",
    category: "film",
    href: "/films/blue-jasmine",
  },
  {
    year: 2014,
    title: "Bullets Over Broadway The Musical opens on Broadway",
    detail: "His most recent theatre credit, and his only musical book.",
    category: "theatre",
  },
  {
    year: 2015,
    title: "Jack Rollins dies",
    detail:
      "The end of the longest professional relationship of the career — fifty-five years.",
    category: "career",
  },
  {
    year: 2016,
    title: "Café Society opens the Cannes Film Festival",
    detail: "His first digitally photographed film.",
    category: "film",
    href: "/films/cafe-society",
  },
  {
    year: 2016,
    title: "Crisis in Six Scenes — his only television series",
    category: "television",
  },
  {
    year: 2018,
    title: "The first calendar year since 1981 with no new film",
    category: "career",
  },

  // 2020s
  {
    year: 2020,
    title: "The Monday-night jazz residency ends",
    detail:
      "After close to fifty years, as New York's nightlife closes in March 2020.",
    category: "music",
    emphasis: true,
  },
  {
    year: 2020,
    title: "Apropos of Nothing — the memoir — published",
    category: "writing",
  },
  {
    year: 2020,
    title: "Rifkin's Festival premieres at San Sebastián",
    detail: "At the festival the film itself depicts.",
    category: "film",
    href: "/films/rifkins-festival",
  },
  {
    year: 2022,
    title: "Zero Gravity published",
    detail: "The fifth collection of humour pieces.",
    category: "writing",
  },
  {
    year: 2023,
    title: "Coup de Chance",
    detail: "His fiftieth feature, and his first in the French language.",
    category: "film",
    emphasis: true,
    href: "/films/coup-de-chance",
  },
  {
    year: 2025,
    title: "What's With Baum? — a first novel",
    category: "writing",
  },
  {
    year: 2026,
    title: "A fifty-first feature begins shooting in Madrid",
    detail: "Principal photography began in October 2026. He turned ninety during production.",
    category: "film",
    emphasis: true,
  },
];
