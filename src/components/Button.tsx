"use client";

import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-extrabold uppercase tracking-[0.5px] border-[3px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#1a1a1a] [transition:all_0.15s_ease]";

  const styles =
    variant === "solid"
      ? "bg-[#5b3fa3] text-white"
      : "bg-white text-foreground";

  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}
