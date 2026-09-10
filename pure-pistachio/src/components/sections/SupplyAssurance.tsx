import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";
import { Reveal } from "@/components/ui/Reveal";

const POINTS = [
  {
    title: "Year-round availability",
    body: "Contracted grower partnerships and strategic cold storage keep product flowing through every season — no gaps in your schedule.",
  },
  {
    title: "Quality at every stage",
    body: "From orchard to pallet, every lot is tested, graded, and documented to hold a consistent spec you can count on.",
  },
  {
    title: "Service at any scale",
    body: "One case or a container load — the same team, the same precision, the same responsiveness behind your order.",
  },
] as const;

/**
 * Supply assurance split. Left media, right heading + three proof points.
 * Placeholder image stands in for photography.
 */
export function SupplyAssurance() {
  return (
    <Section className="relative flex min-h-dvh items-center pb-[clamp(2rem,4vw,4rem)]">
      <Container>
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal as="div" className="order-1 lg:order-none">
            {/* PLACEHOLDER media: replace with photography of orchard or
                processing facility, 4:5 or 3:4. */}
            <PlaceholderImage
              label="Orchard & facility — photo coming soon"
              tone="green"
              aspect="aspect-[4/5]"
              className="mx-auto w-[85%] rounded-sm sm:w-[70%]"
            />
          </Reveal>

          <div className="order-2 lg:order-none lg:scale-[0.9] lg:origin-center">
            <Reveal>
              <Eyebrow>Supply assurance</Eyebrow>
              <Heading
                as="h2"
                className="mt-4 font-bold text-[clamp(2.5rem,4vw+1rem,4.5rem)] leading-[1.05]"
              >
                Supply you can build a plan around
              </Heading>
              <Body variant="lead" className="mt-5">
                A dependable pistachio program goes beyond price. We engineer
                our sourcing, processing, and delivery around three guarantees
                that keep your production and menus running.
              </Body>
            </Reveal>

            <div className="mt-10 space-y-8">
              {POINTS.map((point, i) => (
                <Reveal
                  key={point.title}
                  delay={0.08 * i}
                  as="article"
                  className="flex gap-5"
                >
                  <span
                    aria-hidden
                    className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 font-display text-sm font-semibold text-primary"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-charcoal">
                      {point.title}
                    </h3>
                    <Body variant="body" className="mt-2">
                      {point.body}
                    </Body>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
      {/* Gradient hairline dividing Supply assurance from Product families. */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </Section>
  );
}