import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** `content` = 1440px max, `narrow` = 1152px max. Default `content`. */
  width?: "content" | "narrow";
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "as">;

/** Page gutter wrapper: caps content width, applies horizontal padding. */
export function Container({
  as,
  children,
  className,
  width = "content",
  ...rest
}: ContainerProps) {
  const Tag: ElementType = as ?? "div";
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-10 lg:px-20",
        width === "content" ? "max-w-[88rem]" : "max-w-[72rem]",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}