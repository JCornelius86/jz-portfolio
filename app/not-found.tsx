import PageContainer from "@/components/layout/PageContainer";
import Heading, { Accent } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageContainer className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-[520px]">
        <p
          data-ff="display"
          className="text-accent text-[80px] md:text-[120px] leading-none tracking-[-0.04em] font-[380] mb-4"
        >
          404
        </p>
        <Heading as="h1" variant="section" className="mb-4">
          Page not <Accent>found</Accent>.
        </Heading>
        <p className="text-ink-soft text-[16px] leading-[1.6] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Button href="/" variant="primary">
            ← Home
          </Button>
          <Button href="/work" variant="ghost">
            View work
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
