import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { FlowStep } from "@/components/ui/FlowStep";
import {
  LeafIcon,
  NutIcon,
  GearIcon,
  BoxIcon,
  StorageIcon,
  TruckIcon,
  FlaskIcon,
} from "@/components/ui/icons/LineIcons";

const PIPELINE = [
  { label: "Farming", icon: <LeafIcon className="h-6 w-6" />, desc: "Grown in carefully tended orchards." },
  { label: "Initial Processing", icon: <NutIcon className="h-6 w-6" />, desc: "Cleaned, hulled, and sorted." },
  { label: "Second Stage Processing", icon: <GearIcon className="h-6 w-6" />, desc: "Dried and graded to standard." },
  { label: "Packing", icon: <BoxIcon className="h-6 w-6" />, desc: "Sized and packed to order." },
  { label: "Storage", icon: <StorageIcon className="h-6 w-6" />, desc: "Stored cold to preserve freshness." },
  { label: "Distribution", icon: <TruckIcon className="h-6 w-6" />, desc: "Delivered on time, every time." },
] as const;

/**
 * Horizontal pipeline diagram (desktop) that collapses to a vertical timeline
 * (mobile).
 *
 * Structural note: the "Lab" step is intentionally NOT in the sequential
 * pipeline. Quality control runs across multiple stages, so it's rendered as a
 * parallel/branching QC node alongside — visually tied to the main line with
 * a short connector and placed below, per the request to show QC as running
 * alongside rather than strictly sequential.
 */
export function OperationalFlow() {
  return (
    <Section spacing="sm" className="bg-white">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Operational flow</Eyebrow>
          <Heading
            as="h2"
            className="mt-4 font-bold text-[clamp(2.25rem,4vw+1rem,4.5rem)] leading-[1.1] sm:leading-[1.05]"
          >
            From orchard to distribution
          </Heading>
          <p className="mt-5 text-lead text-charcoal-80">
            The full pipeline, with quality lab checks running alongside.
          </p>
        </Reveal>

        {/* Pipeline row (desktop horizontal / mobile vertical timeline). */}
        <div className="mt-14">
          <ol className="grid grid-cols-1 gap-y-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
            {PIPELINE.map((step, i) => (
              <Reveal key={step.label} as="li" delay={0.05 * i} className="relative">
                {/* Connector between steps (mobile/tablet timeline). Runs
                    through the icon bullet center and down past the text. */}
                {i < PIPELINE.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-6 top-6 h-[calc(100%+2.5rem)] w-px bg-stone lg:hidden"
                  />
                )}
                <FlowStep
                  index={i + 1}
                  icon={step.icon}
                  label={step.label}
                  description={step.desc}
                />
                {/* Connector between steps (desktop). */}
                {i < PIPELINE.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[3rem] top-1/2 hidden h-px w-[calc(100%-3rem)] bg-stone lg:block"
                  />
                )}
              </Reveal>
            ))}
          </ol>

          {/* Lab — parallel QC node alongside the pipeline. */}
          <div className="mt-12 flex items-start gap-4 rounded-sm border border-stone bg-cream p-6">
            <span
              aria-hidden
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-white text-primary"
            >
              <FlaskIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold uppercase tracking-[0.06em] text-charcoal">
                Lab — quality control
              </p>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-charcoal-70">
                Runs alongside every stage. [TODO: describe lab/QC role — sample
                testing, grade confirmation, documentation]
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}