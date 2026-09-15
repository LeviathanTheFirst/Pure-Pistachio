import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Placeholder visual used until real photography is added. A styled color /
 * gradient block with optional label. Swap for <Image> later — see section
 * comments for the exact asset each one stands in for.
 */
export function PlaceholderImage({
  label,
  tone = "green",
  className,
  aspect,
}: {
  label?: string;
  /** Color treatment; map to an intended photo tone. */
  tone?: "green" | "gold" | "stone" | "charcoal" | "deep";
  className?: string;
  aspect?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">) {
  const tones: Record<string, string> = {
    green:
      "bg-gradient-to-br from-primary via-primary to-[#3E5C18]",
    deep: "bg-gradient-to-br from-[#3E5C18] to-primary",
    gold: "bg-gradient-to-br from-gold to-[#a3770a]",
    stone: "bg-gradient-to-br from-stone to-[#b9b4a8]",
    charcoal: "bg-gradient-to-br from-charcoal to-[#3a3d39]",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        aspect ?? "aspect-[4/5]",
        tones[tone],
        className,
      )}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {label && (
        <span className="absolute inset-x-0 bottom-3 text-center font-display text-xs uppercase tracking-[0.2em] text-white-70">
          {label}
        </span>
      )}
    </div>
  );
}