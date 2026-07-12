"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";

type Filter = "all" | "td" | "ux" | "ai";

const filters: {
  id: Filter;
  label: string;
  dot?: string;
  activeBg: string;
}[] = [
  { id: "all", label: "All Work", activeBg: "bg-nb-peach" },
  { id: "td", label: "Product Teardowns", dot: "#ff6f5b", activeBg: "bg-nb-pink" },
  { id: "ux", label: "Systems & UX", dot: "#9b6dff", activeBg: "bg-nb-lavender" },
  { id: "ai", label: "AI Products", dot: "#4da6ff", activeBg: "bg-nb-blue" },
];

export default function WorkSection() {
  const [active, setActive] = useState<Filter>("all");

  const activeProjects =
    active === "all"
      ? projects
      : active === "ai"
        ? []
        : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10 lg:px-16">
        <FadeIn>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-heading text-[28px] font-bold text-ink">
              Selected{" "}
              <span className="underline decoration-wavy decoration-2 decoration-nb-blue underline-offset-4">
                Work
              </span>{" "}
              ✨
            </h2>

            <div className="flex flex-wrap gap-3">
              {filters.map((f) => {
                const isActive = active === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActive(f.id)}
                    className={`flex items-center gap-2 rounded-full border-2.5 border-ink bg-white px-4 py-2 text-[11px] font-bold transition-all duration-150 ${
                      isActive ? `${f.activeBg} shadow-nbSm` : ""
                    }`}
                  >
                    {f.dot && (
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: f.dot }}
                      />
                    )}
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          {active === "ai" ? (
            <motion.div
              key="ai"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center px-6 py-24 text-center"
            >
              <span className="text-5xl">⚡</span>
              <p className="mt-4 font-heading text-xl font-bold text-[#8a8580]">
                Shipping Soon
              </p>
              <p className="mt-2 text-[13px] text-[#b5b0a8]">
                SpendSense, DocBrain, and ghostjob are on the way.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-6"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              }}
            >
              {activeProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
