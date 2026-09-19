import type { Metadata } from "next";
import { ProductPageHeader } from "@/components/sections/ProductPageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pure Pistachio handles personal data you share with us — through the contact form, Google Maps embed, and site analytics.",
};

type Clause = { heading: string; body: string; bullets?: string[] };

const CLAUSES: Clause[] = [
  {
    heading: "1. Who we are",
    body: "Pure Pistachio Co. (\"we\", \"us\") supplies premium pistachios from Rafsanjan, Kerman, Iran. We operate the website at dastchindane.com and process the limited personal data described below. If you have questions about this policy, contact us at info@purepistachio.co.",
  },
  {
    heading: "2. Information we collect",
    body: "The contact form collects the details you choose to send: your name, business email, company, country or region, and any message you include. We do not collect payment details, national identification numbers, or any sensitive categories of personal data.",
  },
  {
    heading: "3. How we use it",
    body: "We use the information you submit through the contact form solely to respond to your inquiry — to provide quotes, samples, spec sheets, or answers about our services. We retain inquiries only as long as needed to resolve them and follow up on your request. We do not sell or rent your personal data to third parties.",
  },
  {
    heading: "4. Email delivery (Resend)",
    body: "Inquiries you submit are forwarded by email to our team through Resend, a third-party email delivery service. Resend processes the content of your message so it can reach our inbox. Resend's privacy policy applies to that processing; the data is used solely to deliver your inquiry to us.",
  },
  {
    heading: "5. Cookies and third-party embeds",
    body: "Our contact page embeds a Google Maps iframe so you can find our office. Google may set cookies (for example the NID and CONSENT cookies) and process limited device and location data when the map loads. We do not control these cookies, and Google's cookie and privacy practices are governed by Google's own privacy policy.",
    bullets: [
      "We do not run our own analytics or advertising trackers.",
      "We do not set first-party tracking cookies.",
      "Some files and assets may be delivered through content networks; they do not identify you personally.",
    ],
  },
  {
    heading: "6. Data sharing and international transfer",
    body: "We share your inquiry details with (a) Resend for email delivery and (b) our own staff only as needed to answer you. Your data may be processed outside the country where you are located (including via the services we use to run our site and email). We take reasonable steps to keep that processing subject to appropriate safeguards.",
  },
  {
    heading: "7. Data retention",
    body: "We keep inquiry records no longer than necessary — typically until your request is resolved and any resulting business relationship winds down. Residual backups may retain copies for legitimate technical reasons for a further limited period.",
  },
  {
    heading: "8. Your rights",
    body: "Depending on where you live, you may have the right to access, correct, or delete the personal data we hold, or to object to or restrict certain processing. To exercise any of these rights, email info@purepistachio.co. We will respond within a reasonable time and may ask you to verify your identity first.",
  },
  {
    heading: "9. Security",
    body: "We apply reasonable administrative and technical measures appropriate to the small amount of personal data we hold. Your inquiries are transmitted over HTTPS, and our team accesses them on a need-to-know basis.",
  },
  {
    heading: "10. Children",
    body: "Our site is a business-to-business service and is not intended for children under 16. We do not knowingly collect personal data from children.",
  },
  {
    heading: "11. Policy updates",
    body: "We may update this policy from time to time. When we make changes, we will revise the \"Last updated\" date below and, where appropriate, notify you by email. Continued use of the site after changes are published constitutes acceptance of the revised policy.",
  },
  {
    heading: "12. Contact",
    body: "For any privacy question or request:",
    bullets: [
      "Email: info@purepistachio.co",
      "Address: Kerman, Rafsanjan, Iran (see our contact page for the office map)",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <ProductPageHeader
        eyebrow={<Eyebrow variant="default">Legal</Eyebrow>}
        title="Privacy Policy"
        lead={
          <Body
            variant="onDark"
            className="mt-5 max-w-2xl text-cream-90"
          >
            How we handle the personal data you share with us when you reach
            out.
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