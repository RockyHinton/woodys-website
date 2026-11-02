import MetaLabel from "@/components/MetaLabel";

/**
 * Opening block for a section landing page: eyebrow, large display
 * title and an editorial lede, with generous space beneath the header.
 */
export default function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
      {eyebrow ? <MetaLabel className="mb-5">{eyebrow}</MetaLabel> : null}
      <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
