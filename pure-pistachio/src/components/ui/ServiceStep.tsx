import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons/ArrowRight";

/**
 * Single step in the Services sequence. Icon (placeholder) + eyebrow index +
 * heading + description + "Talk to us" link. Reads as part of a capability
 * sequence, not an isolated card.
 */
export function ServiceStep({
  index,
  icon,
  title,
  description,
  href,
}: {
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <article className="relative flex flex-col">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="flex h-12 w-12 items-center justify-center rounded-sm border border-stone bg-white text-primary"
        >
          {icon}
        </span>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
          Service {index + 1}
        </p>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold uppercase tracking-[0.06em] text-charcoal">
        {title}
      </h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-charcoal-70">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary-light"
      >
        Talk to us about this service
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}