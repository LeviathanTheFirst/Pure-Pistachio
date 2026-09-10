import { cn } from "@/lib/cn";

type StatCardProps = {
  value: string;
  label: string;
  note?: string;
  className?: string;
  /** Metric text size. Pass a smaller value in 4-across (or tighter) grids
   *  so the value stays on one line; defaults to the `text-metric` token. */
  metricClassName?: string;
};

/**
 * Large-metric stat block. `value` may include a `[TODO: …]` marker; it is
 * stripped from the visible metric and shown sr-only so content editors see
 * exactly what to replace (screen readers never hear the marker because the
 * emitted value is already cleaned).
 */
export function StatCard({
  value,
  label,
  note,
  className,
  metricClassName,
}: StatCardProps) {
  const cleanValue = value.replace(/\[TODO[^\]]*\]/g, "").trim();
  const todoMatch = value.match(/\[TODO[^\]]*\]/);

  return (
    <div className={cn("px-0 py-0 sm:px-8 sm:py-6 lg:px-7 lg:py-8", className)}>
      <p
        className={cn(
          "font-display text-metric font-bold tracking-tight text-white",
          metricClassName,
        )}
      >
        {cleanValue}
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-cream-80">
        {label}
      </p>
      {note && (
        <p className="mt-2.5 text-[0.75rem] leading-snug text-white-70">
          {note}
        </p>
      )}
      {todoMatch && <span className="sr-only">{todoMatch[0]}</span>}
    </div>
  );
}