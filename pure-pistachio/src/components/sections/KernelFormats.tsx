import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import {
  CoverFlowCarousel,
  type CarouselItem,
} from "@/components/ui/3-d-coverflow-carousel";

const OPERATIONS: CarouselItem[] = [
  {
    titleLine1: "Cracking",
    img: "/images/Services Page/Cracking.webp",
    photoOnly: true,
  },
  {
    titleLine1: "Sorting",
    img: "/images/Services Page/Sorting.webp",
    photoOnly: true,
  },
  {
    titleLine1: "Facility",
    img: "/images/Real Pics/7L5A0418.jpg",
    photoOnly: true,
  },
  {
    titleLine1: "Quality Control",
    img: "/images/Real Pics/7L5A0437.jpg",
    photoOnly: true,
  },
  {
    titleLine1: "Packaging",
    img: "/images/Real Pics/7L5A0439.jpg",
    photoOnly: true,
  },
  {
    titleLine1: "Processing",
    img: "/images/Real Pics/7L5A0455.jpg",
    photoOnly: true,
  },
  {
    titleLine1: "Operations",
    img: "/images/Real Pics/7L5A0459.jpg",
    photoOnly: true,
  },
];

/** Operations photo carousel — full-viewport section, carousel fills the
 *  screen under the heading so the center photo fills the whole viewport. */
export function KernelFormats() {
  return (
    <Section
      id="kernel-formats"
      spacing="sm"
      className="flex h-dvh min-h-[560px] flex-col justify-between overflow-hidden bg-cream !py-6"
    >
      <Container className="shrink-0">
        <Reveal className="max-w-2xl py-2">
          <Heading
            as="h2"
            className="mt-1 font-bold text-[clamp(2.5rem,4vw+1rem,4.5rem)] leading-[1.05]"
          >
            Our operations
          </Heading>
        </Reveal>
      </Container>

      <CoverFlowCarousel items={OPERATIONS} autoplay autoplayDelay={5000} />
    </Section>
  );
}
