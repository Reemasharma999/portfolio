import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";

export default function WorkSection() {
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

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
