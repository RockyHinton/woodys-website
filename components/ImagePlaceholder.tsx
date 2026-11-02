/**
 * Deliberate local placeholder for photography that will arrive later.
 * A quiet surface with a hairline and a small label — no external
 * placeholder services, no decorative noise. Layouts built with this
 * component should already anticipate strong photography.
 */
export default function ImagePlaceholder({
  label,
  aspect = "3/2",
  className = "",
}: {
  /** What will eventually live here, e.g. "Poster" or "Film still". */
  label?: string;
  /** CSS aspect-ratio value, e.g. "2/3" for posters, "21/9" for heroes. */
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label ? `${label} — image to come` : "Image to come"}
      style={{ aspectRatio: aspect }}
      className={`relative flex w-full items-center justify-center border border-hairline bg-surface ${className}`}
    >
      {label ? (
        <span className="px-4 text-center text-[0.625rem] uppercase tracking-[0.22em] text-ink-muted/60">
          {label}
        </span>
      ) : null}
    </div>
  );
}
