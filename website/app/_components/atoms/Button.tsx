import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "soft" | "outline" | "danger";

type ButtonProps = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "children">;

const variantClass: Record<Variant, string> = {
  primary: "btn primary",
  soft: "btn soft",
  outline: "btn outline",
  danger: "btn danger",
};

export function Button({ variant = "primary", href, children, className = "", ...rest }: ButtonProps) {
  const cls = `${variantClass[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}