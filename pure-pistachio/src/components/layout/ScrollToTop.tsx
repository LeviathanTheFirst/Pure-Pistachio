"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Resets scroll position to the top whenever the route changes. Next.js App
 * Router normally restores top scroll, but this guarantees it even with
 * `scroll-behavior: smooth` applied globally, which can otherwise leave the
 * page mid-scroll or animate the jump.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
