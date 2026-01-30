import PageContainer from "@/components/layout/PageContainer";
import RetroButton from "@/components/ui/RetroButton";

export default function NotFound() {
  return (
    <PageContainer className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <p className="font-[family-name:var(--font-pixel)] text-6xl sm:text-8xl text-accent-magenta neon-glow-magenta mb-6">
          404
        </p>
        <p className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-accent-cyan neon-glow mb-4">
          GAME OVER
        </p>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <RetroButton href="/" variant="cyan">
            &larr; Go Home
          </RetroButton>
          <RetroButton href="/work" variant="magenta">
            View Work
          </RetroButton>
        </div>
      </div>
    </PageContainer>
  );
}
