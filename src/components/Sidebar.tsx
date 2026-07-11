"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { motion, type Variants } from "framer-motion";
import { SearchIcon, GridIcon, BoltIcon } from "./icons";

export type Section = "product-teardowns" | "systems-ux" | "ai-products";

interface SidebarItem {
  id: Section;
  label: string;
  shortLabel: string;
  iconBg: string;
  iconColor: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const items: SidebarItem[] = [
  {
    id: "product-teardowns",
    label: "Product teardowns",
    shortLabel: "Teardowns",
    iconBg: "#fde8e0",
    iconColor: "#c2410c",
    Icon: SearchIcon,
  },
  {
    id: "systems-ux",
    label: "Systems and UX",
    shortLabel: "Systems",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    Icon: GridIcon,
  },
  {
    id: "ai-products",
    label: "AI products",
    shortLabel: "AI",
    iconBg: "#e0f2fe",
    iconColor: "#0369a1",
    Icon: BoltIcon,
  },
];

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.5, staggerChildren: 0.5 },
  },
};

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", damping: 20, stiffness: 150 },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0.7 },
  show: {
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 150 },
  },
};

interface SidebarProps {
  active: Section;
  onSelect: (section: Section) => void;
}

export default function Sidebar({ active, onSelect }: SidebarProps) {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSelect = (id: Section) => {
    setHasInteracted(true);
    onSelect(id);
  };

  return (
    <>
      {/* Desktop vertical sidebar */}
      <nav className="hidden w-[220px] shrink-0 border-r-[0.5px] border-r-[#e5e2dc] bg-[#f5f4f2] md:block">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="px-4 pb-3 pt-5 text-[9px] font-bold uppercase tracking-[1.5px] text-[#c7c2bc]"
        >
          Explore
        </motion.p>

        <motion.ul variants={listVariants} initial="hidden" animate="show">
          {items.map((item, index) => {
            const isActive = active === item.id;
            const showInitialPulse =
              item.id === "product-teardowns" && isActive && !hasInteracted;

            return (
              <li key={item.id}>
                <motion.button
                  variants={itemVariants}
                  onClick={() => handleSelect(item.id)}
                  className={`relative flex w-full items-center gap-3 border-l-[3px] px-4 py-2.5 text-left transition-colors duration-150 ${
                    isActive
                      ? "border-l-[#5b3fa3] bg-[rgba(91,63,163,0.06)] text-[#1c1917]"
                      : "border-l-transparent text-[#a8a29e] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#57534e]"
                  }`}
                >
                  {showInitialPulse && (
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-0 h-full w-[3px]"
                      initial={{ boxShadow: "0 0 0 0 rgba(91,63,163,0)" }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(91,63,163,0)",
                          "0 0 10px 3px rgba(91,63,163,0.7)",
                          "0 0 0 0 rgba(91,63,163,0)",
                        ],
                      }}
                      transition={{ duration: 0.9, delay: 2, ease: "easeOut" }}
                    />
                  )}
                  <motion.span
                    variants={iconVariants}
                    className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[8px]"
                    style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                  >
                    <item.Icon className="h-[15px] w-[15px]" />
                  </motion.span>
                  <span className="text-[13px] font-semibold">{item.label}</span>
                </motion.button>
                {index === 1 && (
                  <div className="mx-4 my-2 border-t border-[#e5e2dc]" />
                )}
              </li>
            );
          })}
        </motion.ul>
      </nav>

      {/* Mobile horizontal tab bar */}
      <nav className="flex gap-2 overflow-x-auto border-b border-[#e5e2dc] bg-[#f5f4f2] px-4 py-3 md:hidden">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
                isActive ? "bg-[rgba(91,63,163,0.08)] text-[#1c1917]" : "text-[#a8a29e]"
              }`}
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-[6px]"
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
              >
                <item.Icon className="h-3.5 w-3.5" />
              </span>
              {item.shortLabel}
            </button>
          );
        })}
      </nav>
    </>
  );
}
