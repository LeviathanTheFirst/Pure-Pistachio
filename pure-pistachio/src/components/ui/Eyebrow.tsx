import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  /** `default` = charcoal on light, `onDark` = cream/gold on dark. */
  variant?: "default" | "onDark" | "gold";
};

/** Uppercase, tracked-out kicker label above headings. */
export function Eyebrow({
  children,
  className,
  variant = "default",
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "block font-display text-eyebrow font-normal uppercase tracking-eyebrow",
        variant === "default" && "text-primary",
        variant === "onDark" && "text-cream",
        variant === "gold" && "text-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}