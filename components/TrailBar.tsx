import Container from "@/components/Container";
import Trail from "@/components/Trail";

/**
 * The slim band directly beneath the global header that carries the
 * way back on detail pages — the same element, in the same place, on
 * every page that sits below a section.
 */
export default function TrailBar({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <nav aria-label="Back" className="border-b border-hairline">
      <Container className="flex h-11 items-center">
        <Trail label={label} href={href} />
      </Container>
    </nav>
  );
}
