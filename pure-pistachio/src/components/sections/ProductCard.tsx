import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

type ProductCardProps = {
  imageSrc: string;
  imageAlt: string;
  varietyName: string;
  grade: string;
  otherGradesNote?: string;
  description: string;
};

export function ProductCard({
  imageSrc,
  imageAlt,
  varietyName,
  grade,
  otherGradesNote = "(Other Grades Available)",
  description,
}: ProductCardProps) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 grid-rows-[auto_auto] items-start gap-x-20 gap-y-10 py-6 md:grid-cols-[2fr_3fr] md:grid-rows-[auto_1fr] md:gap-x-20 md:gap-y-0 md:py-12">
        {/* Row 1 left: image */}
        <div className="flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] w-full object-cover"
          />
        </div>

        {/* Row 1–2 right: headline + description + CTA */}
        <div className="flex flex-col items-start md:row-span-2 md:pl-[20%]">
          <h2 className="relative font-display text-[clamp(3.5rem,10vw,4.5rem)] font-black uppercase tracking-title [font-variation-settings:var(--font-variation-title)] leading-[1.05] text-charcoal">
            <span className="relative z-10">{varietyName}</span>
            <span
              aria-hidden="true"
              className="absolute bottom-1 left-0 -z-0 block h-3 w-full -rotate-1 bg-primary/15"
            />
          </h2>
          <p className="mt-3 max-w-lg text-xl leading-snug text-charcoal md:mt-8 md:leading-relaxed md:text-2xl">
            {description}
          </p>
          <ButtonLink href="/contact/" variant="primary" size="md" className="mt-3 md:mt-8" displayTitle>
            Contact Sales
          </ButtonLink>
        </div>

        {/* Row 2 left: grade info — sits in same row as Contact Sales button */}
        <div className="hidden flex-col items-center md:flex">
          <div className="h-px w-full bg-stone" />
          <p className="mt-1.5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-charcoal-70">
            Grade
          </p>
          <div className="mt-1.5 h-px w-full bg-stone" />
          <p className="mt-2 font-display text-2xl font-bold text-charcoal">
            {grade}
          </p>
          <p className="mt-0.5 text-sm text-charcoal-70">{otherGradesNote}</p>
        </div>
      </div>
    </Reveal>
  );
}