"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const TAGS: Record<string, React.ComponentType<Record<string, unknown>>> = {
  div: motion.create("div"),
  figure: motion.create("figure"),
  li: motion.create("li"),
  article: motion.create("article"),
};

/**
 * Fade-and-rise reveal on scroll. Renders final state immediately for users
 * who prefer reduced motion. `as` forwards a semantic element/section tag so
 * sections keep their landmark role and heading order.
 */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = TAGS[as] ?? TAGS.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}