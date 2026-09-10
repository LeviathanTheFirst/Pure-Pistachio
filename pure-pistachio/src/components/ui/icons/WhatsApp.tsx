import type { SVGProps } from "react";

/**
 * WhatsApp glyph in brand-friendly style (custom stroke fill), not the stock
 * green. Colour is applied by the caller via `text-*` so it stays in-brand.
 */
export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 20l1.3-3.2A8 8 0 1 1 7.2 18.7L4 20Z" />
      <path d="M9.5 8.5c.5 2 2.5 4 4.5 4.5M9.7 9.5c.4 1.6 2 2.8 3.5 3.1-.4-.6-.2-1.2.5-1.6.5-.3 1.1-.2 1.4.3" />
    </svg>
  );
}