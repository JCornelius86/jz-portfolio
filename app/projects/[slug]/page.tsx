import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageContainer from "@/components/layout/PageContainer";
import PixelHeading from "@/components/ui/PixelHeading";
import Tag from "@/components/ui/Tag";
import RetroButton from "@/components/ui/RetroButton";
import PixelDivider from "@/components/ui/PixelDivider";
import { getProject, getProjectSlugs } from "@/lib/content";
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

  return (
    <PageContainer className="max-w-4xl">
      <article className="py-12">
        <header className="mb-12">
          <RetroButton href="/projects" variant="green" className="mb-8">
            &larr; All Projects
          </RetroButton>
          <PixelHeading as="h1" glow="green" className="mb-3 mt-8">
            {meta.title}
          </PixelHeading>
          <p className="text-text-secondary text-lg mb-4">
            {meta.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map((tag) => (
              <Tag key={tag} color="green">
                {tag}
              </Tag>
            ))}
          </div>
          {(meta.githubUrl || meta.liveUrl) && (
            <div className="flex gap-4">
              {meta.githubUrl && (
                <RetroButton href={meta.githubUrl} variant="cyan">
                  GitHub
                </RetroButton>
              )}
              {meta.liveUrl && (
                <RetroButton href={meta.liveUrl} variant="magenta">
                  Full Prototype
                </RetroButton>
              )}
            </div>
          )}
        </header>

        <div className="prose-custom">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        {meta.liveUrl && (
          <section className="my-12">
            <h2 className="font-[family-name:var(--font-pixel)] text-sm text-accent-amber neon-glow-amber mb-6">
              Try It
            </h2>
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone bezel */}
                <div className="w-[375px] rounded-[3rem] border-4 border-[#2a2a3e] bg-[#1a1a2e] p-3 shadow-[0_0_30px_rgba(0,255,245,0.1)]">
                  {/* Notch */}
                  <div className="mx-auto mb-2 h-6 w-32 rounded-b-2xl bg-[#0a0a0f]" />
                  {/* Screen */}
                  <div className="overflow-hidden rounded-2xl bg-white">
                    <iframe
                      src={meta.liveUrl}
                      width="100%"
                      height="700"
                      className="border-0"
                      loading="lazy"
                      title={`${meta.title} live demo`}
                    />
                  </div>
                  {/* Home indicator */}
                  <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-[#2a2a3e]" />
                </div>
              </div>
            </div>
          </section>
        )}

        <PixelDivider className="my-12" />

        <div className="text-center">
          <RetroButton href="/projects" variant="green">
            &larr; All Projects
          </RetroButton>
        </div>
      </article>
    </PageContainer>
  );
}
