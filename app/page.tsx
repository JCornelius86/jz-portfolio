import Link from "next/link";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import Heading, { Accent, Cursor } from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";
import Eyebrow from "@/components/ui/Eyebrow";
import StatBlock from "@/components/ui/StatBlock";
import StripeImage from "@/components/ui/StripeImage";
import ProjectCard from "@/components/ui/ProjectCard";
import { getCaseStudies, getProjects } from "@/lib/content";
import { getImageDims } from "@/lib/imageDims";

// The four principles. Copy edits live in CMS or in this array; the
// visual treatment stays uniform.
const principles = [
  {
    title: "Grow the people",
    body: "The best design orgs are built on trust and growth. I invest in 1:1s, design crits, and stretch assignments because a team that's learning is a team that delivers.",
  },
  {
    title: "Ship over perfection",
    body: "I run my teams on speed and iteration first. We ship working increments fast, then polish what matters. Momentum beats perfection.",
  },
  {
    title: "Design the system",
    body: "I think in systems, not screens. Scalable patterns, shared tokens, and reusable components mean the team moves faster and the product stays coherent as it grows.",
  },
  {
    title: "Test what you don't know",
    body: "We build confidently on what we know and test what we don't. Get it in front of users early, validate fast, and iterate. Assumptions are risks; feedback is fuel.",
  },
];

// Headline stats shown inside the flagship case study card. Sourced
// from the existing home; can move to MDX frontmatter when content
// gets a final pass.
const flagshipStats = [
  { value: "20M+", label: "Devices managed" },
  { value: "3", label: "Teams built" },
  { value: "15+", label: "Years in UX" },
  { value: "4", label: "Industries" },
];

export default function Home() {
  const caseStudies = getCaseStudies();
  const projects = getProjects().filter((p) => p.featured).slice(0, 3);
  const flagship = caseStudies.find((s) => s.featured) ?? caseStudies[0];

  return (
    <PageContainer className="max-w-[1280px] py-0">
      {/* HERO ------------------------------------------------------------ */}
      <section className="pt-12 pb-10 md:pt-20 md:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16 md:items-end">
          <Heading as="h1" variant="display">
            Senior <Accent>designer</Accent>,
            <br />
            design leader,
            <br />
            always <span className="text-accent">building</span>
            <Cursor />
          </Heading>
          <div>
            {/* Status pill — toggle the boolean or remove when not actively open. */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                Always up for an interesting problem
              </span>
            </div>
            <p className="text-ink-soft text-[17px] md:text-[19px] leading-[1.55] max-w-[520px] mb-7">
              I&apos;m <strong className="text-ink font-semibold">JC Zabel</strong>. Currently at Microsoft, where I&apos;ve led design across Azure CXS, Resiliency, and Customer Health. Before that, scaled an enterprise platform past 20M devices as the founding designer. AI-native, drawn to mission work, still shipping the software myself.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/work" variant="primary">
                See the work →
              </Button>
              <Button href="/projects" variant="ghost">
                Recent projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP CASE STUDY -------------------------------------------- */}
      {flagship ? (
        <section className="py-10 md:py-12">
          <SectionHead label="Flagship case study" />
          <div className="mt-6 grid gap-10 md:grid-cols-[360px_1fr] md:gap-12 md:items-start">
            <div>
              <Eyebrow tone="accent" className="mb-3">
                {flagship.title} · 2014–2024
              </Eyebrow>
              <h3
                data-ff="serif"
                className="text-ink text-[26px] md:text-[30px] leading-[1.15] tracking-[-0.015em] font-[440] mb-4"
              >
                Solo UX hire <Accent>→</Accent> 20M-device platform <Accent>→</Accent> a team that took it forward.
              </h3>
              <p className="text-ink-soft text-[15.5px] leading-[1.6] mb-6">
                {flagship.description}
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-6">
                {flagshipStats.map((s) => (
                  <StatBlock key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
              <Link
                href={`/work/${flagship.slug}`}
                className="font-medium text-accent text-[15px] hover:underline underline-offset-4"
              >
                Read the case study →
              </Link>
            </div>
            <div className="relative">
              {/* Back layer */}
              <div
                aria-hidden="true"
                className="absolute inset-0 top-2.5 left-2.5 rounded-[22px] bg-rule/60"
              />
              <div className="relative bg-card border border-rule rounded-[22px] p-4 md:p-5">
                {(() => {
                  if (!flagship.coverImage) {
                    return (
                      <StripeImage
                        caption={`${flagship.title} — dashboard, full bleed`}
                        aspect="4/3"
                      />
                    );
                  }
                  const dims = getImageDims(flagship.coverImage);
                  const aspectStyle = dims
                    ? { aspectRatio: `${dims.width} / ${dims.height}` }
                    : { aspectRatio: "4 / 3" };
                  return (
                    <div
                      className="relative w-full overflow-hidden rounded-[14px] border border-rule bg-bg"
                      style={aspectStyle}
                    >
                      <Image
                        src={flagship.coverImage}
                        alt={`${flagship.title} cover`}
                        fill={!dims}
                        width={dims?.width}
                        height={dims?.height}
                        className={
                          dims ? "block w-full h-auto" : "object-contain"
                        }
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* RECENT PROJECTS ------------------------------------------------ */}
      {projects.length > 0 ? (
        <section className="py-10 md:py-12">
          <SectionHead
            label="Recent projects"
            count={String(projects.length).padStart(2, "0")}
          />
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/projects" variant="ghost" size="sm">
              All projects →
            </Button>
          </div>
        </section>
      ) : null}

      {/* HOW I LEAD ----------------------------------------------------- */}
      <section className="py-10 md:py-12">
        <SectionHead label="How I lead" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <Card key={p.title} padding="md" radius="sm" hover={false}>
              <h3
                data-ff="serif"
                className="text-ink text-[22px] leading-[1.2] tracking-[-0.015em] font-[460] mb-3"
              >
                {p.title}
              </h3>
              <p className="text-muted text-[13.5px] leading-[1.55]">
                {p.body}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* INVERTED FOOTER CTA -------------------------------------------- */}
      <section className="pt-8 pb-16">
        <div className="bg-invert-bg text-invert-fg border border-invert-rule rounded-[22px] px-6 py-10 md:px-12 md:py-12 grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-12 md:items-end">
          <p
            data-ff="display"
            className="italic text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-[380]"
          >
            Working on something <span className="text-accent">mission-shaped?</span>
          </p>
          <div>
            <p className="text-invert-fg/70 text-[15px] md:text-[16px] leading-[1.6] mb-6">
              I&apos;d like to hear about it. Climate, energy, healthcare, public good. Those are the ones I lean toward, but if it&apos;s real work on a hard problem, drop me a line.
            </p>
            <a
              href="mailto:jc.zabel@gmail.com"
              className="inline-flex items-center rounded-full bg-accent text-[#1A1813] px-6 py-3 text-[15px] font-medium hover:opacity-90 transition-opacity"
            >
              jc.zabel@gmail.com →
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
