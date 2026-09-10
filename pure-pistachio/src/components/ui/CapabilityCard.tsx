import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CapabilityCardProps = {
  index?: number;
  /** Optional leading icon (inline SVG node). */
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
};

/** Compact grid tile for the "Why partner with us" capability grid. */
export function CapabilityCard({
  index,
  icon,
  title,
  description,
  className,
}: CapabilityCardProps) {
  return (
    <div
      className={cn(
        "border-t border-stone pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        {typeof index === "number" && (
          <span
            aria-hidden
            className="font-display text-sm font-semibold tracking-widest text-primary"
          >
            0{index + 1}
          </span>
        )}
        <h3 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-charcoal sm:text-2xl">
          {title}
        </h3>
      </div>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-charcoal-70">
        {description}
      </p>
    </div>
  );
}