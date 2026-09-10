import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Bottom conversion block reused across content pages. Sample + spec-sheet
 * CTAs route to /contact?intent=… (contact form wired in the Contact page).
 */
export function ProductCta({ className }: { className?: string }) {
  return (
    <Section data-dark className={`bg-primary ${className ?? ""}`}>
      <Container className="flex flex-col items-center text-center">
        <Heading
          as="h2"
          variant="onDark"
          className="font-bold text-[clamp(2.5rem,4vw+1rem,4.5rem)] leading-[1.05]"
        >
          Looking for a specific grade?
        </Heading>
        <Body variant="onDark" className="mx-auto mt-4 max-w-xl">
          Request a sample or a spec sheet and we&apos;ll match the format,
          volume, and packaging to your program.
        </Body>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <ButtonLink href="/contact?intent=sample" variant="onDark" size="lg">
            Request a Sample
          </ButtonLink>
          <ButtonLink
            href="/contact?intent=spec"
            variant="secondary-inverse"
            size="lg"
          >
            Request a Spec Sheet
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}