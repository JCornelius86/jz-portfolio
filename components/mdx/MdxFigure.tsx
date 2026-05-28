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

  const wrapperClass = isPortrait ? "mx-auto" : "w-full";
  const wrapperStyle = isPortrait
    ? { maxWidth: `${portraitMax}px` }
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
