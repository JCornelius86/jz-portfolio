import type { MDXComponents } from "mdx/types";
import { Children, isValidElement, type ReactNode } from "react";
import MdxFigure from "./MdxFigure";
import MdxImageRow from "./MdxImageRow";
import MdxRow from "./MdxRow";
import MdxThenNow from "./MdxThenNow";
import D20 from "./D20";
import ContextGapDiagram from "./ContextGapDiagram";
import TwoTrackDiagram from "./TwoTrackDiagram";

function hasImage(children: ReactNode): boolean {
  return Children.toArray(children).some(
    (child) =>
      isValidElement(child) &&
      (child.type === "img" ||
        (typeof child.type === "function" && child.type.name === "img") ||
        (child.props as Record<string, unknown>)?.src)
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      data-ff="serif"
      className="text-ink text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] font-[440] mt-14 mb-5"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      data-ff="serif"
      className="text-ink text-[24px] md:text-[28px] leading-[1.18] tracking-[-0.015em] font-[440] mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      data-ff="serif"
      className="text-ink text-[19px] md:text-[22px] leading-[1.25] tracking-[-0.01em] font-[450] mt-9 mb-3"
      {...props}
    />
  ),
  p: (props) => {
    if (hasImage(props.children)) {
      return (
        <div className="text-ink-soft leading-[1.7] mb-5" {...props} />
      );
    }
    return (
      <p
        className="text-ink-soft text-[16px] md:text-[17px] leading-[1.7] mb-5"
        {...props}
      />
    );
  },
  a: (props) => (
    <a
      className="text-accent underline underline-offset-[3px] decoration-accent/40 hover:decoration-accent transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 text-ink-soft text-[16px] md:text-[17px] leading-[1.7] mb-5 space-y-2 marker:text-muted"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 text-ink-soft text-[16px] md:text-[17px] leading-[1.7] mb-5 space-y-2 marker:text-muted"
      {...props}
    />
  ),
  li: (props) => <li className="text-ink-soft" {...props} />,
  blockquote: (props) => (
    <blockquote
      data-ff="serif"
      className="border-l border-accent pl-5 my-7 italic text-ink text-[18px] md:text-[20px] leading-[1.45]"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono bg-card border border-rule px-1.5 py-0.5 rounded text-ink text-[0.92em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="font-mono bg-card border border-rule p-4 rounded-[12px] overflow-x-auto mb-5 text-[14px] text-ink-soft"
      {...props}
    />
  ),
  hr: () => <hr className="border-0 border-t border-rule my-10" />,
  strong: (props) => (
    <strong className="text-ink font-semibold" {...props} />
  ),
  em: (props) => (
    <em data-ff="serif" className="italic text-ink" {...props} />
  ),
  img: (props) => {
    const { src, alt } = props;
    if (!src) return null;
    return <MdxFigure src={src} alt={alt || ""} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ImageRow: MdxImageRow as unknown as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Figure: MdxFigure as unknown as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Row: MdxRow as unknown as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ThenNow: MdxThenNow as unknown as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  D20: D20 as unknown as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ContextGapDiagram: ContextGapDiagram as unknown as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TwoTrackDiagram: TwoTrackDiagram as unknown as any,
};
