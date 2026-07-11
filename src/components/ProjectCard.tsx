import { Project } from "@/data/projects";
import Button from "./Button";
import FadeIn from "./FadeIn";

const typeStyles: Record<Project["type"], { label: string; badge: string }> = {
  "case-study": {
    label: "Case Study",
    badge: "bg-[#e9e3f5] text-[#3d2f5c]",
  },
  teardown: {
    label: "Teardown",
    badge: "bg-[#fde8e0] text-[#8a3d20]",
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
    <FadeIn delay={index * 0.12}>
      <article className="group flex h-full flex-col rounded-xl2 border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover sm:p-10">
        <span
          className={`mb-5 inline-flex w-fit items-center rounded-full border-[3px] border-[#1a1a1a] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.5px] shadow-[3px_3px_0px_#1a1a1a] ${badge}`}
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
          {project.tags.map((tagLabel) => (
            <span
              key={tagLabel}
              className="rounded-full border border-[#e5e2dc] bg-[#faf9f7] px-2.5 py-1 text-[11px] font-medium text-[#57534e]"
            >
              {tagLabel}
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
