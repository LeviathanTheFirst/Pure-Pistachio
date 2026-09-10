import React from "react";
import { cn } from "@/lib/cn";

/**
 * @typedef FloatingImageProps
 * @property {string} src - The source URL for the image.
 * @property {string} alt - The alt text for the image for accessibility.
 * @property {string} className - Tailwind CSS classes for positioning, sizing, and animation.
 */
interface FloatingImageProps {
  src: string;
  alt: string;
  className: string;
}

/**
 * @typedef FloatingHeroProps
 * @property {ReactNode} [eyebrow] - Optional eyebrow label above the title.
 * @property {string} title - The main heading text.
 * @property {string} description - The paragraph text below the heading.
 * @property {FloatingImageProps[]} images - An array of image objects to be displayed.
 * @property {ReactNode} [actions] - Optional CTA / action buttons under the copy.
 * @property {string} [className] - Optional additional classes for the section container.
 */
export interface FloatingHeroProps {
  eyebrow?: React.ReactNode;
  title: string;
  description: string;
  images: FloatingImageProps[];
  actions?: React.ReactNode;
  className?: string;
}

/**
 * A decorative SVG component for the background swirl lines.
 */
const Swirls = () => (
  <>
    <svg
      className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-primary/15"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M515.266 181.33C377.943 51.564 128.537 136.256 50.8123 293.565C-26.9127 450.874 125.728 600 125.728 600"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
    <svg
      className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-primary/10"
      width="700"
      height="700"
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M26.8838 528.274C193.934 689.816 480.051 637.218 594.397 451.983C708.742 266.748 543.953 2.22235 543.953 2.22235"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </>
);

/**
 * A responsive and animated hero section for the Pure Pistachio homepage.
 * Rendered on the brand's light cream background; transparent pistachio PNGs
 * float around the centered dark copy.
 */
export function FloatingHero({
  eyebrow,
  title,
  description,
  images,
  actions,
  className,
}: FloatingHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-cream py-20",
        className
      )}
    >
      {/* Soft warm illumination behind the copy. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(120%_120%_at_50%_25%,#fdfcf9_0%,#f5f1e8_55%,#ece6d8_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,transparent_0%,rgba(215,163,35,0.10)_45%,transparent_100%)]"
      />
      <div className="absolute inset-0 z-0">
        <Swirls />
      </div>

      {/* Floating pistachios */}
      <div className="absolute inset-0 z-10" aria-hidden="true">
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element -- decorative floats sized/positioned by runtime className; unoptimized static export means next/image adds no benefit
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className={cn("absolute select-none object-contain", image.className)}
            style={{ animationDelay: `${index * 300}ms` }}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-20 mx-auto w-full max-w-[88rem] px-5 text-center sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">
          {eyebrow && <div className="text-center">{eyebrow}</div>}
          <h1 className="mt-5 font-display text-hero font-bold leading-[0.98] text-charcoal">
            {title}
          </h1>
          <p className="mt-6 text-lead leading-relaxed text-charcoal/80">
            {description}
          </p>
          {actions && (
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Backwards-compatible alias so the demo / existing references keep working.
export function FloatingFoodHero(props: FloatingHeroProps) {
  return <FloatingHero {...props} />;
}
