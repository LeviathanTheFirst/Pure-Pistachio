import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

type ProductPageHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
};

/**
 * Centered page header for product pages. Sits on a deep-green band that sets
 * it apart from the cream content below, with a gold gradient glow beneath the
 * title as a recurring brand accent.
 */
export function ProductPageHeader({
  eyebrow,
  title,
  lead,
}: ProductPageHeaderProps) {
  return (
    <Section
      as="header"
      data-dark
      spacing="sm"
      className="relative overflow-hidden bg-charcoal !py-20 md:!py-28"
    >
      {/* Subtle radial glow to lift the headline off the deep band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52% 60% at 50% 0%, rgba(90,138,74,0.22) 0%, rgba(28,30,27,0) 78%)",
        }}
      />

      <Container className="relative flex flex-col items-center text-center">
        <Eyebrow
          variant="default"
          className="text-gold uppercase tracking-[0.16em]"
        >
          {eyebrow}
        </Eyebrow>
        <Heading
          as="h1"
          className="mt-3 max-w-4xl font-black uppercase tracking-title [font-variation-settings:var(--font-variation-title)] text-cream text-[clamp(2rem,6vw,4.5rem)] leading-[1.05]"
        >
          {title}
        </Heading>

        {/* Glowing gold gradient underline accent */}
        <div aria-hidden className="mt-6 h-1 w-28 sm:w-36 rounded-full" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold) 30%, var(--color-gold) 70%, transparent)" , boxShadow: "0 0 16px rgba(215,163,35,0.45), 0 0 32px rgba(215,163,35,0.2)"}} />

        {lead}
      </Container>
    </Section>
  );
}