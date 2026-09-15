"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

// Inline Icons (Zero external dependencies)
const ChevronLeftIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export interface CarouselItem {
  tag?: string;
  titleLine1: string;
  titleLine2?: string;
  desc?: string;
  img: string;
  ctaText?: string;
  ctaUrl?: string;
  /** Scale the crop of this item's image (zoom in). Default 1. */
  imgScale?: number;
  /** When true, renders cards as photo-only with no text overlays or CTA buttons. */
  photoOnly?: boolean;
}

export interface CoverFlowCarouselProps {
  items: CarouselItem[];
  sectionLabel?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  onCtaClick?: (item: CarouselItem) => void;
  /** Multiplier applied to card width/height on small screens (≤640px). */
  mobileScale?: number;
}

export function CoverFlowCarousel({
  items,
  sectionLabel = "Carousel",
  autoplay = true,
  autoplayDelay = 5000,
  className = "",
  onCtaClick,
  mobileScale = 1,
}: CoverFlowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const total = items.length;

  // Determine if all items are photoOnly — use the first item's flag
  const photoOnly = items.length > 0 && items[0].photoOnly === true;

  // Photo-only mode: measure the stage (which flexes to fill available height)
  // and size the cards proportionally so the center photo fills the screen.
  const stageRef = useRef<HTMLDivElement>(null);
  const [card, setCard] = useState({ w: 330, h: 400 });

  useEffect(() => {
    if (!photoOnly) return;
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      const sh = el.clientHeight;
      const sw = el.clientWidth;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const scale = isMobile && mobileScale < 1 ? mobileScale : 1;
      let baseH = Math.min(Math.max(240, sh - 44), 720);
      // On mobile cap the card height so the reduced carousel never
      // dominates the small viewport.
      if (isMobile && mobileScale < 1) {
        baseH = Math.min(baseH, Math.round(window.innerHeight * 0.5));
      }
      const baseW = Math.min(sw * 0.72, baseH * 0.825);
      setCard({
        w: Math.round(baseW * scale),
        h: Math.round(baseH * scale),
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [photoOnly, mobileScale]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx % total);
  };

  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    const interval = setInterval(nextSlide, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered, nextSlide, total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  };

  if (!items || items.length === 0) return null;

  // Side-card spacing, scaled to the measured card width in photo-only mode.
  const spacing1 = photoOnly ? card.w * 0.86 : 285;
  const spacing2 = photoOnly ? card.w * 1.5 : 510;

  return (
    <section
      aria-label={sectionLabel || "Carousel"}
      className={`relative w-full flex items-center justify-center overflow-hidden select-none ${
        photoOnly ? "min-h-0 flex-1 py-2" : "min-h-[760px] py-12"
      } ${className}`}
      style={{
        backgroundColor: photoOnly ? undefined : "var(--color-cream)",
        color: "var(--color-charcoal)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Flat cream surface — no ambience gradient, blends with the parent section. */}
      <div
        className={`relative z-10 flex flex-col items-center ${
          photoOnly ? "h-full w-full px-4 py-3" : "w-full max-w-6xl mx-auto px-4"
        }`}
      >
        {/* 3D Coverflow Stage */}
        <div
          ref={stageRef}
          className={`relative w-full flex justify-center items-center ${
            photoOnly ? "flex-1 min-h-0" : "h-[520px] mb-8"
          }`}
          style={{ perspective: "1400px" }}
        >
          {items.map((item, idx) => {
            const offset = (idx - currentIndex + total) % total;

            let transform = "translateX(0px) scale(0.4) rotateY(0deg)";
            let opacity = 0;
            let zIndex = 0;
            let filter = "brightness(0.4) blur(2px)";
            let isCenter = false;

            if (offset === 0) {
              isCenter = true;
              transform = "translateX(0px) scale(1) rotateY(0deg)";
              opacity = 1;
              zIndex = 30;
              filter = "brightness(1)";
            } else if (offset === 1) {
              transform = `translateX(${spacing1}px) scale(0.84) rotateY(-24deg)`;
              opacity = 0.65;
              zIndex = 20;
              filter = "brightness(0.75)";
            } else if (offset === 2) {
              transform = `translateX(${spacing2}px) scale(0.68) rotateY(-38deg)`;
              opacity = 0.38;
              zIndex = 10;
              filter = "brightness(0.55) blur(1px)";
            } else if (offset === total - 1) {
              transform = `translateX(${-spacing1}px) scale(0.84) rotateY(24deg)`;
              opacity = 0.65;
              zIndex = 20;
              filter = "brightness(0.75)";
            } else if (offset === total - 2) {
              transform = `translateX(${-spacing2}px) scale(0.68) rotateY(38deg)`;
              opacity = 0.38;
              zIndex = 10;
              filter = "brightness(0.55) blur(1px)";
            }

            return (
              <div
                key={idx}
                onClick={() => !isCenter && goToSlide(idx)}
                style={{
                  position: "absolute",
                  width: photoOnly ? `${card.w}px` : "330px",
                  height: photoOnly ? `${card.h}px` : "500px",
                  borderRadius: "6px", // brand rounded-sm
                  overflow: "hidden",
                  backgroundColor: "#ffffff", // white elevated card
                  border: "1px solid var(--color-stone)",
                  transform,
                  opacity,
                  zIndex,
                  filter,
                  transformOrigin: "center center",
                  transition: "transform 800ms cubic-bezier(0.25, 1, 0.5, 1), opacity 800ms cubic-bezier(0.25, 1, 0.5, 1), filter 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 800ms cubic-bezier(0.25, 1, 0.5, 1)",
                  boxShadow: isCenter
                    ? "0 20px 50px rgba(28,30,27,0.18), 0 4px 12px rgba(28,30,27,0.08)"
                    : "0 10px 28px rgba(28,30,27,0.10), 0 2px 6px rgba(28,30,27,0.05)",
                  cursor: isCenter ? "default" : "pointer",
                }}
              >
                {/* Photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.titleLine1 || "Carousel image"}
                  width={photoOnly ? card.w : 330}
                  height={photoOnly ? card.h : 500}
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: item.imgScale ? `scale(${item.imgScale})` : undefined,
                    transformOrigin: "center center",
                    transition: "transform 800ms cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                />

                {/* Dark Vignette Overlay — hidden in photoOnly mode */}
                {!photoOnly && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.68) 60%, rgba(0,0,0,0.96) 100%)",
                      pointerEvents: "none",
                      zIndex: 10,
                    }}
                  />
                )}

                {/* Content Overlay — hidden in photoOnly mode */}
                {!photoOnly && (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      padding: "20px 18px 22px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: "center",
                      zIndex: 20,
                      opacity: isCenter ? 1 : 0,
                      transform: isCenter ? "translateY(0px)" : "translateY(16px)",
                      transition: "opacity 500ms ease, transform 500ms ease",
                      pointerEvents: isCenter ? "auto" : "none",
                    }}
                  >
                    {/* Tag */}
                    <div style={{ textAlign: "right", width: "100%", paddingRight: "4px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          color: "rgb(255 255 255 / 0.8)", // --color-white-80
                          textShadow: "0 2px 6px rgba(0,0,0,0.8)",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Body Content */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "3px",
                        marginTop: "auto",
                        paddingBottom: "4px",
                      }}
                    >
                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.65rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.02em",
                          color: "#ffffff",
                          margin: 0,
                          lineHeight: 1.1,
                          textShadow: "0 3px 12px rgba(0,0,0,0.95)",
                        }}
                      >
                        {item.titleLine1}
                      </h2>

                      {item.titleLine2 && (
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            color: "rgb(255 255 255 / 0.8)", // --color-white-80
                            lineHeight: 1.2,
                            textShadow: "0 3px 10px rgba(0,0,0,0.9)",
                          }}
                        >
                          {item.titleLine2}
                        </span>
                      )}

                      <div
                        style={{
                          width: "34px",
                          height: "2px",
                          backgroundColor: "var(--color-gold)",
                          borderRadius: "2px",
                          margin: "5px auto 4px",
                          boxShadow: "0 0 8px rgba(215,163,35,0.7)",
                        }}
                      />

                      {item.desc && (
                        <p
                          style={{
                            fontSize: "0.82rem",
                            fontStyle: "normal",
                            color: "rgb(255 255 255 / 0.8)", // --color-white-80
                            maxWidth: "280px",
                            margin: "0 0 10px",
                            lineHeight: 1.3,
                            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                          }}
                        >
                          {item.desc}
                        </p>
                      )}

                      <a
                        className="coverflow-cta"
                        href={item.ctaUrl || "#"}
                        onClick={(e) => {
                          if (onCtaClick) {
                            e.preventDefault();
                            onCtaClick(item);
                          }
                        }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "7px 18px",
                          borderRadius: "6px", // brand rounded-sm
                          background: "var(--color-primary)", // matches site Button primary
                          color: "#ffffff",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          boxShadow: "0 2px 8px rgba(28,30,27,0.15)",
                          cursor: "pointer",
                          transition: "transform 200ms ease, background-color 200ms ease, box-shadow 200ms ease",
                        }}
                      >
                        <span>{item.ctaText || "View Menu"}</span>
                        <ArrowRightIcon />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          className="coverflow-arrow opacity-40 md:opacity-100"
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            left: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "var(--color-charcoal)", // dark arrow on cream
            border: "1px solid var(--color-charcoal)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(28,30,27,0.15)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
        >
          <ChevronLeftIcon />
        </button>

        <button
          className="coverflow-arrow opacity-40 md:opacity-100"
          onClick={nextSlide}
          aria-label="Next slide"
          style={{
            position: "absolute",
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "var(--color-charcoal)", // dark arrow on cream
            border: "1px solid var(--color-charcoal)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(28,30,27,0.15)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
        >
          <ChevronRightIcon />
        </button>

        {/* Pagination Dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            zIndex: 30,
          }}
          className={photoOnly ? "mt-3 shrink-0" : undefined}
        >
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                height: "8px",
                width: idx === currentIndex ? "28px" : "8px",
                borderRadius: "9999px",
                backgroundColor: idx === currentIndex ? "var(--color-primary)" : "var(--color-charcoal-70)", // active green, inactive charcoal
                border: "none",
                cursor: "pointer",
                transition: "all 300ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Component = CoverFlowCarousel;
export default CoverFlowCarousel;