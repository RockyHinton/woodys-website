import Link from "next/link";
import MetaLabel from "@/components/MetaLabel";

/**
 * Header for a homepage or landing-page section: eyebrow, display
 * title, optional description and optional "view all" link, sitting
 * on a hairline.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  link,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  link?: { label: string; href: string };
  /** Heading id, for sections labelled via aria-labelledby. */
  id?: string;
}) {
  return (
    <div className="border-b border-hairline pb-5">
      <div className="flex items-end justify-between gap-6">
        <div>
          {eyebrow ? <MetaLabel className="mb-3">{eyebrow}</MetaLabel> : null}
          <h2
            id={id}
            className="font-display text-3xl leading-none tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
        </div>
        {link ? (
          <Link
            href={link.href}
            className="mb-1 shrink-0 text-sm text-ink-muted underline decoration-hairline-strong underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink-muted"
          >
            {link.label}
          </Link>
        ) : null}
      </div>
      {description ? (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
