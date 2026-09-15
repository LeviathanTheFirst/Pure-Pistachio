"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "@/components/ui/icons/ArrowRight";

export type ProductCardProps = {
  title: string;
  href: string;
  imageAlt: string;
  imageSrc?: string;
  imageTone: "green" | "deep" | "gold" | "stone" | "charcoal";
  /** Aspect ratio for the card media, e.g. "aspect-[4/5]". */
  imageAspect?: string;
  className?: string;
};

/**
 * Large image-led card. Media scales gently on hover; name + link sit on a
 * controlled dark gradient so they never float unprotected on the photo.
 */
export function ProductCard({
  title,
  href,
  imageAlt,
  imageSrc,
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
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.04]"
          />
        ) : (
          <>
            {/* Media — replace with <Image> later. */}
            <div
              aria-hidden
              className={cn(
                "absolute inset-0 h-full w-full bg-gradient-to-br",
                imageTone === "green" && "from-primary to-[#3E5C18]",
                imageTone === "deep" && "from-[#3E5C18] to-primary",
                imageTone === "gold" && "from-gold to-[#a3770a]",
                imageTone === "stone" && "from-stone to-[#b9b4a8]",
                imageTone === "charcoal" && "from-charcoal to-[#3a3d39]",
                "transition-transform duration-500 ease-out motion-reduce:transition-none",
                "group-hover:scale-[1.04]",
              )}
            />
            <span className="sr-only">{imageAlt}</span>
          </>
        )}

        {/* Bottom gradient scrim. Paints before the text layer so the photo
            legibility overlay never sits on top of the label. */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-transparent" />

        {/* Bottom-aligned name + link. Rendered after the scrim and raised
            with an explicit stacking layer; crisp 1px shadow, no backdrop blur. */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
          <h3 className="font-display text-h3 font-bold leading-[1.1] text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.9)" }}>
            {title}
          </h3>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-charcoal/60 px-4 py-2 font-display text-sm font-bold uppercase tracking-[0.12em] text-gold shadow-[0_1px_4px_rgba(0,0,0,0.5)] transition-colors group-hover:bg-gold group-hover:text-charcoal">
            Explore {title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}