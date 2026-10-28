import { getImageDims } from "./imageDims";
import {
  RAIL_DIAGRAM_SIZE,
  railDiagrams,
  type RailDiagramName,
} from "@/components/rail/AdvisorRailDiagrams";

export interface RailShot {
  /** An image path, or `diagram:<name>` for a portrait rail diagram. */
  src: string;
  alt: string;
  width: number;
  height: number;
  diagram?: RailDiagramName;
}

/** Collect <RailShot src="…" alt="…" /> and <RailDiagram name="…" alt="…" />
 * tags from MDX source, in document order, with dimensions, so the page can
 * build its side rail server-side. */
export function getRailShots(mdx: string): RailShot[] {
  const tags = mdx.match(/<Rail(?:Shot|Diagram)\b[^>]*\/>/g) ?? [];
  return tags.flatMap((tag): RailShot[] => {
    const alt = tag.match(/\balt="([^"]*)"/)?.[1] ?? "";
    if (tag.startsWith("<RailDiagram")) {
      const name = tag.match(/\bname="([^"]+)"/)?.[1];
      if (!name || !(name in railDiagrams)) return [];
      return [
        {
          src: `diagram:${name}`,
          alt,
          ...RAIL_DIAGRAM_SIZE,
          diagram: name as RailDiagramName,
        },
      ];
    }
    const src = tag.match(/\bsrc="([^"]+)"/)?.[1];
    const dims = src ? getImageDims(src) : null;
    return src && dims ? [{ src, alt, ...dims }] : [];
  });
}
