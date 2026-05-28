import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import StripeImage from "./StripeImage";
import { getImageDims } from "@/lib/imageDims";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const has = {
    live: Boolean(project.liveUrl),
    code: Boolean(project.githubUrl),
    app: Boolean(project.appStoreUrl),
  };
  const availability: string[] = [];
  if (has.live) availability.push("Live demo");
  if (has.app) availability.push("App Store");
  if (has.code) availability.push("Source");

  const dims = project.coverImage ? getImageDims(project.coverImage) : null;

  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <article className="h-full flex flex-col gap-4 bg-card border border-rule rounded-[18px] p-5 transition-colors duration-150 group-hover:border-accent/60">
        {project.coverImage ? (
          <div
            className="relative w-full max-w-[260px] mx-auto overflow-hidden rounded-[14px] border border-rule bg-bg"
            style={
              dims
                ? { aspectRatio: `${dims.width} / ${dims.height}` }
                : undefined
            }
          >
            <Image
              src={project.coverImage}
              alt={`${project.title} screenshot`}
              fill={!dims}
              width={dims?.width}
              height={dims?.height}
              className={dims ? "block w-full h-auto" : "object-contain"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 260px"
            />
          </div>
        ) : (
          <StripeImage caption={`${project.title} — app shot`} aspect="4/5" />
        )}
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
        {availability.length > 0 ? (
          <div className="flex items-center gap-3 pt-2 border-t border-rule font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
            {availability.map((label, i) => (
              <span key={label} className="flex items-center gap-2">
                {i > 0 ? (
                  <span aria-hidden="true" className="text-rule">
                    ·
                  </span>
                ) : null}
                <span className="text-accent">{label}</span>
              </span>
            ))}
            <span className="ml-auto text-muted group-hover:text-accent transition-colors">
              View →
            </span>
          </div>
        ) : null}
      </article>
    </Link>
  );
}
