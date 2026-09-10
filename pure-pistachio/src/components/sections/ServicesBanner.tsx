import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";

const SERVICES = [
  {
    name: "Cracking",
    description: "Precision shelling calibrated to kernel size and grade.",
  },
  {
    name: "Sorting & Cleaning",
    description: "Multi-pass optical and manual sorting for consistent spec.",
  },
  {
    name: "Packaging",
    description: "Bulk, retail, and custom packs built to your program.",
  },
] as const;

/**
 * Homepage banner teasing the Services section — cracking, sorting, and
 * packaging as one seamless supply chain. Gold background with charcoal text
 * for a warm, high-contrast band. Natural height so both banners remain
 * reachable by scroll on any viewport.
 */
export function ServicesBanner() {
  return (
    <section
      aria-label="Processing services"
      className="flex items-center bg-gold"
    >
      <Container>
        <div className="flex flex-col items-start gap-8 py-[clamp(1.5rem,2vw+0.5rem,2.5rem)] sm:flex-row sm:items-center sm:gap-16">
          {/* Text block */}
          <Reveal className="flex-1">
            <Eyebrow variant="default" className="mb-3 text-charcoal/80">
              Services
            </Eyebrow>
            <Heading as="h2" variant="default" className="mb-4 text-[clamp(2.375rem,3vw+1.25rem,4.5rem)]">
              One supply chain, end to end
            </Heading>
            <Body variant="body" className="mb-8 max-w-xl text-[clamp(1.0625rem,0.3vw+0.9375rem,1.375rem)] text-charcoal-80">
              Cracking, sorting, and packing as one seamless capability —
              tailored to your program&apos;s scale and spec. From raw in-shell to
              finished product, every step under one roof.
            </Body>
            <Link
              href="/services"
              className="group -my-2 inline-flex items-center gap-2 py-2 font-display text-base font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors duration-200 hover:text-charcoal/70"
            >
              See our services
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </Reveal>

          {/* Service cards */}
          <Reveal delay={0.12} className="w-full sm:w-80 lg:w-96">
            <div className="space-y-3.5">
              {SERVICES.map((service, i) => (
                <div
                  key={service.name}
                  className="group service-card relative flex items-start gap-4 rounded-sm border border-stone p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_1px_2px_0_rgb(0_0_0/0.05),0_4px_20px_-4px_rgba(215,163,35,0.3)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/20 font-display text-base font-semibold text-charcoal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase tracking-[0.06em] text-charcoal">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 text-base leading-snug text-charcoal-70">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
