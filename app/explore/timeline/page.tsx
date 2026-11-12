import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MetaLabel from "@/components/MetaLabel";
import { timelineEvents } from "@/content/timeline";
import type { TimelineEvent } from "@/lib/types";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "The work through time — films, books, theatre and music in one chronology, 1935 to now.",
};

/**
 * A curated chronology, not a database dump: the events needed to
 * read the arc of the career. Decades are the large typographic
 * markers; emphasised events carry display type and room for future
 * imagery. No dots, no connecting lines.
 */

const CATEGORY_LABELS: Record<TimelineEvent["category"], string> = {
  film: "Film",
  writing: "Writing",
  theatre: "Theatre",
  television: "Television",
  music: "Music",
  award: "Honours",
  career: "Career",
  life: "Life",
};

function groupByDecade(events: TimelineEvent[]) {
  const groups: { label: string; events: TimelineEvent[] }[] = [];
  for (const event of events) {
    const label =
      event.year < 1960 ? "1935–1959" : `${Math.floor(event.year / 10) * 10}s`;
    const current = groups[groups.length - 1];
    if (current && current.label === label) {
      current.events.push(event);
    } else {
      groups.push({ label, events: [event] });
    }
  }
  return groups;
}

function EventTitle({ event }: { event: TimelineEvent }) {
  const className = event.emphasis
    ? "font-display text-2xl leading-tight tracking-tight sm:text-4xl"
    : "text-base leading-snug sm:text-lg";
  if (event.href) {
    return (
      <h3 className={className}>
        <Link
          href={event.href}
          className="underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-ink-muted"
        >
          {event.title}
        </Link>
      </h3>
    );
  }
  return <h3 className={className}>{event.title}</h3>;
}

export default function TimelinePage() {
  const decades = groupByDecade(timelineEvents);

  return (
    <Container>
      <PageIntro
        eyebrow="Explore"
        title="Timeline"
        lede="The work through time. Films, books, theatre and music in one chronology — a selection of the moments that carry the arc, from Brooklyn in 1935 to the production now shooting in Madrid."
      />

      {decades.map((decade) => (
        <section
          key={decade.label}
          aria-label={decade.label}
          className="border-t border-hairline py-12 sm:py-16"
        >
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-[8rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)]">
            <h2 className="font-display text-4xl leading-none tracking-tight text-ink-muted sm:sticky sm:top-24 sm:self-start sm:text-5xl">
              {decade.label}
            </h2>
            <ol className="max-w-3xl">
              {decade.events.map((event, index) => (
                <li
                  key={`${event.year}-${event.title}`}
                  className={`grid gap-x-6 gap-y-1 py-6 sm:grid-cols-[5rem_minmax(0,1fr)] ${
                    index > 0 ? "border-t border-hairline" : ""
                  } ${event.emphasis ? "py-9 sm:py-12" : ""}`}
                >
                  <p
                    className={`font-display tabular-nums tracking-tight ${
                      event.emphasis
                        ? "text-2xl text-ink sm:text-4xl"
                        : "text-lg text-ink-muted"
                    }`}
                  >
                    {event.yearLabel ?? event.year}
                  </p>
                  <div>
                    <EventTitle event={event} />
                    {event.detail ? (
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
                        {event.detail}
                      </p>
                    ) : null}
                    {event.category !== "film" ? (
                      <MetaLabel className="mt-3">
                        {CATEGORY_LABELS[event.category]}
                      </MetaLabel>
                    ) : null}
                    {event.emphasis && event.category === "film" ? (
                      <div className="mt-7">
                        <ImagePlaceholder
                          label={event.title}
                          aspect="21/9"
                        />
                      </div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}

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
