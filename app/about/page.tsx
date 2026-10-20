import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Heading, { Accent } from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import SectionHead from "@/components/ui/SectionHead";
import Tag from "@/components/ui/Tag";
import CompanyMark from "@/components/ui/CompanyMark";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { careerStints, type CareerStintId } from "@/lib/career";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product designer and design leader in the Charlotte area, with 15+ years at Microsoft, SnapAV, Lockheed Martin, and GE.",
};

const descriptions: Record<CareerStintId, ReactNode> = {
  "microsoft-current": (
      <>
        Designing <span className="text-accent">agentic experiences</span> in <span className="text-accent">Azure Advisor</span> that turn long lists of generic recommendations into the handful of decisions an enterprise customer actually needs to make, so they cut cost and reduce risk where it counts.
      </>
  ),
  "microsoft": (
      <>
        Led a UX team of <span className="text-accent">6 designers and researchers</span> across Azure Advisor, CX Observe, and customer-health products, and was recognized as <span className="text-accent">Azure X Manager of the Year</span> for delivery results and people leadership. Before that, led UX for internal Azure field platforms used by <span className="text-accent">4,000+ people</span> across 10+ Microsoft organizations.
      </>
  ),
  "snap": (
      <>
        Founding member of the OvrC team, starting as the lone designer and wearing every hat: design, user testing, front-end, back-end, QA, and feature development. Grew into UX Manager, leading a team of about <span className="text-accent">6 across two time zones</span> through acquisitions including Control4. Helped take OvrC from an idea to the industry-leading remote management platform for integrators, now supporting <span className="text-accent">20M+ managed devices</span> globally. Built the design system across all product lines and provided strategic design support for the <span className="text-accent">$150M+ Connected Device category</span>. Later founded SnapOne&apos;s <span className="text-accent">data team</span> as Lead Data Analyst, turning insights from its connected platforms into product strategy and quarterly direction for executives.
      </>
  ),
  "lockheed": (
      <>
        Modernized combat system interfaces for the <span className="text-accent">Aegis BMD 5.1</span> program, updating legacy systems to a more modern architecture. Cut my teeth on rapid prototyping, user testing with active duty sailors, and iterating based on direct operator feedback.
      </>
  ),
  "ge": (
      <>
        Worked in <span className="text-accent">green energy</span>, focused on the wind sector. Led risk assessments and built mitigation programs to reduce issues across <span className="text-accent">multiple sectors nationwide</span>.
      </>
  ),
};

const timeline = careerStints.map((stint) => ({
  ...stint,
  description: descriptions[stint.id],
}));

const skills = [
  "Design Management",
  "Agentic UX",
  "Human-in-the-Loop Design",
  "Responsible AI",
  "Product Strategy",
  "Design Systems",
  "UX Research",
  "Usability Testing",
  "Prototyping",
  "Information Architecture",
  "Data Visualization",
  "Enterprise SaaS",
  "Mobile Design",
  "IoT / Connected Devices",
];

export default function AboutPage() {
  return (
    <PageContainer className="max-w-[1280px]">
      {/* Bio + photo */}
      <section className="pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-14 md:items-start">
          <div>
            <Heading as="h1" variant="page" className="mb-6">
              About<Accent>.</Accent>
            </Heading>
            <div className="space-y-5 text-ink-soft text-[17px] md:text-[19px] leading-[1.6] max-w-[640px]">
              <p>
                Hey there. I&apos;m{" "}
                <strong className="text-ink font-semibold">
                  James (JC) Zabel
                </strong>
                , a product designer in the Charlotte area. I studied
                Industrial Engineering at Clemson, a BS and then an MS with a
                focus on Human Factors Psychology{" "}
                <span className="text-accent">(Go Tigers)</span>.
              </p>
              <p>
                Fifteen years in, I&apos;ve worked on wind energy at GE, Navy
                combat systems at Lockheed Martin, an IoT platform that grew
                past 20M devices at SnapAV, and AI-powered guidance in Azure at
                Microsoft. Different industries, mostly the same job: take
                something complicated and make the next decision obvious.
              </p>
              <p>
                Outside of work I have three young kids, a weekly Starfinder
                group, and a fantasy football league I run. Most of my side
                projects start at one of those tables.
              </p>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="rounded-[18px] overflow-hidden border border-rule bg-card">
              <Image
                src="/images/james-zabel-photo.jpg"
                alt="JC Zabel looking out over an alpine lake"
                width={360}
                height={240}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career timeline */}
      <section className="py-10 md:py-12">
        <SectionHead label="Career" />
        <div className="mt-6 space-y-4">
          {timeline.map((item, i) => (
            <Card key={i} padding="md" hover={false}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-3 md:flex-col md:items-center md:justify-center md:gap-4 md:w-[180px] shrink-0">
                  <CompanyMark company={item.company} />
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted whitespace-nowrap">
                    {item.period}
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    data-ff="serif"
                    className="text-ink text-[20px] md:text-[22px] leading-[1.25] tracking-[-0.01em] font-[450] mb-1"
                  >
                    {item.role}
                  </h3>
                  <p className="text-accent text-[14px] mb-3">
                    {item.company}
                  </p>
                  <p className="text-ink-soft text-[15px] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-10 md:py-12">
        <SectionHead label="Skills" />
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </section>

      {/* Contact / Inverted CTA */}
      <section className="pt-8 pb-16">
        <div className="bg-invert-bg text-invert-fg border border-invert-rule rounded-[22px] px-6 py-10 md:px-12 md:py-12 grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-12 md:items-end">
          <p
            data-ff="display"
            className="italic text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.025em] font-[380]"
          >
            Available for the{" "}
            <span className="text-accent">interesting stuff.</span>
          </p>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              href="mailto:jc.zabel@gmail.com"
              className="inline-flex items-center rounded-full bg-accent text-[#1A1813] px-6 py-3 text-[15px] font-medium hover:opacity-90 transition-opacity"
            >
              jc.zabel@gmail.com →
            </Link>
            <div className="flex gap-4 text-invert-fg/70 text-[13px]">
              <Link
                href="https://www.linkedin.com/in/james-zabel-31860816/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/JCornelius86"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
