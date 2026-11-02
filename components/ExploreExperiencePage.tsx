import Link from "next/link";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { EXPLORE_EXPERIENCES } from "@/content/site";

/**
 * Foundation template for a future Explore experience (Map, Timeline,
 * On This Day, Quotes, By the Numbers). Establishes where each
 * experience will live; the interactive functionality comes later.
 */
export default function ExploreExperiencePage({
  slug,
  placeholderLabel,
  note,
}: {
  slug: (typeof EXPLORE_EXPERIENCES)[number]["slug"];
  /** What the main stage will eventually hold, e.g. "Interactive map". */
  placeholderLabel: string;
  /** One sentence on what is planned for this experience. */
  note: string;
}) {
  const experience = EXPLORE_EXPERIENCES.find((e) => e.slug === slug)!;

  return (
    <Container>
      <PageIntro
        eyebrow="Explore"
        title={experience.title}
        lede={experience.description}
      />
      <div className="border-t border-hairline pt-12">
        <ImagePlaceholder label={placeholderLabel} aspect="16/9" />
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">
          {note}
        </p>
      </div>
      <nav aria-label="Explore" className="mt-16 border-t border-hairline pt-8">
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
