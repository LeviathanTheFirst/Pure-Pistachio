import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Pure Pistachio logotype. Renders a small mark plus wordmark.
 */
export function Logo({
  className,
  onDark = false,
  linked = true,
}: {
  className?: string;
  onDark?: boolean;
  linked?: boolean;
}) {
  const content = (
    <>
      {/* Simple pistachio-shell mark (two rounded halves). */}
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 text-gold"
        aria-hidden="true"
      >
        <path
          d="M16 5a11 11 0 0 1 0 22A11 11 0 0 1 16 5Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path
          d="M16 9a7 7 0 0 1 0 14 7 7 0 0 1 0-14ZM16 12v8.5"
          stroke="#fff"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <span
        className={cn(
          "font-display text-xl font-semibold uppercase tracking-[0.02em]",
          onDark ? "text-cream" : "text-primary",
        )}
      >
        Pure<span className="text-gold">Pistachio</span>
      </span>
    </>
  );

  return linked ? (
    <Link
      href="/"
      aria-label="Pure Pistachio home"
      className={cn(
        "inline-flex items-center gap-2.5",
        className,
      )}
    >
      {content}
    </Link>
  ) : (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {content}
    </span>
  );
}