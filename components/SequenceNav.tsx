import Link from "next/link";
import Trail from "@/components/Trail";

interface SequenceItem {
  /** The neighbouring item's title, set in display type. */
  label: string;
  /** Small context line, e.g. "Earlier · 1978". */
  meta: string;
  href: string;
}

/**
 * The uniform navigation block that closes a detail page: the way back
 * (Trail), flanked where a sequence exists — the filmography, for
 * instance — by the previous and next items, so a reader can move
 * through the collection without returning to the list.
 */
export default function SequenceNav({
  ariaLabel,
  parent,
  previous,
  next,
}: {
  ariaLabel: string;
  parent: { label: string; href: string };
  previous?: SequenceItem;
  next?: SequenceItem;
}) {
  if (!previous && !next) {
    return (
      <nav
        aria-label={ariaLabel}
        className="mt-16 border-t border-hairline pt-8"
      >
        <Trail label={parent.label} href={parent.href} />
      </nav>
    );
  }

  return (
    <nav aria-label={ariaLabel} className="mt-20 border-t border-hairline pt-10">
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center">
        <div>
          {previous ? (
            <Link href={previous.href} className="group inline-block">
              <span className="block text-[0.6875rem] uppercase tracking-[0.18em] text-ink-muted">
                <span
                  aria-hidden="true"
                  className="mr-2 inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1 motion-reduce:transform-none"
                >
                  ←
                </span>
                {previous.meta}
              </span>
              <span className="mt-2 block font-display text-xl tracking-tight sm:text-2xl">
                <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-ink-muted">
                  {previous.label}
                </span>
              </span>
            </Link>
          ) : null}
        </div>
        <div className="sm:px-6">
          <Trail label={parent.label} href={parent.href} />
        </div>
        <div className="sm:text-right">
          {next ? (
            <Link href={next.href} className="group inline-block sm:text-right">
              <span className="block text-[0.6875rem] uppercase tracking-[0.18em] text-ink-muted">
                {next.meta}
                <span
                  aria-hidden="true"
                  className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                >
                  →
                </span>
              </span>
              <span className="mt-2 block font-display text-xl tracking-tight sm:text-2xl">
                <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-ink-muted">
                  {next.label}
                </span>
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
