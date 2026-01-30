import Link from "next/link";
import Tag from "./Tag";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <article className="bg-bg-card pixel-border rounded-sm p-6 transition-colors group-hover:bg-bg-elevated h-full flex flex-col">
        <h3 className="font-[family-name:var(--font-pixel)] text-xs text-accent-green mb-2">
          {project.title}
        </h3>
        <p className="text-text-body text-sm mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} color="green">
              {tag}
            </Tag>
          ))}
        </div>
      </article>
    </Link>
  );
}
