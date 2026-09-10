"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "@/components/ui/icons/ArrowRight";

export type ProductCardProps = {
  title: string;
  eyebrow: string;
  /** One-sentence use case. */
  description: string;
  href: string;
  imageAlt: string;
  imageTone: "green" | "deep" | "gold" | "stone" | "charcoal";
  /** Aspect ratio for the card media, e.g. "aspect-[4/5]". */
  imageAspect?: string;
  className?: string;
};

/**
 * Large image-led card. Media scales gently on hover; text sits on a
 * controlled dark gradient so it never floats unprotected on the photo.
 */
export function ProductCard({
  title,
  eyebrow,
  description,
  href,
  imageAlt,
  imageTone,
  imageAspect = "aspect-[4/5]",
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden bg-white shadow-sm transition-[transform] active:scale-[0.99]",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden", imageAspect)}>
        {/* Media — replace with <Image> later. */}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full bg-gradient-to-br",
            imageTone === "green" && "from-primary to-[#2a4523]",
            imageTone === "deep" && "from-[#2a4523] to-primary",
            imageTone === "gold" && "from-gold to-[#a3770a]",
            imageTone === "stone" && "from-stone to-[#b9b4a8]",
            imageTone === "charcoal" && "from-charcoal to-[#3a3d39]",
            "transition-transform duration-500 ease-out motion-reduce:transition-none",
            "group-hover:scale-[1.04]",
          )}
        />
        <span className="sr-only">{imageAlt}</span>

        {/* Bottom-aligned text on gradient backing. */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="font-display text-eyebrow font-semibold uppercase tracking-eyebrow text-white-70">
            {eyebrow}
          </p>
          <h3 className="mt-2 font-display text-h3 font-bold leading-[1.1] text-white">
            {title}
          </h3>
          <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-cream-80">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-gold transition-colors group-hover:text-white">
            Explore {title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>

        {/* Bottom gradient scrim. */}
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
      </div>
    </Link>
  );
}