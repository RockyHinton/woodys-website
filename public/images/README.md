# Image architecture

All website images are committed to the repository and served from
`/public/images`. Only assets actually used by the website belong here —
reference and research material lives in `/research`, not in the repo's
public folder.

## Top-level structure

```
/public/images
  /woody      Portraits and general photography of Woody Allen
  /films      One folder per film, named by slug (see below)
  /books      Book covers and related imagery
  /theatre    Production photography and playbills
  /music      Performance photography
  /archive    Archive material not tied to a single work
  /news       Images for news articles
```

Folders for `books`, `theatre`, `music`, `archive` and `news` are created
when their first asset arrives — do not pre-create empty trees.

## Film folders

Each film gets one folder named by its slug, with subfolders per asset
type. `annie-hall` is committed as the worked example of the convention:

```
/public/images/films/annie-hall/
  poster/              Primary release poster(s)
  hero/                Large widescreen imagery for the film page hero
  stills/              Film stills
  behind-the-scenes/   On-set photography
  artwork/             International and alternate artwork
  archive/             Screenplay pages, documents, production material
```

Create only the subfolders a film actually has assets for.

## Naming

Filenames are lowercase, hyphenated, and meaningful — they should make
sense to both humans and coding agents without opening the file:

```
annie-hall-poster-us-one-sheet.jpg
annie-hall-still-coney-island.jpg
annie-hall-bts-keaton-allen.jpg
woody-portrait-clarinet-1969.jpg
```

Pattern: `<slug>-<type>-<description>[-<year>].<ext>`

## Referencing images

Content records (in `/content`) reference images as `ImageAsset` objects
(see `lib/types.ts`) with a root-relative `src`, required `alt` text, and
optional caption/credit/dimensions:

```ts
poster: {
  src: "/images/films/annie-hall/poster/annie-hall-poster-us-one-sheet.jpg",
  alt: "US one-sheet poster for Annie Hall (1977)",
  width: 1000,
  height: 1500,
}
```

Never hotlink external images or use placeholder services; the
`ImagePlaceholder` component provides the deliberate local treatment
until real photography is added.
