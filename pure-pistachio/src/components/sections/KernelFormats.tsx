import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import {
  CoverFlowCarousel,
  type CarouselItem,
} from "@/components/ui/3-d-coverflow-carousel";

const SAMPLES: CarouselItem[] = [
  {
    titleLine1: "Sample 1",
    img: "/images/Product Page/1.webp",
    photoOnly: true,
  },
  {
    titleLine1: "Sample 2",
    img: "/images/Product Page/2.webp",
    photoOnly: true,
  },
  {
    titleLine1: "Sample 3",
    img: "/images/Product Page/3.webp",
    photoOnly: true,
  },
  {
    titleLine1: "Sample 4",
    img: "/images/Product Page/4.webp",
    imgScale: 1.3,
    photoOnly: true,
  },
  {
    titleLine1: "Sample 5",
    img: "/images/Product Page/5.webp",
    photoOnly: true,
  },
  {
    titleLine1: "Sample 6",
    img: "/images/Product Page/6.webp",
    photoOnly: true,
  },
  {
    titleLine1: "Sample 7",
    img: "/images/Product Page/7.webp",
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
            Latest Samples
          </Heading>
        </Reveal>
      </Container>

      <CoverFlowCarousel items={SAMPLES} autoplay autoplayDelay={5000} mobileScale={0.7} />
    </Section>
  );
}
