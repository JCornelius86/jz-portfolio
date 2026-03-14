import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import PixelHeading from "@/components/ui/PixelHeading";
import PixelDivider from "@/components/ui/PixelDivider";
import GlowText from "@/components/ui/GlowText";
import Tag from "@/components/ui/Tag";
import RetroCard from "@/components/ui/RetroCard";
import RetroButton from "@/components/ui/RetroButton";

export const metadata: Metadata = {
  title: "Resume | JC Zabel",
  description:
    "15+ years of UX leadership, from IoT platforms to enterprise Azure products at Microsoft.",
};

const skills = [
  { label: "Design Management", color: "cyan" as const },
  { label: "UX Research", color: "cyan" as const },
  { label: "Design Systems", color: "cyan" as const },
  { label: "Figma", color: "magenta" as const },
  { label: "Prototyping", color: "magenta" as const },
  { label: "Enterprise SaaS", color: "green" as const },
  { label: "IoT / Connected Devices", color: "green" as const },
  { label: "Mobile Design", color: "green" as const },
  { label: "Data Visualization", color: "amber" as const },
  { label: "AI-Assisted Design", color: "amber" as const },
  { label: "Information Architecture", color: "amber" as const },
  { label: "HTML / CSS", color: "magenta" as const },
  { label: "SQL", color: "magenta" as const },
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
          <GlowText key={i}>{seg.text}</GlowText>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </span>
  );
}

export default function ResumePage() {
  return (
    <PageContainer>
      <section className="py-12">
        {/* Header */}
        <div className="mb-8">
          <PixelHeading as="h1" className="mb-4">
            Resume
          </PixelHeading>
          <p className="text-text-heading text-xl font-bold tracking-tight mb-1">
            James C. E. Zabel
          </p>
          <p className="text-text-secondary mb-4">
            Senior Design Manager · UX Leader · 15+ Years Experience
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
            <span>Fort Mill, SC</span>
            <a
              href="mailto:jc.zabel@gmail.com"
              className="hover:text-accent-cyan transition-colors"
            >
              jc.zabel@gmail.com
            </a>
            <span>(803) 984-5744</span>
            <a
              href="https://www.jczabel.com"
              className="hover:text-accent-cyan transition-colors"
            >
              jczabel.com
            </a>
            <a
              href="https://linkedin.com/in/james-zabel-31860816/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-cyan transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <PixelDivider />

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 mt-8">
          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Skills */}
            <section>
              <PixelHeading as="h3" glow="green" className="mb-4">
                Skills
              </PixelHeading>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Tag key={s.label} color={s.color}>
                    {s.label}
                  </Tag>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <PixelHeading as="h3" glow="magenta" className="mb-4">
                Education
              </PixelHeading>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-text-heading">
                    MS, Industrial Engineering
                  </p>
                  <p className="text-xs text-text-secondary">
                    Human Factors Psychology focus
                  </p>
                  <p className="text-xs text-text-secondary">
                    Clemson University · 2010
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-heading">
                    BS, Industrial Engineering
                  </p>
                  <p className="text-xs text-text-secondary">
                    Clemson University · 2009
                  </p>
                </div>
              </div>
            </section>

            {/* Honors */}
            <section>
              <PixelHeading as="h3" glow="amber" className="mb-4">
                Honors
              </PixelHeading>
              <ul className="space-y-2">
                {honors.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-cyan shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Download */}
            <section>
              <RetroButton href="/JC_Zabel_Resume.docx" variant="cyan">
                Download .docx
              </RetroButton>
            </section>
          </aside>

          {/* Experience */}
          <div>
            <PixelHeading as="h2" className="mb-6">
              Experience
            </PixelHeading>
            <div className="space-y-6">
              {experience.map((job, i) => (
                <RetroCard key={i} hover={false}>
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-0.5">
                    <span className="font-semibold text-text-heading">
                      {job.company}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-accent-green">
                      {job.dates}
                    </span>
                  </div>
                  <p className="text-sm text-accent-cyan mb-3">{job.title}</p>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-text-secondary shrink-0" />
                        <BulletContent line={bullet} />
                      </li>
                    ))}
                  </ul>
                </RetroCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
