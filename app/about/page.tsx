import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import PixelHeading from "@/components/ui/PixelHeading";
import RetroCard from "@/components/ui/RetroCard";
import PixelDivider from "@/components/ui/PixelDivider";
import GlowText from "@/components/ui/GlowText";
import Tag from "@/components/ui/Tag";
import RetroButton from "@/components/ui/RetroButton";
import PixelIcon from "@/components/ui/PixelIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "UX leader based in Charlotte, NC with degrees from Clemson University and 15+ years building products at companies like Microsoft, SnapAV, Lockheed Martin, and GE.",
};

const timeline: {
  period: string;
  role: string;
  company: string;
  description: React.ReactNode;
}[] = [
  {
    period: "2022 – Present",
    role: "Senior UX Designer → Senior Design Manager",
    company: "Microsoft",
    description: (
      <>
        Leading a team of{" "}
        <GlowText>6 designers and UX researchers</GlowText> across Azure,
        driving design for internal field tools and{" "}
        <GlowText>Azure Advisor</GlowText>, helping customers optimize
        workloads based on their business needs. Work spans multiple
        organizations and PM, engineering, and UX disciplines. Recognized with{" "}
        <GlowText color="amber">Manager of the Year</GlowText> for delivery
        and people leadership.
      </>
    ),
  },
  {
    period: "2013 – 2022",
    role: "UX Engineer → UX Manager",
    company: "SnapAV / SnapOne",
    description: (
      <>
        Founding member of the OvrC team, starting as the lone designer and
        wearing every hat: design, user testing, front-end, back-end, QA, and
        feature development. Helped take it from an idea to the{" "}
        <GlowText color="green">
          industry-leading integrator management platform
        </GlowText>{" "}
        supporting <GlowText color="green">20M+ managed devices</GlowText>{" "}
        globally. Built the design system across all product lines and provided
        strategic design support for the{" "}
        <GlowText color="green">$150M+ Connected Device category</GlowText>.
      </>
    ),
  },
  {
    period: "2011 – 2013",
    role: "Human Systems Integration Engineer",
    company: "Lockheed Martin",
    description: (
      <>
        Modernized combat system interfaces for the{" "}
        <GlowText color="magenta">Aegis BMD 5.1</GlowText> program, updating
        legacy systems to a more modern architecture. Cut my teeth on rapid
        prototyping, user testing with active duty sailors, and iterating based
        on direct operator feedback.
      </>
    ),
  },
  {
    period: "2011",
    role: "Human Factors Engineer",
    company: "General Electric",
    description: (
      <>
        Worked in <GlowText color="amber">green energy</GlowText>, focused on
        the wind sector. Led risk assessments and built mitigation programs to
        reduce issues across{" "}
        <GlowText color="amber">multiple sectors nationwide</GlowText>.
      </>
    ),
  },
];

const skills = [
  { label: "UX Leadership", color: "cyan" as const },
  { label: "Product Strategy", color: "cyan" as const },
  { label: "Design Systems", color: "cyan" as const },
  { label: "User Research", color: "magenta" as const },
  { label: "Usability Testing", color: "magenta" as const },
  { label: "Prototyping", color: "magenta" as const },
  { label: "IoT / Connected Devices", color: "green" as const },
  { label: "Enterprise SaaS", color: "green" as const },
  { label: "Mobile Design", color: "green" as const },
  { label: "Data Visualization", color: "amber" as const },
  { label: "Design Thinking", color: "amber" as const },
  { label: "Team Building", color: "amber" as const },
];

export default function AboutPage() {
  return (
    <PageContainer>
      <section className="py-12">
        <div className="grid gap-12 md:grid-cols-[1fr_300px] items-start">
          {/* Bio */}
          <div>
            <PixelHeading as="h1" className="mb-6">
              About
            </PixelHeading>
            <div className="space-y-4 text-text-body text-base leading-relaxed">
              <p>
                Hey there! I&apos;m <GlowText>James (JC) Zabel</GlowText>, a UX
                professional based in Charlotte, NC. I hold a BS in Industrial
                Engineering and an MS in Human Factors Psychology, both from
                Clemson University <GlowText color="amber">(Go Tigers!)</GlowText>.
              </p>
              <p>
                With 15+ years of experience spanning corporate giants and
                scrappy startups, I&apos;ve had the chance to work on everything
                from factory automation to green energy to defense contracting to
                IoT cloud platforms and consumer electronics.
              </p>
              <p>
                I&apos;m always looking for a challenge and looking to make a
                difference, building products that real people actually want to
                use.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="pixel-border rounded-sm overflow-hidden">
              <Image
                src="/images/james-zabel-photo.jpg"
                alt="JC Zabel looking out over an alpine lake"
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <PixelDivider />

      {/* Career Timeline */}
      <section className="py-12">
        <PixelHeading as="h2" glow="magenta" className="mb-8">
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
      </section>

      <PixelDivider />

      {/* Skills */}
      <section className="py-12">
        <PixelHeading as="h2" glow="green" className="mb-8">
          Skills
        </PixelHeading>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Tag key={skill.label} color={skill.color}>
              {skill.label}
            </Tag>
          ))}
        </div>
      </section>

      <PixelDivider />

      {/* Contact */}
      <section className="py-12">
        <PixelHeading as="h2" glow="amber" className="mb-6">
          Contact
        </PixelHeading>
        <p className="text-text-body text-base mb-8">
          Available for freelance projects and interesting opportunities. Let&apos;s
          connect.
        </p>
        <div className="flex flex-wrap gap-4">
          <RetroButton
            href="https://www.linkedin.com/in/james-zabel-31860816/"
            variant="cyan"
          >
            LinkedIn
          </RetroButton>
          <RetroButton href="https://github.com/JCornelius86" variant="green">
            GitHub
          </RetroButton>
        </div>
      </section>
    </PageContainer>
  );
}
