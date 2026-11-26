import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

export function CtaLink({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300";

  const styles = {
    primary:
      "glow-btn bg-gradient-to-r from-purple via-blue to-cyan text-white hover:brightness-110 hover:scale-[1.02]",
    ghost: "text-white/80 hover:text-white",
    outline:
      "border border-white/12 bg-white/4 text-white hover:border-cyan/40 hover:bg-white/8",
  } as const;

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
