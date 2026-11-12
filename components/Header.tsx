"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/content/site";

/**
 * Global header. Desktop: wordmark left (the home link), section
 * links right, each with a fine underline that draws in on hover and
 * stays put on the active section. Mobile: wordmark left, menu button
 * right, full-screen overlay menu.
 */
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Lock page scroll while the overlay is open.
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background">
      <div className="mx-auto flex h-16 w-full max-w-[76rem] items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        {/* Wordmark — left, acts as the home link */}
        <Link
          href="/"
          onClick={closeMenu}
          className="font-display text-xl tracking-tight transition-opacity duration-300 hover:opacity-70"
        >
          Woody Allen
        </Link>

        {/* Desktop navigation — right */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-block py-1.5 text-sm transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300 after:ease-out motion-reduce:after:transition-none ${
                      active
                        ? "text-ink after:scale-x-100"
                        : "text-ink-muted after:scale-x-0 hover:text-ink hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu button — right */}
        <button
          type="button"
          className="py-2 text-sm text-ink transition-colors duration-200 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background animate-[menu-enter_240ms_ease-out] sm:top-[4.5rem] md:hidden"
        >
          <ul className="flex flex-col px-5 pt-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-hairline">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-5 font-display text-4xl tracking-tight transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-ink"
                      : "text-ink-muted active:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
