import Link from "next/link";
import { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ease-out";

const variants = {
  primary:
    "bg-ink text-cream shadow-[0_10px_24px_-10px_rgba(41,39,37,0.45)] hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-10px_rgba(41,39,37,0.5)]",
  accent:
    "bg-yellow text-ink shadow-[0_10px_24px_-12px_rgba(244,214,109,0.9)] hover:-translate-y-0.5 hover:bg-yellow/90",
  outline: "border-2 border-ink/12 text-ink hover:border-ink/25 hover:-translate-y-0.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
