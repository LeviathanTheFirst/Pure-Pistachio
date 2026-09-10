import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { VideoBackground } from "@/components/ui/VideoBackground";

/**
 * Page hero for content pages — intentionally smaller than the homepage hero:
 * headline + one-line description. Optional `video` renders a muted, looping
 * background video with the text layered on top; otherwise a dark overlay
 * treatment keeps WCAG contrast. `data-dark` flips the focus ring to cream.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  video,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  /** Optional CTAs / extra content after the description. */
  children?: ReactNode;
  /** Optional self-hosted background video path (e.g. "/Videos/hero.mp4"). */
  video?: string;
}) {
  return (
    <section
      data-dark
      className={cn(
        "relative isolate flex items-center overflow-hidden bg-primary py-20",
        video ? "h-dvh" : "min-h-[70svh]"
      )}
    >
      {video ? (
        <VideoBackground src={video} />
      ) : (
        <>
          {/* Static gradient fallback for pages without a video. */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_20%_10%,#6b9e5a_0%,#5a8a4a_45%,#2a4523_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,transparent_0%,rgba(215,163,35,0.08)_45%,transparent_100%)]"
          />
        </>
      )}

      {/* Scrim behind the text to keep contrast against the video. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/85 via-charcoal/55 to-charcoal/35"
      />

      <div className="mx-auto w-full max-w-[88rem] px-5 text-center sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow variant="onDark" className="text-gold">
            {eyebrow}
          </Eyebrow>
          <h1 className="mt-5 font-display text-hero font-bold leading-[0.98] text-white">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-cream-90">{description}</p>
          {children && (
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}