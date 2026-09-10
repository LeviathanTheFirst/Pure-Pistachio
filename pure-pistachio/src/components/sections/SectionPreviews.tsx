import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

const PREVIEWS = [
  {
    title: "Products",
    href: "/products",
    description:
      "Varieties and kernel formats — from raw in-shell to processed ingredients, each with spec sheets and sampling available.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Services",
    href: "/services",
    description:
      "Cracking, sorting, and packing as one seamless supply chain — tailored to your program's scale and spec.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M11.42 15.17l-5.1-3.4a.75.75 0 010-1.26l5.1-3.4a.75.75 0 011.08.66v6.74a.75.75 0 01-1.08.66z" />
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "About Us",
    href: "/about",
    description:
      "Our history, vision, and the operational pipeline from orchard to distribution — meet the team behind the supply.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Contact",
    href: "/contact",
    description:
      "Samples, spec sheets, quotes, or a service question — send us the details and we'll route you to the right person.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
] as const;

/**
 * Quick-glance preview cards linking to the four main site sections.
 * Placed between the hero and the existing homepage content.
 */
export function SectionPreviews() {
  return (
    <section className="bg-white py-[clamp(1.5rem,2vw+1rem,2.5rem)]">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEWS.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-sm border border-stone bg-cream/60 p-5 transition-colors duration-200 hover:border-primary/30 hover:bg-cream"
              >
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </span>
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.06em] text-charcoal">
                  {item.title}
                </h2>
                <p className="mt-1.5 flex-1 text-[0.8125rem] leading-snug text-charcoal-70">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-200 group-hover:text-primary-light">
                  Learn more
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
