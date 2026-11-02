/**
 * Small uppercase metadata label — eyebrows, years, roles, categories.
 */
export default function MetaLabel({
  children,
  className = "",
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "dt" | "figcaption";
}) {
  return (
    <Tag
      className={`text-[0.6875rem] uppercase tracking-[0.18em] text-ink-muted ${className}`}
    >
      {children}
    </Tag>
  );
}
