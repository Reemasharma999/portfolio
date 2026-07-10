"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

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
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-200 ease-out";

  const styles =
    variant === "solid"
      ? "bg-accent text-white shadow-button hover:bg-accent-hover hover:shadow-buttonHover hover:-translate-y-0.5"
      : "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5";

  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}
