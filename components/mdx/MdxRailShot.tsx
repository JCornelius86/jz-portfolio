import MdxFigure from "./MdxFigure";

interface MdxRailShotProps {
  src: string;
  alt: string;
}

/**
 * A screenshot that lives in the page's side rail on desktop. Where it sits in
 * the MDX is where the rail swaps to it (via the data-rail-src marker), and the
 * page collects every RailShot into the rail in document order. Below md there
 * is no rail, so it renders inline like any other figure.
 */
export default function MdxRailShot({ src, alt }: MdxRailShotProps) {
  return (
    <>
      <span data-rail-src={src} aria-hidden="true" className="block h-0" />
      <div className="md:hidden">
        <MdxFigure src={src} alt={alt} portraitMax={260} />
      </div>
    </>
  );
}
