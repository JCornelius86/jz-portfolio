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

export const metadata: Metadata = {
  title: "About",
  description:
    "UX leader based in Charlotte, NC with degrees from Clemson University and 15+ years building products at companies like Microsoft, SnapAV, Lockheed Martin, and GE.",
};

const timeline: {
  period: string;
  role: string;
  company: string;
  description: ReactNode;
}[] = [
  {
    period: "2022 – Present",
    role: "Senior Product Designer, Microsoft Azure",
    company: "Microsoft",
    description: (
      <>
        AI-native designer building <span className="text-accent">agentic experiences</span> in <span className="text-accent">Azure Advisor</span> that help enterprise customers cut cost and reduce risk. Earlier led a UX team of <span className="text-accent">6 designers and researchers</span> across Azure Advisor and CX Observe and was recognized as <span className="text-accent">Manager of the Year</span>. Now back to shipping the product directly.
      </>
    ),
  },
  {
    period: "2013 – 2022",
    role: "UX Engineer → UX Manager",
    company: "SnapAV / SnapOne",
    description: (
      <>
        Founding member of the OvrC team, starting as the lone designer and wearing every hat: design, user testing, front-end, back-end, QA, and feature development. Helped take it from an idea to the <span className="text-accent">industry-leading integrator management platform</span> supporting <span className="text-accent">20M+ managed devices</span> globally. Built the design system across all product lines and provided strategic design support for the <span className="text-accent">$150M+ Connected Device category</span>.
      </>
    ),
  },
  {
    period: "2011 – 2013",
    role: "Human Systems Integration Engineer",
    company: "Lockheed Martin",
    description: (
      <>
        Modernized combat system interfaces for the <span className="text-accent">Aegis BMD 5.1</span> program, updating legacy systems to a more modern architecture. Cut my teeth on rapid prototyping, user testing with active duty sailors, and iterating based on direct operator feedback.
      </>
    ),
  },
  {
    period: "2011",
    role: "Human Factors Engineer",
    company: "General Electric",
    description: (
      <>
        Worked in <span className="text-accent">green energy</span>, focused on the wind sector. Led risk assessments and built mitigation programs to reduce issues across <span className="text-accent">multiple sectors nationwide</span>.
      </>
    ),
  },
];

const skills = [
  "UX Leadership",
  "Product Strategy",
  "Design Systems",
  "User Research",
  "Usability Testing",
  "Prototyping",
  "IoT / Connected Devices",
  "Enterprise SaaS",
  "Mobile Design",
  "Data Visualization",
  "Design Thinking",
  "Team Building",
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
                , a UX professional based in Charlotte, NC. I hold a BS in
                Industrial Engineering and an MS in Human Factors Psychology,
                both from Clemson University{" "}
                <span className="text-accent">(Go Tigers)</span>.
              </p>
              <p>
                With 15+ years of experience spanning corporate giants and
                scrappy startups, I&apos;ve had the chance to work on
                everything from factory automation to green energy to defense
                contracting to IoT cloud platforms and consumer electronics.
              </p>
              <p>
                I&apos;m always looking for a challenge and looking to make a
                difference, building products that real people actually want
                to use.
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
