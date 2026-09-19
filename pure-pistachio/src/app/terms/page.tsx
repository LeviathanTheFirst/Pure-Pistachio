import type { Metadata } from "next";
import { ProductPageHeader } from "@/components/sections/ProductPageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Pure Pistachio website and the submission of inquiries through our contact form.",
};

type Clause = { heading: string; body: string; bullets?: string[] };

const CLAUSES: Clause[] = [
  {
    heading: "1. Acceptance of terms",
    body: "By accessing dastchindane.com (the \"Site\") you agree to be bound by these Terms of Service and by our Privacy Policy. If you do not agree, please do not use the Site. We may update these terms from time to time; continued use after changes are posted constitutes acceptance.",
  },
  {
    heading: "2. About our content",
    body: "The Site provides information about our pistachio products, processing capabilities, and services. While we work to keep it accurate and current, the content is provided for general information and does not constitute a contract, quotation, or specification unless we agree otherwise in writing.",
  },
  {
    heading: "3. Product information and availability",
    body: "Product descriptions, grades, specifications, and imagery on the Site are illustrative. Exact grades, spec sheets, pricing, and availability are confirmed individually for each inquiry. A binding agreement with us is formed only when we issue and you accept a written offer — not by browsing the Site or submitting a contact form.",
  },
  {
    heading: "4. Inquiries",
    body: "Submitting the contact form does not create a contractual relationship and does not obligate us to supply. We review each inquiry and respond through the contact channels you provide. You are responsible for the accuracy of the information you submit and agree not to submit false, misleading, or unlawful content.",
  },
  {
    heading: "5. Acceptable use",
    body: "You agree not to misuse the Site — for example, by attempting to disrupt its operation, sending automated or abusive requests, misrepresenting your identity or company, or using the contact form for anything other than legitimate business inquiries.",
  },
  {
    heading: "6. Intellectual property",
    body: "The Site and its contents — including text, graphics, logos, imagery, and design — are owned by or licensed to Pure Pistachio and are protected by applicable intellectual property laws. You may use them for personal, informational purposes but not reproduce, distribute, or repurpose them without our prior written consent.",
  },
  {
    heading: "7. Third-party content",
    body: "The Site may embed or link to third-party services (for example the Google Maps embed on our contact page). We do not control and are not responsible for third-party content or practices; such content is subject to the third party's own terms and policies.",
  },
  {
    heading: "8. Limitation of liability",
    body: "To the fullest extent permitted by law, Pure Pistachio shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site, reliance on its content, or any inquiry you submit. Our total liability in connection with the Site is limited to the amount, if any, you paid us in connection with the relevant transaction.",
  },
  {
    heading: "9. Availability and changes",
    body: "We aim to keep the Site available, but do not guarantee uninterrupted access. We may modify, suspend, or discontinue any part of the Site with or without notice.",
  },
  {
    heading: "10. Governing law",
    body: "These terms are governed by the laws of the Islamic Republic of Iran, without regard to conflict of law principles, as applicable to transactions originated from Iran. Where a different governing law is mandatory under applicable consumer protection rules in your jurisdiction, that law applies to you to the extent required.",
  },
  {
    heading: "11. Severability",
    body: "If any provision of these terms is held to be invalid or unenforceable, the remaining provisions continue in full force and effect.",
  },
  {
    heading: "12. Contact us",
    body: "For questions or feedback about these terms:",
    bullets: [
      "Email: info@purepistachio.co",
      "Address: Kerman, Rafsanjan, Iran (see our contact page for the office map)",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <ProductPageHeader
        eyebrow={<Eyebrow variant="default">Legal</Eyebrow>}
        title="Terms of Service"
        lead={
          <Body
            variant="onDark"
            className="mt-5 max-w-2xl text-cream-90"
          >
            The terms that govern your use of this site and your inquiries.
          </Body>
        }
      />

      <Section className="bg-cream">
        <Container width="narrow">
          <p className="text-[0.9375rem] text-charcoal-70">
            Last updated: 16 September 2026
          </p>
          {CLAUSES.map((clause) => (
            <div key={clause.heading} className="mt-10">
              <Heading as="h2" className="text-h3">
                {clause.heading}
              </Heading>
              <Body className="mt-3">{clause.body}</Body>
              {clause.bullets && (
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {clause.bullets.map((bullet) => (
                    <li key={bullet} className="text-body text-charcoal">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}