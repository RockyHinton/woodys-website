import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { EXPLORE_EXPERIENCES } from "@/content/site";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "New ways of discovering relationships across the work — map, timeline, quotes and more.",
};

export default function ExplorePage() {
  return (
    <Container>
      <PageIntro
        eyebrow="New Ways In"
        title="Explore"
        lede="The work can be read in order, or it can be wandered. These experiences — each in development — offer different routes through the same body of work."
      />
      <div className="grid gap-x-8 gap-y-14 border-t border-hairline pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {EXPLORE_EXPERIENCES.map((experience) => (
          <Link
            key={experience.slug}
            href={experience.href}
            className="group block"
          >
            <div className="overflow-hidden border border-hairline transition-colors duration-300 group-hover:border-hairline-strong">
              <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none">
                <ImagePlaceholder
                  label={experience.title}
                  aspect="4/3"
                  className="border-0"
                />
              </div>
            </div>
            <h2 className="mt-5 font-display text-2xl tracking-tight sm:text-3xl">
              <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-ink-muted">
                {experience.title}
              </span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
              {experience.description}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
