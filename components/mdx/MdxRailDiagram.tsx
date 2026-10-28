import type { ReactNode } from "react";
import ContextGapDiagram from "./ContextGapDiagram";
import TwoTrackDiagram from "./TwoTrackDiagram";
import type { RailDiagramName } from "@/components/rail/AdvisorRailDiagrams";

interface MdxRailDiagramProps {
  name: RailDiagramName;
  alt: string;
}

// The wide inline version of each rail diagram, shown below md where there's
// no rail. Diagrams without one (the ask funnel, which is the page hero) show
// only in the rail.
const inlineVersions: Partial<Record<RailDiagramName, () => ReactNode>> = {
  "context-gap": () => <ContextGapDiagram />,
  "two-track": () => <TwoTrackDiagram />,
};

/**
 * Marks where the side rail swaps to a portrait diagram (see
 * components/rail/AdvisorRailDiagrams.tsx). The page collects these with the
 * RailShot tags, in document order.
 */
export default function MdxRailDiagram({ name }: MdxRailDiagramProps) {
  const Inline = inlineVersions[name];
  return (
    <>
      <span data-rail-src={`diagram:${name}`} aria-hidden="true" className="block h-0" />
      {Inline ? <div className="md:hidden">{Inline()}</div> : null}
    </>
  );
}
