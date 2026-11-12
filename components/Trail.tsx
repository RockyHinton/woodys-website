"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * The site's single "way back" element: a quiet small-caps label with
 * an arrow that glides on hover.
 *
 * It always points somewhere predictable (the labelled destination),
 * but when the user actually came from that page it steps back through
 * history instead — so they return to the exact position they left,
 * scroll included, rather than the top of the list.
 */
export default function Trail({
  label,
  href,
  className = "",
}: {
  label: string;
  href: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={(event) => {
        try {
          if (sessionStorage.getItem("wa:prev-path") === href) {
            event.preventDefault();
            router.back();
          }
        } catch {
          // Fall through to normal navigation.
        }
      }}
      className={`group inline-flex items-baseline gap-2 text-[0.6875rem] uppercase tracking-[0.18em] text-ink-muted transition-colors duration-300 hover:text-ink ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1 motion-reduce:transform-none"
      >
        ←
      </span>
      <span>{label}</span>
    </Link>
  );
}
