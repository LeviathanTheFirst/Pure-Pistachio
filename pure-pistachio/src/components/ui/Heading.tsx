import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  /** `default` charcoal on light, `onDark` white-on-dark section. */
  variant?: "default" | "onDark";
};

/** Display-font heading; maps an h2/h3/h4 to the fluid type scale. */
export function Heading({
  as = "h2",
  children,
  className,
  variant = "default",
}: HeadingProps) {
  const Tag: ElementType = as;
  const levelClass =
    as === "h1"
      ? "text-hero font-display font-bold leading-[0.98]"
      : as === "h2"
        ? "text-h2 font-display font-bold leading-[1.04]"
        : "text-h3 font-display font-bold leading-[1.2]";

  return (
    <Tag
      className={cn(
        levelClass,
        "font-display",
        variant === "default" ? "text-charcoal" : "text-white",
        className,
      )}
    >
      {children}
    </Tag>
  );
}