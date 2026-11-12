/**
 * Poster placeholder at the correct 2:3 one-sheet proportion.
 *
 * Until real artwork arrives, the placeholder works as a quiet
 * typographic poster: the title set in the display face, the year
 * beneath a short rule. Deliberately designed, not "coming soon".
 * aria-hidden — the card caption carries the information for
 * assistive technology.
 */
export default function PosterPlaceholder({
  title,
  year,
  className = "",
}: {
  title: string;
  year?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      style={{ aspectRatio: "2/3" }}
      className={`relative flex w-full items-center justify-center border border-hairline bg-surface px-5 ${className}`}
    >
      <span className="text-center font-display text-xl leading-[1.1] tracking-tight text-ink-muted sm:text-2xl">
        {title}
      </span>
      {year ? (
        <span className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 pb-4">
          <span className="h-px w-5 bg-hairline-strong" />
          <span className="text-[0.625rem] tabular-nums tracking-[0.22em] text-ink-muted/70">
            {year}
          </span>
        </span>
      ) : null}
    </div>
  );
}
