import type { CSSProperties } from "react";
import { getImageDims, imageExists } from "@/lib/imageDims";
import ImageLightbox from "@/components/ui/ImageLightbox";
import Reveal from "@/components/ui/Reveal";
import StripeImage from "@/components/ui/StripeImage";

interface PaneProps {
  src: string;
  alt: string;
  label: string;
  /** Accents the label. Reserved for the "after" side. */
  current?: boolean;
  portraitMax: number;
}

function Pane({ src, alt, label, current = false, portraitMax }: PaneProps) {
  const dims = imageExists(src) ? getImageDims(src) : null;
  const isPortrait = dims ? dims.height > dims.width : true;

  return (
    <div className="flex flex-col gap-2.5">
      <span
        className={`font-mono text-[10.5px] uppercase tracking-[0.12em] ${
          current ? "text-accent" : "text-muted"
        }`}
      >
        {label}
      </span>
      <div
        className={
          isPortrait ? "w-full max-w-[var(--portrait-max)]" : "w-full"
        }
        style={
          isPortrait
            ? ({ "--portrait-max": `${portraitMax}px` } as CSSProperties)
            : undefined
        }
      >
        {dims ? (
          <ImageLightbox
            src={src}
            alt={alt}
            width={dims.width}
            height={dims.height}
            rounded={isPortrait ? "lg" : "md"}
          />
        ) : (
          <StripeImage
            caption="Image forthcoming"
            aspect={isPortrait ? "9/19.5" : "16/9"}
          />
        )}
      </div>
    </div>
  );
}

interface MdxThenNowProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  /** Label above the left pane. */
  beforeLabel?: string;
  /** Label above the right pane. */
  afterLabel?: string;
  /** One line under the pair saying what actually changed. */
  caption?: string;
  /** Max width (px) per portrait pane. Default 240. */
  portraitMax?: number;
}

/**
 * Side-by-side design comparison: two shots of the same screen at different
 * points in a project's life, each with a monospace label, and one caption
 * underneath naming the change. Stays two-up at every width so the pair reads
 * as a comparison, with the lightbox handling close reading on small screens.
 */
export default function MdxThenNow({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
  portraitMax = 240,
}: MdxThenNowProps) {
  return (
    <Reveal>
      <figure className="my-9">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start">
          <Pane
            src={before}
            alt={beforeAlt}
            label={beforeLabel}
            portraitMax={portraitMax}
          />
          <Pane
            src={after}
            alt={afterAlt}
            label={afterLabel}
            current
            portraitMax={portraitMax}
          />
        </div>
        {/* Sentence case, unlike the mono all-caps captions on single figures:
            this one carries a full explanation of the change, and all-caps
            mono stops being readable past a few words. */}
        {caption ? (
          <figcaption className="text-ink-soft text-[14px] leading-[1.6] mt-4">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
