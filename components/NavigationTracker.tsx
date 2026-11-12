"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Records the previously visited path in sessionStorage so that Trail
 * links can tell "the user came from the page I point to" apart from
 * a direct landing. Renders nothing; mounted once in the root layout.
 */
export default function NavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const current = sessionStorage.getItem("wa:path");
      if (current && current !== pathname) {
        sessionStorage.setItem("wa:prev-path", current);
      }
      sessionStorage.setItem("wa:path", pathname);
    } catch {
      // Storage unavailable (private mode etc.) — Trail degrades to a plain link.
    }
  }, [pathname]);

  return null;
}
