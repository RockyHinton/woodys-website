# woodyallen.com

The official website of Woody Allen — foundation and skeleton phase.

A dark, calm, editorial interface for the complete body of work: films,
writing, theatre, music and the archive. The interface serves the work;
the images and text provide the light.

## Running the project

```bash
npm install
npm run dev     # development server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

No database, no CMS, no authentication, no external services. The site
builds entirely from this repository: clone → `npm install` → `npm run
build`. The deployment path is local development → GitHub → Replit
(standard Node/Next.js deployment).

## Architecture

```
/app          Routes (Next.js App Router). Templates, not content.
/components   Reusable presentation components.
/content      Website content as structured TypeScript records.
/lib          Types (lib/types.ts) and content accessors.
/public       Static assets committed with the app.
  /images     See public/images/README.md for the asset convention.
  /fonts      Licensed webfonts (Windsor — see below).
/research     Reference material for development. Never imported by
              application code; not the runtime database.
```

Content is separated from presentation throughout: pages render records
from `/content` through shared templates. Individual films never get
their own React page — `/films/[slug]` renders every film from its
`Film` record (see `lib/types.ts`), and sections appear only where a
record carries their data. The same pattern will extend to books,
theatre, music, television, archive items and news.

## Sections

- **Films** — the finished work.
- **Beyond Film** — books & writing, theatre, music, television.
- **Archive** — the original material behind the work.
- **Explore** — new ways of discovering relationships across the work
  (Map, Timeline, On This Day, Quotes, By the Numbers — foundations
  only; the interactive experiences are deliberately not built yet).
- **Biography** — long-form editorial.
- **News** — current work.

## Design system

Tokens are defined in `app/globals.css` and exposed as Tailwind
utilities (Tailwind CSS v4, CSS-first configuration):

| Token | Value | Utility |
| --- | --- | --- |
| `--background` | `#0C0C0B` | `bg-background` |
| `--surface` | `#131312` | `bg-surface` |
| `--ink` | `#F1EEE8` | `text-ink` |
| `--ink-muted` | `#A8A39B` | `text-ink-muted` |
| `--hairline` | `#292825` | `border-hairline` |
| `--hairline-strong` | `#3A3833` | `border-hairline-strong` |
| `--font-display` | Windsor (fallback: serif) | `font-display` |
| `--font-body` | Helvetica Neue stack | `font-body` |

No accent colour: posters, stills and photography will provide the
colour. No gradients, no glassmorphism, hairlines not boxes, restrained
motion (and `prefers-reduced-motion` is respected globally).

## Typography — installing Windsor Light Condensed

`--font-display` is reserved for **Windsor Light Condensed**. Until the
licensed webfont is provided, the stack falls through to a temporary
serif fallback (Georgia et al.) so display moments already read
differently from body text.

When the licensed `.woff2` arrives:

1. Place it at `public/fonts/windsor-light-condensed.woff2`.
2. Add to the top of `app/globals.css`:

   ```css
   @font-face {
     font-family: "Windsor Light Condensed";
     src: url("/fonts/windsor-light-condensed.woff2") format("woff2");
     font-weight: 300;
     font-style: normal;
     font-display: swap;
   }
   ```

3. Done — `--font-display` already names the family, so every display
   moment picks it up without further changes. Review letter-spacing
   and sizes once the real face is in place.

Do not add font files from unofficial sources.

## Content workflow

1. Verified research lands in `/research` (reference only).
2. Content is authored by hand as records in `/content` (one file per
   film, registered in `content/films/index.ts`).
3. Images are committed under `/public/images` following
   `public/images/README.md`, and referenced from content records with
   required `alt` text.

The news entry and the two film records currently in `/content` are
samples/placeholders for developing the templates — not final content.
