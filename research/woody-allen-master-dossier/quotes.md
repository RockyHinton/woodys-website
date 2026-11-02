# Quotes

Supports `/explore/quotes` and the `quotations` field on film records.

**Read this first.** This file is deliberately short. It contains **two verified
quotations** and a long list of candidates that are *not* verified. That ratio is the
point, not a failure of research.

**Contents**

- [Standard applied](#standard-applied)
- [Verified Film Dialogue](#verified-film-dialogue)
- [Verified Woody Allen Statements](#verified-woody-allen-statements)
- [Pending Verification — film dialogue](#pending-verification--film-dialogue)
- [Pending Verification — Woody Allen statements](#pending-verification--woody-allen-statements)
- [Documented misattribution](#documented-misattribution)
- [Rejected sources](#rejected-sources)
- [Quote research gaps](#quote-research-gaps)

---

# Standard applied

## The rule

A quotation enters **Verified** only when, during this research pass, a source was
consulted that either

1. **is the primary source** (the film itself, a published screenplay page, the original
   interview or publication, or Allen's own official site), **or**
2. **cites the primary source precisely enough to be checked** (publication, date,
   column or page).

Everything else goes to **Pending Verification**, with the exact route to verify it
written out. Nothing is promoted on the grounds that it is famous, widely repeated, or
obviously right.

## Why so strict

Woody Allen is among the most misquoted figures in American culture. Most circulating
"Woody Allen quotes" trace to aggregator sites with no citation, or to paraphrases that
have drifted over decades of repetition. The *documented* case below — "80 percent of
success is showing up" — shows the pattern: the maxim was circulating and being attributed
to Allen **by 1982**, in several different percentages and phrasings, and only in **1989**
did Allen himself put on record what he had actually said [S025][S026].

Publishing an unverified quotation on an official site is worse than publishing nothing:
it launders the error into the primary record.

## Consequence for film dialogue

**No film dialogue is verified in this dossier.** The verification route exists and is
practical — Allen's screenplays were published — but the volumes were identified by title
only in this pass and no page was inspected. Until that is done, film dialogue stays in
Pending.

## What the website should do in the meantime

- The `Quotation` type in `lib/types.ts` is optional on every film record. **Ship film
  pages with no `quotations` array** rather than with unverified lines.
- `/explore/quotes` can launch with the two verified statements and the misattribution
  note below, which is itself genuinely interesting content, and grow as verification
  proceeds.
- If the editorial decision is taken to publish well-known lines before verification,
  that is a choice to be made explicitly and recorded — not something this dossier
  licenses.

---

# Verified Film Dialogue

**None.**

No line of dialogue from any Woody Allen film met the standard above in this research
pass. See [Pending Verification — film dialogue](#pending-verification--film-dialogue) and
gap **G-QUOTE-01**.

---

# Verified Woody Allen Statements

Two.

---

### 1.

> **QUOTE:** "If you're not failing every now and again, it's a sign you're not doing
> anything very innovative."
>
> **SOURCE:** Woody Allen
> **PUBLICATION / INTERVIEW / BOOK:** **woodyallen.com — official Biography page**
> **DATE:** Retrieved **2026-11-02**. Original date of utterance **not established**
> `[UNVERIFIED]` — the official site presents it without attribution to a specific
> interview
> **CONTEXT:** Featured as the pull-quote on Allen's own official biography page, beside
> text describing a career of "more than six decades" and "more than 45 feature films"
> **SOURCE ID:** [S004]
> **CONFIDENCE:** **HIGH for the attribution; the original occasion is unknown**

**Why this one is usable.** It is published by Gravier Productions on Allen's own site —
first-party, and the highest-ranked source class in this dossier's hierarchy. Whatever its
origin, Allen's own organisation has chosen to present it as his.

**Caveat to carry forward.** This is a *first-party publication* of the quote, not a
*first-party record of when he said it*. If the website gives quotations a date, this one
has none. Cite it as "woodyallen.com", not as an interview.

---

### 2.

> **QUOTE:** "…I did say that 80 percent of success is showing up."
>
> **SOURCE:** Woody Allen, in a letter
> **PUBLICATION / INTERVIEW / BOOK:** *The New York Times*, "On Language" column by
> **William Safire**
> **DATE:** **1989-08-13**
> **CONTEXT:** Safire wrote about the circulating maxim and asked Allen about it; Allen
> replied by letter confirming he had said it. The fuller reported wording is "In the midst
> of the conversation, as I'm now trying to recall, I did say that 80 percent of success is
> showing up" `[CHECK]` on the exact phrasing of the surrounding clause
> **SOURCE ID:** [S025], [S026]
> **CONFIDENCE:** **MEDIUM–HIGH.** The citation is precise — named publication, named
> columnist, exact date — and two independent sources give it. **The original column was
> not inspected in this pass**, so the surrounding wording is flagged

**Why this one is usable.** It is the rare case where the attribution question was put to
Allen directly and answered on the record, in a dated, named, checkable publication. It is
also the only quotation in this file with a **date**, which makes it the only one that can
feed `/explore/on-this-day` — see [`biography-timeline.md`](biography-timeline.md),
**08-13**.

**Important qualification for publication.** Allen confirmed saying it; he did not claim to
have coined it. Quote Investigator records the maxim circulating and being attributed to
him **by 1982**, in variant percentages and phrasings [S025]. A 1977 *New York Times*
interview by Susan Braudy contains a related line, which one source attributes to Allen and
another to **Marshall Brickman** `[CONFLICT]` [S025]. **Present this as "Allen confirmed
in 1989 that he had said it", never as "Woody Allen coined".**

---

# Pending Verification — film dialogue

These are candidate lines, **not verified quotations**. They are recorded so that
verification can be completed efficiently, and so that nobody has to reconstruct the
shortlist from scratch.

**For every entry below the wording is `[CHECK]`.** Several are lines this researcher
believes to be close to exact; believing is not verifying, and none should be published as
written.

## Verification routes available

| Route | Covers | Status |
| --- | --- | --- |
| ***Four Films of Woody Allen*** (Random House, 1982 `[CHECK]`) — published screenplays | ***Annie Hall*; *Interiors*; *Manhattan*; *Stardust Memories*** | **The single highest-value verification route.** Volume identified; no page inspected. [S021] |
| ***Three Films of Woody Allen*** (Random House, 1987 `[CHECK]`) — published screenplays | ***Zelig*; *Broadway Danny Rose*; *The Purple Rose of Cairo*** `[CHECK]` on contents | Volume identified; no page inspected. [S021] |
| ***Hannah and Her Sisters*** (Random House, 1987 `[CHECK]`) — published screenplay | ***Hannah and Her Sisters*** | Volume identified; no page inspected. [S021] |
| ***Without Feathers*** (1975) — printed text of the one-act play *Death* | ***Shadows and Fog*** (1991), adapted from it | In print; the play text is a legitimate route to the film's lines **only where the film retains them** — which must itself be checked [S023] |
| **The films themselves** | All 50 | Definitive, and the correct route for anything not covered above. Requires viewing with the relevant scene timecoded |
| **woodyallen.com film pages** | *Annie Hall* (≈275 screenplay scans); *Midnight in Paris* (section mislabelled) | **First-party and already digitised** — the *Annie Hall* screenplay scans are an immediate, first-party verification route for that film's dialogue, if they can be read at sufficient resolution [S005] |

## Candidate queue

| # | FILM | YEAR | CHARACTER | ACTOR | SCENE / CONTEXT | THE LINE (unverified) | ROUTE | STATUS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Q1 | *Annie Hall* | 1977 | Alvy Singer | Woody Allen | The opening monologue, to camera — the Groucho Marx joke about club membership | Alvy quotes, as his attitude to life, the line about never wanting to belong to any club that would have someone like him as a member `[CHECK]` on exact wording | *Four Films* [S021]; or the official site's screenplay scans [S005] | **Highest priority** — the film's thesis statement, and the route is first-party |
| Q2 | *Annie Hall* | 1977 | Alvy Singer | Woody Allen | The closing monologue — the joke about the man whose brother thinks he is a chicken, offered as an account of why people persist in relationships | Wording not recorded; the structure is documented `[CHECK]` | *Four Films* [S021] | High |
| Q3 | *Annie Hall* | 1977 | Annie Hall | Diane Keaton | Her verbal tic throughout | "La-di-da" / "La-dee-da" — **the spelling is itself unresolved** and is exactly the kind of thing the published screenplay settles | *Four Films* [S021] | High — short, famous, and a spelling question |
| Q4 | *Manhattan* | 1979 | Isaac Davis | Woody Allen | Dictating into a tape recorder, listing the things that make life worth living — Groucho Marx, Willie Mays, the second movement of the Jupiter Symphony, Louis Armstrong's recording of "Potato Head Blues", Swedish movies, *Sentimental Education*, Marlon Brando, Frank Sinatra, Cézanne's apples and pears, the crabs at Sam Wo's, and Tracy's face | **A list, not a single line.** The items are widely reported; their order and exact phrasing are `[CHECK]`. **Note the jazz content — Armstrong's "Potato Head Blues" is named** | *Four Films* [S021] | **Highest priority** — the most quotable passage in the filmography, and it belongs in the Music section as well as Quotes |
| Q5 | *Manhattan* | 1979 | Isaac Davis | Woody Allen | The opening narration, attempting and rejecting several first lines for a book about New York | Wording not recorded `[CHECK]` | *Four Films* [S021] | Medium–high |
| Q6 | *Hannah and Her Sisters* | 1986 | Mickey Sachs | Woody Allen | After the medical all-clear and the failed search for faith, on the resilience of feeling | A line to the effect that the heart is a resilient little muscle `[CHECK]` on exact wording | *Hannah and Her Sisters* screenplay [S021] | High |
| Q7 | *Crimes and Misdemeanors* | 1989 | Lester | Alan Alda | Lester explaining his theory of comedy to Cliff's documentary camera | The formula that comedy is tragedy plus time `[CHECK]`. **Caution:** this formulation predates the film and is attributed to several comedians; the film may be quoting rather than originating it. Verify both the film's wording *and* whether the film presents it as Lester's own | The film; or a screenplay publication if one exists `[UNVERIFIED]` | High — and the provenance question makes it interesting |
| Q8 | *Crimes and Misdemeanors* | 1989 | Professor Louis Levy | Martin S. Bergmann | The closing voiceover, on love, moral choice and the universe's indifference | A substantial passage, not a line. Wording not recorded `[CHECK]` | The film | Medium–high — the film's summation |
| Q9 | *Love and Death* | 1975 | Boris Grushenko | Woody Allen | Closing to camera, on suffering and love | A formulation to the effect that to love is to suffer, and that to avoid suffering one must not love — but then one suffers from not loving `[CHECK]` on wording | The film | Medium |
| Q10 | *Midnight in Paris* | 2011 | Paul Bates | Michael Sheen | In the Versailles gardens, dismissing Gil's nostalgia | The "Golden Age thinking" diagnosis — that nostalgia is a denial of the painful present `[CHECK]` on wording | The film | **High** — it is the film's argument, spoken by its antagonist |
| Q11 | *Midnight in Paris* | 2011 | Gil Pender | Owen Wilson | The closing reflection, having decided to stay in the present | Wording not recorded `[CHECK]` | The film | Medium–high |
| Q12 | *Match Point* | 2005 | Chris Wilton | Jonathan Rhys Meyers | The opening narration over a tennis ball on the net, on luck | The passage about the ball hitting the top of the net and the role of luck in whether it falls forward or back `[CHECK]` on wording | The film | **High** — the thesis of the film and of the *Crimes*/*Match Point*/*Coup de Chance* sequence |
| Q13 | *Broadway Danny Rose* | 1984 | Danny Rose | Woody Allen | His professional creed, repeated to clients | Reported as a three-word formulation about star, acceptance and size `[CHECK]` — wording not recorded with confidence | *Three Films* [S021] `[CHECK]` on contents | Medium |
| Q14 | *Sleeper* | 1973 | Miles Monroe | Woody Allen | On waking two hundred years later, asked what he believes in | Wording not recorded `[CHECK]` | The film | Low–medium |
| Q15 | *Bananas* | 1971 | — | — | Allen's reported answer to why the film is called *Bananas*: that there are no bananas in it | **Not dialogue** — a remark about the film. Belongs in the statements queue if verified; recorded here because it is usually presented as a film quote `[CHECK]` | The original interview, unidentified | Low — provenance unknown |
| Q16 | *Deconstructing Harry* | 1997 | Harry Block | Woody Allen | On the relation between his writing and the people in his life | Wording not recorded `[CHECK]` | The film | Low–medium |
| Q17 | *Rifkin's Festival* | 2020 | Mort Rifkin | Wallace Shawn | On the European art films he reveres and his own inability to make anything | Wording not recorded `[CHECK]` | The film | Low–medium — but a good late-career counterpart to Q4 |

**Note on Q4 and Q10.** These two are the strongest candidates for `/explore/quotes` if the
section is to launch with film material, because each is the explicit thesis of its film
and each is a passage rather than a one-liner — which makes verification against a single
source straightforward and misquotation harder to miss.

---

# Pending Verification — Woody Allen statements

## Verification routes available

| Route | Why it matters | Status |
| --- | --- | --- |
| ***Apropos of Nothing*** (Arcade Publishing, 2020) | **Allen's own autobiography** — the primary source for his account of his life, and therefore for biographical statements | Publication confirmed [S027]; **no page inspected** |
| ***Woody Allen on Woody Allen: In Conversation with Stig Björkman*** (Grove Press, 2005 edition) | **The fullest Allen-on-Allen source**, and **listed on the official site's own book list** [S003] — so first-party endorsed | Publication confirmed [S023]; **no page inspected** |
| ***Woody Allen: Interviews*** (University Press of Mississippi, 2006) | A scholarly collection of primary interviews, with original publication data | Publication confirmed [S023]; not inspected |
| **Studs Terkel radio interview, WFMT Chicago, 1965** — listed under *Audio* on the official site [S003] | **A 1965 primary interview, first-party listed.** Potentially the earliest substantial recorded Allen interview available | Existence confirmed [S003]; **content not accessed** |
| ***Woody Allen: A Documentary*** (PBS *American Masters*, 2011) | Extensive filmed interview covering the whole career | Existence confirmed [S003]; not viewed |
| **woodyallen.com — *Coup de Chance* page** [S008] | **Carries quoted remarks from Allen within its "ABOUT THE PRODUCTION" text, plus cast interviews.** First-party, current, and the easiest high-quality source of new verified quotations in the dossier | **Identified but not transcribed** — see gap **G-QUOTE-02** |

## Candidate queue

| # | SUBJECT | WHAT IS ATTRIBUTED | ROUTE | STATUS |
| --- | --- | --- | --- | --- |
| S1 | **The Madrid film, 2026** | "This will be my third time filming there and my first opportunity to make a film in Madrid, a city I have always loved." | Reported by *Variety* [S037] `[CHECK]`. **This is a dated, current, trade-reported statement** and the easiest near-term addition to the verified set — confirm against the *Variety* piece or the press conference recording | **Highest priority** — current and datable (c. 2026-10-01) |
| S2 | **The Madrid film, 2026** | The film described as "a comedy with romance, intrigue and infidelity" in a diplomatic setting | *Variety* [S037] `[CHECK]` | High — current |
| S3 | **The Madrid film, 2026** | "It has to live up to my expectations, but I'll do my best!" — reported from the Madrid press conference | *Showbiz411*, which published video of the press conference [S038] `[CHECK]`. A recording exists, which makes this verifiable | High |
| S4 | ***Coup de Chance*** | Remarks on the Paris setting, cinematography, production design, costume and soundtrack | **woodyallen.com production notes [S008]** — first-party | **High** — the single best unexploited quotation source in the dossier |
| S5 | ***The Curse of the Jade Scorpion*** | That it is perhaps his worst film, and that he felt he let the cast down by starring in it | Reference sources report this `[CHECK]`; the original interview is unidentified. Likely in Björkman or a trade interview | Medium–high — an unusually candid and editorially valuable statement |
| S6 | ***Crisis in Six Scenes*** | "It was a catastrophic mistake" — reportedly said at the Cannes Film Festival, 2015 | Reference sources `[CHECK]`; the original press conference is datable and findable | Medium–high |
| S7 | ***What's Up, Tiger Lily?*** | Distancing himself from the film, in a 2020 interview | Reference sources date this to 2020 `[CHECK]`; the interview is unidentified | Medium |
| S8 | ***Sleeper*** | That the film was a tribute to Bob Hope, said in a 2007 interview | Reference sources `[CHECK]`; interview unidentified | Medium |
| S9 | ***Interiors*** | That he should have introduced Pearl's character earlier, said in 1982 | Reference sources `[CHECK]` | Medium |
| S10 | ***September*** | That he would like to remake it again | Reference sources `[CHECK]` | Medium |
| S11 | ***To Rome with Love*** | That he dislikes the title | Reference sources `[CHECK]` | Low–medium |
| S12 | ***Bananas*** | That the film has no blood, even in executions, to keep the comic register light | Reference sources `[CHECK]` | Low–medium |
| S13 | ***Manhattan*** | That he asked United Artists not to release the film | Reference sources `[CHECK]`. **A substantial claim about a major film** — do not publish without a primary source | Medium |
| S14 | ***Manhattan*** | That the film is a combination of *Annie Hall* and *Interiors* | Reference sources `[CHECK]` | Low–medium |
| S15 | ***Take the Money and Run*** | That it was the first picture he fully wrote and directed himself | Reference sources `[CHECK]` | Low–medium |
| S16 | **Michael's Pub / the jazz residency** | Any first-person account of the residency, the band, or the New Orleans idiom | **No verified first-person jazz statement exists in this dossier** — a notable gap for the Music section. Routes: *Wild Man Blues* (1997), in which he speaks on camera at length; *Apropos of Nothing* | **High for the Music section** — see gap G-QUOTE-03 |

---

# Documented misattribution

Genuinely useful editorial content, and a demonstration of the site's standards.

### "80 percent of success is showing up" — the documented case

| Stage | What happened | Source |
| --- | --- | --- |
| **1977** | A *New York Times* interview by Susan Braudy contains a related line. One source presents it as Allen's words; another attributes it to **Marshall Brickman** `[CONFLICT]` | [S025] |
| **by 1982** | The maxim is already circulating and being attributed to Allen, in **variant percentages and phrasings** — "showing up is 80 percent of life", and others | [S025] |
| **1989-08-13** | **William Safire** asks Allen about it in his *New York Times* "On Language" column; **Allen replies by letter confirming he said it** | [S025], [S026] |
| **since** | The line circulates in at least three different percentages, usually with no source | [S025] |

**The lesson, and it applies to every quotation on the site:** a line can be
simultaneously *genuinely Allen's* and *endlessly misquoted*. Verification has to settle
the wording, not merely the attribution.

### Other widely circulated attributions not verified here

The following are frequently attributed to Allen and were **not** verified in this pass.
They are listed so that nobody adds them casually. Each needs a primary source or should
be left out.

- The remark about not wanting to achieve immortality through his work, but by not dying.
  **Searched for in this pass and not confirmed** — no source found `[UNVERIFIED]`
  [S025].
- Remarks about God, the afterlife, and being an atheist with a backup plan.
- Remarks about Los Angeles and its cultural life — frequently attributed, often in forms
  that conflate dialogue from *Annie Hall* with interview statements. **Be especially
  careful here:** Alvy Singer's lines about Los Angeles are *a character's*, not Allen's.
- Remarks on marriage, death, sex and psychoanalysis of the aphoristic kind that fill
  aggregator sites.

**The character/author confusion is the most common error in circulating Allen quotes.**
Lines spoken by Alvy Singer, Isaac Davis, Mickey Sachs, Harry Block and Boris Yellnikoff
are routinely presented as Allen's own opinions. The website's quotations model should make
the distinction structurally visible: `Quotation.attribution` should carry the character
name for dialogue and "Woody Allen" only for off-screen statements — which is how
`lib/types.ts` already describes the field.

---

# Rejected sources

Per the research brief, the following were **not used** for any quotation in this file, and
should not be used later:

- Quotation aggregation websites (goodreads quote lists, brainyquote-style sites,
  fixquotes and similar).
- Fan wikis.
- Unsourced blogs.
- Scraped content farms and AI-generated quote pages.
- Trivia sites.

**Wikiquote** was consulted — but only for its **citations**, not for its text. The
Safire entry was usable precisely because it carries a publication, a columnist and a
date that can be checked [S026]. Where Wikiquote offers a quotation without such a
citation, it was treated as unsourced.

One search result in this pass was an automated quote-verification tool that returned a
confidence percentage for an attribution [S025]. **Tool output of that kind is not
evidence** and was disregarded except as a pointer to the underlying 1989 citation.

---

# Quote research gaps

Carried into [`sources.md`](sources.md) §*Research Gaps* under QUOTES.

| ID | Gap | Priority |
| --- | --- | --- |
| **G-QUOTE-01** | **No film dialogue is verified.** Confirm the publication data of *Four Films of Woody Allen*, *Three Films of Woody Allen* and the *Hannah and Her Sisters* screenplay, then verify candidates Q1–Q6 against pages. **Alternatively — and better — read the ≈275 screenplay scans already published first-party on woodyallen.com's *Annie Hall* page [S005]**, which would verify Q1–Q3 from a first-party source without acquiring a book | **Highest** |
| **G-QUOTE-02** | **The official *Coup de Chance* page [S008] contains quoted Allen and crew remarks that were identified but not transcribed.** This is the easiest route to several properly sourced, first-party, current quotations | **Highest** — first-party and already online |
| **G-QUOTE-03** | **No verified first-person statement about jazz or the residency**, which leaves the Music section without a single usable Allen quotation. Routes: *Wild Man Blues* (1997); the 1965 Studs Terkel interview listed first-party [S003]; *Apropos of Nothing* | High |
| **G-QUOTE-04** | **The 2026 Madrid statements (S1–S3)** are current, dated and trade-reported, and a press-conference video exists. Verifying them would give the News section quotable, dated first-party material immediately | High |
| **G-QUOTE-05** | Confirm or discard the "immortality through not dying" attribution — searched and not found in this pass | Medium |
| **G-QUOTE-06** | Resolve the 1977 Braudy interview attribution: Allen or Marshall Brickman `[CONFLICT]` | Medium |
| **G-QUOTE-07** | Establish the original occasion of the official site's biography quote (Verified #1), which currently has no date | Medium |
| **G-QUOTE-08** | Inspect the original Safire column of 1989-08-13 to fix the exact surrounding wording of Verified #2 | Low–medium |

---

*End of `quotes.md`. A smaller verified collection is worth more than a large plausible
one; this file is built on that principle and should stay that way.*
