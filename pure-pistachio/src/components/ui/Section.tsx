import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Vertical rhythm. `md` = 96-144px desktop / 64-88px mobile. */
  spacing?: "md" | "sm";
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "as">;

/** Section band with consistent vertical rhythm and optional id anchor. */
export function Section({
  as,
  children,
  className,
  spacing = "md",
  ...rest
}: SectionProps) {
  const Tag: ElementType = as ?? "section";
  return (
    <Tag
      className={cn(
        "py-[clamp(4rem,7vw+1rem,9rem)]",
        spacing === "sm" && "py-[clamp(3rem,5vw+1rem,6rem)]",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}