import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";
import { Reveal } from "@/components/ui/Reveal";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/ui/icons/LineIcons";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsApp";
import { CONTACT_DATA } from "@/lib/contactData";

const METHODS: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "Email",
    value: CONTACT_DATA.email,
    href: CONTACT_DATA.emailHref,
    icon: <MailIcon className="h-5 w-5" />,
  },
  ...(CONTACT_DATA.phoneDisplay
    ? [
        {
          label: "Phone",
          value: CONTACT_DATA.phoneDisplay,
          href: CONTACT_DATA.phoneHref,
          icon: <PhoneIcon className="h-5 w-5" />,
        },
      ]
    : []),
  {
    label: "WhatsApp",
    value: CONTACT_DATA.whatsappDisplay,
    href: CONTACT_DATA.whatsappHref,
    icon: <WhatsAppIcon className="h-5 w-5" />,
  },
  {
    label: "Head office",
    value: CONTACT_DATA.address.join(", "),
    href: "#office",
    icon: <MapPinIcon className="h-5 w-5" />,
  },
];

/**
 * Contact detail column — heading, method tiles, and response-time trust
 * signal. Content-only (no Section wrapper): the Contact page owns the
 * two-column layout.
 */
export function ContactDetail() {
  return (
    <div>
      <Reveal className="max-w-2xl">
        <Eyebrow>Get in touch</Eyebrow>
        <Heading as="h2" className="mt-4 text-h3">
          Talk to the team
        </Heading>
        <Body variant="lead" className="mt-6 text-[1.3125rem]">
          A real human will pick up — send us the questions, and we&apos;ll
          route you to the right person.
        </Body>
      </Reveal>

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {METHODS.map((m) => (
          <li key={m.label}>
            <article className="flex h-full items-start gap-5 rounded-sm border border-stone bg-white p-6">
              <span
                aria-hidden
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-stone bg-primary-soft text-primary"
              >
                {m.icon}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-[0.08em] text-primary uppercase">
                  {m.label}
                </p>
                <a
                  href={m.href}
                  className="mt-1 inline-flex min-h-[2.75rem] items-center break-words text-[1.125rem] text-charcoal underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {m.value}
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <Reveal className="mt-10">
        <p className="flex items-start gap-3 rounded-sm border border-stone border-l-2 border-l-gold bg-primary-soft px-6 py-5 text-base leading-relaxed text-charcoal">
          <ClockIcon className="mt-1 h-6 w-6 shrink-0 text-primary" />
          <span>
            We reply within{" "}
            <strong className="font-bold text-charcoal">
              one business day
            </strong>{" "}
            — usually sooner. No bots, no sales scripts.
          </span>
        </p>
      </Reveal>
    </div>
  );
}