/**
 * Glowing gradient separator between product rows. Uses the brand gold as the
 * glow center fading out to primary — a recurring accent on product pages.
 */
export function GradientDivider() {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-px max-w-5xl w-full overflow-visible"
    >
      {/* Core hairline gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-stone) 18%, var(--color-gold) 50%, var(--color-stone) 82%, transparent)",
        }}
      />
      {/* Soft glow layer */}
      <div
        className="absolute inset-0"
        style={{
          filter: "blur(6px)",
          background:
            "linear-gradient(90deg, transparent, rgba(215,163,35,0.55) 45%, rgba(90,138,74,0.4) 55%, transparent)",
        }}
      />
    </div>
  );
}