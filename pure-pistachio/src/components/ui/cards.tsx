'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

/**
 * @typedef CardItem
 * @property {string | number} id - Unique identifier for the card.
 * @property {string} title - The main title text of the card.
 * @property {string} subtitle - The subtitle or category text.
 * @property {string} imageUrl - The URL for the card's background image.
 * @property {string} [description] - Optional short description shown on the card.
 * @property {string} [ctaLabel] - Optional button label (e.g. "Order Now" / "More Info").
 * @property {string} [ctaHref] - Optional button href. Omit to hide the button.
 */
export interface CardItem {
  id: string | number;
  title: string;
  subtitle: string;
  imageUrl: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** CSS background-position override, e.g. "center 0%". Defaults to "center 50%". */
  imagePosition?: string;
  /** CSS background-size zoom, e.g. 1.7 for 170%. Defaults to 1.5. */
  imageZoom?: number;
}

/**
 * @typedef HoverRevealCardsProps
 * @property {CardItem[]} items - An array of card item objects to display.
 * @property {string} [className] - Optional additional class names for the container.
 * @property {string} [cardClassName] - Optional additional class names for individual cards.
 */
export interface HoverRevealCardsProps {
  items: CardItem[];
  className?: string;
  cardClassName?: string;
}

/**
 * A component that displays a grid of cards with a hover-reveal effect.
 * When a card is hovered or focused, it stands out while others are de-emphasized.
 * Each card can show a subtitle, title, optional description, and an optional
 * CTA button anchored to the bottom.
 */
const HoverRevealCards: React.FC<HoverRevealCardsProps> = ({
  items,
  className,
  cardClassName,
}) => {
  return (
    <div
      role="list"
      className={cn(
        'group grid h-full w-full max-w-4xl grid-cols-1 grid-rows-2 gap-8 p-4 sm:grid-cols-2',
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          role="listitem"
          aria-label={`${item.title}, ${item.subtitle}`}
          tabIndex={0}
          className={cn(
            'relative flex h-full min-h-0 w-full cursor-pointer flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out',
            'group-hover:scale-[0.97] group-hover:opacity-60',
            'hover:!scale-105 hover:!opacity-100 focus-visible:!scale-105 focus-visible:!opacity-100',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background',
            cardClassName
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageUrl}
            alt={item.title}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: item.imagePosition ?? "center 50%",
              transform: `scale(${item.imageZoom ?? 1.5})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

          <div className="relative z-10 mt-auto flex flex-col p-6 text-white">
            <p className="text-xs font-medium uppercase tracking-widest text-white/80">
              {item.subtitle}
            </p>
            <h3 className="mt-1 text-2xl font-bold">{item.title}</h3>

            {item.description && (
              <p className="mt-2 text-sm leading-snug text-white/85">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverRevealCards;

export interface VarietyCarouselProps {
  items: CardItem[];
  className?: string;
}

/**
 * Single large card carousel. Shows one card at a time with prev/next
 * controls and dot indicators; the card fills the available height.
 */
export const VarietyCarousel: React.FC<VarietyCarouselProps> = ({
  items,
  className,
}) => {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const count = items.length;

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + count) % count);
  };
  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % count);
  };
  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const item = items[index];
  const isFirst = index === 0;
  const isLast = index === count - 1;

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%' }),
    center: { x: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%' }),
  };

  return (
    <div className={cn('flex h-full w-full max-w-5xl flex-col', className)}>
      {/* The big card */}
      <div className="relative flex min-h-0 w-full flex-1">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={item.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${item.title}, ${item.subtitle}`}
            className="absolute inset-0 flex flex-col overflow-hidden rounded-xl shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imageUrl}
              alt={item.title}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                objectPosition: item.imagePosition ?? 'center 50%',
                transform: `scale(${item.imageZoom ?? 1.5})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

            <div className="relative z-10 mt-auto flex flex-col p-8 text-white">
              <p className="text-sm font-medium uppercase tracking-widest text-white/80">
                {item.subtitle}
              </p>
              <h3 className="mt-2 text-4xl font-bold md:text-5xl">{item.title}</h3>
              {item.description && (
                <p className="mt-3 max-w-xl text-lg leading-snug text-white/85">
                  {item.description}
                </p>
              )}
            </div>

            {/* Prev / next arrows */}
            <button
              type="button"
              onClick={prev}
              disabled={isFirst}
              aria-label="Previous variety"
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-cream/90 p-3 text-charcoal shadow-md transition hover:bg-cream disabled:opacity-40"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={isLast}
              aria-label="Next variety"
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-cream/90 p-3 text-charcoal shadow-md transition hover:bg-cream disabled:opacity-40"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${it.title}`}
            aria-current={i === index ? 'true' : undefined}
            className={cn(
              'h-2.5 rounded-full bg-white/50 transition-all',
              i === index ? 'w-6 bg-white' : 'w-2.5 hover:bg-white/80',
            )}
          />
        ))}
      </div>
    </div>
  );
};
