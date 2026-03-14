import PageContainer from "@/components/layout/PageContainer";
import PixelHeading from "@/components/ui/PixelHeading";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import RetroButton from "@/components/ui/RetroButton";
import PixelDivider from "@/components/ui/PixelDivider";
import GlowText from "@/components/ui/GlowText";
import RetroCard from "@/components/ui/RetroCard";
import { getCaseStudies, getProjects } from "@/lib/content";
import ProjectCard from "@/components/ui/ProjectCard";

const impactStats = [
  { value: "15+", label: "Years in UX", color: "text-accent-cyan" },
  { value: "3", label: "Teams Built", color: "text-accent-magenta" },
  { value: "20M+", label: "Devices Managed", color: "text-accent-green" },
  { value: "4", label: "Industries", color: "text-accent-amber" },
];

const principles = [
  {
    title: "Grow the People",
    glow: "amber" as const,
    // TODO: Fill in — your mentorship philosophy, how you develop designers, what you look for
    body: "The best design orgs are built on trust and growth. I invest in 1:1s, design crits, and stretch assignments because a team that's learning is a team that delivers.",
  },
  {
    title: "Ship > Perfect",
    glow: "cyan" as const,
    body: "I run my teams on a 75/25 rule. 75% speed and iteration, 25% craft. We ship working increments fast, then polish what matters. Momentum beats perfection.",
  },
  {
    title: "Design the System",
    glow: "magenta" as const,
    // TODO: Fill in — how you think about design systems, consistency, scalable patterns
    body: "I think in systems, not screens. Scalable patterns, shared tokens, and reusable components mean the team moves faster and the product stays coherent as it grows.",
  },
  {
    title: "Test What You Don't Know",
    glow: "green" as const,
    body: "We build confidently on what we know and test what we don't. Get it in front of users early, validate fast, and iterate. Assumptions are risks; feedback is fuel.",
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
            Currently leading a team of 6 designers across Microsoft&apos;s
            Azure X, Resiliency, and Customer Health orgs. Before that, I built
            an IoT platform from scratch that scaled to 20M+ devices.
          </p>
          <div className="flex flex-wrap gap-4">
            <RetroButton href="/work">View My Work</RetroButton>
            <RetroButton href="/resume" variant="magenta">
              Resume
            </RetroButton>
          </div>
        </div>
      </section>

      <PixelDivider />

      {/* Impact Stats */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className={`font-[family-name:var(--font-pixel)] text-2xl sm:text-3xl ${stat.color} mb-2`}
              >
                {stat.value}
              </p>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <PixelDivider />

      {/* How I Lead */}
      <section className="py-12">
        <PixelHeading as="h2" glow="amber" className="mb-8">
          How I Lead
        </PixelHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <RetroCard key={p.title} hover={false}>
              <h3 className="font-[family-name:var(--font-pixel)] text-[10px] text-accent-cyan uppercase tracking-wider mb-3">
                {p.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {p.body}
              </p>
            </RetroCard>
          ))}
        </div>
      </section>

      <PixelDivider />

      {/* Side Projects — promoted */}
      <section className="py-12">
        <PixelHeading as="h2" glow="green" className="mb-4">
          Building Things
        </PixelHeading>
        <p className="text-text-secondary mb-8">
          Apps I&apos;ve designed and built from scratch. The best way to
          understand engineering constraints is to ship code yourself.
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
              Projects are in the works. Check back soon.
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

      {/* Featured Case Studies */}
      {caseStudies.length > 0 && (
        <section className="py-12">
          <PixelHeading as="h2" glow="magenta" className="mb-8">
            Case Studies
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
    </PageContainer>
  );
}
