import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { NAV_ITEMS } from "@/lib/site";
import { CONTACT_DATA } from "@/lib/contactData";

const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export function Footer() {
  return (
    <footer data-dark className="bg-primary text-cream">
      <div className="mx-auto flex min-h-[44dvh] w-full max-w-[88rem] flex-col px-5 py-10 sm:px-10 md:py-12 lg:px-20">
        {/* Main columns */}
        <div className="grid flex-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-cream-80">
              Pure Pistachio supplies premium pistachios to buyers of every size — sourcing, processing, formats, and volume under one roof.
            </p>
            <a
              href={CONTACT_DATA.emailHref}
              className="mt-6 inline-block font-display text-sm font-semibold uppercase tracking-[0.12em] text-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {CONTACT_DATA.email}
            </a>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-cream-70">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-cream-80 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-cream-70">
              Contact
            </h3>
            <address className="mt-5 text-[0.9375rem] not-italic leading-relaxed text-cream-80">
              {CONTACT_DATA.address.map((line) => (
                <span key={line}>
                  {line}<br />
                </span>
              ))}
            </address>
            {CONTACT_DATA.whatsappDisplay && (
              <p className="mt-3 text-[0.9375rem] text-cream-80">
                Whatsapp: {CONTACT_DATA.whatsappDisplay}
              </p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white-25 pt-6 text-[0.8125rem] sm:flex-row sm:items-center">
          <p className="text-cream-70">
            © {new Date().getFullYear()} Pure Pistachio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-cream-70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}