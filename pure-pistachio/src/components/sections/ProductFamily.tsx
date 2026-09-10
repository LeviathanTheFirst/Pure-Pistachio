import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ui/ProductCard";

const FAMILIES = [
  {
    eyebrow: "Kernels",
    title: "Kernels",
    description:
      "Whole, split, and diced kernels for snacking, bakery, and confectionery programs.",
    href: "/products?family=kernels",
    tone: "green",
    imageAlt: "Pistachio kernels — placeholder image to be replaced",
  },
  {
    eyebrow: "In-Shell",
    title: "In-Shell",
    description:
      "Roasted and raw in-shell pistachios, consistent count and size for retail and foodservice.",
    href: "/products?family=in-shell",
    tone: "deep",
    imageAlt: "In-shell pistachios — placeholder image to be replaced",
  },
] as const;

/**
 * Product family cards — image-led with bottom-aligned text over a controlled
 * dark overlay. All media is placeholder (see Placeholder/media notes).
 */
export function ProductFamily() {
  return (
    <Section className="flex min-h-dvh flex-col justify-center bg-cream py-[clamp(2rem,4vw,4rem)]">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Product families</Eyebrow>
          <Heading
            as="h2"
            className="mt-4 font-bold text-[clamp(2.5rem,4vw+1rem,4.5rem)] leading-[1.05]"
          >
            Two families, endless ways to supply
          </Heading>
          <Body variant="lead" className="mt-5">
            Every format Pure Pistachio grows, processes, or packs — sized to
            your line, your menu, or your shelf.
          </Body>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:grid-cols-2 lg:max-w-3xl">
          {FAMILIES.map((family, i) => (
            <Reveal key={family.title} delay={0.06 * i} className="h-full">
              <ProductCard
                title={family.title}
                eyebrow={family.eyebrow}
                description={family.description}
                href={family.href}
                imageAlt={family.imageAlt}
                imageTone={family.tone}
                imageAspect="aspect-[4/3]"
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}