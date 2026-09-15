"use client";

import { motion, useReducedMotion } from "motion/react";
import { StatCard } from "@/components/ui/StatCard";

type Stat = {
  value: string;
  label: string;
  tag?: string;
};

const STATS: Stat[] = [
  {
    value: "2,000+ tons",
    label: "Sales Volume",
    tag: "This Year",
  },
  {
    value: "1,000+ tons",
    label: "Services Delivered",
    tag: "This Year",
  },
  {
    value: "Year-Round",
    label: "Supply Availability",
  },
  {
    value: "100%",
    label: "On-Time Delivery",
  },
];

/**
 * Full-width solid forest-green band of large stat blocks. Tailored to the
 * "every scale" promise. Placeholder numbers are marked [TODO] for replacement.
 */
export function ScaleStats() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Pure Pistachio at a glance"
      data-dark
      className="bg-primary text-white"
    >
      <div className="mx-auto max-w-[96rem] px-5 py-10 sm:px-10 sm:py-12 lg:px-20">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-y-0 lg:gap-x-0 lg:divide-x lg:divide-white-25">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? undefined : { opacity: 0, y: -24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 * i }}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                tag={stat.tag}
                metricClassName="lg:text-[clamp(1.875rem,2vw+0.875rem,3.125rem)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}