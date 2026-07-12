import { Project } from "@/data/projects";
import FadeIn from "./FadeIn";

const badgeStyles: Record<Project["badge"], string> = {
  TEARDOWN: "bg-nb-peach",
  "CASE STUDY": "bg-nb-lavender",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.1} y={20}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-card border-[2.5px] border-ink bg-white shadow-nb transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-nbSm"
      >
        <div
          className="relative flex h-[100px] items-center justify-center border-b-[3px] border-ink"
          style={{
            background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
          }}
        >
          <span
            className={`absolute left-2 top-2 rounded-full border-2 border-ink px-2 py-1 text-[9px] font-bold uppercase shadow-nbBadge ${badgeStyles[project.badge]}`}
          >
            {project.badge}
          </span>
          <span className="text-3xl">{project.emoji}</span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-sm font-bold leading-snug text-ink">
              {project.title}
            </h3>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] border-2 border-ink text-xs transition-colors duration-150 group-hover:bg-ink group-hover:text-white">
              ↗
            </span>
          </div>

          <p className="mt-2 text-[11px] leading-relaxed text-[#8a8580]">
            {project.description}
          </p>

          <p className="mt-3 border-l-[3px] border-nb-pink pl-2 text-[11px] italic leading-relaxed text-[#6b6560]">
            &ldquo;{project.keyInsight}&rdquo;
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border-[1.5px] border-[#d4cfc8] bg-[#faf6ef] px-2 py-1 text-[9px] text-[#6b6560]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-ink px-3.5 py-2.5 text-[11px] font-extrabold uppercase transition-colors duration-150 group-hover:bg-nb-peach">
          {project.actionLabel}
        </div>
      </a>
    </FadeIn>
  );
}
