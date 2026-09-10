import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pure Pistachio's processing services — cracking, sorting & cleaning, and packaging, combinable into one supply chain.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        video="/Videos/Services_Header.mp4"
        title="From orchard to order — one supply chain"
        description="Cracking, sorting, and packing as one seamless capability, tailored to your program. English names are primary; working terms like Shekan are shown for review."
      >
        <ButtonLink href="/contact?intent=service" variant="onDark" size="lg">
          Talk to us
        </ButtonLink>
      </PageHero>

      <ServiceShowcase />
    </>
  );
}