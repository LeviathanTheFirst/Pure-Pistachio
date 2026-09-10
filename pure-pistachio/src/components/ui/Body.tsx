import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BodyProps = {
  children: ReactNode;
  className?: string;
  /** `body` standard, `lead` larger intro, `onDark` for dark sections. */
  variant?: "body" | "lead" | "onDark" | "muted";
};

/** Body copy. Variants handle sizing and dark-section color. */
export function Body({
  children,
  className,
  variant = "body",
}: BodyProps) {
  return (
    <p
      className={cn(
        "text-body text-charcoal",
        variant === "lead" &&
          "text-lead text-charcoal-80 leading-[1.5] font-normal",
        variant === "muted" && "text-[0.9375rem] text-charcoal-70",
        variant === "onDark" && "text-cream-90",
        className,
      )}
    >
      {children}
    </p>
  );
}