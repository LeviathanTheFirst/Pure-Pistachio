import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Body } from "@/components/ui/Body";
import { ProductCta } from "@/components/ui/ProductCta";
import { ProductCard } from "@/components/sections/ProductCard";
import { ProductPageHeader } from "@/components/sections/ProductPageHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";

const KERNEL_PRODUCTS = [
  {
    imageSrc: "/images/Product Page/Kernel Models/regular-kernel.png",
    imageAlt: "Regular pistachio kernels",
    varietyName: "Regular",
    grade: "U.S. Extra #1",
    description:
      "Naturally open pistachios deliver easy-to-crack shells and full kernels inside. Graded for uniform size and consistent nutmeat quality, Regular kernels are the go-to choice for roasting, snacking lines, and wholesale programs.",
  },
  {
    imageSrc: "/images/Product Page/Kernel Models/green-kernel-768x512.png",
    imageAlt: "Green pistachio kernels",
    varietyName: "Green",
    grade: "U.S. Extra #1",
    description:
      "Vibrant green kernels prized for their bold color and rich flavor — a signature grade for confectionery, ice cream, pastry, and fine patisserie programs where appearance and taste matter equally.",
  },
];

export const metadata: Metadata = {
  title: "Kernel",
  description:
    "Pure Pistachio's kernel products — Regular and Green, available in U.S. Extra #1 grade.",
};

export default function KernelPage() {
  return (
    <>
      <ProductPageHeader
        eyebrow={<Eyebrow variant="default">Kernel</Eyebrow>}
        title="Kernel pistachios"
        lead={
          <Body
            variant="onDark"
            className="mt-5 max-w-2xl text-cream-90"
          >
            Clean, whole pistachio kernels — prepped for confectionery, bakery,
            and ingredient programs.
          </Body>
        }
      />

      <Section spacing="sm" className="bg-cream !pt-0 !pb-4 md:!pb-8">
        <Container>
          {KERNEL_PRODUCTS.map((product, i) => (
            <div key={product.varietyName}>
              {i > 0 && <GradientDivider />}
              <ProductCard {...product} />
            </div>
          ))}
        </Container>
      </Section>

      <ProductCta />
    </>
  );
}