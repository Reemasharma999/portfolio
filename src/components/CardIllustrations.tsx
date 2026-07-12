"use client";

import { motion } from "framer-motion";

export function CarIllustration() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <motion.svg
        width="14"
        height="20"
        viewBox="0 0 14 20"
        className="absolute -top-1"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="8,0 2,11 6,11 4,20 12,8 7,8" fill="#ff9b7b" />
      </motion.svg>

      <motion.div
        className="relative mt-6"
        animate={{ x: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-7 w-14 rounded-[10px] bg-ink" />
        <span className="absolute -bottom-2 left-2 h-3.5 w-3.5 rounded-full bg-ink" />
        <span className="absolute -bottom-2 right-2 h-3.5 w-3.5 rounded-full bg-ink" />
      </motion.div>
    </div>
  );
}

export function GearIllustration() {
  const teeth = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div className="flex h-16 w-16 items-center justify-center">
      <motion.svg
        width="60"
        height="60"
        viewBox="0 0 64 64"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {teeth.map((angle) => (
          <rect
            key={angle}
            x="28"
            y="3"
            width="8"
            height="13"
            rx="2"
            fill="#1a1a1a"
            transform={`rotate(${angle} 32 32)`}
          />
        ))}
        <circle cx="32" cy="32" r="15" fill="none" stroke="#1a1a1a" strokeWidth="5" />
        <circle cx="32" cy="32" r="6" fill="#b794f6" />
      </motion.svg>
    </div>
  );
}

export function PhoneIllustration() {
  return (
    <div className="flex h-16 w-16 items-center justify-center">
      <motion.svg
        width="40"
        height="60"
        viewBox="0 0 44 64"
        style={{ transformOrigin: "50% 100%" }}
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect
          x="2"
          y="2"
          width="40"
          height="60"
          rx="8"
          fill="white"
          stroke="#1a1a1a"
          strokeWidth="3"
        />
        <rect x="16" y="6" width="12" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="14" y="54" width="16" height="3" rx="1.5" fill="#1a1a1a" />
        <polygon
          points="18,22 18,38 32,30"
          fill="#ffd6e0"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
}
