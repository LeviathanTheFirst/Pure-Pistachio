import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StatCard } from "@/components/ui/StatCard";

const TEAM = [
  { name: "TODO: Name", title: "TODO: Title" },
  { name: "TODO: Name", title: "TODO: Title" },
  { name: "TODO: Name", title: "TODO: Title" },
  { name: "TODO: Name", title: "TODO: Title" },
] as const;

const MILESTONES = [
  { year: "TODO: Year", event: "[TODO: founding milestone]" },
  { year: "TODO: Year", event: "[TODO: processing expansion]" },
  { year: "TODO: Year", event: "[TODO: market / export milestone]" },
] as const;

const STATS = [
  { value: "TODO: figure", label: "Grown/acreage", note: "[TODO: real figure]" },
  { value: "TODO: figure", label: "Annual output", note: "[TODO: real figure]" },
  { value: "TODO: figure", label: "Years of experience", note: "[TODO: real figure]" },
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
            The team behind the orchard
          </Heading>
          <Body variant="lead" className="mt-5">
            [TODO: leadership intro — placeholder]
          </Body>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={i} delay={0.05 * i} as="figure" className="h-full">
              <PlaceholderImage
                label="Team photo — placeholder"
                tone={i % 2 === 0 ? "green" : "deep"}
                aspect="aspect-[4/5]"
                className="w-full rounded-sm"
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
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {m.year}
              </p>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-charcoal-80">
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
      <Container className="max-w-3xl text-center">
        <Reveal>
          <Eyebrow variant="onDark" className="text-gold">
            Goals &amp; Vision
          </Eyebrow>
          <blockquote className="mt-6 font-display text-h2 font-bold leading-[1.04] text-white">
            [TODO: mission/vision statement]
          </blockquote>
        </Reveal>
      </Container>
    </Section>
  );
}

/** Our Stats — reuse the stat-card pattern. */
export function AboutStats() {
  return (
    <Section spacing="sm" data-dark className="bg-primary">
      <Container>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-8">
          {STATS.map((s) => (
            <StatCard
              key={s.label}
              value={s.value}
              label={s.label}
              note={s.note}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}