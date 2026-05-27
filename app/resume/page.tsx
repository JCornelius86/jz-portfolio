import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import CompanyMark from "@/components/ui/CompanyMark";

export const metadata: Metadata = {
  title: "Resume | JC Zabel",
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
  "Information Architecture",
  "HTML / CSS",
  "SQL",
];

const honors = [
  "Azure X Manager of the Year",
  "AWS Certified Cloud Practitioner",
  "Six Sigma Green Belt",
  "IIE President, 2009–2010",
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
    title: "Senior Design Manager",
    dates: "Apr 2023 – Present",
    bullets: [
      [
        { text: "Manage and mentor a team of " },
        { text: "6 designers and UX researchers", highlight: true },
        { text: " across Azure X, Resiliency, and Customer Health" },
      ],
      "Recognized with Azure X Manager of the Year for delivery results and people leadership",
      "Established design-driven operating rhythms improving clarity, velocity, and cross-org alignment with PM and Engineering",
      "Elevated team visibility at senior leadership through executive-ready storytelling and design-led narratives",
      "Contributing to a cross-org v-team defining the Future of Work vision for the UX organization",
      [
        { text: "Drove quality initiatives including large-scale bug bashes resulting in " },
        { text: "100+ actionable improvements", highlight: true },
        { text: " shipped or prioritized" },
      ],
    ],
  },
  {
    company: "Microsoft",
    title: "Senior UX Designer",
    dates: "Feb 2022 – Apr 2023",
    bullets: [
      [
        { text: "Led UX for internal Azure field platforms serving " },
        { text: "4,000+ internal users across 10+ Microsoft orgs", highlight: true },
      ],
      [
        { text: "Drove " },
        { text: "175% MAU growth", highlight: true },
        { text: " post-preview on internal tooling" },
      ],
      [
        { text: "Supported business outcomes tied to " },
        { text: "$25M+ projected revenue", highlight: true },
        { text: " and " },
        { text: "$3M annual cost savings", highlight: true },
      ],
      "Trusted IC partner to senior PM and Engineering leaders; influenced roadmap investment and contributed to early AI/LLM exploration",
    ],
  },
  {
    company: "SnapOne (formerly SnapAV)",
    title: "UX Manager",
    dates: "Feb 2015 – Feb 2022",
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
            Senior Design Manager · UX Leader · 15+ Years Experience
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
            <SectionHead label="Skills" />
            <div className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </section>

          <section>
            <SectionHead label="Education" />
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
            <SectionHead label="Honors" />
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

          <section>
            <Button href="/JC_Zabel_Resume.docx" variant="ghost" size="sm">
              Download .docx
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
                      <span
                        data-ff="serif"
                        className="text-ink text-[20px] leading-tight tracking-[-0.01em] font-[450]"
                      >
                        {job.company}
                      </span>
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
