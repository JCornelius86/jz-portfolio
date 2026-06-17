import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import PrintButton from "@/components/ui/PrintButton";
import Tag from "@/components/ui/Tag";
import CompanyMark from "@/components/ui/CompanyMark";

export const metadata: Metadata = {
  // Layout sets template "%s | JC Zabel" — just pass the page name here.
  title: "Resume",
  description:
    "15+ years of UX leadership, from IoT platforms to enterprise Azure products at Microsoft.",
};

const skills = [
  "Design Management",
  "UX Research",
  "Design Systems",
  "Figma",
  "Prototyping",
  "Enterprise SaaS",
  "IoT / Connected Devices",
  "Mobile Design",
  "Data Visualization",
  "AI-Assisted Design",
  "Competitive Analysis",
  "Product Analytics",
  "Information Architecture",
  "HTML / CSS",
  "SQL",
];

const honors = [
  "Azure X Manager of the Year",
  "AWS Certified Cloud Practitioner",
];

type Segment = { text: string; highlight?: boolean };
type BulletLine = string | Segment[];

interface Job {
  company: string;
  title: string;
  dates: string;
  bullets: BulletLine[];
}

const experience: Job[] = [
  {
    company: "Microsoft",
    title: "Senior Product Designer",
    dates: "May 2026 – Present",
    bullets: [
      [
        { text: "Lead UX for AI-powered, agentic experiences in " },
        { text: "Azure Advisor", highlight: true },
        {
          text:
            ", Microsoft's recommendation engine that helps enterprise customers cut cloud cost, reduce risk, and modernize their workloads",
        },
      ],
      "Design workflows that turn long, generic recommendation lists into prioritized, contextual actions, so customers know what to fix first",
      [
        { text: "Helped modernize authoring and governance for a catalog of " },
        { text: "~1,700 recommendations", highlight: true },
        { text: ", introducing AI-assisted drafting with human review to raise quality and consistency" },
      ],
      "Partner with platform and engineering teams to align AI interaction patterns, accessibility, and Responsible AI standards; also drive UX for CX Observe, internal tooling for customer-health insights",
    ],
  },
  {
    company: "Microsoft",
    title: "Senior Design Manager",
    dates: "Apr 2023 – May 2026",
    bullets: [
      [
        { text: "Managed and coached a multidisciplinary team of " },
        { text: "6 designers and UX researchers", highlight: true },
        { text: " across Azure Advisor, CX Observe, and customer-health products" },
      ],
      "Recognized with Azure X Manager of the Year for delivery results and people leadership",
      "Translated ambiguous, cross-organization priorities into clear product direction and execution plans; influenced roadmap and investment decisions",
      "Built alignment across product, engineering, research, and leadership while empowering the team to own major workstreams; elevated visibility through executive-ready storytelling",
    ],
  },
  {
    company: "Microsoft",
    title: "Senior UX Designer",
    dates: "Feb 2022 – Apr 2023",
    bullets: [
      [
        { text: "Led UX for internal Azure field platforms serving " },
        { text: "4,000+ users across 10+ Microsoft organizations", highlight: true },
      ],
      [
        { text: "Drove " },
        { text: "175% monthly-active-user growth", highlight: true },
        { text: " post-launch; supported outcomes tied to " },
        { text: "$25M+ projected revenue", highlight: true },
        { text: " and " },
        { text: "$3M annual cost savings", highlight: true },
      ],
      "Trusted IC partner to senior PM and engineering leaders; contributed to early AI/LLM exploration that shaped later agentic work",
    ],
  },
  {
    company: "SnapOne (formerly SnapAV)",
    title: "Lead Data Analyst",
    dates: "2020 – Feb 2022",
    bullets: [
      [
        { text: "Founding member of SnapOne's data team, turning insights from its " },
        { text: "connected IoT platforms", highlight: true },
        { text: " into product strategy" },
      ],
      "Designed and launched data-insight experiences for customers, end customers, and internal stakeholders across SnapOne's platforms",
      "Served as team scrum master, prioritizing product-development requests and partnering with product managers to define and refine asks",
      [
        { text: "Delivered quarterly insight presentations to executives, proposing strategic decisions across " },
        { text: "all major SnapOne brands", highlight: true },
      ],
      "Ran regular competitive analysis to keep brands market-relevant, and stood up NPS monitoring to channel customer feedback to product managers",
    ],
  },
  {
    company: "SnapOne (formerly SnapAV)",
    title: "UX Manager",
    dates: "Feb 2015 – 2020",
    bullets: [
      [
        { text: "Led UX for OvrC, an IoT cloud remote management platform supporting " },
        { text: "20M+ managed devices", highlight: true },
        { text: " globally" },
      ],
      "Led OvrC Home, a residential consumer app enabling homeowners to monitor and control smart home devices",
      [
        { text: "Strategic design support for the " },
        { text: "$150M+ Connected Device category", highlight: true },
        { text: ", driving double-digit growth annually" },
      ],
      "Managed onshore and offshore design teams; created standardized design system across all software interfaces",
      "Planned and facilitated regular usability sessions with customers across both platforms",
    ],
  },
  {
    company: "SnapOne (formerly SnapAV)",
    title: "User Experience Engineer",
    dates: "Aug 2013 – Feb 2015",
    bullets: [
      "Early team member helping launch OvrC, a device management platform now supporting 20M+ IoT devices",
      "Led offshore UI team utilizing AngularJS, HTML5, CSS3, Bootstrap, and WebSocket technologies",
      "Created wireframes, prototypes, and flowcharts; conducted usability studies with clients to iterate design",
    ],
  },
  {
    company: "Lockheed Martin",
    title: "Human Systems Integration Engineer",
    dates: "Nov 2011 – Aug 2013",
    bullets: [
      "Principal investigator on usability assessments for Navy Ballistic Missile Defense 5.1 program",
      "Used iterative design and heuristic evaluations to develop new GUIs introduced to fleet architecture",
      "Gathered input from active duty sailors to resolve novel interface and layout problems",
    ],
  },
  {
    company: "General Electric (Axiem Engineering)",
    title: "Human Factors Engineer",
    dates: "2011",
    bullets: [
      "Risk assessments, Root Cause Analysis investigations, and Preliminary Hazard Assessments for new product development across multiple GE business units",
    ],
  },
];

function BulletContent({ line }: { line: BulletLine }) {
  if (typeof line === "string") return <span>{line}</span>;
  return (
    <span>
      {line.map((seg, i) =>
        seg.highlight ? (
          <span key={i} className="text-accent">
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </span>
  );
}

export default function ResumePage() {
  return (
    <PageContainer className="max-w-[1280px]">
      {/* Header */}
      <section className="pt-10 pb-8 md:pt-16 md:pb-10">
        <Heading as="h1" variant="page" className="mb-6">
          Resume
        </Heading>
        <div>
          <p
            data-ff="serif"
            className="text-ink text-[26px] md:text-[32px] leading-tight tracking-[-0.015em] font-[440] mb-1"
          >
            James C. E. Zabel
          </p>
          <p className="text-ink-soft text-[16px] mb-4">
            Senior Product Designer · UX & Design Leader · 15+ Years Experience
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            <span>Fort Mill, SC</span>
            <a
              href="mailto:jc.zabel@gmail.com"
              className="hover:text-accent transition-colors normal-case tracking-normal text-[13px]"
            >
              jc.zabel@gmail.com
            </a>
            <span>(803) 984-5744</span>
            <a
              href="https://www.jczabel.com"
              className="hover:text-accent transition-colors normal-case tracking-normal text-[13px]"
            >
              jczabel.com
            </a>
            <a
              href="https://linkedin.com/in/james-zabel-31860816/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <div className="grid gap-12 lg:grid-cols-[260px_1fr] pb-16">
        {/* Sidebar */}
        <aside className="space-y-10">
          <section>
            <SectionHead as="h3" label="Skills" />
            <div className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </section>

          <section>
            <SectionHead as="h3" label="Education" />
            <div className="mt-4 space-y-4">
              <div>
                <p
                  data-ff="serif"
                  className="text-ink text-[17px] leading-tight tracking-[-0.01em] font-[450]"
                >
                  MS, Industrial Engineering
                </p>
                <p className="text-muted text-[13px] mt-1">
                  Human Factors Psychology focus
                </p>
                <p className="text-muted text-[13px]">
                  Clemson University · 2010
                </p>
              </div>
              <div>
                <p
                  data-ff="serif"
                  className="text-ink text-[17px] leading-tight tracking-[-0.01em] font-[450]"
                >
                  BS, Industrial Engineering
                </p>
                <p className="text-muted text-[13px] mt-1">
                  Clemson University · 2009
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHead as="h3" label="Honors" />
            <ul className="mt-4 space-y-2">
              {honors.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 text-ink-soft text-[14px] leading-[1.5]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </section>

          <section className="no-print flex flex-col gap-2 items-start">
            <PrintButton>Save as PDF</PrintButton>
            <Button href="/JC_Zabel_Resume.pdf" variant="ghost" size="sm">
              Download PDF
            </Button>
          </section>
        </aside>

        {/* Experience */}
        <div>
          <SectionHead label="Experience" count={String(experience.length).padStart(2, "0")} />
          <div className="mt-6 space-y-4">
            {experience.map((job, i) => (
              <Card key={i} padding="md" hover={false}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <CompanyMark company={job.company} size="sm" className="mt-0.5" />
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                      <h3
                        data-ff="serif"
                        className="text-ink text-[20px] leading-tight tracking-[-0.01em] font-[450] m-0"
                      >
                        {job.company}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                        {job.dates}
                      </span>
                    </div>
                    <p className="text-accent text-[14px] mb-3">
                      {job.title}
                    </p>
                    <ul className="space-y-2">
                      {job.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-ink-soft text-[14.5px] leading-[1.55]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 w-1 h-1 rounded-full bg-muted shrink-0"
                          />
                          <BulletContent line={bullet} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
