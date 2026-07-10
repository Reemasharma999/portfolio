import { Project } from "@/data/projects";
import Button from "./Button";
import FadeIn from "./FadeIn";

const typeStyles: Record<Project["type"], { label: string; badge: string }> = {
  "case-study": {
    label: "Case Study",
    badge: "bg-accent-soft text-accent-text",
  },
  teardown: {
    label: "Teardown",
    badge: "bg-clay-soft text-clay-text",
  },
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { label, badge } = typeStyles[project.type];

  return (
    <FadeIn delay={index * 0.08}>
      <article className="group flex h-full flex-col rounded-xl2 border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover sm:p-10">
        <span
          className={`mb-5 inline-flex w-fit items-center rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide ${badge}`}
        >
          {label}
        </span>

        <h3 className="text-2xl font-bold leading-snug text-foreground sm:text-[1.65rem]">
          {project.title}
        </h3>
        <p className="mt-2 text-[15px] font-medium text-muted">
          {project.subtitle}
        </p>

        <p className="mt-5 leading-relaxed text-foreground/80">
          {project.description}
        </p>

        <blockquote className="mt-6 border-l-2 border-accent/40 pl-4 italic leading-relaxed text-foreground/90">
          &ldquo;{project.keyInsight}&rdquo;
        </blockquote>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted ring-1 ring-inset ring-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 pt-2">
          <Button href={project.link} external>
            {project.linkLabel}
          </Button>
        </div>
      </article>
    </FadeIn>
  );
}
