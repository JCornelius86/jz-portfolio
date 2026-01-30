import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import type { CaseStudy } from "@/lib/types";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link href={`/work/${study.slug}`} className="block group">
      <article className="bg-bg-card pixel-border rounded-sm overflow-hidden transition-colors group-hover:bg-bg-elevated">
        {study.coverImage && (
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={study.coverImage}
              alt={`${study.title} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="font-[family-name:var(--font-pixel)] text-xs sm:text-sm text-accent-cyan mb-2">
            {study.title}
          </h3>
          {study.subtitle && (
            <p className="text-text-secondary text-sm mb-3">
              {study.subtitle}
            </p>
          )}
          <p className="text-text-body text-sm mb-4 line-clamp-2">
            {study.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
