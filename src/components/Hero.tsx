"use client";

import { motion, type Variants } from "framer-motion";
import Button from "./Button";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mx-auto flex min-h-[88vh] max-w-content flex-col justify-center px-6 pt-28 pb-20 sm:px-10 lg:px-16">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-accent"
        >
          Product Manager
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Reema Sharma
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-xl font-medium text-muted sm:text-2xl"
        >
          Product Manager — AI &amp; Growth Products
        </motion.p>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted"
        >
          Product Manager with 4 years at HashedIn by Deloitte. I combine 3
          years of product strategy with a software engineering foundation to
          build AI-native products. I believe the best PMs don&apos;t just
          ship — they understand why products work.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
        >
          <Button href="#work" onClick={scrollToWork}>
            View My Work
          </Button>

          <a
            href="https://www.linkedin.com/in/reemasharma123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-foreground underline decoration-border decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sharmarims123@gmail.com"
            className="text-[15px] font-medium text-foreground underline decoration-border decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
