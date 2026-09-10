import type { ReactNode } from "react";

/**
 * A numbered node in the Operational Flow diagram. Icon placeholder + index +
 * short label + one-sentence description.
 */
export function FlowStep({
  index,
  icon,
  label,
  description,
}: {
  index: number;
  icon?: ReactNode;
  label: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-stone bg-white text-primary">
        {icon ?? (
          <span className="font-display text-base font-semibold">{index}</span>
        )}
      </div>
      <h4 className="pl-14 font-display text-lg font-semibold uppercase tracking-[0.06em] text-charcoal md:pl-0">
        {label}
      </h4>
      <p className="pl-14 text-[0.9375rem] leading-relaxed text-charcoal-70 md:pl-0">
        {description}
      </p>
    </div>
  );
}