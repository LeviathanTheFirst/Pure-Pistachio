"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Pure Pistachio -- themed Lamp component.
 *
 * Colour tokens (from the brand palette in globals.css):
 *   --color-charcoal    #1c1e1b   dark surfaces / masks
 *   --color-primary     #5a8a4a   pistachio green -- primary
 *   --color-primary-light #6b9e5a lighter pistachio -- secondary glow
 *   --color-gold        #d7a323   harvest gold -- accent filament
 *   --color-cream       #f5f1e8   warm cream -- light text on dark
 *   --color-stone       #d9d5cb   muted text gradient stop
 *
 * Animation: conic cones expand into view, light bloom scales,
 * gold filament stretches -- all driven by motion whileInView.
 */

/* ---------- colour constants (JS, for inline styles) ---------- */
const PRIMARY = "#2d5a1f";
const PRIMARY_LIGHT = "#3d7a2a";
const GOLD = "var(--color-gold)";
const CREAM = "var(--color-charcoal)";

/* ---------- animation timing (shared across elements) ---------- */
const revealTransition = {
  delay: 0.3,
  duration: 0.8,
  ease: "easeInOut" as const,
};

/* ------------------------------------------------------------------ */
/*  LampContainer -- the full-page dark section with animated light   */
/* ------------------------------------------------------------------ */

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // On narrow (<768px) screens the fixed 30rem cone widths push the light
  // source off the edges of the viewport. Mobile renders the cones at a
  // viewport-relative width (bulbs on-screen, 46vw) and drives them to their
  // final state via the controlled `animate` prop -- a deterministic reveal
  // that never depends on IntersectionObserver. Desktop keeps the original
  // whileInView width-grow exactly.
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setNarrow(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const coneProps = narrow
    ? { initial: false as const, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0.5, width: "15rem" },
        whileInView: { opacity: 1, width: "30rem" },
        transition: revealTransition,
      };
  const filamentProps = narrow
    ? { initial: false as const, animate: { opacity: 1 } }
    : {
        initial: { width: "15rem" },
        whileInView: { width: "30rem" },
        transition: revealTransition,
      };
  const coreGlowProps = narrow
    ? { initial: false as const, animate: { opacity: 1 } }
    : {
        initial: { width: "8rem" },
        whileInView: { width: "16rem" },
        transition: revealTransition,
      };

  return (
    <div
      className={cn(
        "relative flex min-h-dvh flex-col items-center justify-center overflow-hidden w-full z-0",
        className
      )}
      style={{ backgroundColor: CREAM }}
    >
      <div className="absolute inset-0 flex items-center justify-center isolate z-0">
        {/* ---------------------------------------------------------- *
         *  Left pistachio cone -- conic gradient radiating right
         * ---------------------------------------------------------- */}
        <motion.div
          {...coneProps}
          className="absolute inset-auto top-[88px] md:top-0 right-1/2 h-56 overflow-visible w-[30rem] max-w-[46vw] md:max-w-none"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, ${PRIMARY}, ${PRIMARY_LIGHT}, transparent, transparent)`,
          }}
        >
          {/* Horizontal mask -- trims bottom */}
          <div
            className="absolute w-[100%] left-0 h-40 bottom-0 z-20"
            style={{
              backgroundColor: "var(--color-charcoal)",
              maskImage: "linear-gradient(to top, white, transparent)",
              WebkitMaskImage: "linear-gradient(to top, white, transparent)",
            }}
          />
          {/* Vertical mask -- trims right edge */}
          <div
            className="absolute w-[33.333%] h-[100%] left-0 bottom-0 z-20"
            style={{
              backgroundColor: "var(--color-charcoal)",
              maskImage: "linear-gradient(to right, white, transparent)",
              WebkitMaskImage: "linear-gradient(to right, white, transparent)",
            }}
          />
        </motion.div>

        {/* ---------------------------------------------------------- *
         *  Right pistachio cone -- conic gradient radiating left
         * ---------------------------------------------------------- */}
        <motion.div
          {...coneProps}
          className="absolute inset-auto top-[88px] md:top-0 left-1/2 h-56 w-[30rem] max-w-[46vw] md:max-w-none"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${PRIMARY_LIGHT}, ${PRIMARY})`,
          }}
        >
          {/* Vertical mask -- trims left edge */}
          <div
            className="absolute w-[33.333%] h-[100%] right-0 bottom-0 z-20"
            style={{
              backgroundColor: "var(--color-charcoal)",
              maskImage: "linear-gradient(to left, white, transparent)",
              WebkitMaskImage: "linear-gradient(to left, white, transparent)",
            }}
          />
          {/* Horizontal mask -- trims bottom */}
          <div
            className="absolute w-[100%] right-0 h-40 bottom-0 z-20"
            style={{
              backgroundColor: "var(--color-charcoal)",
              maskImage: "linear-gradient(to top, white, transparent)",
              WebkitMaskImage: "linear-gradient(to top, white, transparent)",
            }}
          />
        </motion.div>

        {/* ---------------------------------------------------------- *
         *  Dark base blur -- deep shadow beneath the light source
         * ---------------------------------------------------------- */}
        <div
          className="absolute top-[calc(50%+88px)] md:top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-lg"
          style={{ backgroundColor: "var(--color-charcoal)" }}
        />

        {/* ---------------------------------------------------------- *
         *  Frosted glass overlay -- subtle diffusion band
         * ---------------------------------------------------------- */}
        <div className="absolute top-[calc(50%+88px)] md:top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-sm" />

        {/* ---------------------------------------------------------- *
         *  Wide ambient pistachio glow -- soft outer bloom
         * ---------------------------------------------------------- */}
        <div
          className="absolute inset-auto top-[88px] md:top-0 z-[45] h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-xl"
          style={{ backgroundColor: PRIMARY }}
        />

        {/* ---------------------------------------------------------- *
         *  Secondary pistachio bloom -- slightly cooler, layered
         * ---------------------------------------------------------- */}
        <div
          className="absolute inset-auto top-[88px] md:top-0 z-[44] h-28 w-[22rem] -translate-y-1/2 rounded-full opacity-30 blur-xl"
          style={{ backgroundColor: PRIMARY_LIGHT }}
        />

        {/* ---------------------------------------------------------- *
         *  Focused light-pistachio bloom -- tight core glow
         * ---------------------------------------------------------- */}
        <motion.div
          {...coreGlowProps}
          className="absolute inset-auto top-[88px] md:top-0 z-30 h-36 w-64 -translate-y-1/2 rounded-full blur-lg"
          style={{ backgroundColor: PRIMARY_LIGHT }}
        />

        {/* ---------------------------------------------------------- *
         *  Gold accent line -- the bright horizontal filament
         * ---------------------------------------------------------- */}
        <motion.div
          {...filamentProps}
          className="absolute inset-auto top-[88px] md:top-0 z-50 h-0.5 w-[30rem] max-w-[46vw] md:max-w-none"
          style={{ backgroundColor: GOLD }}
        />

        {/* ---------------------------------------------------------- *
         *  Charcoal mask -- conceals the top of the light source
         * ---------------------------------------------------------- */}
        <div
          className="absolute inset-auto top-0 z-[48] h-0 w-full"
          style={{ backgroundColor: "var(--color-charcoal)" }}
        />
      </div>

      {/* ---------------------------------------------------------- *
       *  Content area -- sits in the vertical middle of the page
       * ---------------------------------------------------------- */}
      <div className="relative z-50 flex flex-col items-center px-5 text-white">
        {children}
      </div>
    </div>
  );
};
