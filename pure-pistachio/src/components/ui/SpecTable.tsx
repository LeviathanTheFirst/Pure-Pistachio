import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type SpecRow = {
  attribute: string;
  value: ReactNode;
};

/**
 * Attribute/value spec table for product items. Populated with placeholder
 * rows for now — swap values once real specs exist. Accessible: real <table>
 * semantics with a caption.
 */
export function SpecTable({
  caption,
  rows,
  className,
}: {
  caption: string;
  rows: SpecRow[];
  className?: string;
}) {
  return (
    <table className={cn("w-full border-collapse text-left", className)}>
      <caption className="sr-only">{caption}</caption>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={row.attribute}
            className={cn("border-t border-stone", i === rows.length - 1 && "border-b")}
          >
            <th
              scope="row"
              className="w-1/3 py-3 pr-4 align-top font-display text-sm font-semibold uppercase tracking-[0.12em] text-primary"
            >
              {row.attribute}
            </th>
            <td className="py-3 align-top text-[0.9375rem] leading-relaxed text-charcoal-80">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}