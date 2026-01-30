import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageContainer from "@/components/layout/PageContainer";
import PixelHeading from "@/components/ui/PixelHeading";
import Tag from "@/components/ui/Tag";
import RetroButton from "@/components/ui/RetroButton";
import PixelDivider from "@/components/ui/PixelDivider";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/content";
import { mdxComponents } from "@/components/mdx/MdxComponents";
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

  // Get all slugs for prev/next navigation
  const allSlugs = getCaseStudySlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <PageContainer className="max-w-4xl">
      <article className="py-12">
        {/* Header */}
        <header className="mb-12">
          <RetroButton href="/work" variant="cyan" className="mb-8">
            &larr; All Work
          </RetroButton>
          <PixelHeading as="h1" className="mb-3 mt-8">
            {meta.title}
          </PixelHeading>
          {meta.subtitle && (
            <p className="text-text-secondary text-lg mb-4">{meta.subtitle}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        {/* MDX Content */}
        <div className="prose-custom">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        <PixelDivider className="my-12" />

        {/* Prev/Next Navigation */}
        <nav className="flex justify-between items-center gap-4">
          {prevSlug ? (
            <RetroButton href={`/work/${prevSlug}`} variant="cyan">
              &larr; Previous
            </RetroButton>
          ) : (
            <div />
          )}
          {nextSlug ? (
            <RetroButton href={`/work/${nextSlug}`} variant="cyan">
              Next &rarr;
            </RetroButton>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </PageContainer>
  );
}
