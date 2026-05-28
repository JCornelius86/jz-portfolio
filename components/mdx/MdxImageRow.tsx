import MdxFigure from "./MdxFigure";

interface RowImage {
  src: string;
  alt?: string;
}

interface MdxImageRowProps {
  images: RowImage[];
  /** Override max width (px) per portrait image in the row. Default 240. */
  portraitMax?: number;
}

export default function MdxImageRow({
  images,
  portraitMax = 240,
}: MdxImageRowProps) {
  if (!images?.length) return null;

  return (
    <div className="my-8 grid gap-4 sm:gap-6 sm:grid-cols-2">
      {images.map((img) => (
        <MdxFigure
          key={img.src}
          src={img.src}
          alt={img.alt}
          portraitMax={portraitMax}
          inline
        />
      ))}
    </div>
  );
}
