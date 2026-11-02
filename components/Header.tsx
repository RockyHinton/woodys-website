"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/content/site";

/**
 * Global header. Desktop: section links left, wordmark right (the
 * wordmark is the home link). Mobile: wordmark left, menu button
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
      <div className="mx-auto flex h-16 w-full max-w-[76rem] items-center justify-between px-5 sm:px-8">
        {/* Desktop navigation — left */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-sm transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button — left */}
        <button
          type="button"
          className="text-sm text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Wordmark — right, acts as the home link */}
        <Link
          href="/"
          onClick={closeMenu}
          className="font-display text-xl tracking-tight transition-opacity duration-200 hover:opacity-80"
        >
          Woody Allen
        </Link>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background md:hidden"
        >
          <ul className="flex flex-col px-5 pt-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-hairline">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-5 font-display text-4xl tracking-tight ${
                    isActive(item.href) ? "text-ink" : "text-ink-muted"
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
