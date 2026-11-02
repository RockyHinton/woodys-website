# Locations

Map-ready location research for `/explore/map`, and the location blocks on film pages.

**Contents**

- [Location Research Method](#location-research-method)
- [New York](#new-york)
- [United States Outside New York](#united-states-outside-new-york)
- [Europe](#europe)
- [Rest of World](#rest-of-world)
- [Story-Setting-Only Register](#story-setting-only-register)
- [Location Research Gaps](#location-research-gaps)

---

# Location Research Method

## 1. The distinction this file exists to enforce

> **STORY SETTING** — where the fiction says the scene takes place.
>
> **CONFIRMED FILMING LOCATION** — where the camera physically was.

**These are never assumed to be the same.** In Allen's work they frequently are not, and
the divergence is sometimes the most interesting fact about a film:

| Film | Story setting | Actually shot |
| --- | --- | --- |
| *Shadows and Fog* (1991) | An unnamed European city, 1920s | A 26,000 sq ft set at **Kaufman Astoria Studios, Queens, New York** |
| *Sweet and Lowdown* (1999) | Chicago and California, 1930s | **Entirely New York and New Jersey** |
| *Magic in the Moonlight* (2014) | Berlin, then the Côte d'Azur | Berlin scenes shot at the **Opéra de Nice and Studios Riviera, Nice** |
| *Love and Death* (1975) | Napoleonic Russia | **France and Hungary** |
| *Bananas* (1971) | "San Marcos", Latin America | **Puerto Rico** |
| *Manhattan* (1979) | Manhattan throughout | Mostly Manhattan — **but with a New Jersey unit at Englewood Cliffs** confirmed by the AFI Catalog, and the planetarium partly a built set |
| *Midnight in Paris* (2011) | Includes the Moulin Rouge interior | The real Moulin Rouge exterior only; interiors shot elsewhere `[CHECK]` |

Every record below carries an explicit **TYPE** field:
`Filming location` · `Story setting` · `Both`.

## 2. Coordinates

**No coordinates are recorded in this dossier.** This is deliberate.

The brief permits coordinates "if reliably available from authoritative geographic data".
They were not obtained in this research pass, and inventing or eyeballing them would
produce map pins that are confidently wrong — the worst possible failure mode for a map.

**Instruction for the development agent:** geocode at content-authoring time from a single
authoritative geocoding source, store the result in the `FilmingLocation.coordinates`
field in `/content`, and record which source produced it. Addresses in this file are
specific enough to geocode; where only a neighbourhood or city is known, the record says
so and should not be geocoded to a false precision.

Logged as gap **G-LOC-00**.

## 3. Confidence ratings

| Rating | Meaning |
| --- | --- |
| **HIGH** | Institutional source (AFI Catalog, government dataset), or two or more independent sources agreeing on a specific address |
| **MEDIUM–HIGH** | One careful dedicated location source giving a specific address, consistent with other evidence |
| **MEDIUM** | One source, specific address, no corroboration |
| **LOW–MEDIUM** | One source, imprecise, or an enthusiast source only |
| **LOW** | Circulating without clear attribution — **do not publish** |

## 4. Source profile for this file

Location evidence is weaker than credits evidence across the board, because production
location lists are rarely published. The sources actually used are:

- **[S009] AFI Catalog** — institutional. Used for *Manhattan*. The only authoritative
  location source consulted for any film.
- **[S045] San Francisco open city film-locations dataset** — a government open-data
  source. Used for *Blue Jasmine*. The only such dataset found.
- **[S030] movie-locations.com** — a long-running dedicated location site giving specific
  addresses and noting closures and demolitions. The backbone of this file. Careful but
  not institutional.
- **[S031] onthesetofnewyork.com** and **[S032] enthusiast guides** — used sparingly,
  flagged, and rated LOW–MEDIUM at best.
- **[S046] Spain Film Commission / spainscreentourism.com** — a film-commission source;
  used for *Rifkin's Festival*.
- **[S020] reference encyclopedias** — used where they record a location in article text
  rather than only in a category tag. **Category tags such as "Films shot in New Jersey"
  are not treated as location evidence** in this file.

## 5. What makes a good map pin

Prioritised in the records below:

1. **A specific, geocodable address.**
2. **A memorable scene** — not just "exteriors".
3. **Something to say about the present state of the place** — still open, closed,
   demolished, landmarked. Allen's New York films are now substantially a record of a
   vanished city, and that is the map's strongest editorial asset.
4. **Clustering** — several pins within walking distance make a route; isolated pins do
   not.

---

# New York

New York State and New York City. By far the densest region: roughly 38 of the 50
features used New York as their principal production base.

## Manhattan — Upper East Side

| LOCATION | ADDRESS | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Elaine's** | 1703 Second Avenue, between E 88th and E 89th Streets | *Manhattan* (1979); *Manhattan Murder Mystery* (1993); *Celebrity* (1998) | Both | *Manhattan*: the opening foursome. *MMM*: Carol first voices her suspicions. *Celebrity*: the book launch | **Three films across nineteen years at one address.** Closed in 2011. The single best "vanished New York" pin available | [S030] | MEDIUM–HIGH |
| **Café Carlyle**, Carlyle Hotel | 35 East 76th Street at Madison Avenue | *Hannah and Her Sisters* (1986) | Both | Mickey takes Holly to hear **Bobby Short** | **The best cross-domain pin in the dossier:** Allen's own jazz band played this room every Monday from 1997 — eleven years after he filmed in it. Also the subject of the documentary *Always at the Carlyle* (2018) | [S030], [S041] | MEDIUM–HIGH |
| **Beekman Theatre** | 1254 Second Avenue at E 65th Street | *Annie Hall* (1977) | Filming location | The cinema queue, where Alvy is recognised | The set-up for the Marshall McLuhan gag. **Closed 2005.** Corroborated by two independent sources | [S030] | **HIGH** |
| Manhattan House | 200 East 66th Street, between Second and Third Avenues | *Annie Hall* (1977) | Filming location | Alvy confides his paranoia to Rob in the street | A designated landmark, still standing — a rare unchanged *Annie Hall* site | [S030] | MEDIUM |
| **The Lipton apartment** | 200 East 78th Street, between Second and Third Avenues | *Manhattan Murder Mystery* (1993) | Both | Larry and Carol's building; the whole plot turns on its neighbours | The film's central location | [S020] | MEDIUM–HIGH |
| The St Regis — including the King Cole Room | 2 East 55th Street | *Radio Days* (1987); *Hannah and Her Sisters* (1986) | Filming location | *Radio Days*: Sally works as a cigarette girl in the nightclub. *Hannah*: Elliot and Lee's affair | Two films, one hotel; the King Cole Room is intact and visitable | [S030] | MEDIUM–HIGH |
| Guggenheim Museum | 1071 Fifth Avenue at E 89th Street | *Manhattan* (1979) | Both | Isaac and Mary's first meeting | Unchanged, globally recognisable | [S030] | MEDIUM–HIGH |
| Whitney Museum (Breuer Building) | 945 Madison Avenue at E 75th Street | *Manhattan* (1979) | Both | Isaac's gallery visit with Mary | The Whitney has since left the building — a changed-use pin | [S030] | MEDIUM |
| Bloomingdale's | 1000 Third Avenue at E 59th Street | *Manhattan* (1979) | Both | Mary and Yale meet at the perfume counter | Still operating | [S030] | MEDIUM |
| Dalton School | 61 East 91st Street | *Manhattan* (1979) | Both | Tracy's school | Still operating | [S030] | MEDIUM |
| Mount Vernon Hotel Museum (Abigail Adams stone house) | 421 East 61st Street, at York and First Avenues | *Hannah and Her Sisters* (1986) | Both | David's architecture tour | One of five stops on an architecture walk written into the script — see *Walkable route 1* below | [S030] | MEDIUM–HIGH |
| **The Stanhope** | 995 Fifth Avenue at E 81st Street | *Celebrity* (1998); referenced in *Manhattan* (1979) | Filming location | *Celebrity*: Darrow trashes his hotel room. The hotel's ground-floor sidewalk café, since demolished, is the setting of a *Manhattan* scene | **A self-referential pin** — one site, two films, with the film itself noting the connection | [S030] | MEDIUM |
| Café des Artistes (now The Leopard at des Artistes) | 1 West 67th Street | *Manhattan Murder Mystery* (1993) | Filming location | Marcia Fox gives Larry a poker lesson | Renamed but operating | [S030] | MEDIUM–HIGH |
| The Cherokee | 517 East 77th Street at York Avenue | *Celebrity* (1998) | Filming location | The supermodel's apartment; Lee parks his Aston Martin | Landmarked tenement complex | [S030] | MEDIUM |
| Mauboussin | 714 Madison Avenue at E 63rd Street | *Blue Jasmine* (2013) | Filming location | Jasmine leaves the jeweller | Part of the film's New York flashback set | [S030] | MEDIUM |
| Mount Sinai Hospital | E 98th–101st Streets, between Fifth and Madison | *Hannah and Her Sisters* (1986) | Both | Mickey dances out after the all-clear | One of the film's best-remembered beats | [S030] | MEDIUM |
| Source Restaurant site `[CHECK]` | 36 East 68th Street `[CONFLICT]` | *Annie Hall* (1977) | Filming location | The break-up lunch | **Conflicts with the West Hollywood "Source Restaurant" record** — see [`sources.md`](sources.md) | [S031] | LOW |
| East 68th Street, south side between Park and Madison | exterior shown as 40 68th Street | *Annie Hall* (1977) | Filming location | Annie's apartment exterior | The exact building number is unresolved | [S030] | LOW–MEDIUM |

## Manhattan — Midtown and the Theatre District

| LOCATION | ADDRESS | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Carnegie Delicatessen** | 854 Seventh Avenue, near W 54th Street | *Broadway Danny Rose* (1984) | Both | The entire framing story: veteran comedians telling the Danny Rose story | **Closed 2016.** The film's defining location, and the comedians in it are playing themselves | [S030] | **HIGH** |
| **Brill Building** | 1619 Broadway, between W 49th and W 50th | *Broadway Danny Rose* (1984); *Radio Days* (1987) | Both | *BDR*: Danny signs his clients. *Radio Days*: used as a landmark | A real music-business building used as a music-business location in two films | [S030] | MEDIUM–HIGH |
| **Ziegfeld Theatre** | 141 West 54th Street at Sixth Avenue | *Manhattan* (1979) — **premiere venue**; *Celebrity* (1998) — filming location | Both | *Celebrity*: the premiere of *The Liquidator*, where Lee and Robin meet for the last time | **Closed 2016.** Uniquely, it is both an Allen *premiere venue* (1979-04-18) and an Allen *filming location* (1998) | [S009], [S030] | MEDIUM–HIGH |
| Belasco Theatre | 111 West 44th Street | *Bullets Over Broadway* (1994) | Both | The theatre where David Shayne's play is staged | A working Broadway house playing a 1928 Broadway house | [S030] | MEDIUM–HIGH |
| Booth Theatre | 222 West 45th Street | *Hannah and Her Sisters* (1986) | Filming location | Holly meets April after an audition | — | [S030] | MEDIUM |
| Edison Hotel lobby | 228 West 47th Street | *Bullets Over Broadway* (1994) | Filming location | Nick Valenti's hotel lobby | — | [S030] | MEDIUM–HIGH |
| New Yorker Hotel ballroom | 481 Eighth Avenue at W 34th Street | *Bullets Over Broadway* (1994); *Radio Days* (1987) | Filming location | *BOB*: the "Three Deuces" nightclub. *Radio Days*: ballroom scenes | Two period films using the same ballroom | [S030] | MEDIUM |
| Russian Tea Room | 150 West 57th Street | *Manhattan* (1979) | Both | Isaac and his son's lunch | — | [S030] | MEDIUM |
| Rizzoli Bookstore (57th Street) | 31 West 57th Street | *Manhattan* (1979) | Both | Isaac talks with Yale | **The 57th Street store has been demolished** | [S030] | MEDIUM |
| Harry Winston | 718 Fifth Avenue at W 56th Street | *Everyone Says I Love You* (1996) | Both | The jewellery store | — | [S030] | MEDIUM |
| Fendi | 677 Fifth Avenue at E 53rd Street | *Blue Jasmine* (2013) | Filming location | Handbags; Ginger uncomfortable | — | [S030] | MEDIUM |
| GE Building, Rockefeller Center | 30 Rockefeller Plaza | *Radio Days* (1987) | Both | Biff Baxter's broadcast | The real home of network radio playing itself | [S030] | MEDIUM–HIGH |
| **Radio City Music Hall** | 1260 Sixth Avenue | *Radio Days* (1987) | Both | Joe sees *The Philadelphia Story* with Aunt Bea | One of the film's emotional high points, in a landmark that is unchanged and open | [S030] | MEDIUM–HIGH |
| Sardi's | 234 West 44th Street | *Radio Days* (1987) | Both | Sally waits outside hoping to be noticed | Still operating | [S030] | MEDIUM |
| Horn & Hardart automat | 200 East 42nd Street | *Radio Days* (1987) | Both | The automat visit | **The automat chain no longer exists** — a pure period pin | [S030] | MEDIUM |
| 21 Club | 21 West 52nd Street | *Manhattan Murder Mystery* (1993) | Both | The Liptons take their son to dinner | Closed 2020 `[CHECK]` | [S030] | MEDIUM–HIGH |
| Barbetta garden | 321 West 46th Street | *Celebrity* (1998) | Filming location | Robin's wedding | — | [S030] | MEDIUM |
| 49 East 42nd Street at Madison | — | *Celebrity* (1998) | Filming location | Tony drops Robin at her apartment | — | [S030] | MEDIUM |
| Metropolitan Life North Building | Madison Avenue, between E 24th and E 25th | *Radio Days* (1987) | Filming location | Sally is fired after the laxative commercial | — | [S030] | MEDIUM |
| New York Theater | 1514 Broadway | *Annie Hall* (1977) | Filming location | The lobby where Alvy produces Marshall McLuhan | **Gone.** The site of one of the most famous gags in American comedy | [S030] | MEDIUM |
| Seagram Building | 375 Park Avenue, between E 52nd and E 53rd | *Celebrity* (1998) | Filming location | Opening: the skywritten "HELP" | A Mies van der Rohe landmark opening a film about emptiness | [S030] | MEDIUM–HIGH |
| 5 Tudor City Place, 22nd-floor duplex | — | *Bullets Over Broadway* (1994) | Filming location | Helen Sinclair's penthouse interior | — | [S020] | MEDIUM |

## Manhattan — Upper West Side and Central Park

| LOCATION | ADDRESS | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **The Langham** | 135 Central Park West | *Hannah and Her Sisters* (1986) | **Both** | Hannah's apartment — and **Mia Farrow's actual home at the time** | **The clearest case in the dossier of story setting and filming location being identical, and of life and film overlapping.** The Thanksgiving scenes are set and shot in the same rooms | [S020], [S030] | **HIGH** |
| **Pomander Walk** | 260–266 West 95th Street, through to 94th Street | *Hannah and Her Sisters* (1986) | Both | David's stroll through the mock-Tudor village on the architecture tour | A hidden private mews, normally closed to the public — an excellent map discovery | [S030] | MEDIUM–HIGH |
| Dakota Apartments | 1 West 72nd Street at Central Park West | *Hannah and Her Sisters* (1986) | Both | Architecture tour | — | [S030] | MEDIUM–HIGH |
| **Thalia Cinema** | 2537 Broadway (site now Symphony Space) | *Annie Hall* (1977) | Filming location | Alvy bumps into Annie outside *The Sorrow and the Pity* | **Closed 1987.** A central institution of New York cinephilia, preserved only on film | [S030] | MEDIUM |
| **Metro Cinema** | 2626 Broadway at W 99th Street | *Hannah and Her Sisters* (1986) | Filming location | Mickey watches *Duck Soup* and decides life is bearable | **Closed.** The site of the film's resolution | [S030] | MEDIUM–HIGH |
| Cinema Studio | 1966 Broadway | *Manhattan* (1979) | Filming location | Isaac and Mary watch art films | **Gone** | [S030] | MEDIUM |
| Zabar's | 2245 Broadway at W 80th Street | *Manhattan* (1979) | Both | Isaac and Mary browse the gourmet food | Still operating; a New York institution | [S030] | MEDIUM |
| Lincoln Center | 10 Lincoln Center Plaza | *Manhattan* (1979); *Manhattan Murder Mystery* (1993) | Both | *Manhattan*: the opening prologue. *MMM*: the Wagner performance | Two films, twenty-four years apart | [S030] | MEDIUM–HIGH |
| Claremont Riding Academy | 175 West 89th Street | *Bullets Over Broadway* (1994) | Filming location | The stable where Cheech is questioned | **Closed** — the last public riding stable in Manhattan | [S030] | MEDIUM |
| Helen Sinclair's penthouse exterior | 110th Street at Riverside Drive | *Bullets Over Broadway* (1994) | Filming location | Penthouse exterior | — | [S030] | MEDIUM |
| Central Park Zoo | Central Park, E 64th Street | *Annie Hall* (1977) | Both | Alvy and Annie mock passers-by | Unchanged and open | [S030] | MEDIUM |
| Ladies' Pavilion | Central Park, near W 75th Street by The Lake | *Celebrity* (1998) | Filming location | Lee tells Robin he wants a divorce (flashback) | A small Victorian structure most New Yorkers do not know; good discovery pin | [S030] | MEDIUM |
| **American Museum of Natural History / Hayden Planetarium** | Central Park West at W 79th–81st Street `[CONFLICT]` on street number | *Manhattan* (1979) | Both | Isaac and Mary take shelter from a storm | **Important qualification: the planetarium sequence was at least partly shot on a built set** [S020]. Record it as partly, not wholly, on location | [S020], [S030] | MEDIUM–HIGH |
| Church of the Transfiguration | 1 East 29th Street | *Hannah and Her Sisters* (1986) | Both | Mickey's search for religion | — | [S030] | MEDIUM |

## Manhattan — Downtown, Village, SoHo, Tribeca, Chelsea

| LOCATION | ADDRESS | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Bleecker Street Cinema** | 144 Bleecker Street | *Crimes and Misdemeanors* (1989) | Both | Cliff takes Halley to a Hitchcock film | **Closed 1990-08**, within a year of the film's release. A lost landmark of New York film culture, and corroborated by multiple sources | [S031] | MEDIUM–HIGH |
| John's of Bleecker Street | 278 Bleecker Street | *Manhattan* (1979) | Both | Pizza; Tracy says she is going to London | Still operating, essentially unchanged | [S030] | MEDIUM |
| Empire Diner | 210 Tenth Avenue, W 22nd–23rd Streets | *Manhattan* (1979) | Both | The opening prologue | A recognisable Chelsea landmark | [S030] | MEDIUM |
| Dean & DeLuca | 560 Broadway, Prince–Spring Streets | *Manhattan* (1979) | Both | Isaac and Tracy discuss Mary | **Closed** | [S030] | MEDIUM |
| Museum of Modern Art | 11 West 53rd Street | *Manhattan* (1979) | Both | Second meeting, in the sculpture garden | — | [S030] | MEDIUM–HIGH |
| **Metropolitan Museum of Art — Temple of Dendur** | 1000 Fifth Avenue | *Manhattan* (1979) | Both | The opening prologue | One of the most striking images in the opening montage | [S030] | MEDIUM–HIGH |
| Central Bar (formerly Pageant Print and Book Store) | 109 East Ninth Street | *Hannah and Her Sisters* (1986) | Filming location | Lee and Elliot after meeting in the East Village | Changed use | [S030] | MEDIUM |
| Hotel 17 (exterior) **and** Hotel Chelsea (interior) | 225 East 17th Street / 222 West 23rd Street | *Manhattan Murder Mystery* (1993) | Filming location | **The fictional "Hotel Waldron", where the body is found — two separate buildings standing in for one** | A clean, documented example of a single fictional place assembled from two real ones | [S030] | MEDIUM–HIGH |
| National Arts Club | 15 Gramercy Park South at Irving Place | *Manhattan Murder Mystery* (1993) | Filming location | Carol sees the supposedly dead neighbour from a window; the wine tasting | The plot's turning point | [S030] | MEDIUM–HIGH |
| Serge Sorokko Gallery | 430 West Broadway | *Celebrity* (1998) | Filming location | The Bruce Bishop party | Now office space | [S030] | MEDIUM |
| El Flamingo Nightclub | 547 West 21st Street | *Celebrity* (1998) | Filming location | The nightclub scene | Site redeveloped | [S030] | MEDIUM |
| Kiosk opposite El Teddy's, Franklin Street subway entrance | — | *Celebrity* (1998) | Filming location | Lee and Nola meet | El Teddy's (219 West Broadway) **demolished** | [S030] | MEDIUM |
| Church Street at Walker Street | — | *Blue Jasmine* (2013) | Filming location | Ginger spots Hal with another woman | — | [S030] | MEDIUM |
| Nom Wah Tea Parlor | 13 Doyers Street, Chinatown | *Radio Days* (1987) | Filming location | Bar where people follow the trapped-girl broadcast | New York's oldest dim sum parlour; open | [S030] | MEDIUM |
| Congregation Mogen Abraham | Attorney Street, Lower East Side | *Radio Days* (1987) | Filming location | Hebrew class | Reported as no longer standing `[CHECK]` | [S030] | MEDIUM |
| Madison Square Garden | Seventh Avenue, W 31st–33rd Streets | *Manhattan Murder Mystery* (1993) | Both | The Rangers game Larry would rather attend | — | [S030] | MEDIUM |
| Paradise Garage (Roger and Irene's townhouse) | 84 King Street | *Radio Days* (1987) | Filming location | Roger and Irene's home | The building housed the legendary Paradise Garage nightclub, **closed 1987** — an unexpected music-history overlap | [S030] | MEDIUM |
| **South Street Seaport** | Fulton Street | *Blue Jasmine* (2013); *Vicky Cristina Barcelona* (2008); *Celebrity* (1998) | Filming location | *Blue Jasmine*: Ginger and Augie sightsee. *VCB*: Doug telephones Vicky (brief). *Celebrity*: 85 South Street is Lee's apartment | **Three films at one waterfront** — including, in *VCB*, the film's only US shot | [S030] | MEDIUM |
| East River Ferry | — | *Celebrity* (1998) | Filming location | Bonnie scatters Lee's manuscript into the river | — | [S030] | MEDIUM |
| Jean-Georges | 1 Central Park West at W 60th Street | *Celebrity* (1998) | Filming location | Robin's "Le Bijou" television interview | Still operating | [S030] | MEDIUM–HIGH |
| Uptown Racquet Club | Park Avenue, between E 52nd and E 53rd | *Manhattan* (1979) | Filming location | Isaac plays squash with Yale | — | [S030] | MEDIUM |
| Nassau Street office roof | — | *Bullets Over Broadway* (1994) | Filming location | Roof with a skyscraper-free 1928 skyline | A location chosen for what is *absent* from the view | [S030] | MEDIUM |
| Campbell's Funeral Parlor (Frank E. Campbell) | 1076 Madison Avenue at E 81st Street | *Everyone Says I Love You* (1996) | Filming location | **The dancing-corpses number, "Enjoy Yourself (It's Later Than You Think)"** | One of the most unusual musical numbers ever staged in New York, in a real funeral home | [S030] | MEDIUM–HIGH |
| Wall Street Racquet Club, Piers 13–14 | East River, at the end of Wall Street | *Annie Hall* (1977) | Filming location | **Alvy and Annie meet for the first time** | **Club closed 2002; the piers are gone.** The most important lost location in *Annie Hall*; single-source, so flagged | [S030] | MEDIUM `[CHECK]` |
| Staten Island Ferry | — | *Manhattan* (1979) | Both | The opening prologue | Free, open, unchanged | [S030] | MEDIUM |

## Brooklyn

| LOCATION | ADDRESS | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Under the Thunderbolt rollercoaster** | Coney Island, Brooklyn | *Annie Hall* (1977) | Both | **Alvy's childhood home, beneath the rollercoaster** | **The house burned in 1991-05; the Thunderbolt was demolished in 2000.** The most famous single location in Allen's filmography and it no longer exists in any form. The definitive "then and now" pin | [S030] | MEDIUM–HIGH |
| Steve's Famous Clam Bar | Coney Island boardwalk | *Annie Hall* (1977) | Filming location | Boardwalk flashback | **Gone** | [S030] | MEDIUM |
| Steeplechase Pier | Boardwalk at 21st Street, Coney Island | *Radio Days* (1987) | Filming location | Joe and his friends | Rebuilt since; the pier survives | [S030] | MEDIUM |
| **Coney Island — Wonder Wheel and amusement area** | Coney Island, Brooklyn | *Wonder Wheel* (2017) | Both | The entire film; the Wonder Wheel is the title | **Three Allen films at Coney Island across forty years** (*Annie Hall* 1977, *Radio Days* 1987, *Wonder Wheel* 2017). Specific venues for *Wonder Wheel* are not yet established — see gap G-LOC-07 | [S020] | MEDIUM `[CHECK]` |
| Vinegar Hill, around Hudson Avenue and Gold Street | Brooklyn | *Wonder Wheel* (2017) | Filming location | Additional location work | A preserved cobbled enclave under the Brooklyn Bridge approach | [S020] | MEDIUM |
| Kent Theater | Coney Island Avenue, Brooklyn | *The Purple Rose of Cairo* (1985) | Filming location | **The cinema from which Tom Baxter steps off the screen** | The pivotal location of the film, in Brooklyn playing New Jersey | [S020] | MEDIUM |
| Commodore Theatre | 329 Broadway at Rodney Street, Williamsburg | *Bullets Over Broadway* (1994) | Filming location | Old cinema beneath the elevated tracks | **Demolished 2007** | [S030] | MEDIUM |
| Prospect Park Zoo | Flatbush Avenue, Prospect Park | *Radio Days* (1987) | Both | The family meets the radio quiz whiz-kid | Closed for renovation from 1988; reopened | [S030] | MEDIUM |

## Queens

| LOCATION | ADDRESS | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Kaufman Astoria Studios** | 34-12 36th Street, Astoria, Queens `[CHECK]` on street address | *Shadows and Fog* (1991) | **Filming location only — the story is set in Europe** | A **26,000 sq ft** standing set of an unnamed European city, reported as the largest set built in New York at the time | **The dossier's defining setting-vs-location pin.** A European city, in Queens | [S020] | MEDIUM–HIGH |
| **180 Beach 115th Street** | Rockaway, Queens | *Radio Days* (1987) | Both | Little Joe's family home | The emotional centre of the film; a real residential address | [S030] | MEDIUM–HIGH |
| **Playland (Thompson's Amusement Park)** | 185 Beach 97th Street, Rockaway | *Radio Days* (1987) | Both | Passed on the way to school | **Demolished in 1987, shortly after filming.** The film is now one of the few moving records of it | [S020], [S030] | **HIGH** |
| Rockaway Beach Boulevard shopping parade | Rockaway, Queens | *Radio Days* (1987) | Filming location | Schoolchildren watch their teacher dance from a roof | — | [S030] | MEDIUM |
| Beach 97th Street | Rockaway, Queens | *Radio Days* (1987) | Filming location | Joe meets his father, a cab driver | The film's best-known revelation scene | [S030] | MEDIUM |
| Breezy Point | Rockaway peninsula, western tip | *Radio Days* (1987) | Filming location | Joe and his friends | — | [S030] | MEDIUM |
| PS 70 | 30-45 42nd Street, Astoria, Queens | *Radio Days* (1987) | Filming location | The school; the snowman | — | [S030] | MEDIUM |
| Queens Community College `[CHECK]` | Queens | *Bananas* (1971) | Filming location | A riot sequence | — | [S020] | LOW–MEDIUM |
| Foot of the Queensboro Bridge (Queens side) | — | *Celebrity* (1998) | Filming location | Lee meets the supermodel at a catwalk show | Pairs with the *Manhattan* bench on the opposite bank | [S030] | MEDIUM |
| 31st Drive at 12th Street | Long Island City, Queens | *Celebrity* (1998) | Filming location | Nicole takes Lee to her childhood home | — | [S030] | MEDIUM |
| Filmways Studio | Harlem, Manhattan (listed here for the studio group) | *Stardust Memories* (1980) | Filming location | A vintage railway carriage recreated and mounted on jacks to simulate motion | A documented studio build for the film's famous opening | [S020] | MEDIUM |

## The Queensboro Bridge bench — a record on its own

| Field | Value |
| --- | --- |
| **LOCATION** | **Riverview Terrace / Sutton Square, beneath the Queensboro Bridge** |
| **ADDRESS** | Riverview Terrace at Sutton Square, off East 59th Street, Manhattan |
| **CITY / REGION / COUNTRY** | New York City / New York / United States |
| **RELATED FILM** | *Manhattan* (1979) |
| **TYPE** | Both |
| **SCENE / CONNECTION** | Isaac and Mary sit on a bench and watch the sun come up over the bridge |
| **WHY IT MATTERS** | The single most reproduced image from any Allen film — it is the film's poster. **Two production facts make it a better map entry than a simple pin:** the shot was taken at 5 a.m., and the bridge's decorative lights, on a city timer, went out during the take; and **there is no bench at the site** — the crew brought one in and took it away. Visitors looking for the bench will not find it. The adjacent Sutton Place Park was later created partly because of the view's fame `[CHECK]` |
| **VERIFICATION** | Two independent sources on the location; production detail from reference sources |
| **SOURCE** | [S020], [S030] |
| **CONFIDENCE** | **HIGH** for the location; MEDIUM for the production detail |

## Elsewhere in New York State

| LOCATION | ADDRESS / PLACE | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Piermont** | Piermont, Rockland County, NY | *The Purple Rose of Cairo* (1985) | **Filming location only — the story is set in New Jersey** | The main town exteriors; **false storefront façades were built along the street** | A documented location build, and a clean setting/location distinction | [S020] | MEDIUM–HIGH |
| **508 Scarborough Road** | Briarcliff Manor, Westchester County, NY | *Crisis in Six Scenes* (2016) | Both | The Munsinger house — the series' principal location, shot over about three weeks | **The most precise single address in the dossier**, and the only location record for Allen's only television series | [S020] | MEDIUM–HIGH |
| The Hamptons / South Fork | Long Island, NY (Route 27 corridor) | *Annie Hall* (1977); *Another Woman* (1988) | Both | *Annie Hall*: the beach house and the lobster sequence. *Another Woman*: a few scenes | Principal photography on *Annie Hall* reportedly began here, 1976-05-19 | [S020], [S030] | MEDIUM |
| Quogue | Suffolk County, Long Island, NY | *Mighty Aphrodite* (1995); *Blue Jasmine* (2013) | Both | *Mighty Aphrodite*: exteriors. *Blue Jasmine*: Jasmine and Hal's beachfront house in flashback | Two films at one Hamptons village, eighteen years apart | [S020], [S030] | MEDIUM |
| North Tarrytown (Sleepy Hollow) | Westchester County, NY | *Mighty Aphrodite* (1995) | Filming location | Additional exteriors | — | [S020] | MEDIUM |
| Long Island shore (beach house) | Long Island, NY — specific house not established | *Interiors* (1978) | Both | The beach-house sequences | The film's second principal setting; identification is a priority gap | [S020] | LOW–MEDIUM |
| Upstate New York (unidentified estate) | — | *A Midsummer Night's Sex Comedy* (1982) | Story setting confirmed; filming location **not established** | The 1906 country house | One of the weakest location records in the dossier | [S020] | LOW |

## Walkable routes already present in the material

These are genuine clusters, not inventions — each is a set of confirmed locations within
walking distance, and two of them are **walks written into the scripts**.

**Route 1 — the *Hannah and Her Sisters* architecture tour.** The film contains an
architecture walk as a scene. Its stops are documented: the Dakota (1 West 72nd Street),
Pomander Walk (West 94th–95th), West 44th Street "bulging windows", the Chrysler Building
(405 Lexington), the Mount Vernon Hotel Museum (421 East 61st) and the Waldorf-Astoria
(301 Park Avenue). **A script-authored walking tour of New York architecture, ready to
reproduce as a map route.** [S030]

**Route 2 — the *Manhattan* museum and institution circuit.** Metropolitan Museum →
Guggenheim → MoMA → Whitney (Breuer) → Lincoln Center → Hayden Planetarium. Six cultural
institutions in one film, nearly all unchanged. [S030]

**Route 3 — Upper West Side cinemas, lost and surviving.** Thalia (2537 Broadway, closed
1987) → Metro (2626 Broadway, closed) → Cinema Studio (1966 Broadway, gone) → Beekman
(1254 Second Avenue, closed 2005) → Bleecker Street Cinema (144 Bleecker, closed 1990) →
New York Theater (1514 Broadway, gone). **Six cinemas across five films, every one of them
closed.** The strongest single editorial idea in this file. [S030], [S031]

**Route 4 — Coney Island, forty years.** *Annie Hall* (Thunderbolt site, Steve's Clam Bar)
→ *Radio Days* (Steeplechase Pier) → *Wonder Wheel* (the amusement area). [S020], [S030]

**Route 5 — Rockaway, Queens, 1987.** 180 Beach 115th Street → Rockaway Beach Boulevard →
Beach 97th Street → the Playland site (185 Beach 97th, demolished 1987) → Breezy Point.
A single-film neighbourhood walk through a vanished seaside Queens. [S030]

---

# United States Outside New York

## New Jersey

New Jersey is the great under-acknowledged Allen location. It appears on at least seven
films, repeatedly standing in for somewhere else.

| LOCATION | ADDRESS / PLACE | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Great Auditorium and Methodist conference grounds** | Ocean Grove, NJ | *Stardust Memories* (1980) | Filming location | The Stardust Hotel and the film retrospective | A vast Victorian camp-meeting auditorium playing a faded seaside hotel. Still standing | [S020] | MEDIUM–HIGH |
| Asbury Park | Asbury Park, NJ | *Stardust Memories* (1980) | Both | Boardwalk and seafront | — | [S020] | MEDIUM |
| Bradley Beach | Bradley Beach, NJ | *Stardust Memories* (1980) | Filming location | Shore exteriors | — | [S020] | MEDIUM |
| Vacant Sears Roebuck building | New Jersey — exact site not established | *Stardust Memories* (1980) | Filming location | **Most of the film's interiors, including the bedroom scenes** | A disused department store used as an improvised studio — a real production fact worth telling | [S020] | MEDIUM |
| **Palisades at Englewood Cliffs** | Englewood Cliffs, NJ, across the Hudson | *Manhattan* (1979) | Filming location | Isaac reads Jill's published account of their marriage | **The only Allen location in this file confirmed by an institutional source** — the AFI Catalog records a New Jersey unit at Englewood per a *Hollywood Reporter* item of 1978-11-03 | [S009], [S030] | **HIGH** |
| Englewood, Edgewater and Weehawken | NJ | *Broadway Danny Rose* (1984) | Filming location | "Much of Danny's story" — the pursuit and warehouse material | New Jersey playing the outer edges of the New York story | [S030] | MEDIUM |
| Raritan Diner | South Amboy, NJ | *The Purple Rose of Cairo* (1985) | Both | Cecilia's diner | The film's one confirmed New Jersey location, in a New Jersey–set film | [S020] | MEDIUM |
| Bertrand Island Amusement Park | Lake Hopatcong, NJ | *The Purple Rose of Cairo* (1985) | Filming location | Amusement-park scenes | **The park had closed shortly before production** `[CHECK]` | [S020] | MEDIUM |
| Brummer's Confectionery | 731 Grand Street, Jersey City, NJ | *Radio Days* (1987) | Filming location | The malt-shop counter | The original store is gone; the business continues | [S030] | MEDIUM |
| Jersey City (general) | Jersey City, NJ | *Radio Days* (1987) | Filming location | Additional period exteriors | — | [S020] | MEDIUM |
| **Trump Marina Hotel and Casino** (now the Golden Nugget) | Brigantine Boulevard at Huron Avenue, Atlantic City, NJ | *Celebrity* (1998) | Both | Lee loses US$6,000 and joins a party | The one substantial Atlantic City location in the filmography; renamed since | [S030] | MEDIUM |

## San Francisco Bay Area

The only US region outside the New York orbit with a well-documented, multi-site location
set — and the only one with **government open-data corroboration** [S045].

| LOCATION | ADDRESS | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **305 South Van Ness Avenue** | Mission District, San Francisco | *Blue Jasmine* (2013) | Both | **Ginger's apartment** — the film's principal location | The centre of the film. Corroborated by a dedicated location source and the city's own dataset | [S030], [S045] | **HIGH** |
| **Marina Boulevard, Laguna to Baker Streets** | Marina District, San Francisco | *Blue Jasmine* (2013) | Filming location | A driving scene | **Recorded in San Francisco's official city film-locations dataset** — the highest-confidence location record in the dossier | [S045] | **HIGH** |
| Casa Lucas Market | 2934 24th Street at Alabama Street | *Blue Jasmine* (2013) | Both | Ginger's checkout job | A real Mission neighbourhood market | [S030] | MEDIUM–HIGH |
| Dental practice | 790 Ulloa Street at Claremont Boulevard, West Portal | *Blue Jasmine* (2013) | Filming location | Jasmine works as a dental receptionist | — | [S030] | MEDIUM–HIGH |
| **Aub Zam Zam** | 1633 Haight Street, Haight-Ashbury | *Blue Jasmine* (2013) | Both | Dr. Flicker invites Jasmine for a drink | A famous, intact, idiosyncratic San Francisco bar | [S030] | MEDIUM–HIGH |
| The Ramp | 855 Terry A Francois Boulevard, Mission Bay | *Blue Jasmine* (2013) | Both | Drinks with Ginger, Chili and Eddie | — | [S030] | MEDIUM–HIGH |
| Gaspare's Pizza House | 5546 Geary Boulevard, Richmond District `[CONFLICT]` on Blvd/Street | *Blue Jasmine* (2013) | Both | Jasmine talks too much over pizza | — | [S030] | MEDIUM–HIGH |
| Augie's house | 2181 48th Avenue at Rivera Street, Sunset District | *Blue Jasmine* (2013) | Filming location | Ginger collects her children | — | [S030] | MEDIUM |
| Shreve & Co. | 200 Post Street `[CONFLICT]` — 150 Post Street also cited | *Blue Jasmine* (2013) | Both | Choosing an engagement ring | Address conflict documented in [`sources.md`](sources.md) | [S030] | MEDIUM |
| Motel Capri | 2015 Greenwich Street at Buchanan, Marina | *Blue Jasmine* (2013) | Both | Ginger and Al | — | [S030] | MEDIUM |
| South Park Café | 108 South Park Street, South Beach | *Blue Jasmine* (2013) | Both | **The final scene**, on the north side of South Park | The film's last image | [S030] | MEDIUM–HIGH |
| Ocean Beach | San Francisco | *Blue Jasmine* (2013) | Both | Ginger and Al's lunch-break walk | — | [S030] | MEDIUM |
| Britton Avenue | Belvedere, Marin County | *Blue Jasmine* (2013) | Both | The party where Jasmine meets Dwight | — | [S030] | MEDIUM |
| Paradise Cay, Tiburon peninsula | Marin County | *Blue Jasmine* (2013) | Both | Dwight's new waterfront house | — | [S030] | MEDIUM |
| Escalle Winery (historic) | 771 Magnolia Avenue, Larkspur, Marin County | *Blue Jasmine* (2013) | Filming location | The furniture sale and the four-poster bed | — | [S030] | MEDIUM |
| **Ernie's restaurant** | San Francisco | *Take the Money and Run* (1969) | Filming location | A restaurant scene | **The same red-walled interior used in Hitchcock's *Vertigo* (1958)** — a genuine film-history overlap. Now closed | [S020] | MEDIUM |
| Bank of America branch | San Francisco — exact branch not established | *Take the Money and Run* (1969) | Filming location | The bank robbery; reportedly shot 1968-07-04 | — | [S020] | LOW–MEDIUM |
| **San Quentin State Prison** | San Quentin, Marin County | *Take the Money and Run* (1969) | Both | The prison sequences; approximately 100 inmates engaged as extras `[CHECK]` | The only working prison location in the filmography, and an unusual production arrangement | [S020] | MEDIUM |

Note the forty-four-year gap: *Take the Money and Run* (1969) and *Blue Jasmine* (2013)
are Allen's only two Bay Area productions.

## Colorado — the *Sleeper* cluster

The most architecturally distinctive location set in the filmography, and the only one
chosen for its buildings rather than its city.

| LOCATION | ADDRESS / PLACE | FILM | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Mesa Laboratory, National Center for Atmospheric Research** | Table Mesa, Boulder, CO — architect **I. M. Pei**, 1967 | *Sleeper* (1973) | Filming location | Future hospital exteriors | A landmark of American modernism used to build the year 2173 without a single set. Open to visitors | [S020] | MEDIUM–HIGH |
| **Sculptured House ("Sleeper House")** | Genesee Mountain, west of Denver, CO — architect **Charles Deaton**, 1963 | *Sleeper* (1973) | Filming location | Luna Schlosser's house | The house is now widely known by the film's name — the film renamed the building | [S020] | MEDIUM–HIGH |
| Mile Hi Church of Religious Science | Lakewood, CO | *Sleeper* (1973) | Filming location | Dressed as a futuristic McDonald's `[CHECK]` | A church playing a fast-food restaurant of the future | [S020] | MEDIUM |
| Denver Botanic Gardens | Denver, CO | *Sleeper* (1973) | Filming location | A brief exterior | — | [S020] | MEDIUM |
| Denver (general) | Denver, CO | *Sleeper* (1973) | Filming location | Future cityscapes | — | [S020] | MEDIUM |

## Other United States

| LOCATION | ADDRESS / PLACE | FILM(S) | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Salve Regina University campus** | Newport, Rhode Island | *Irrational Man* (2015) | Filming location | Stood in for the fictional Braylin College | The only New England location set in the filmography | [S020] | MEDIUM–HIGH |
| Newport (general) | Newport, RI | *Irrational Man* (2015) | Both | Principal photography; the cliff walk, the diner | — | [S020] | MEDIUM–HIGH |
| The Fastnet Pub | Newport, RI | *Irrational Man* (2015) | Filming location | Exterior filming observed | — | [S020] | MEDIUM |
| **Source Restaurant** (later Cabo Cantina) | 8301 Sunset Boulevard at Sweetzer Avenue, West Hollywood, CA | *Annie Hall* (1977) | Both | **The alfalfa-sprouts lunch and the rejected proposal** — the Los Angeles sequence | The only confirmed *Annie Hall* location outside New York, and the film's definitive statement about Los Angeles. Still standing, changed use | [S030] | MEDIUM |
| Los Angeles (general) | Los Angeles, CA | *Everything You Always Wanted to Know About Sex\** (1972); *Café Society* (2016) | Both | *Sex*: the entire film. *Café Society*: the Hollywood half, from 2015-08-17 | Allen's only two Los Angeles–based productions, forty-four years apart. **Specific sites not established for either** — gap G-LOC-04 | [S020] | LOW–MEDIUM |
| Culver City Studios | Culver City, CA | *Sleeper* (1973) | Filming location | Studio interiors | — | [S020] | MEDIUM |
| Monterey | Monterey, CA | *Sleeper* (1973) | Filming location | Exterior work | — | [S020] | LOW–MEDIUM |
| Puerto Rico | Puerto Rico (US territory) | *Bananas* (1971) | **Filming location only — the story is set in fictional "San Marcos"** | Jungle, village and palace exteriors | Allen's first tropical/Latin American location work; a clean setting/location distinction | [S020] | MEDIUM |

---

# Europe

## United Kingdom — London

Four consecutive films, 2005–2010. *Match Point* is the best documented; the other three
are weak and are a priority gap.

### *Match Point* (2005)

| LOCATION | ADDRESS | TYPE | SCENE / CONNECTION | WHY IT MATTERS | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- |
| **The Queen's Club** | Palliser Road, W14 | Both | Chris coaches tennis and meets Tom Hewett | The film's premise begins here; a real, historic tennis club | [S020], [S030] | MEDIUM–HIGH |
| **Englefield House** | Englefield, near Reading, Berkshire | Both | The Hewett family estate | The film's image of inherited English wealth; a private country house | [S030] | MEDIUM–HIGH |
| **Royal Opera House** | Bow Street, Covent Garden, WC2 | Both | The opera evening with the Hewetts | Ties directly to the film's all-opera soundtrack | [S020], [S030] | MEDIUM–HIGH |
| **30 St Mary Axe ("the Gherkin")** | 30 St Mary Axe, EC3 | Both | Chris takes the job Alec offers him | The most recognisable image of 2000s City London | [S020], [S030] | MEDIUM–HIGH |
| Lloyd's building | 1 Lime Street, EC3 | Both | City exteriors | Richard Rogers's landmark | [S020] | MEDIUM |
| **Tate Modern** | Bankside, SE1 | Both | Chris runs into Nola at the gallery | A pivotal chance meeting in a building about chance encounters | [S020], [S030] | MEDIUM–HIGH |
| **Clarence Gate Gardens** | 64–84 Glentworth Street, Marylebone, NW1 | Both | **Nola's flat — where the murder takes place** | The film's decisive location | [S030] | MEDIUM–HIGH |
| **Queen's Walk, beneath Blackfriars Bridge** | Hopton Street, SE1 | Both | Chris throws the evidence into the Thames | The scene the whole plot turns on; publicly accessible riverside | [S020], [S030] | MEDIUM–HIGH |
| Parliament View Apartments | Albert Embankment, Lambeth, SE1 | Both | The flat Alec provides for Chris and Chloe | Interiors also used; opposite the Palace of Westminster | [S020], [S030] | MEDIUM–HIGH |
| Palace of Westminster (exterior) | Westminster, SW1 | Story setting / background | Seen from the apartment | Background rather than a scene location | [S020] | MEDIUM |
| Brasserie Max, Covent Garden Hotel | 10 Monmouth Street, WC2 | Both | Dinner for four — Chris, Chloe, Tom, Nola | — | [S020], [S030] | MEDIUM |
| Palace Theatre | Shaftesbury Avenue, Cambridge Circus, W1 | Both | Chris and Chloe attend *The Woman in White* | — | [S030] | MEDIUM |
| Royal Court Theatre (war memorial opposite) | Sloane Square, SW1W `[CONFLICT]` on postcode | Both | Chris waits for Nola | — | [S030] | MEDIUM |
| Asprey | 165–169 New Bond Street, W1S | Both | Nola sees Chris leaving the jeweller | — | [S030] | MEDIUM |
| Cartier | 175–176 New Bond Street, W1S | Both | Chris meets an old opponent | Adjacent to Asprey — a two-pin micro-cluster | [S030] | MEDIUM |
| Curzon Mayfair | 38 Curzon Street, W1 | Both | Nola fails to arrive for *The Motorcycle Diaries* | — | [S030] | MEDIUM |
| Polo Ralph Lauren | 105–109 Fulham Road, SW3 | Both | Chris runs into Nola | Ralph Lauren also dressed Allen in *Manhattan* [S009] — an incidental link | [S030] | MEDIUM |
| Paul & Joe | 39 Ledbury Road, Notting Hill, W11 | Both | Nola's workplace | — | [S030] | MEDIUM |
| Julie's | 135 Portland Road, Holland Park, W11 | Both | Chris and Nola's clandestine lunch | — | [S030] | MEDIUM |
| The Audley | 41–43 Mount Street, Mayfair, W1 | Both | Chris and Nola have a drink | — | [S030] | MEDIUM |
| Locanda Locatelli | 8 Seymour Street, Marble Arch, W1 `[CONFLICT]` on postcode | Both | Chris is nearly caught after a taxi sighting | **Reported closed in 2025** | [S030] | MEDIUM |
| University of Westminster, Marylebone campus | 35 Marylebone Road, NW1 | Filming location | The lecture theatre | — | [S020] | MEDIUM |
| Cambridge Circus | W1 | Filming location | Street work | — | [S020] | MEDIUM |

### *Scoop* (2006), *Cassandra's Dream* (2007), *You Will Meet a Tall Dark Stranger* (2010)

| LOCATION | PLACE | FILM(S) | TYPE | NOTE | VERIFICATION / SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- |
| **Pinewood Studios** | Iver Heath, Buckinghamshire | *Scoop*; *You Will Meet a Tall Dark Stranger* | Filming location | Studio work on both films `[CHECK]` | [S020] | MEDIUM |
| London (unspecified) | London | *Scoop*; *Cassandra's Dream*; *You Will Meet a Tall Dark Stranger* | Both | **No specific address established for any of the three films.** Each is wholly London-set | [S020] | LOW |
| East Sussex | East Sussex | *Cassandra's Dream* | Filming location | Additional locations `[CHECK]` | [S020] | LOW–MEDIUM |
| Hampshire | Hampshire | *Cassandra's Dream* | Filming location | Additional locations `[CHECK]` | [S020] | LOW–MEDIUM |

**This is the largest location gap in the dossier** — three complete feature films with no
usable map data. Logged as gap **G-LOC-08**.

## France — Paris

### *Midnight in Paris* (2011) — thirty locations

The largest single-film location set in the dossier, and the strongest international map
opportunity.

| LOCATION | ADDRESS | TYPE | SCENE / CONNECTION | WHY IT MATTERS | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- |
| **Église Saint-Étienne-du-Mont** | Place Sainte-Geneviève / rue de la Montagne Sainte-Geneviève, 5e | Both | **The steps where Gil sits at midnight and the 1920s Peugeot collects him** | **The film's signature location**, unchanged, free and publicly accessible. The single best international pin available | [S030] | **HIGH** |
| **Pont Alexandre III** | 7e / 8e | Both | **The closing scene, in the rain** | The film's final image | [S020], [S030] | **HIGH** |
| **27 rue de Fleurus** | 6e | Both | Gertrude Stein's home; Gil meets Picasso and Adriana | A real literary address used as itself | [S030] | MEDIUM–HIGH |
| **Restaurant Polidor** | 41 rue Monsieur le Prince, 6e | Both | Gil meets Hemingway | A working 19th-century bouillon, essentially unchanged | [S030] | MEDIUM–HIGH |
| **Shakespeare and Company** | 37 rue de la Bûcherie, 5e | Both | Gil browses the bookshop | The most visited literary bookshop in Europe | [S030] | MEDIUM–HIGH |
| **Maison Deyrolle** | 46 rue du Bac, 7e | Both | The surrealist gathering | An extraordinary 19th-century taxidermy and natural-history shop, open to the public | [S020], [S030] | MEDIUM–HIGH |
| **Monet's Garden, Giverny** | rue Claude Monet, 27620 Giverny (Normandy) | Both | The opening; Gil's idea of old France | A day trip from Paris; the film's one non-Paris French location | [S020], [S030] | MEDIUM–HIGH |
| **Château de Versailles** | Place d'Armes, 78000 Versailles | Both | The gardens (Paul dismisses nostalgia); the interior glimpsed at the end | — | [S020], [S030] | MEDIUM–HIGH |
| Musée Rodin (Hôtel Biron) | 79 rue de Varenne, 7e | Both | The museum tour; Paul contradicts the guide (Carla Bruni) | — | [S030] | MEDIUM–HIGH |
| Musée de l'Orangerie | Place de la Concorde, Jardin des Tuileries, 1er | Both | The Monet water-lilies exhibition | — | [S030] | MEDIUM–HIGH |
| Maxim's | 3 rue Royale, 8e | Both | Belle Époque scenes | — | [S030] | MEDIUM–HIGH |
| **Moulin Rouge** | 82 boulevard de Clichy, 18e | **Exterior only** | Belle Époque scenes | **Important: the interior scenes were not shot at the real club** `[CHECK]`. A clean partial setting/location distinction | [S030] | MEDIUM |
| Hôtel Le Bristol | 112 rue du Faubourg Saint-Honoré, 8e | Both | Gil and Inez's hotel | — | [S030] | MEDIUM–HIGH |
| Le Grand Véfour | 17 rue de Beaujolais, 1er | Both | Dinner with Inez's parents; Paul's first appearance | A historic Palais-Royal restaurant | [S030] | MEDIUM |
| La Belle Étoile, Hôtel Le Meurice | 228 rue de Rivoli, 1er | Both | The alfresco wine tasting | — | [S030] | MEDIUM |
| Marché Paul Bert, Saint-Ouen flea market | 96–110 rue des Rosiers, Saint-Ouen | Both | Gil meets Gabrielle | — | [S030] | MEDIUM |
| Les Pavillons de Bercy (Musée des Arts Forains) | 53 avenue des Terroirs de France, 12e | Filming location | The fairground party | A private fairground museum, visitable by appointment | [S030] | MEDIUM |
| Parc Jean XXIII | Île de la Cité, behind Notre-Dame, 4e | Both | Adriana's journal is read to Gil | [S020] also records this location | [S020], [S030] | MEDIUM–HIGH |
| Quai de Bourbon | Île Saint-Louis, 4e | Both | The 1920s party with the Fitzgeralds | — | [S030] | MEDIUM |
| "Bricktop's" | 17 rue Malebranche, 5e | Filming location | The nightclub scene | Named for the real Ada "Bricktop" Smith, who appears as herself in *Zelig* (1983) — an unexpected cross-film link | [S030] | MEDIUM |
| Chopard | 1 place Vendôme, 1er | Both | Inez and her mother look at rings | — | [S030] | MEDIUM |
| Philippe de Beauvais (antiques) | 112 boulevard de Courcelles, 17e | Both | Shopping for an antique chair | — | [S030] | MEDIUM |
| Cathédrale Saint-Alexandre-Nevsky | rue Daru, 8e | Background | Visible behind the antiques scene | — | [S030] | MEDIUM |
| Restaurant Paul | 15 place Dauphine, Île de la Cité, 1er | Both | The coach collects Gil and Adriana | — | [S030] | MEDIUM |
| L'Île de France | 59 quai de la Tournelle, 5e | Both | Gil drinks after splitting with Inez | — | [S030] | MEDIUM |
| Steps of rue du Chevalier de la Barre | Montmartre, down to rue Lamarck, 18e | Both | Gil and Adriana walk | — | [S030] | MEDIUM |
| Montmartre (general) | 18e | Both | Opening montage | — | [S030] | MEDIUM |
| Rue Galande | 5e | Both | Opening montage | — | [S030] | MEDIUM |
| Avenue des Camoëns | 16e | Both | Opening montage — the Eiffel Tower view | A short stepped street with a famous sightline | [S030] | MEDIUM |
| Parc Monceau | 8e | Both | Opening montage — the colonnade | — | [S030] | MEDIUM |
| Pont de Bir-Hakeim | 15e / 16e | Both | Opening montage | — | [S030] | MEDIUM |

### *Coup de Chance* (2023)

| LOCATION | PLACE | TYPE | NOTE | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- |
| Paris (unspecified) | Paris | Both | Principal photography from 2022-10. **No specific address established** — despite the official site carrying full production notes that may name sites [S008]. Gap G-LOC-06 | [S020], [S033] | LOW |
| French countryside (unspecified) | France | Story setting; filming location not established | The hunting weekend | [S020] | LOW |

### *Everyone Says I Love You* (1996) — Paris

| LOCATION | PLACE | TYPE | SCENE / CONNECTION | WHY IT MATTERS | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- |
| **Banks of the Seine** | Paris — exact quai not established | Both | **Allen and Goldie Hawn's weightless dance** | One of the most celebrated images in the later filmography; achieved with wire work | [S030] | MEDIUM–HIGH |

## France — the Côte d'Azur and Provence

### *Magic in the Moonlight* (2014) — eight precisely identified sites

The best-documented international location set after *Midnight in Paris*, and an unusually
visitable one.

| LOCATION | ADDRESS / PLACE | TYPE | SCENE / CONNECTION | WHY IT MATTERS | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- |
| **Villa Eilenroc** | Avenue Mrs. L. D. Beaumont, Cap d'Antibes | Both | **The Catledge estate and the ball** | A grand Belle Époque villa with public gardens | [S020] | MEDIUM–HIGH |
| **Opéra de Nice** | 4–6 rue Saint-François-de-Paule, Nice | **Filming location only — the story setting is Berlin** | The exterior of the Berlin theatre | A clean, documented setting/location distinction | [S020] | MEDIUM–HIGH |
| **Studios Riviera** | Nice | **Filming location only — the story setting is Berlin** | The Berlin theatre interior and backstage | — | [S020] | MEDIUM–HIGH |
| **Hôtel Negresco bar** | 37 Promenade des Anglais, Nice | **Filming location only — story setting Berlin** | The Berlin cabaret | A landmark hotel playing Weimar Berlin | [S020] | MEDIUM–HIGH |
| Villa La Renardière | Mouans-Sartoux, Alpes-Maritimes | Both | The Catledge estate (additional) | — | [S020] | MEDIUM–HIGH |
| Château du Rouët | Le Muy, Var | Both | Aunt Vanessa's house | — | [S020] | MEDIUM–HIGH |
| **Observatoire de Nice** | Mont Gros, Nice | Both | The observatory | A 19th-century domed observatory (Gustave Eiffel designed the dome) `[CHECK]`; visitable | [S020] | MEDIUM–HIGH |
| **Hôtel Belles Rives** | 33 boulevard Édouard Baudoin, Juan-les-Pins | Both | Riviera bar and restaurant scenes | The hotel was F. Scott Fitzgerald's residence in the 1920s `[CHECK]` — an incidental link to *Midnight in Paris*, in which Fitzgerald is a character | [S020] | MEDIUM–HIGH |

## Spain — Barcelona, Asturias, the Basque Country

### *Vicky Cristina Barcelona* (2008) — twenty-six sites

| LOCATION | ADDRESS / PLACE | CITY | TYPE | SCENE / CONNECTION | WHY IT MATTERS | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Sagrada Família** | Carrer de Mallorca 401 | Barcelona | Both | Vicky and Cristina sightsee | — | [S030] | MEDIUM–HIGH |
| **Park Güell** (salamander fountain) | Carrer d'Olot | Barcelona | Both | Vicky runs into Juan Antonio | [S020] also records this location | [S020], [S030] | MEDIUM–HIGH |
| **Casa Milà (La Pedrera)** | Passeig de Gràcia 92 | Barcelona | Both | The rooftop chimneys; Vicky and Doug | — | [S030] | MEDIUM–HIGH |
| Avinguda Pedralbes — Güell Estate dragon gate | Avinguda de Pedralbes 7 | Barcelona | Both | Vicky meets Juan Antonio; María Elena interrupts | A fourth Gaudí site — see the architecture route below | [S030] | MEDIUM |
| **Hospital de Sant Pau** | Sant Antoni Maria Claret 167 | Barcelona | Both | Ben invites Vicky to a Hitchcock film | Domènech i Montaner's UNESCO-listed modernista hospital | [S030] | MEDIUM |
| Parc de la Ciutadella (Gaudí fountain) | Passeig de Picasso | Barcelona | Both | María Elena teaches Cristina photography | — | [S030] | MEDIUM |
| **Fundació Joan Miró** | Parc de Montjuïc | Barcelona | Both | The courtyard sculpture | — | [S030] | MEDIUM–HIGH |
| **Museu Nacional d'Art de Catalunya (Palau Nacional)** | Parc de Montjuïc | Barcelona | Both | Judy encourages Vicky | — | [S030] | MEDIUM |
| **Els Quatre Gats** | Carrer Montsió 3 | Barcelona | Both | Juan Antonio invites both women away for the weekend | The historic modernista café of Picasso's Barcelona | [S030] | MEDIUM–HIGH |
| Hotel Casa Fuster — Café Vienés | Passeig de Gràcia 132 | Barcelona | Both | Judy and Vicky talk over coffee | — | [S030] | MEDIUM |
| Barcelona–El Prat Airport, Terminal 2 façade | El Prat de Llobregat | Barcelona | Both | Arrival — the **Joan Miró ceramic mural** | — | [S030] | MEDIUM |
| Plaça de Sant Felip Neri | Barri Gòtic | Barcelona | Both | Lunch; Juan Antonio brushes Vicky's foot | A quiet, bullet-scarred Gothic Quarter square | [S030] | MEDIUM |
| Tibidabo | Serra de Collserola | Barcelona | Both | The amusement park and the city view | — | [S030] | MEDIUM |
| La Rambla (flower stalls) | between Plaça de Catalunya and Port Vell | Barcelona | Both | Cristina photographs | — | [S030] | MEDIUM |
| Port Olímpic | — | Barcelona | Both | Cristina alone, overlooking the breakwater cubes | — | [S030] | MEDIUM |
| Fragile restaurant square | Carrer de Ferlandina, near MACBA | Barcelona | Both | Cristina recounts her experiences | — | [S030] | MEDIUM |
| La Marsella | Carrer Sant Pau 65 | Barcelona | Both | The bar after the red-light district | One of Barcelona's oldest absinthe bars | [S030] | MEDIUM |
| Taller de Tapas | Rambla de Catalunya 49–51 | Barcelona | Both | Vicky and Cristina discuss the holiday | — | [S030] | MEDIUM |
| **Hotel de la Reconquista** | Calle Gil de Jaz 16 | Oviedo | Both | The weekend hotel | **Also the venue of the Prince of Asturias Awards, which Allen received in 2002** `[CHECK]` — a striking, verifiable coincidence between the honour and the location | [S030], [S055] | MEDIUM–HIGH |
| **Santa María del Naranco** | Monte Naranco, Oviedo | Oviedo | Both | Juan Antonio takes Vicky while Cristina is ill | A 9th-century UNESCO-listed pre-Romanesque church | [S030] | MEDIUM |
| San Julián de los Prados | Calle de Selgas 1 | Oviedo | Both | Juan Antonio shows them a sculpture | Another UNESCO pre-Romanesque church | [S030] | MEDIUM |
| Mercado del Fontán | Plaza 19 de Octubre | Oviedo | Both | The market | — | [S030] | MEDIUM |
| Confitería Camilo de Blas | Calle Jovellanos 7 | Oviedo | Both | Buying sweets | — | [S030] | MEDIUM |
| **Faro de Avilés** (old lighthouse) | Avilés, Asturias | Avilés | Both | The coastal trip | Avilés was also the site of *Cassandra's Dream*'s unannounced 2007 preview — the same small Asturian town appears twice in the career | [S030] | MEDIUM |
| Parque de Ferrera | central Avilés | Avilés | Both | Evening guitar performance | — | [S030] | MEDIUM |

**Walkable route 6 — the *Vicky Cristina Barcelona* modernista circuit.** Sagrada Família
→ Casa Milà → Park Güell → Güell Estate dragon gate → Hospital de Sant Pau → Els Quatre
Gats. **Six modernista landmarks in one film** — the Barcelona equivalent of
*Hannah and Her Sisters*' New York architecture walk.

### *Rifkin's Festival* (2020) — San Sebastián

| LOCATION | ADDRESS / PLACE | TYPE | SCENE / CONNECTION | WHY IT MATTERS | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- |
| **Hotel María Cristina** | Paseo República Argentina 4 | Both | The festival hotel — **the real festival hotel, playing itself** | A film about the San Sebastián festival, shot at the festival's own hotel, premiered at that festival | [S046] | MEDIUM–HIGH |
| **Kursaal Centre** | Avenida de Zurriola 1, by Zurriola beach | Both | **The festival's home, in the film and in reality** — festival logos were altered for filming | Rafael Moneo's landmark; the alteration of the logos is a precise, documented production detail | [S046] | MEDIUM–HIGH |
| Teatro Victoria Eugenia | Paseo República Argentina 2 | Both | A festival venue | `[CHECK]` | [S046] | MEDIUM |
| Puente María Cristina | over the Urumea | Both | Mort and Jo cross in a red convertible | — | [S046] | MEDIUM |
| Bar Tánger | Plaza Okendo | Both | A bar scene | — | [S046] | MEDIUM |
| La Concha beach | Paseo de la Concha | Both | Seafront | `[CHECK]` | [S046] | MEDIUM |

### Untitled Madrid feature (2026) — in production

| LOCATION | PLACE | TYPE | NOTE | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- |
| Madrid and surrounding area | Madrid | Both | **Reported as more than thirty locations**, over about six weeks from 2026-10-05. **No individual site publicly identified as at 2026-11-02** | [S036], [S039] | LOW (pending) |
| Aranjuez | Aranjuez, Madrid region | Both | Included in the shooting plan `[CHECK]` | [S039] | LOW (pending) |

When these are published, Spain will have **three** substantial Allen map clusters
(Barcelona/Asturias, San Sebastián, Madrid) — more than any country except the United
States.

## Italy

| LOCATION | ADDRESS / PLACE | CITY | FILM | TYPE | SCENE / CONNECTION | WHY IT MATTERS | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Teatro Antico di Taormina** | Via Teatro Greco, Taormina, Sicily | Taormina | *Mighty Aphrodite* (1995) | Both | **All the Greek chorus sequences** | A 3rd-century-BC Hellenistic theatre used as a Greek chorus's stage. Allen's first Italian location, and one of the most visually distinctive in the filmography | [S020] | MEDIUM–HIGH |
| **Teatro Regio di Torino** | Piazza Castello 215, Turin | Turin | *Hannah and Her Sisters* (1986) | Filming location | The opera (*Manon Lescaut*) David takes Holly to | **A non-US unit on an otherwise entirely New York film** — easily missed, and worth a map pin precisely because it is unexpected | [S030] | MEDIUM `[CHECK]` |
| **Hotel Gritti Palace** | Campo Santa Maria del Giglio, San Marco 2467, Venice | Venice | *Everyone Says I Love You* (1996) | Both | Joe's hotel | — | [S030] | MEDIUM |
| Venice (general) | Venice | Venice | *Everyone Says I Love You* (1996) | Both | The Venice section of the film | — | [S020] | MEDIUM |
| **Rai 3 / TG3 studio** | Rome | Rome | *To Rome with Love* (2012) | Filming location | **The newscast scene, shot in the real network studio** | The best-attested *To Rome with Love* location | [S020] | MEDIUM–HIGH |
| Piazza Venezia | Rome | Rome | *To Rome with Love* (2012) | Both | The traffic policeman's monologue. Allen is reported to have seen a real officer directing traffic here and written the scene for him | A good story, attached to an unmistakable location | [S020], [S032] | MEDIUM |
| Trevi Fountain | Piazza di Trevi | Rome | *To Rome with Love* (2012) | Both | Michelangelo takes Hayley | `[CHECK]` — enthusiast source only | [S032] | MEDIUM |
| Piazza Navona | Rome | Rome | *To Rome with Love* (2012) | Both | Jack, Sally and Monica | `[CHECK]` | [S032] | MEDIUM |
| Piazza del Campidoglio | Rome | Rome | *To Rome with Love* (2012) | Both | Jack shows Monica the city | `[CHECK]` | [S032] | MEDIUM |
| Fontana delle Tartarughe, Piazza Mattei | Rome | Rome | *To Rome with Love* (2012) | Both | Milly considers her predicament | `[CHECK]` | [S032] | MEDIUM |
| Piazza del Popolo | Rome | Rome | *To Rome with Love* (2012) | Both | Milly looks for her hairdresser | `[CHECK]` | [S032] | MEDIUM |
| Via Margutta | Rome | Rome | *To Rome with Love* (2012) | Both | John walks in his old neighbourhood | `[CHECK]` | [S032] | MEDIUM |
| Auditorium Parco della Musica | Viale Pietro de Coubertin 30 | Rome | *To Rome with Love* (2012) | Both | Jack and Monica discuss architecture on the steps | Renzo Piano's complex | [S032] | MEDIUM |
| Villa dei Quintili | Via Appia Nuova 1092 | Rome (outskirts) | *To Rome with Love* (2012) | Filming location | Standing in for Roman baths | `[CHECK]` | [S032] | LOW–MEDIUM |
| Piazza di Spagna | Rome | Rome | *To Rome with Love* (2012) | Both | The closing scene | `[CHECK]` | [S032] | MEDIUM |

**Caution on Rome.** Every *To Rome with Love* location except the Rai studio rests on
enthusiast guides [S032], and those guides disagree with each other on some addresses.
Treat the whole Rome set as **provisional** and do not publish addresses without better
sourcing. Gap **G-LOC-03**.

## Other Europe

| LOCATION | PLACE | FILM | TYPE | NOTE | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- |
| France (unspecified) | France | *Love and Death* (1975) | **Filming location only — the story is set in Napoleonic Russia** | Interiors, château and street work. **No specific site established** — the single oldest unresolved location question in the filmography | [S020] | LOW |
| Hungary (unspecified) | Hungary | *Love and Death* (1975) | **Filming location only — story setting Russia** | Battle sequences and large-scale exteriors. No specific site established | [S020] | LOW |
| Berlin / Munich | Germany | *Zelig* (1983) | **Story setting only** | The 1932 German sequences are composited into archive newsreel footage; **no German unit is documented** | [S020] | — |
| Vermont country house | Vermont, USA — listed here for the contrast | *September* (1987) | **Story setting only** | Shot on constructed interiors; **no Vermont location established.** A model record for the story-setting-only category | [S020] | — |

---

# Rest of World

Allen's production geography is almost entirely North American and European. This section
is short, and that itself is a finding.

| LOCATION | PLACE | FILM | TYPE | NOTE | SOURCE | CONFIDENCE |
| --- | --- | --- | --- | --- | --- | --- |
| Japan (unspecified) | Japan | *What's Up, Tiger Lily?* (1966) | **Source footage only** | The original Japanese feature (*Kokusai himitsu keisatsu: Kagi no kagi*, 1965, dir. Senkichi Taniguchi) was shot in Japan; Allen's own footage was shot in New York. **He did not shoot in Japan.** A category of its own: location of the *source material*, not of his production | [S020] | — |
| Kolkata (Calcutta) | India | *Alice* (1990) | **Story setting only** | Alice's closing destination. **No Indian unit established** | [S020] | — |
| California / China | USA / China | *Cassandra's Dream* (2007) | **Story setting only** — referenced in dialogue | No location work | [S020] | — |
| Fictional Eastern-bloc state | — | *Don't Drink the Water* (1994) | **Story setting only** | Studio-based `[CHECK]`; no location established | [S020] | — |
| Fictional "San Marcos" | — | *Bananas* (1971) | **Story setting only** — shot in Puerto Rico | See the United States section | [S020] | — |
| Fictional "Rashpur" | — | *What's Up, Tiger Lily?* (1966) | **Story setting only** | Deliberately incoherent | [S020] | — |

**Finding: Allen has never shot a feature outside North America and Europe.** Across 50
features the production geography is the United States, Puerto Rico, the United Kingdom,
France, Spain, Italy and Hungary. This is a clean, defensible By-the-Numbers item — see
[`statistics.md`](statistics.md).

---

# Story-Setting-Only Register

Places central to a film's fiction where **no filming took place**, collected so that the
map can optionally show them in a visually distinct way — and so that nobody later mistakes
them for filming locations.

| PLACE | FILM | WHAT THE FICTION CLAIMS | WHERE IT WAS ACTUALLY SHOT |
| --- | --- | --- | --- |
| An unnamed European city, 1920s | *Shadows and Fog* (1991) | The entire film | Kaufman Astoria Studios, Queens, New York |
| Berlin, 1928 | *Magic in the Moonlight* (2014) | The opening theatre and cabaret | Opéra de Nice, Studios Riviera and the Hôtel Negresco, Nice |
| Chicago and California, 1930s | *Sweet and Lowdown* (1999) | The whole of Emmet Ray's career | Entirely New York and New Jersey |
| Napoleonic Russia | *Love and Death* (1975) | The entire film | France and Hungary |
| "San Marcos", Latin America | *Bananas* (1971) | The revolution | Puerto Rico |
| New Jersey, 1935 | *The Purple Rose of Cairo* (1985) | Cecilia's town | Piermont, **New York**, with built façades; the cinema in Brooklyn |
| A Vermont country house | *September* (1987) | The entire film | Constructed interiors; no Vermont unit |
| Berlin and Munich, 1932 | *Zelig* (1983) | The German sequences | Composited into archive newsreel footage |
| Kolkata | *Alice* (1990) | The closing destination | No Indian unit |
| An unnamed Eastern-bloc capital | *Don't Drink the Water* (1994) | The entire film | Studio `[CHECK]` |
| "Braylin College", Rhode Island | *Irrational Man* (2015) | The campus | Salve Regina University, Newport — a real college playing a fictional one |
| "Yardley College", upstate New York | *A Rainy Day in New York* (2019) | The students' campus | Not established |
| The "Hotel Waldron", New York | *Manhattan Murder Mystery* (1993) | One hotel | Two: Hotel 17 exterior, Hotel Chelsea interior |
| The Moulin Rouge interior | *Midnight in Paris* (2011) | Belle Époque Moulin Rouge | The real club's exterior only `[CHECK]` |
| 2173 United States | *Sleeper* (1973) | The future | Colorado and California, present day |

---

# Location Research Gaps

Carried into [`sources.md`](sources.md) §*Research Gaps* under LOCATIONS.

| ID | Gap | Priority |
| --- | --- | --- |
| **G-LOC-00** | **No coordinates captured anywhere in this dossier.** Geocode at content-authoring time from one authoritative source and record which | **Highest** — blocks the map entirely |
| **G-LOC-08** | **Three complete London features with no usable location data** — *Scoop* (2006), *Cassandra's Dream* (2007), *You Will Meet a Tall Dark Stranger* (2010) | **High** |
| **G-LOC-03** | **Rome** — the whole *To Rome with Love* set rests on enthusiast guides that disagree with each other | **High** |
| **G-LOC-06** | **Paris, *Coup de Chance*** — no address established, although the official site carries full production notes that may name sites [S008] | **High** |
| **G-LOC-04** | **Los Angeles** — both LA-based films (*Everything You Always Wanted to Know About Sex*, 1972; *Café Society*, 2016) have no specific sites | High |
| **G-LOC-07** | **Coney Island, *Wonder Wheel*** — no specific venue confirmed, including whether the real Wonder Wheel appears | Medium–high |
| **G-LOC-05** | **New York, *A Rainy Day in New York*** — no address established; a cast credit implies but does not confirm the Carlyle Hotel's Bemelmans Bar | Medium–high |
| **G-LOC-01** | **New York, *Whatever Works* (2009), *Deconstructing Harry* (1997), *Small Time Crooks* (2000), *Anything Else* (2003), *Melinda and Melinda* (2004), *Husbands and Wives* (1992), *Alice* (1990), *The Curse of the Jade Scorpion* (2001), *Hollywood Ending* (2002)** — nine New York films with no address-level data | Medium–high |
| **G-LOC-02** | ***A Midsummer Night's Sex Comedy*** (1982) — the upstate New York estate is unidentified | Medium |
| **G-LOC-09** | ***Love and Death*** (1975) — the French and Hungarian locations are unidentified. The oldest unresolved question here | Medium |
| **G-LOC-10** | ***Interiors*** (1978) — the Long Island beach house is unidentified | Medium |
| **G-LOC-11** | Address conflicts to resolve: *Annie Hall*'s "Source Restaurant" (West Hollywood vs. 36 East 68th Street); *Blue Jasmine*'s Shreve & Co. (200 vs. 150 Post Street); the Hayden Planetarium street number (79th vs. 81st) | Medium |
| **G-LOC-12** | *Zelig* (1983) — no filming location established for any of it, which may simply be correct given the compositing method, but should be confirmed rather than assumed | Low–medium |

---

*End of `locations.md`. See [`sources.md`](sources.md) for the source register.*
