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
        title={
          <>
            From orchard to order
            <br />
            <span className="text-gold">one supply chain</span>
          </>
        }
        description="Cracking, sorting, and packing as one seamless capability, tailored to your program."
      >
        <ButtonLink href="/contact?intent=service" variant="onDark" size="lg">
          Talk to us
        </ButtonLink>
      </PageHero>

      <ServiceShowcase />
    </>
  );
}