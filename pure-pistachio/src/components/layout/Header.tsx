"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { NAV_ITEMS, contact } from "@/lib/site";
import { Package, Truck, Info, type LucideIcon } from "lucide-react";

const navIcons: Record<string, LucideIcon> = {
  Products: Package,
  Services: Truck,
  About: Info,
};

const navItems = NAV_ITEMS.filter(
  (item) => item.label !== "Contact",
).map((item) => ({
  name: item.label,
  url: item.href,
  icon: navIcons[item.label] ?? Info,
}));

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoDark, setLogoDark] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // Detect when dark sections overlap the header
  useEffect(() => {
    const darkEls = document.querySelectorAll("[data-dark]");
    if (!darkEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyDark = entries.some((e) => e.isIntersecting);
        setLogoDark(anyDark);
      },
      { rootMargin: "-60px 0px -100% 0px", threshold: 0 },
    );

    darkEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Desktop: logo (far left) + centered nav pill + contact (right) */}
      <div className="hidden sm:block relative pt-4">
        {/* Logo at far left of the header */}
        <Link
          href="/"
          aria-label="Pure Pistachio home"
          className="absolute left-4 top-1/2 -translate-y-1/2"
        >
          <Logo linked={false} onDark={logoDark} />
        </Link>

        <div className="relative mx-auto max-w-[88rem] px-10 py-8">
          {/* Nav pill — centered via absolute positioning */}
          <nav
            aria-label="Primary"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex items-center gap-1 bg-cream/95 backdrop-blur-xl border border-stone/30 rounded-full shadow-lg py-1 px-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = normalizePath(pathname) === normalizePath(item.url);

                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors w-28 text-center",
                      "text-charcoal/80 hover:text-primary",
                      isActive && "bg-stone/20 text-primary",
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-primary/5 rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Contact Us pill — right side */}
          <Link
            href={contact.salesHref}
            className="absolute right-10 top-1/2 -translate-y-1/2 bg-primary text-white backdrop-blur-xl border border-primary/50 rounded-full px-6 py-2 shadow-lg font-semibold text-sm transition-all hover:bg-primary-light hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile: traditional header with hamburger */}
      <div className="sm:hidden">
        <div className="bg-cream/95 backdrop-blur-sm border-b border-stone/30">
          <div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-4">
            <Link
              href="/"
              aria-label="Pure Pistachio home"
            >
              <Logo linked={false} />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="relative z-20 inline-flex h-11 w-11 items-center justify-center text-charcoal focus-visible:outline-primary"
            >
              <span aria-hidden className="relative block h-4 w-6">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform",
                    menuOpen && "top-1/2 -translate-y-1/2 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity",
                    menuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-transform",
                    menuOpen && "bottom-auto top-1/2 -translate-y-1/2 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[4.5rem] z-40 origin-top bg-cream/95 backdrop-blur-sm border-b border-stone/30 px-5 pb-10 pt-6"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => {
                const isActive = normalizePath(pathname) === normalizePath(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cnMobileNavLink(isActive)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="mt-6 border-t border-stone/30 pt-6">
              <ButtonLink
                href={contact.salesHref}
                size="lg"
                className="w-full"
              >
                Contact Us
              </ButtonLink>
              <div className="mt-4 flex items-center justify-between text-sm">
                <Link
                  href={contact.salesHref}
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  {contact.salesLabel}
                </Link>
                <Link
                  href={contact.regionHref}
                  className="text-charcoal-70 underline-offset-2 hover:underline"
                >
                  {contact.regionLabel}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

function cnMobileNavLink(isActive: boolean) {
  return cn(
    "block rounded-sm px-2 py-3 font-display text-2xl font-semibold uppercase tracking-wide",
    isActive ? "text-primary" : "text-charcoal hover:text-primary",
  );
}

function normalizePath(path: string): string {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}