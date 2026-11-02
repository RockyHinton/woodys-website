# Research

Reference material for development lives here — most importantly the
forthcoming Markdown research document containing verified information
about Woody Allen's films, career and other work.

Rules:

- Files in this folder are a **reference source** for building content.
  They are never imported by application code and never become the
  runtime database.
- Actual website content is authored as structured TypeScript records
  under `/content`, conforming to the types in `lib/types.ts`.
- When populating content from research, carry facts over deliberately —
  do not script a bulk conversion of this folder into `/content`.
