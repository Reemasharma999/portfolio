"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { motion } from "framer-motion";
import { SearchIcon, GridIcon, BoltIcon } from "./icons";

export type Section = "product-teardowns" | "systems-ux" | "ai-products";

interface SidebarItem {
  id: Section;
  label: string;
  shortLabel: string;
  iconBg: string;
  iconColor: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  delay: number;
}

const items: SidebarItem[] = [
  {
    id: "product-teardowns",
    label: "Product teardowns",
    shortLabel: "Teardowns",
    iconBg: "#fde8e0",
    iconColor: "#c2410c",
    Icon: SearchIcon,
    delay: 1.0,
  },
  {
    id: "systems-ux",
    label: "Systems and UX",
    shortLabel: "Systems",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    Icon: GridIcon,
    delay: 1.6,
  },
  {
    id: "ai-products",
    label: "AI products",
    shortLabel: "AI",
    iconBg: "#e0f2fe",
    iconColor: "#0369a1",
    Icon: BoltIcon,
    delay: 2.3,
  },
];

interface SidebarProps {
  active: Section;
  onSelect: (section: Section) => void;
  triggered: boolean;
}

export default function Sidebar({ active, onSelect, triggered }: SidebarProps) {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSelect = (id: Section) => {
    setHasInteracted(true);
    onSelect(id);
  };

  return (
    <>
      {/* Desktop vertical sidebar — slides open from the left edge of the viewport */}
      <motion.nav
        initial={{ width: 0 }}
        animate={{ width: triggered ? 220 : 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 140 }}
        className="hidden shrink-0 overflow-hidden border-r-[0.5px] border-r-[#e5e2dc] bg-[#f0efec] md:block"
      >
        <div className="w-[220px]">
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={triggered ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="px-5 pb-3 pt-5 text-[9px] font-bold uppercase tracking-[1.5px] text-[#c7c2bc]"
          >
            Explore
          </motion.p>

          <ul>
            {items.map((item, index) => {
              const isActive = active === item.id;
              const showInitialPulse =
                triggered &&
                item.id === "product-teardowns" &&
                isActive &&
                !hasInteracted;

              return (
                <li key={item.id}>
                  <motion.button
                    onClick={() => handleSelect(item.id)}
                    initial={{ x: -24, opacity: 0, scale: 0.95 }}
                    animate={
                      triggered
                        ? { x: 0, opacity: 1, scale: 1 }
                        : { x: -24, opacity: 0, scale: 0.95 }
                    }
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 150,
                      delay: item.delay,
                    }}
                    className={`relative flex w-full items-center gap-[10px] border-l-[3px] px-[20px] py-[11px] text-left transition-colors duration-150 ${
                      isActive
                        ? "border-l-[#5b3fa3] bg-[rgba(91,63,163,0.06)] text-[#1c1917]"
                        : "border-l-transparent text-[#a8a29e] hover:bg-[rgba(0,0,0,0.025)] hover:text-[#57534e]"
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
                            "0 0 12px 0 rgba(91,63,163,0.5)",
                            "0 0 0 0 rgba(91,63,163,0)",
                          ],
                        }}
                        transition={{ duration: 1, delay: 2.8, ease: "easeInOut" }}
                      />
                    )}
                    <motion.span
                      initial={{ scale: 0.5 }}
                      animate={triggered ? { scale: 1 } : { scale: 0.5 }}
                      transition={{
                        type: "spring",
                        damping: 12,
                        stiffness: 200,
                        delay: item.delay,
                      }}
                      className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[8px]"
                      style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                    >
                      <item.Icon className="h-[15px] w-[15px]" />
                    </motion.span>
                    <span className="text-[13px] font-semibold">{item.label}</span>
                  </motion.button>
                  {index === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: triggered ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 2.1 }}
                      className="mx-5 my-2 border-t border-[#e5e2dc]"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile horizontal tab bar */}
      <nav className="flex gap-2 overflow-x-auto border-b border-[#e5e2dc] bg-[#f0efec] px-4 py-3 md:hidden">
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
