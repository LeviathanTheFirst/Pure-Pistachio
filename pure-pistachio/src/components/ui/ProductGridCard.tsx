import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ArrowRight } from "@/components/ui/icons/ArrowRight";

export type ProductGridCardProps = {
  title: string;
  /** English primary label -> Persian/working term shown as secondary label. */
  secondary?: string;
  description: string;
  href: string;
  imageAlt: string;
  imageTone: "green" | "deep" | "gold" | "stone" | "charcoal";
};

/**
 * Compact grid tile for the Products page variety/format cards. Photo
 * placeholder + English title + optional secondary (working) label + [TODO]
 * description + "View specs" link.
 */
export function ProductGridCard({
  title,
  secondary,
  description,
  href,
  imageAlt,
  imageTone,
}: ProductGridCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-stone bg-white shadow-sm transition-[transform] active:scale-[0.99]">
      <div className="overflow-hidden">
        <PlaceholderImage
          label={imageAlt}
          tone={imageTone}
          aspect="aspect-[4/5]"
          className="w-full transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-charcoal">
            {title}
          </h3>
          {secondary && (
            <span className="shrink-0 font-display text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">
              {secondary}
            </span>
          )}
        </div>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-charcoal-70">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary-light"
        >
          View specs
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}