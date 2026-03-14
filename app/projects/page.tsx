import PageContainer from "@/components/layout/PageContainer";
import PixelHeading from "@/components/ui/PixelHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProjects } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Side projects and vibe coding experiments. A growing collection of things I build for fun.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <PageContainer>
      <section className="py-12">
        <PixelHeading as="h1" glow="green" className="mb-4">
          Projects
        </PixelHeading>
        <p className="text-text-secondary text-lg mb-12 max-w-2xl">
          Side projects and vibe coding experiments. This section grows over
          time as I build new things.
        </p>

        {projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-bg-card pixel-border rounded-sm p-12 text-center">
            <p className="font-[family-name:var(--font-pixel)] text-sm text-accent-amber neon-glow-amber mb-4">
              LOADING...
            </p>
            <p className="text-text-secondary max-w-md mx-auto">
              Vibe coding projects are in the works. This section will grow as
              new experiments ship. Check back soon.
            </p>
          </div>
        )}
      </section>
    </PageContainer>
  );
}
