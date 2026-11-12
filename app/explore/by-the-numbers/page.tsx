import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import MetaLabel from "@/components/MetaLabel";
import { statisticGroups, statisticsMethodNote } from "@/content/statistics";

export const metadata: Metadata = {
  title: "By the Numbers",
  description:
    "The career in figures — fifty features, three editors, one language change, counted carefully.",
};

/**
 * The numbers as typography: large display numerals on fine rules,
 * each with its label and its counting rule. Editorial, not a
 * dashboard — no cards, no charts, no KPI grid.
 */
export default function ByTheNumbersPage() {
  return (
    <Container>
      <PageIntro
        eyebrow="Explore"
        title="By the Numbers"
        lede="The career in figures. Every number here is counted from the research record behind this site, and every number keeps its rule — because a figure without its definition is a figure waiting to be contradicted."
      />

      {statisticGroups.map((group) => (
        <section
          key={group.title}
          aria-label={group.title}
          className="border-t border-hairline py-12 sm:py-16"
        >
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-[8rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)]">
            <h2 className="font-display text-2xl leading-tight tracking-tight text-ink-muted sm:sticky sm:top-24 sm:self-start sm:text-3xl">
              {group.title}
            </h2>
            <dl className="max-w-3xl">
              {group.items.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`grid gap-x-8 gap-y-2 py-8 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:items-baseline sm:py-10 ${
                    index > 0 ? "border-t border-hairline" : ""
                  }`}
                >
                  <dt className="order-2 sm:order-1">
                    <span className="font-display text-6xl leading-none tracking-tight sm:text-8xl">
                      {stat.value}
                    </span>
                  </dt>
                  <dd className="order-1 sm:order-2">
                    <MetaLabel as="span">{stat.label}</MetaLabel>
                    {stat.note ? (
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                        {stat.note}
                      </p>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <p className="border-t border-hairline py-10 text-xs leading-relaxed text-ink-muted sm:max-w-xl">
        {statisticsMethodNote}
      </p>

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
