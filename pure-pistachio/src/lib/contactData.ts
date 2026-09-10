/**
 * Business contact details, shared by the Contact page and Footer so the two
 * can never drift. Placeholder business values — update here once.
 */
export const CONTACT_DATA = {
  email: "sales@purepistachio.example",
  emailHref: "mailto:sales@purepistachio.example",
  phoneDisplay: "+1 (555) 000-1234",
  phoneHref: "tel:+15550001234",
  whatsappDisplay: "+1 (555) 000-1234",
  whatsappHref: "https://wa.me/15550001234",
  address: ["555 Orchard Way, Suite 300", "Fresno, CA 93701", "United States"],
  hours: "Mon–Fri, 09:00–17:00 PT",
  responseLine: "Within one business day — usually sooner.",
} as const;