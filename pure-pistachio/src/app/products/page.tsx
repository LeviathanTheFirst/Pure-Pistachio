import type { Metadata } from "next";
import { FloatingHero } from "@/components/ui/hero-section-7";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { ProductVarieties } from "@/components/sections/ProductVarieties";
import { KernelFormats } from "@/components/sections/KernelFormats";

const heroImages = [
  {
    src: "/images/Home Page/Pistachios/pA_1.png",
    alt: "A whole pistachio",
    className:
      "w-20 sm:w-28 md:w-44 lg:w-42 top-28 left-4 sm:left-10 md:top-20 md:left-16 lg:left-24 animate-float",
  },
  {
    src: "/images/Home Page/Pistachios/pA_4.png",
    alt: "Split open pistachio kernels",
    className:
      "w-20 sm:w-32 md:w-52 lg:w-48 top-28 right-3 sm:right-8 md:top-16 md:right-16 lg:right-24 animate-float",
  },
  {
    src: "/images/Home Page/Pistachios/pB_1.webp",
    alt: "Roasted pistachios",
    className:
      "w-32 sm:w-48 md:w-64 lg:w-60 bottom-6 sm:bottom-10 left-3 sm:left-8 md:bottom-16 md:left-16 lg:left-24 animate-float",
  },
  {
    src: "/images/Home Page/Pistachios/pB_2.png",
    alt: "A shelled pistachio",
    className:
      "w-28 sm:w-40 md:w-56 lg:w-54 bottom-8 sm:bottom-14 right-3 sm:right-10 md:bottom-20 md:right-16 lg:right-28 animate-float",
  },
  {
    src: "/images/Home Page/Pistachios/pA_3.png",
    alt: "A whole green pistachio",
    className:
      "hidden sm:block md:w-28 top-[30%] left-[34%] md:left-[38%] lg:left-[40%] animate-float",
  },
  {
    src: "/images/Home Page/Pistachios/pB_3.png",
    alt: "An open pistachio shell",
    className:
      "hidden sm:block md:w-24 top-[62%] right-[32%] md:right-[38%] lg:right-[40%] animate-float",
  },
];

export const metadata: Metadata = {
  title: "Products",
  description:
    "Pure Pistachio's product range — varieties and kernel formats, each with a spec sheet and sampling available.",
};

export default function ProductsPage() {
  return (
    <>
      <FloatingHero
        eyebrow={
          <Eyebrow variant="default" className="text-primary">
            Products
          </Eyebrow>
        }
        title="Grown, processed, and packed to your spec"
        description="Two ways to buy: raw varieties and processed kernel formats. English names are primary; working/Persian terms are shown for review."
        images={heroImages}
        actions={
          <>
            <ButtonLink href="#varieties" variant="primary" size="lg">
              Explore Varieties
            </ButtonLink>
            <ButtonLink href="#kernel-formats" variant="secondary" size="lg">
              Explore Formats
            </ButtonLink>
          </>
        }
      />

      <ProductVarieties />
      <KernelFormats />
    </>
  );
}
