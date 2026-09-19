import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Body } from "@/components/ui/Body";
import { ProductCta } from "@/components/ui/ProductCta";
import { ProductCard } from "@/components/sections/ProductCard";
import { ProductPageHeader } from "@/components/sections/ProductPageHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";

const IN_SHELL_VARIETIES = [
  {
    imageSrc: "/images/Product Page/Models/pistacho-jumbo-4.webp",
    imageAlt: "Jumbo in-shell pistachio",
    varietyName: "Jumbo",
        description:
      "Our naturally open pistachios result in easy-to-open shells, revealing premium kernels inside. Selected for size and split rate, Jumbo-grade in-shell pistachios are ideal for retail snacking, foodservice, and bulk distribution.",
  },
  {
    imageSrc: "/images/Product Page/Models/pistacho-redondo-1.webp",
    imageAlt: "Round in-shell pistachio",
    varietyName: "Round",
        description:
      "Round (Redondo) pistachios offer a classic shape with excellent natural split. Consistently graded for uniformity and quality, these are a staple for retail brands and private-label programs looking for reliable presentation.",
  },
  {
    imageSrc: "/images/Product Page/Models/Akbari-3.webp",
    imageAlt: "Akbari in-shell pistachio",
    varietyName: "Akbari",
        description:
      "Akbari pistachios are prized for their elongated shape and bold flavor profile. A premium cultivar favored by specialty retailers and gourmet foodservice, delivering a distinctive look and superior eating experience.",
  },
];

export const metadata: Metadata = {
  title: "In-Shell",
  description:
    "Pure Pistachio's in-shell pistachio varieties — Jumbo, Round, and Akbari.",
};

export default function InShellPage() {
  return (
    <>
      <ProductPageHeader
        eyebrow={<Eyebrow variant="default">In-shell</Eyebrow>}
        title="In-shell pistachios"
        lead={
          <Body
            variant="onDark"
            className="mt-5 max-w-2xl text-cream-90"
          >
            Naturally open, easy to crack — premium in-shell varieties for
            retail and foodservice.
          </Body>
        }
      />

      <Section spacing="sm" className="bg-cream !pt-0 !pb-4 md:!pb-8">
        <Container>
          {IN_SHELL_VARIETIES.map((variety, i) => (
            <div key={variety.varietyName}>
              {i > 0 && <GradientDivider />}
              <ProductCard {...variety} />
            </div>
          ))}
        </Container>
      </Section>

      <ProductCta />
    </>
  );
}