import type { VerifiedStatement } from "@/lib/types";

/**
 * Quotes page content (/explore/quotes).
 *
 * Source: research/woody-allen-master-dossier/quotes.md. That file's
 * standard is deliberate: a quotation is published only when verified
 * against a primary source. Exactly two statements meet the bar in the
 * current research pass; no film dialogue does. This page therefore
 * launches small, and says why — the restraint is itself the content.
 * Key sources: [S004][S025][S026].
 */

export const verifiedStatements: VerifiedStatement[] = [
  {
    text: "If you're not failing every now and again, it's a sign you're not doing anything very innovative.",
    attribution: "Woody Allen",
    source: "woodyallen.com",
    context:
      "Published on Allen's own official biography page. The original occasion is not recorded.",
  },
  {
    text: "…I did say that 80 percent of success is showing up.",
    attribution: "Woody Allen, in a letter",
    source: "The New York Times, “On Language”, August 13, 1989",
    context:
      "The maxim had circulated in several versions for years. When the columnist William Safire asked him about it directly, Allen confirmed by letter that he had said it — a rare case of an attribution settled on the record.",
  },
];

/** Editorial note on the collection's standard, shown on the page. */
export const quotesStandardNote: string[] = [
  "Woody Allen is among the most quoted — and most misquoted — figures in American culture. Most lines attributed to him circulate without a source, in wordings that have drifted over decades; lines spoken by his characters are routinely presented as his own opinions.",
  "This collection therefore holds itself to a simple rule: a quotation appears here only once it has been verified against a primary source — the film itself, a published screenplay, or the original publication. It will grow as verification proceeds. A small collection that is right is worth more than a large one that is almost right.",
];
