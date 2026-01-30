import Link from "next/link";
import Tag from "./Tag";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-bg-card pixel-border rounded-sm p-6 transition-colors hover:bg-bg-elevated h-full flex flex-col group">
      <Link href={`/projects/${project.slug}`}>
        <h3 className="font-[family-name:var(--font-pixel)] text-xs text-accent-green mb-2 group-hover:text-accent-green/80 transition-colors">
          {project.title}
        </h3>
      </Link>
      <p className="text-text-body text-sm mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Tag key={tag} color="green">
            {tag}
          </Tag>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-[family-name:var(--font-mono)] text-accent-cyan hover:text-accent-cyan/80 border border-accent-cyan/30 px-2 py-1 rounded-sm transition-colors"
          >
            GitHub &rarr;
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-[family-name:var(--font-mono)] text-accent-magenta hover:text-accent-magenta/80 border border-accent-magenta/30 px-2 py-1 rounded-sm transition-colors"
          >
            Full Prototype &rarr;
          </a>
        )}
        {project.liveUrl && (
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-[family-name:var(--font-mono)] text-accent-amber hover:text-accent-amber/80 border border-accent-amber/30 px-2 py-1 rounded-sm transition-colors"
          >
            Try It &rarr;
          </Link>
        )}
      </div>
    </article>
  );
}
