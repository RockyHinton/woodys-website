import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import MetaLabel from "@/components/MetaLabel";
import { EXPLORE_EXPERIENCES } from "@/content/site";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "New ways through the work — timeline, numbers, quotes, map and more.",
};

/**
 * An index of ways through the archive. Each experience is one clear
 * concept; live experiences lead, foundations follow with a quiet
 * "in development" marker.
 */
export default function ExplorePage() {
  return (
    <Container>
      <PageIntro
        eyebrow="New Ways In"
        title="Explore"
        lede="The work can be read in order, or it can be wandered. Each of these is a different route through the same six decades."
      />
      <ul className="border-t border-hairline">
        {EXPLORE_EXPERIENCES.map((experience) => (
          <li key={experience.slug} className="border-b border-hairline">
            <Link
              href={experience.href}
              className="group grid gap-x-8 gap-y-3 py-10 sm:grid-cols-2 sm:items-baseline sm:py-14"
            >
              <div>
                <h2 className="font-display text-4xl leading-none tracking-tight sm:text-5xl">
                  <span className="underline decoration-transparent underline-offset-8 transition-colors duration-300 group-hover:decoration-ink-muted">
                    {experience.title}
                  </span>
                </h2>
                <p className="mt-4 font-display text-xl tracking-tight text-ink-muted">
                  {experience.concept}
                </p>
              </div>
              <div className="sm:justify-self-end sm:text-right">
                <p className="max-w-sm text-sm leading-relaxed text-ink-muted sm:ml-auto">
                  {experience.description}
                </p>
                {experience.status === "foundation" ? (
                  <MetaLabel as="span" className="mt-3 inline-block">
                    In Development
                  </MetaLabel>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
