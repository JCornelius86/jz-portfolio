import PageContainer from "@/components/layout/PageContainer";
import PixelHeading from "@/components/ui/PixelHeading";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import RetroButton from "@/components/ui/RetroButton";
import PixelDivider from "@/components/ui/PixelDivider";
import GlowText from "@/components/ui/GlowText";
import RetroCard from "@/components/ui/RetroCard";
import PixelIcon from "@/components/ui/PixelIcon";
import { getCaseStudies, getProjects } from "@/lib/content";
import ProjectCard from "@/components/ui/ProjectCard";

const timeline = [
  {
    period: "2022 – Present",
    role: "Senior UX Designer → Senior UX Manager",
    company: "Microsoft",
    description: "Designing enterprise experiences at scale.",
  },
  {
    period: "2013 – 2022",
    role: "UX Lead → Design Manager → Data Science Lead",
    company: "SnapAV / SnapOne",
    description:
      "Built OvrC from scratch. Grew the UX team. Platform scaled to 20MM+ devices.",
  },
  {
    period: "2012 – 2013",
    role: "Human Factors Engineer",
    company: "Lockheed Martin",
    description: "Defense contracting — human factors for complex systems.",
  },
  {
    period: "2010 – 2012",
    role: "UX Engineer",
    company: "General Electric",
    description: "Green energy and industrial automation.",
  },
  {
    period: "2008 – 2010",
    role: "Engineering Co-op",
    company: "SSI Schaefer",
    description: "Factory automation and warehouse systems.",
  },
];

export default function Home() {
  const caseStudies = getCaseStudies();
  const projects = getProjects();

  return (
    <PageContainer>
      {/* Hero */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="font-[family-name:var(--font-pixel)] text-accent-green text-[10px] sm:text-xs mb-4">
            &gt; HELLO WORLD_
          </p>
          <h1 className="font-[family-name:var(--font-pixel)] text-xl sm:text-2xl md:text-3xl text-text-heading leading-relaxed mb-6">
            I&apos;m <GlowText>JC Zabel</GlowText>
            <span className="cursor-blink text-accent-cyan">_</span>
          </h1>
          <p className="text-text-body text-lg sm:text-xl leading-relaxed mb-4">
            UX leader building products that people actually want to use. 15+
            years turning complex problems into simple, human-centered
            solutions.
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            From green tech and defense contracting to IoT cloud platforms and
            enterprise software, I&apos;ve led design for products managing
            millions of devices. Currently at Microsoft.
          </p>
          <div className="flex flex-wrap gap-4">
            <RetroButton href="/work">View My Work</RetroButton>
            <RetroButton href="/about" variant="magenta">
              About Me
            </RetroButton>
          </div>
        </div>
      </section>

      <PixelDivider />

      {/* Featured Case Studies */}
      {caseStudies.length > 0 && (
        <section className="py-12">
          <PixelHeading as="h2" glow="magenta" className="mb-8">
            Featured Work
          </PixelHeading>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies
              .filter((s) => s.featured)
              .map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
          </div>
          <div className="mt-8 text-center">
            <RetroButton href="/work" variant="cyan">
              View All Work
            </RetroButton>
          </div>
        </section>
      )}

      <PixelDivider />

      {/* Projects Preview */}
      <section className="py-12">
        <PixelHeading as="h2" glow="green" className="mb-4">
          Projects
        </PixelHeading>
        <p className="text-text-secondary mb-8">
          Side projects and vibe coding experiments. This section grows over
          time.
        </p>
        {projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        ) : (
          <div className="bg-bg-card pixel-border rounded-sm p-8 text-center">
            <p className="font-[family-name:var(--font-pixel)] text-xs text-text-secondary mb-2">
              COMING SOON
            </p>
            <p className="text-text-secondary text-sm">
              Vibe coding projects are in the works. Check back soon.
            </p>
          </div>
        )}
        <div className="mt-8 text-center">
          <RetroButton href="/projects" variant="green">
            All Projects
          </RetroButton>
        </div>
      </section>

      <PixelDivider />

      {/* Career Timeline */}
      <section className="py-12">
        <PixelHeading as="h2" glow="amber" className="mb-8">
          Career
        </PixelHeading>
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <RetroCard key={i}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <PixelIcon company={item.company} />
                  <div className="font-[family-name:var(--font-mono)] text-accent-green text-sm whitespace-nowrap min-w-[120px]">
                    {item.period}
                  </div>
                </div>
                <div>
                  <h3 className="text-text-heading font-semibold mb-1">
                    {item.role}
                  </h3>
                  <p className="text-accent-cyan text-sm mb-2">
                    {item.company}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </RetroCard>
          ))}
        </div>
        <div className="mt-8 text-center">
          <RetroButton href="/about" variant="amber">
            More About Me
          </RetroButton>
        </div>
      </section>
    </PageContainer>
  );
}
