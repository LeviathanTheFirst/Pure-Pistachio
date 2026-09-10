/**
 * Site-wide constants and data used across the Pure Pistachio marketing site.
 * Centralizes nav, contact details, and placeholder copy so later pages stay
 * consistent without redesigning components.
 */

export const siteName = "Pure Pistachio";

export const contact = {
  salesLabel: "Talk to Sales",
  salesHref: "/contact",
  regionHref: "/contact",
  regionLabel: "Regional Contacts",
  quoteHref: "/contact?intent=quote",
  sampleHref: "/contact?intent=sample",
};

export const NAV_ITEMS = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;