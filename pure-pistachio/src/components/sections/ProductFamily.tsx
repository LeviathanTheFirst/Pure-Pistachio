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
    href: "/kernel",
    tone: "green",
    imageSrc: "/images/Home Page/Kernel_Families.webp",
    imageAlt: "Pistachio kernels",
  },
  {
    eyebrow: "In-Shell",
    title: "In-Shell",
    href: "/in-shell",
    tone: "deep",
    imageSrc: "/images/Home Page/InShell_Families.webp",
    imageAlt: "In-shell pistachios",
  },
] as const;

/**
 * Product family cards — image-led with bottom-aligned name + link over a
 * controlled dark overlay. All media is placeholder (see Placeholder/media notes).
 */
export function ProductFamily() {
  return (
    <Section className="flex min-h-dvh flex-col justify-center bg-cream py-[clamp(1rem,2vw,2rem)]">
      <Container>
        <Reveal className="mx-auto max-w-6xl text-center">
          <Eyebrow>Product families</Eyebrow>
          <Heading
            as="h2"
            className="mt-3 font-bold text-[clamp(1.5rem,4vw+0.75rem,4.5rem)] leading-[1.05] [text-wrap:balance]"
          >
            Two families, endless ways to supply
          </Heading>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:grid-cols-2 lg:gap-8 lg:max-w-[51rem]">
          {FAMILIES.map((family, i) => (
            <Reveal key={family.title} delay={0.06 * i} className="h-full">
              <ProductCard
                title={family.title}
                href={family.href}
                imageSrc={family.imageSrc}
                imageAlt={family.imageAlt}
                imageTone={family.tone}
                imageAspect="aspect-[16/17]"
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}