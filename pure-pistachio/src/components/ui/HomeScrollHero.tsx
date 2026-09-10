'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export function HomeScrollHero() {
  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/images/Home Page/Pistachios/Home_1.webp"
        bgImageSrc="/images/Home Page/Pistachios/Home_2.webp"
        title="Pistachios, supplied at every scale."
        date="Pure Pistachio"
        scrollToExpand="Scroll to explore"
      />
    </div>
  );
}