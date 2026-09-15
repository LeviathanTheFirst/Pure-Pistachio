import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "onDark" | "secondary-inverse" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm font-display font-semibold uppercase tracking-[0.12em] transition-[transform,background-color,color,border-color,outline-color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light active:bg-primary",
  secondary:
    "border border-primary bg-transparent text-primary hover:border-primary-light hover:bg-primary hover:text-white",
  onDark:
    "bg-gold text-charcoal hover:bg-white hover:text-primary",
  "secondary-inverse":
    "border border-cream/70 bg-transparent text-cream hover:border-white hover:bg-cream hover:text-primary",
  ghost: "text-primary underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/** Display-font title recipe — heavy, condensed, uppercase. Applied last so it
 *  overrides variant-level font-weight and tracking via tailwind-merge. */
const titleRecipe =
  "font-black uppercase tracking-title [font-variation-settings:var(--font-variation-title)]";

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  /** Apply the display-font title recipe (heavy/uppercase/condensed). */
  displayTitle?: boolean;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ariaLabel,
  displayTitle,
}: ButtonLinkProps) {
  const isAnchor = href.startsWith("#");
  const classes = cn(base, variants[variant], sizes[size], className, displayTitle && titleRecipe);
  const aria = ariaLabel ? { "aria-label": ariaLabel } : {};

  if (isAnchor) {
    return (
      <a href={href} className={classes} {...aria}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...aria}>
      {children}
    </Link>
  );
}

interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Apply the display-font title recipe (heavy/uppercase/condensed). */
  displayTitle?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  disabled,
  displayTitle,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        disabled &&
          "cursor-not-allowed opacity-50 hover:bg-inherit hover:text-inherit active:bg-inherit",
        className,
        displayTitle && titleRecipe,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
