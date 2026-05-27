import Link from "next/link";
import Tag from "./Tag";
import StripeImage from "./StripeImage";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <article className="h-full flex flex-col gap-4 bg-card border border-rule rounded-[18px] p-5 transition-colors duration-150 group-hover:border-accent/60">
        <StripeImage caption={`${project.title} — app shot`} aspect="4/3" />
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3
              data-ff="serif"
              className="text-ink text-[20px] md:text-[22px] leading-tight tracking-[-0.01em] font-[450]"
            >
              {project.title}
            </h3>
            {project.tags[0] ? (
              <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted shrink-0">
                {project.tags[0]}
              </span>
            ) : null}
          </div>
          <p className="text-ink-soft text-[14.5px] leading-[1.5]">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(1, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </article>
    </Link>
  );
}
