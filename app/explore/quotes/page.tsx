import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import MetaLabel from "@/components/MetaLabel";
import { quotesStandardNote, verifiedStatements } from "@/content/quotes";

export const metadata: Metadata = {
  title: "Quotes",
  description:
    "Lines from the films and the writing — a verified collection, grown slowly.",
};

/**
 * The collection launches deliberately small: only quotations verified
 * against a primary source appear, and the page says why. The
 * restraint is the point — and, on this subject, the story.
 */
export default function QuotesPage() {
  return (
    <Container>
      <PageIntro
        eyebrow="Explore"
        title="Quotes"
        lede="Lines from the films and the writing. This collection publishes a quotation only once it has been verified against a primary source — so it starts small, and it is right."
      />

      <section aria-label="Verified statements" className="border-t border-hairline">
        {verifiedStatements.map((statement) => (
          <figure
            key={statement.text}
            className="border-b border-hairline py-16 sm:py-24"
          >
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-display text-3xl leading-tight tracking-tight sm:text-5xl">
                “{statement.text}”
              </p>
            </blockquote>
            <figcaption className="mx-auto mt-8 max-w-xl text-center">
              <MetaLabel as="span">{statement.attribution}</MetaLabel>
              <p className="mt-2 text-xs text-ink-muted">{statement.source}</p>
              {statement.context ? (
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {statement.context}
                </p>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </section>

      <section aria-label="About this collection" className="py-16 sm:py-20">
        <div className="max-w-2xl">
          <MetaLabel className="mb-5">About This Collection</MetaLabel>
          <div className="space-y-5">
            {quotesStandardNote.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-relaxed text-ink-muted sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Explore" className="border-t border-hairline py-8">
        <Link
          href="/explore"
          className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
        >
          ← All ways to explore
        </Link>
      </nav>
    </Container>
  );
}
