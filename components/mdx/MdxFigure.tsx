import type { CSSProperties } from "react";
import { getImageDims } from "@/lib/imageDims";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface MdxFigureProps {
  src: string;
  alt?: string;
  /** Override max width (px) for portrait images. Default 280. */
  portraitMax?: number;
  /** When true, render without the outer my-8 spacing — used inside ImageRow. */
  inline?: boolean;
}

export default function MdxFigure({
  src,
  alt = "",
  portraitMax = 280,
  inline = false,
}: MdxFigureProps) {
  const dims = getImageDims(src);
  const isPortrait = dims ? dims.height > dims.width : false;

  // Portrait shots use most of the column on mobile, but cap on sm+ so they
  // stay tidy on desktop (tall phone aspect ratios read large otherwise).
  const wrapperClass = isPortrait
    ? "mx-auto w-[85%] sm:w-full sm:max-w-[var(--portrait-max)]"
    : "w-full";
  const wrapperStyle = isPortrait
    ? ({ "--portrait-max": `${portraitMax}px` } as CSSProperties)
    : undefined;

  return (
    <figure className={inline ? "" : "my-8"}>
      <div className={wrapperClass} style={wrapperStyle}>
        <ImageLightbox
          src={src}
          alt={alt}
          width={dims?.width ?? 1200}
          height={dims?.height ?? 800}
          rounded={isPortrait ? "lg" : "md"}
        />
      </div>
      {alt ? (
        <figcaption className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mt-3 text-center leading-[1.5]">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
}
