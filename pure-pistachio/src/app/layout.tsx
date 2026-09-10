import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const playfairDisplay = localFont({
  src: [
    { path: "./fonts/playfair-display-400.woff2", weight: "400" },
    { path: "./fonts/playfair-display-500.woff2", weight: "500" },
    { path: "./fonts/playfair-display-600.woff2", weight: "600" },
    { path: "./fonts/playfair-display-700.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--font-playfair-display",
});

const inter = localFont({
  src: "./fonts/inter-var.woff2",
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Pure Pistachio — Pistachios, supplied at every scale",
    template: "%s | Pure Pistachio",
  },
  description:
    "Pure Pistachio supplies premium pistachios to buyers of every size — from single-location foodservice to enterprise manufacturing and private label. Sourcing, processing, formats, and volume under one roof.",
  openGraph: {
    title: "Pure Pistachio",
    description:
      "Pistachios, supplied at every scale. Sourcing, processing, and formats for any customer size.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollToTop />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-cream focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-medium focus:uppercase focus:tracking-[0.12em] focus:text-primary"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}