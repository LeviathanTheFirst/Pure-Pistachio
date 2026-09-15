"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/StatCard";

const TEAM = [
  { name: "Emad Mohajeri", title: "+98 913 193 0785", image: "/images/About Page/IMG_1798.webp" },
  { name: "Moslem Keshavarzi", title: "+98 913 391 8204", image: "/images/About Page/IMG_1799.webp" },
] as const;

const MILESTONES = [
  { year: "2000", event: "Our journey began, planting the first pistachio orchards and laying the foundation of the business." },
  { year: "2020", event: "We formally established the company, expanding into full-scale processing and services." },
  { year: "Today", event: "Fully operational and ready to fulfill your orders, backed by two decades of expertise." },
] as const;

const STATS = [
  { value: "+20,000 Tons", label: "Orders Delivered" },
  { value: "+10,000 Tons", label: "Annual Output" },
  { value: "On demand", label: "Order Readiness" },
] as const;

/** Editorial company-narrative sections for the About page. */
export function AboutNarrative() {
  return (
    <Section spacing="sm" className="bg-cream">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Management</Eyebrow>
          <Heading
            as="h2"
            className="mt-4 font-bold text-[clamp(2.25rem,4vw+1rem,4.5rem)] leading-[1.1] sm:leading-[1.05]"
          >
            Our Founders
          </Heading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={i} delay={0.05 * i} as="figure" className="h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.image}
                alt={m.name}
                width={625}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[5/4] rounded-sm object-cover"
              />
              <figcaption className="mt-4">
                <p className="font-display text-lg font-semibold text-charcoal">
                  {m.name}
                </p>
                <p className="text-sm uppercase tracking-[0.1em] text-primary">
                  {m.title}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Our History timeline/narrative block. */
export function AboutHistory() {
  return (
    <Section spacing="sm" className="bg-white">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Our history</Eyebrow>
          <Heading
            as="h2"
            className="mt-4 font-bold text-[clamp(2.25rem,4vw+1rem,4.5rem)] leading-[1.1] sm:leading-[1.05]"
          >
            A short timeline
          </Heading>
        </Reveal>
        <div className="mt-12 space-y-12">
          {MILESTONES.map((m, i) => (
            <Reveal key={i} delay={0.05 * i} className="relative max-w-xl pl-10">
              <span className="absolute left-0 top-1 flex h-2 w-2 rounded-full bg-primary" />
              <p className="font-display text-[1.1375rem] font-semibold uppercase tracking-[0.14em] text-primary">
                {m.year}
              </p>
              <p className="mt-1 text-[1.21875rem] leading-relaxed text-charcoal-80">
                {m.event}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Goals & Vision — large pull-quote style. */
export function AboutVision() {
  return (
    <Section spacing="sm" data-dark className="bg-primary">
      <Container className="max-w-5xl text-center">
        <Reveal>
          <Eyebrow variant="onDark" className="text-2xl font-semibold uppercase tracking-[0.12em] text-gold">
            Goals &amp; Vision
          </Eyebrow>
          <blockquote className="mt-6 text-balance font-display text-[clamp(1.5rem,2vw+0.75rem,2.75rem)] font-bold leading-[1.12] text-white">
            Every Scale, Every Order, Delivered with Confidence — Committed to Quality.
          </blockquote>
        </Reveal>
      </Container>
    </Section>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** Our Stats — reuse the stat-card pattern. */
export function AboutStats() {
  const reduce = useReducedMotion();

  return (
    <Section spacing="sm" data-dark className="bg-primary py-[clamp(1rem,1.5vw+0.5rem,2rem)]">
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: -32 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <Container>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-6 sm:divide-x sm:divide-white-25">
            {STATS.map((s) => (
              <StatCard
                key={s.label}
                value={s.value}
                label={s.label}
                className="sm:py-2 sm:px-6 lg:py-3 lg:px-7"
                metricClassName="text-pretty text-[clamp(2.5rem,4vw+1rem,4.5rem)] font-black"
                labelClassName="mt-1.5 text-base font-semibold uppercase tracking-[0.14em] text-cream"
              />
            ))}
          </div>
        </Container>
      </motion.div>
    </Section>
  );
}