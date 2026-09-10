import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

const BUTTON_ITEMS = [
  {
    id: 1,
    title: "Kernel",
    imageUrl: "/images/Product Page/Buttons/Kernel_Button_2-removebg-preview_upscaled.webp",
  },
  {
    id: 2,
    title: "In-Shell",
    imageUrl: "/images/Product Page/Buttons/in-Shell_Button_2-removebg-preview_upscaled.webp",
  },
];

/** Origin/cultivar showcase — two clickable format options with two-tone background. */
export function ProductVarieties() {
  return (
    <Section
      id="varieties"
      data-dark
      spacing="sm"
      className="relative h-[72dvh] min-h-[520px] flex flex-col justify-between !py-6 md:h-dvh md:min-h-0 md:!py-12 overflow-hidden"
    >
      {/* Fill above the middle cream band so the top area matches the cream color */}

      <div
        className="absolute top-0 left-0 right-0 h-[18%] md:h-[12%]"
        style={{ backgroundColor: '#FAF6E9' }}
      />

      {/* Middle cream section - shifted up 8% */}
      <div
        className="absolute top-[18%] md:top-[12%] left-0 right-0 h-[40%] md:h-[35%]"
        style={{ backgroundColor: '#FAF6E9' }}
      />

      {/* Bottom green section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[42%] md:h-[53%]"
        style={{ backgroundColor: '#DCE3C4' }}
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-between">
        <Reveal>
          <Heading
            as="h2"
            className="mt-4 font-bold text-black text-[clamp(2.5rem,4vw+1rem,4.5rem)] leading-[1.05]"
          >
            Origin &amp; cultivar
          </Heading>
          <p className="mt-4 text-lg text-charcoal max-w-2xl">
            Discover our premium pistachio offerings available in two formats: raw kernels for processing and in-shell for direct consumption.
          </p>
        </Reveal>

        <div className="mt-4 flex min-h-0 flex-1 flex-col justify-center pt-4 -translate-y-[calc(64px-5.6vh)] sm:-translate-y-[4%] md:mt-6 md:pt-8 md:-translate-y-[8%]">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-4 gap-y-4 md:gap-x-24 md:gap-y-0 px-4">
            {BUTTON_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.id === 1 ? "/kernel/" : "/in-shell/"}
                className="group flex flex-col items-center justify-center transition-transform duration-300 hover:scale-125"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="h-[140px] sm:h-[13rem] md:h-[23.8rem] w-auto max-w-full object-contain drop-shadow-lg transition-transform duration-300"
                />
                <span className="relative z-10 mt-2 md:mt-1 inline-block px-2 text-center">
                  <span className="relative z-10 block font-display text-3xl md:text-5xl font-bold text-black tracking-tight">
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-1 block h-4 w-0 -rotate-2 bg-[#7a9e4e] transition-all duration-300 ease-out group-hover:w-[120%]"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
