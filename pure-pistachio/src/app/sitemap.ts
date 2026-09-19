import type { MetadataRoute } from "next";

const BASE = "https://dastchindane.com";

const routes = [
  "",
  "/products",
  "/services",
  "/about",
  "/contact",
  "/in-shell",
  "/kernel",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE}${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
