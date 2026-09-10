import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";

/**
 * Homepage banner teasing the About Us section — history, vision, and the
 * team behind the supply. Cream background with charcoal text. Natural height
 * so it stays fully reachable by scroll on every viewport.
 */
export function AboutBanner() {
  return (
    <section
      aria-label="About Pure Pistachio"
      className="flex items-center bg-cream"
    >
      <Container>
        <div className="flex flex-col items-start gap-8 py-[clamp(1.5rem,2vw+0.5rem,2.5rem)] sm:flex-row sm:items-center sm:gap-16">
          {/* Text block */}
          <Reveal className="flex-1">
            <Eyebrow variant="default" className="mb-2">
              About Us
            </Eyebrow>
            <Heading as="h2" variant="default" className="mb-3 text-[clamp(1.75rem,2vw+1rem,3rem)] leading-[1.08]">
              The people behind every pistachio
            </Heading>
            <Body variant="body" className="mb-5 max-w-xl text-base leading-snug text-charcoal-80">
              From our roots in regional orchards to a global supply network —
              discover the history, vision, and operational pipeline that keeps
              quality consistent from harvest to handoff.
            </Body>
            <Link
              href="/about"
              className="group -my-2 inline-flex items-center gap-2 py-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-primary transition-colors duration-200 hover:text-primary-light"
            >
              Explore our story
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </Reveal>

          {/* Decorative highlight card */}
          <Reveal delay={0.12} className="w-full sm:w-80 lg:w-96">
            <div className="rounded-sm border border-stone bg-white p-6 shadow-sm">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                Why Pure Pistachio
              </p>
              <div className="mt-4 h-px w-full bg-stone" aria-hidden="true" />
              <ul className="mt-4 space-y-3.5">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 text-primary"
                      >
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-snug text-charcoal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const HIGHLIGHTS = [
  "Orchard-to-distribution operational pipeline",
  "Decades of pistachio growing heritage",
  "Vision for sustainable, year-round supply",
  "The team driving global quality standards",
] as const;
