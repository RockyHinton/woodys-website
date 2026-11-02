import Link from "next/link";
import { NAV_ITEMS } from "@/content/site";
import Container from "@/components/Container";

// Cached so the year can be prerendered (required by Cache Components);
// it is baked in at build time, which is fine for a fully static site.
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();
  return (
    <footer className="mt-24 border-t border-hairline sm:mt-32">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          <Link
            href="/"
            className="font-display text-2xl tracking-tight transition-opacity duration-200 hover:opacity-80"
          >
            Woody Allen
          </Link>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:text-right">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-xs text-ink-muted">
          © {year} Woody Allen
        </p>
      </Container>
    </footer>
  );
}
