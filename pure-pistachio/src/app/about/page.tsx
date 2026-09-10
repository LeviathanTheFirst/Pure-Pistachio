import type { Metadata } from "next";
import { AboutLampHeader } from "@/components/ui/AboutLampHeader";
import {
  AboutNarrative,
  AboutStats,
  AboutHistory,
  AboutVision,
} from "@/components/sections/AboutNarrative";
import { OperationalFlow } from "@/components/sections/OperationalFlow";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Pure Pistachio — the team, our history, and the operational pipeline from orchard to distribution.",
};

export default function AboutPage() {
  return (
    <>
      <AboutLampHeader />

      <AboutNarrative />
      <AboutStats />
      <AboutHistory />
      <AboutVision />
      <OperationalFlow />
    </>
  );
}