"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar, { type Section } from "./Sidebar";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AiPlaceholderCard from "./AiPlaceholderCard";
import FadeIn from "./FadeIn";

const teardowns = projects.filter((p) => p.type === "teardown");
const caseStudies = projects.filter((p) => p.type === "case-study");

export default function WorkSection() {
  const [active, setActive] = useState<Section>("product-teardowns");

  const activeProjects =
    active === "product-teardowns"
      ? teardowns
      : active === "systems-ux"
        ? caseStudies
        : [];

  return (
    <section
      id="work"
      className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <FadeIn>
        <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Selected Work
        </h2>
      </FadeIn>

      <div className="mt-14 md:flex">
        <Sidebar active={active} onSelect={setActive} />

        <div className="mt-8 min-w-0 flex-1 md:mt-0 md:pl-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", damping: 20, stiffness: 150 },
              }}
              exit={{
                opacity: 0,
                y: 8,
                transition: { duration: 0.15, ease: "easeIn" },
              }}
            >
              {active === "ai-products" ? (
                <AiPlaceholderCard />
              ) : (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {activeProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
