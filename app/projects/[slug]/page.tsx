import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import StripeImage from "@/components/ui/StripeImage";
import SectionHead from "@/components/ui/SectionHead";
import {
  getProject,
  getProjectSlugs,
  getProjects,
} from "@/lib/content";
import { getImageDims } from "@/lib/imageDims";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getProject(slug);
  if (!data) return { title: "Not Found" };

  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getProject(slug);
  if (!data) notFound();

  const { meta, content } = data;

  const all = getProjects();
  const currentIndex = all.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? all[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < all.length - 1
      ? all[currentIndex + 1]
      : null;

  return (
    <PageContainer className="max-w-[1280px]">
      {/* Breadcrumb */}
      <nav className="pt-8 md:pt-12 pb-6">
        <Eyebrow>
          <Link
            href="/projects"
            className="hover:text-accent transition-colors"
          >
            Projects
          </Link>{" "}
          / {meta.title}
        </Eyebrow>
      </nav>

      {/* Hero */}
      <header className="pb-12 md:pb-16 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12 md:items-start">
        <div>
          <Heading as="h1" variant="hero" className="mb-4">
            {meta.title}
          </Heading>
          <p
            data-ff="serif"
            className="italic text-accent text-[20px] md:text-[24px] leading-snug mb-6"
          >
            {meta.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-7">
            {meta.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {meta.liveUrl ? (
              <Button href={meta.liveUrl} external variant="primary">
                Try it →
              </Button>
            ) : null}
            {meta.githubUrl ? (
              <Button href={meta.githubUrl} external variant="ghost">
                GitHub
              </Button>
            ) : null}
          </div>
        </div>
        {(() => {
          const heroSrc = meta.heroImage || meta.coverImage;
          if (heroSrc) {
            const dims = getImageDims(heroSrc);
            const aspectStyle = dims
              ? { aspectRatio: `${dims.width} / ${dims.height}` }
              : undefined;
            return (
              <div
                className="relative w-full max-w-[360px] mx-auto md:ml-auto md:mr-0 overflow-hidden rounded-[22px] border border-rule bg-bg"
                style={aspectStyle}
              >
                <Image
                  src={heroSrc}
                  alt={`${meta.title} screenshot`}
                  fill={!dims}
                  width={dims?.width}
                  height={dims?.height}
                  priority
                  className={
                    dims ? "block w-full h-auto" : "object-contain"
                  }
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            );
          }
          return (
            <StripeImage
              caption={`${meta.title} — app shot`}
              aspect="3/4"
            />
          );
        })()}
      </header>

      {/* MDX body */}
      <article className="pb-12">
        <div className="max-w-[680px] mx-auto md:mx-0">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>

      {/* Live demo */}
      {meta.liveUrl ? (
        <section className="pb-16">
          <SectionHead label="Live demo" />
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-[400px] rounded-[28px] border border-rule bg-card p-3">
              <div className="overflow-hidden rounded-[20px] bg-bg">
                <iframe
                  src={meta.liveUrl}
                  width="100%"
                  height="640"
                  className="block border-0"
                  loading="lazy"
                  title={`${meta.title} live demo`}
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Prev / Next */}
      <nav className="pb-16 flex items-center justify-between gap-4 border-t border-rule pt-8">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-1 max-w-[45%]"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              ← Previous
            </span>
            <span
              data-ff="serif"
              className="text-ink text-[18px] md:text-[20px] leading-tight group-hover:text-accent transition-colors"
            >
              {prev.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/projects"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted hover:text-accent transition-colors"
          >
            ← All projects
          </Link>
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col gap-1 max-w-[45%] text-right"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              Next →
            </span>
            <span
              data-ff="serif"
              className="text-ink text-[18px] md:text-[20px] leading-tight group-hover:text-accent transition-colors"
            >
              {next.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/projects"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted hover:text-accent transition-colors ml-auto"
          >
            All projects →
          </Link>
        )}
      </nav>
    </PageContainer>
  );
}
