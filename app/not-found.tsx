import Container from "@/components/Container";
import MetaLabel from "@/components/MetaLabel";
import Trail from "@/components/Trail";

export default function NotFound() {
  return (
    <Container>
      <div className="py-32 sm:py-48">
        <MetaLabel className="mb-5">404</MetaLabel>
        <h1 className="font-display text-5xl tracking-tight sm:text-7xl">
          Not every search ends well.
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">
          The page you were looking for doesn&apos;t exist, or hasn&apos;t
          been built yet.
        </p>
        <Trail label="Back to the Start" href="/" className="mt-8" />
      </div>
    </Container>
  );
}
