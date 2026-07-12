"use client";

import { motion } from "framer-motion";

const stars = [
  { char: "✦", color: "#ff9db8", top: "12%", left: "6%", duration: 7, delay: 0 },
  { char: "✴", color: "#6fb8ff", top: "68%", left: "88%", duration: 9, delay: 1.2 },
  { char: "✦", color: "#ffb877", top: "40%", left: "92%", duration: 8, delay: 0.6 },
];

export default function FloatingStars() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.span
          key={i}
          className="absolute select-none text-3xl"
          style={{ top: star.top, left: star.left, color: star.color, opacity: 0.4 }}
          animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {star.char}
        </motion.span>
      ))}
    </div>
  );
}
