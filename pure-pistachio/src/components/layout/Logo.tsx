import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Pure Pistachio logotype. Renders the logo image.
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
    <img
      src="/images/Logo.png"
      alt="Pure Pistachio logo"
      className={cn("h-12 w-auto", className)}
    />
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