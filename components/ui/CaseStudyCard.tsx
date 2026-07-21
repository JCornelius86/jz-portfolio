import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import StripeImage from "./StripeImage";
import { imageExists } from "@/lib/imageDims";
import { heroComponents } from "@/components/heroes/registry";
import type { CaseStudy } from "@/lib/types";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const hasImage =
    study.coverImage &&
    study.coverImage.length > 0 &&
    imageExists(study.coverImage);
  // Same lead visual as the case study page: component heroes win
  // over the cover screenshot.
  const Hero = study.heroComponent
    ? heroComponents[study.heroComponent]
    : undefined;
  return (
    <Link href={`/work/${study.slug}`} className="block group h-full">
      <article className="h-full flex flex-col gap-5 bg-card border border-rule rounded-[20px] p-5 transition-colors duration-150 group-hover:border-accent/60">
        {Hero ? (
          <Hero />
        ) : hasImage ? (
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[14px] border border-rule bg-bg flex items-center justify-center">
            <Image
              src={study.coverImage}
              alt={`${study.title} preview`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        ) : (
          <StripeImage caption={`${study.title}, cover`} aspect="16/9" />
        )}
        <div className="flex flex-col gap-2">
          <h3
            data-ff="serif"
            className="text-ink text-[24px] md:text-[26px] leading-[1.2] tracking-[-0.015em] font-[440]"
          >
            {study.title}
          </h3>
          {study.subtitle ? (
            <p
              data-ff="serif"
              className="italic text-accent text-[15.5px] leading-snug"
            >
              {study.subtitle}
            </p>
          ) : null}
          <p className="text-ink-soft text-[15px] leading-[1.55] mt-1">
            {study.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {study.tags.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </article>
    </Link>
  );
}
