import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/ui/Heading";
import SectionHead from "@/components/ui/SectionHead";
import Card from "@/components/ui/Card";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProjects } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Apps and games I design, build, and ship myself, most of them to fix a problem at my own table.",
};

export default function ProjectsPage() {
  const projects = getProjects();
  const count = String(projects.length).padStart(2, "0");

  return (
    <PageContainer className="max-w-[1280px]">
      <section className="pt-10 pb-8 md:pt-16 md:pb-12">
        <Heading as="h1" variant="page" className="mb-5">
          Projects
        </Heading>
        <p className="text-ink-soft text-[17px] md:text-[19px] leading-[1.55] max-w-[640px]">
          Things I build on nights and weekends, usually because something at
          my own table was annoying enough to fix. I design them, build them,
          and ship them myself, which is the fastest way I know to stay honest
          about what engineering actually costs.
        </p>
      </section>

      <section className="pb-16">
        <SectionHead label="All projects" count={count} />
        {projects.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <Card padding="lg" hover={false} className="mt-6 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent mb-3">
              Loading
            </p>
            <p className="text-ink-soft text-[15px] leading-[1.55] max-w-md mx-auto">
              New projects are in the works. Check back soon.
            </p>
          </Card>
        )}
      </section>
    </PageContainer>
  );
}
