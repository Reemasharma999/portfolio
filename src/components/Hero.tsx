"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const RESUME_LINK =
  "https://drive.google.com/file/d/1hs5p7w-qouLY_tvKiJtTAR2qpQqNuqka/view?usp=drivesdk";

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center"
    >
      <motion.span
        aria-hidden
        className="absolute right-[8%] top-[14%] select-none text-4xl"
        animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute bottom-[12%] left-[8%] select-none text-4xl"
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        💡
      </motion.span>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-2xl flex-col items-center"
      >
        <motion.p
          variants={item}
          className="mb-2 font-heading text-base font-bold text-ink"
          style={{ letterSpacing: "1px" }}
        >
          Reema Sharma
        </motion.p>

        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center rounded-full border-2 border-ink bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] shadow-nbSm"
        >
          Product Manager — AI &amp; Growth
        </motion.span>

        <motion.h1
          variants={item}
          className="font-heading text-[32px] font-extrabold leading-tight text-ink sm:text-[42px]"
        >
          <span className="block">I ship products,</span>
          <span className="block">
            <span className="inline-block -rotate-1 bg-nb-blue px-2">
              tear them apart,
            </span>
          </span>
          <span className="block">
            <span className="inline-block rotate-1 bg-nb-pink px-2">
              and build smarter.
            </span>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-[480px] text-sm leading-relaxed text-[#6b6560]"
        >
          PM at HashedIn by Deloitte with an engineering backbone. I combine
          product strategy, user research, and AI to build things people
          actually use.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={scrollToWork}
            className="rounded-full border-[3px] border-ink bg-nb-pink px-6 py-3 text-sm font-extrabold uppercase tracking-wide shadow-nbBtn transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-nbBtnSm"
          >
            Explore My Work ↓
          </button>

          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-[3px] border-ink bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide shadow-nbBtn transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-nbBtnSm"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
