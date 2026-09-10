"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Autoplaying, looping background video. Decorative (aria-hidden) and muted by
 * design. Respects prefers-reduced-motion: when the user has reduced motion
 * enabled, the video does not autoplay — a first frame is shown instead.
 */
export function VideoBackground({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        ref.current?.pause();
      } else {
        ref.current?.play().catch(() => {});
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <video
      ref={ref}
      aria-hidden
      className="absolute inset-0 -z-20 h-full w-full object-cover"
      autoPlay={!reducedMotion}
      muted
      loop={!reducedMotion}
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
