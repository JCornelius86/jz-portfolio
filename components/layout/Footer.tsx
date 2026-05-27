import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} JC Zabel
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/james-zabel-31860816/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-sm"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/JCornelius86"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-sm"
            >
              GitHub
            </Link>
            <Link
              href="mailto:jc.zabel@gmail.com"
              className="text-muted hover:text-accent transition-colors text-sm"
            >
              jc.zabel@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
