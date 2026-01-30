import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-pixel bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} JC Zabel
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/james-zabel-31860816/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-cyan transition-colors text-sm"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/JCornelius86"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-cyan transition-colors text-sm"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
