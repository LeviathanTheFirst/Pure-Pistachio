import type { Metadata } from "next";
import { ProductPageHeader } from "@/components/sections/ProductPageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";
import { Reveal } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { ContactDetail } from "@/components/sections/ContactDetail";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import {
  ClockIcon,
  MapPinIcon,
  BoxIcon,
  TruckIcon,
} from "@/components/ui/icons/LineIcons";
import { CONTACT_DATA } from "@/lib/contactData";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pure Pistachio — request samples, spec sheets, quotes, or ask about services.",
};

const CLOSE_POINTS = [
  {
    title: "Replies within one business day",
    body: "Real answers from a person who knows the product — no bots.",
    icon: <ClockIcon className="h-5 w-5" />,
  },
  {
    title: "Samples & spec sheets on request",
    body: "Try before you commit — taste, grade, and spec verified.",
    icon: <BoxIcon className="h-5 w-5" />,
  },
  {
    title: "Wholesale volume, shipped worldwide",
    body: "From single cases to container loads, door to door.",
    icon: <TruckIcon className="h-5 w-5" />,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <ProductPageHeader
        eyebrow="Contact"
        title="Let&apos;s talk pistachios"
        lead={
          <Body variant="onDark" className="mx-auto mt-6 max-w-2xl">
            Samples, spec sheets, quotes, or a service question — send the
            details and we&apos;ll route you to the right person.
          </Body>
        }
      />

      <Section className="bg-white">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <ContactDetail />

            <Reveal delay={0.1}>
              <Eyebrow>Send a message</Eyebrow>
              <h2 className="mt-4 font-display text-h3 font-black uppercase tracking-title [font-variation-settings:var(--font-variation-title)] text-charcoal">
                Tell us what you need
              </h2>
              <p className="mt-3 text-lead text-charcoal-80">
                Fields marked{" "}
                <span className="font-medium text-primary">*</span> are
                required. We&apos;ll reply with next steps, not a sales pitch.
              </p>
              <div className="mt-8">
                <InquiryForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="office" className="bg-cream">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>Office &amp; map</Eyebrow>
              <Heading as="h2" className="mt-4 font-bold leading-[1.05]">
                Find our head office
              </Heading>
              <Body variant="lead" className="mt-4 max-w-md">
                We supply out of Rafsanjan, in Iran&apos;s Kerman
                province — the heart of the country&apos;s pistachio belt.
              </Body>

              <div className="mt-8 flex items-start gap-4 rounded-sm border border-stone bg-white p-6">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <address className="text-[0.9375rem] not-italic leading-relaxed text-charcoal">
                    {CONTACT_DATA.address.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </address>
                  <p className="mt-2 flex items-center gap-2 text-[0.9375rem] text-charcoal-70">
                    <ClockIcon className="h-4 w-4 text-primary" />
                    {CONTACT_DATA.hours}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <PlaceholderImage
                tone="stone"
                aspect="aspect-[4/3]"
                label="Map — Kerman, Rafsanjan, Iran"
                className="w-full rounded-sm"
              />
            </Reveal>
          </div>

          <Reveal className="mt-16 border-t border-stone pt-8">
            <ul className="grid gap-6 sm:grid-cols-3">
              {CLOSE_POINTS.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-stone bg-white text-primary"
                  >
                    {p.icon}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
                      {p.title}
                    </p>
                    <p className="mt-1 text-[0.9375rem] text-charcoal-70">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}