import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons/ArrowRight";

const SERVICES = [
  {
    index: 1,
    title: "Cracking",
    secondary: "",
    eyebrow: "Precision shelling",
    image: "/images/Services Page/Cracking.webp",
    imageAlt: "Pistachio cracking process at Pure Pistachio facility",
    description:
      "High-volume cracking lines separate shell from kernel with minimal breakage — delivering clean, whole kernels ready for further processing or direct sale.",
    bullets: [
      "Capacity scalable from pilot batches to continuous industrial runs",
      "Gentle pressure calibration protects kernel integrity",
      "Inline quality checks reject undersized or damaged nuts",
      "Output sorted by grade: whole, half, and pieces",
    ],
    href: "/contact?intent=service",
  },
  {
    index: 2,
    title: "Sorting & Cleaning",
    secondary: "",
    eyebrow: "Grading & defect removal",
    image: "/images/Services Page/Sorting.webp",
    imageAlt: "Pistachio sorting and cleaning stage",
    description:
      "Multi-stage optical and manual sorting removes discoloured kernels, shell fragments, and foreign material — meeting the strictest food-safety and buyer specifications.",
    bullets: [
      "Optical colour sorting at high speed",
      "Manual inspection passes for premium grades",
      "Metal detection and foreign-body removal",
      "Outputs matched to buyer spec sheets",
    ],
    href: "/contact?intent=service",
  },
  {
    index: 3,
    title: "Packaging",
    secondary: "",
    eyebrow: "Retail & bulk formats",
    image: "/images/Services Page/Packing.webp",
    imageAlt: "Pistachio packaging at Pure Pistachio facility",
    description:
      "From 50 kg bulk sacks to branded retail pouches, packaging is configured for your channel — with date coding, labelling, and palletisation handled in-house.",
    bullets: [
      "Bulk sacks, cartons, and retail pouches",
      "Custom branding, labelling, and date coding",
      "Nitrogen-flushed packs for extended shelf life",
      "Palletisation and export-ready packing",
    ],
    href: "/contact?intent=service",
  },
] as const;

export function ServiceShowcase() {
  return (
    <div>
      {SERVICES.map((s, i) => {
        const reversed = i % 2 === 1;

        return (
          <section
            key={s.title}
            id={s.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
            className="relative overflow-hidden bg-cream py-16 lg:h-dvh lg:min-h-[600px] lg:py-24"
          >
            {/* Alternating background with subtle texture */}
            <div
              aria-hidden
              className={`absolute inset-0 -z-10 ${
                i % 2 === 0
                  ? "bg-[linear-gradient(135deg,#EAF2D3_0%,#dce8c9_100%)]"
                  : "bg-[linear-gradient(135deg,#f3fbe0_0%,#EAF2D3_100%)]"
              }`}
            />

            {/* Vertical accent lines — desktop gutters only; they'd cross the
                stacked photo/text on mobile. */}
            <div
              aria-hidden
              className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block lg:left-16"
            />
            <div
              aria-hidden
              className="absolute right-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block lg:right-16"
            />

            <Container className="relative z-10 h-full px-5 sm:px-10 lg:px-20">
              <div
                className={`flex h-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-[4.6rem] ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image column — above the text on mobile (natural aspect),
                    side-by-side and dimension-fitted on lg+. */}
                <Reveal
                  as="div"
                  className="w-full shrink-0 overflow-hidden rounded-sm lg:w-[56%]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </Reveal>

                {/* Text column */}
                <div className="min-w-0 flex-1">
                  <Reveal>
                    <div className="relative">
                      <Eyebrow className="text-primary">{s.eyebrow}</Eyebrow>

                      <Heading
                        as="h2"
                        className="mt-3 text-[clamp(2.4rem,4.2vw+0.6rem,4.2rem)] leading-[1.05]"
                      >
                        {s.title}
                        {s.secondary && (
                          <span className="ml-2 text-primary">({s.secondary})</span>
                        )}
                      </Heading>

                      <p className="mt-4 max-w-lg text-[1.2rem] leading-relaxed text-charcoal-70">
                        {s.description}
                      </p>

                      {/* Compact bullet list */}
                      <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {s.bullets.map((b, j) => (
                          <li
                            key={b}
                            className="group flex items-start gap-3 text-[0.975rem] leading-snug text-charcoal-70"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                              {j + 1}
                            </span>
                            <span className="pt-0.5">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={s.href}
                        className="mt-6 inline-flex items-center gap-2 font-display text-[1.125rem] font-semibold uppercase tracking-[0.12em] text-primary transition-all hover:text-primary-light"
                      >
                        <span className="border-b-2 border-primary/30 pb-0.5 transition-colors hover:border-primary">
                          Talk to us about this service
                        </span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Container>

            {/* Top gradient divider below the header/hero (first service only) */}
            {i === 0 && (
              <div
                aria-hidden
                className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent lg:left-16 lg:right-16"
              />
            )}
            {/* Bottom gradient divider — between services and above the footer on the last */}
            <div
              aria-hidden
              className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent lg:left-16 lg:right-16"
            />
          </section>
        );
      })}
    </div>
  );
}
