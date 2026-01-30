import PageContainer from "@/components/layout/PageContainer";
import PixelHeading from "@/components/ui/PixelHeading";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { getCaseStudies } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from 10+ years of UX leadership — IoT platforms, cloud apps, and consumer products.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <PageContainer>
      <section className="py-12">
        <PixelHeading as="h1" className="mb-4">
          Work
        </PixelHeading>
        <p className="text-text-secondary text-lg mb-12 max-w-2xl">
          Case studies from 10+ years of UX leadership — from building an IoT
          platform from scratch to designing consumer apps used by hundreds of
          thousands.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
