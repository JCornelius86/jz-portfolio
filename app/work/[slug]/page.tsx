import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";
import StripeImage from "@/components/ui/StripeImage";
import { getCaseStudy, getCaseStudies, getCaseStudySlugs } from "@/lib/content";
import { getImageDims, imageExists } from "@/lib/imageDims";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { heroComponents } from "@/components/heroes/registry";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) return { title: "Not Found" };

  return {
    title: data.meta.title,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      images: data.meta.coverImage ? [data.meta.coverImage] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) notFound();

  const { meta, content } = data;

  const all = getCaseStudies();
  const currentIndex = all.findIndex((s) => s.slug === slug);
  const nextStudy =
    currentIndex >= 0 && currentIndex < all.length - 1
      ? all[currentIndex + 1]
      : null;
  const prevStudy = currentIndex > 0 ? all[currentIndex - 1] : null;

  const year = meta.date ? new Date(meta.date).getFullYear() : null;

  return (
    <PageContainer className="max-w-[1280px]">
      {/* Breadcrumb */}
      <nav className="pt-8 md:pt-12 pb-6">
        <Eyebrow>
          <Link
            href="/work"
            className="hover:text-accent transition-colors"
          >
            Work
          </Link>{" "}
          / {meta.title}
        </Eyebrow>
      </nav>

      {/* Hero */}
      <header className="pb-8 md:pb-12 grid gap-8 md:grid-cols-[1.6fr_1fr] md:gap-12 md:items-end">
        <div>
          {meta.status ? (
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                {meta.status}
              </span>
            </div>
          ) : null}
          <Heading as="h1" variant="hero" className="mb-4">
            {meta.title}
          </Heading>
          {meta.subtitle ? (
            <p
              data-ff="serif"
              className="italic text-accent text-[20px] md:text-[24px] leading-snug mb-6"
            >
              {meta.subtitle}
            </p>
          ) : null}
          <p className="text-ink-soft text-[17px] md:text-[19px] leading-[1.55] max-w-[560px]">
            {meta.description}
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 md:block md:space-y-4">
          {year ? (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                Span
              </dt>
              <dd
                data-ff="serif"
                className="text-ink text-[18px] mt-1"
              >
                {year}
              </dd>
            </div>
          ) : null}
          {meta.tags.length > 0 ? (
            <div className="col-span-2 md:col-span-1">
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted mb-2">
                Areas
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {meta.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </dd>
            </div>
          ) : null}
        </dl>
      </header>

      {/* Hero image */}
      <div className="pb-12 md:pb-16">
        {meta.heroComponent && heroComponents[meta.heroComponent] ? (
          (() => {
            const Hero = heroComponents[meta.heroComponent];
            return <Hero />;
          })()
        ) : meta.coverImage && imageExists(meta.coverImage) ? (
          (() => {
            const dims = getImageDims(meta.coverImage);
            const isPortrait = dims ? dims.height > dims.width : false;
            const frameClass = isPortrait
              ? "relative w-full max-w-[360px] mx-auto overflow-hidden rounded-[22px] border border-rule bg-card"
              : "relative w-full aspect-[16/9] overflow-hidden rounded-[20px] border border-rule bg-card";
            const aspectStyle =
              isPortrait && dims
                ? { aspectRatio: `${dims.width} / ${dims.height}` }
                : undefined;
            return (
              <div className={frameClass} style={aspectStyle}>
                <Image
                  src={meta.coverImage}
                  alt={`${meta.title} cover`}
                  fill={!isPortrait || !dims}
                  width={isPortrait && dims ? dims.width : undefined}
                  height={isPortrait && dims ? dims.height : undefined}
                  priority
                  className={
                    isPortrait && dims
                      ? "block w-full h-auto"
                      : "object-contain"
                  }
                  sizes={
                    isPortrait
                      ? "(max-width: 768px) 100vw, 360px"
                      : "(max-width: 1280px) 100vw, 1280px"
                  }
                />
              </div>
            );
          })()
        ) : (
          <StripeImage caption={`${meta.title}, hero`} aspect="16/9" />
        )}
      </div>

      {/* MDX body — constrained measure */}
      <article className="pb-16">
        <div className="max-w-[680px] mx-auto md:mx-0">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>

      {/* Next / Prev — inverted card */}
      {(nextStudy || prevStudy) ? (
        <section className="pb-16">
          <div className="bg-invert-bg text-invert-fg border border-invert-rule rounded-[22px] px-6 py-10 md:px-12 md:py-12 grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-12 md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-invert-fg/60 mb-3">
                {nextStudy ? "Next case" : "Previous case"}
              </p>
              <p
                data-ff="display"
                className="italic text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.025em] font-[380]"
              >
                {(nextStudy ?? prevStudy)!.title}
              </p>
              {(nextStudy ?? prevStudy)!.subtitle ? (
                <p className="text-invert-fg/70 text-[15px] md:text-[16px] leading-[1.55] mt-3 max-w-[480px]">
                  {(nextStudy ?? prevStudy)!.subtitle}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href={`/work/${(nextStudy ?? prevStudy)!.slug}`}
                className="inline-flex items-center rounded-full bg-accent text-[#1A1813] px-6 py-3 text-[15px] font-medium hover:opacity-90 transition-opacity"
              >
                Read it →
              </Link>
              <Link
                href="/work"
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-invert-fg/60 hover:text-accent transition-colors"
              >
                ← All work
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="pb-16">
          <Link
            href="/work"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted hover:text-accent transition-colors"
          >
            ← All work
          </Link>
        </section>
      )}
    </PageContainer>
  );
}
