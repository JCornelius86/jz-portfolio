import { getImageDims } from "./imageDims";

export interface RailShot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Collect <RailShot src="…" alt="…" /> tags from MDX source, in order, with
 * image dimensions, so the page can build its side rail server-side. */
export function getRailShots(mdx: string): RailShot[] {
  const tags = mdx.match(/<RailShot\b[^>]*\/>/g) ?? [];
  return tags.flatMap((tag) => {
    const src = tag.match(/\bsrc="([^"]+)"/)?.[1];
    const alt = tag.match(/\balt="([^"]*)"/)?.[1] ?? "";
    const dims = src ? getImageDims(src) : null;
    return src && dims ? [{ src, alt, ...dims }] : [];
  });
}
