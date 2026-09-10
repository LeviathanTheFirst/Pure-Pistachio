import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceStep } from "@/components/ui/ServiceStep";

/** Small line icons — simple line illustration placeholders. */
const icon = (d: string) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    {d.split("|").map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

const ICRACK = icon("M6 4l8 8-6 6M12 2v4M16 2v6M18 4h4");
const ISORT = icon("M4 6h16M4 12h16M4 18h16M8 4v4M16 16v4");
const IPACK = icon("M4 8l8-4 8 4M4 8v12M20 8v12M4 8h16M8 12l8-4");

const SERVICES = [
  {
    title: "Cracking",
    secondary: "Shekan",
    description:
      "[TODO: describe shelling/cracking coverage and the buyers it serves — bulk processors, manufacturers, retailers]",
    href: "/contact?intent=service",
    icon: ICRACK,
  },
  {
    title: "Sorting & Cleaning",
    secondary: "",
    description:
      "[TODO: describe grading, defect removal, and cleaning — who it benefits and typical output specs]",
    href: "/contact?intent=service",
    icon: ISORT,
  },
  {
    title: "Packaging",
    secondary: "",
    description:
      "[TODO: describe bulk, retail, and custom packaging formats — sizes, materials, and retail readiness]",
    href: "/contact?intent=service",
    icon: IPACK,
  },
] as const;

/** Horizontal 3-col capability sequence (stack to 1-col mobile). */
export function ServicesProcess() {
  return (
    <Section className="bg-cream">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <Heading
            as="h2"
            className="mt-4 font-bold text-[clamp(2.5rem,4vw+1rem,4.5rem)] leading-[1.05]"
          >
            A complete processing pipeline
          </Heading>
          <Body variant="lead" className="mt-5">
            Three capabilities you can combine into a single supply chain —
            from orchard to packed, retail-ready product.
          </Body>
        </Reveal>

        <div className="relative mt-14 grid gap-y-12 lg:grid-cols-3 lg:gap-x-10">
          {/* Connecting line between steps (desktop). */}
          <span
            aria-hidden
            className="absolute left-[16.66%] right-[16.66%] top-[1.5rem] hidden h-px bg-stone lg:block"
          />
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i} as="article" className="relative">
              <ServiceStep
                index={i}
                icon={s.icon}
                title={s.secondary ? `${s.title} (${s.secondary})` : s.title}
                description={s.description}
                href={s.href}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}