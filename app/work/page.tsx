import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/ui/Heading";
import SectionHead from "@/components/ui/SectionHead";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { getCaseStudies } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from 15+ years of product design and design leadership, from AI-powered guidance in Azure to an IoT platform built from the first screen to 20M+ devices.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();
  const count = String(caseStudies.length).padStart(2, "0");

  return (
    <PageContainer className="max-w-[1280px]">
      <section className="pt-10 pb-8 md:pt-16 md:pb-12">
        <Heading as="h1" variant="page" className="mb-5">
          Work
        </Heading>
        <p className="text-ink-soft text-[17px] md:text-[19px] leading-[1.55] max-w-[640px]">
          Case studies from 15+ years of product design. AI-powered guidance in
          Azure today, and before that, an IoT platform I helped build from the
          first screen to more than 20M devices.
        </p>
      </section>

      <section className="pb-16">
        <SectionHead label="All case studies" count={count} />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
