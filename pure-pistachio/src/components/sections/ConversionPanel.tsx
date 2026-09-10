import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";
import { ButtonLink } from "@/components/ui/Button";
import { contact } from "@/lib/site";

/**
 * Visually distinct full-width conversion band. Uses gold-on-forest energy to
 * stand apart from the page's cream/white sections.
 */
export function ConversionPanel() {
  return (
    <section
      data-dark
      className="relative flex min-h-[calc(100dvh-44dvh)] items-center justify-center isolate overflow-hidden bg-primary"
    >
      {/* Accent texture */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(90%_120%_at_15%_20%,rgba(215,163,35,0.16)_0%,transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_40%,rgba(245,241,232,0.06)_100%)]"
      />

      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Heading
            as="h2"
            variant="onDark"
            className="font-bold text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05]"
          >
            Ready to move your pistachio program forward?
          </Heading>
          <Body variant="onDark" className="mx-auto mt-4 max-w-xl">
            Tell us about your volumes, specs, and timelines. We&apos;ll come
            back with availability, pricing, and a plan that fits your scale.
          </Body>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={contact.quoteHref} variant="onDark" size="md">
              Request a Quote
            </ButtonLink>
            <ButtonLink
              href={contact.sampleHref}
              variant="secondary-inverse"
              size="md"
            >
              Request a Sample
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}