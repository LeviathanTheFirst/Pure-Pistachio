"use client";

import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

const textReveal = {
  delay: 0.3,
  duration: 0.8,
  ease: "easeInOut" as const,
};

/**
 * Lamp-driven hero header for the About page.
 * Renders inside a `LampContainer` with animated pistachio light cones
 * and a gold filament, matching the brand palette.
 */
export function AboutLampHeader() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={textReveal}
        className="flex flex-col items-center text-center"
      >
        <Eyebrow variant="gold">About</Eyebrow>

        <h1
          className="mt-6 font-display font-black uppercase tracking-title [font-variation-settings:var(--font-variation-title)] leading-[1.04] text-5xl md:text-8xl"
          style={{
            color: "#f5f1e8",
          }}
        >
          Why Pure Pistachios
        </h1>

        <p className="mt-8 max-w-3xl text-xl md:text-2xl" style={{ color: "#f5f1e8" }}>
          The people, history, and pipeline behind a dependable pistachio
          program — and how quality control runs alongside every stage.
        </p>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/contact" variant="onDark" size="lg">
            Get in Touch
          </ButtonLink>
        </div>
      </motion.div>
    </LampContainer>
  );
}
