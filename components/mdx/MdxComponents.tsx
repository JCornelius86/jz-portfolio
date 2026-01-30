import type { MDXComponents } from "mdx/types";
import ImageLightbox from "@/components/ui/ImageLightbox";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-[family-name:var(--font-pixel)] text-lg sm:text-xl text-accent-cyan neon-glow mt-12 mb-6 leading-relaxed"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-accent-magenta neon-glow-magenta mt-10 mb-4 leading-relaxed"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-[family-name:var(--font-pixel)] text-xs text-accent-green neon-glow-green mt-8 mb-3 leading-relaxed"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-text-body leading-relaxed mb-4" {...props} />
  ),
  a: (props) => (
    <a
      className="text-accent-cyan hover:text-white underline underline-offset-2 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside text-text-body mb-4 space-y-1" {...props} />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-inside text-text-body mb-4 space-y-1"
      {...props}
    />
  ),
  li: (props) => <li className="text-text-body" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-accent-cyan/50 pl-4 my-6 text-text-secondary italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-[family-name:var(--font-mono)] bg-bg-elevated px-1.5 py-0.5 rounded text-accent-green text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="font-[family-name:var(--font-mono)] bg-bg-elevated p-4 rounded-sm overflow-x-auto mb-4 border border-border-pixel text-sm"
      {...props}
    />
  ),
  hr: () => (
    <hr className="border-none h-[2px] bg-gradient-to-r from-transparent via-border-pixel to-transparent my-8" />
  ),
  strong: (props) => (
    <strong className="text-text-heading font-semibold" {...props} />
  ),
  img: (props) => {
    const { src, alt, ...rest } = props;
    if (!src) return null;
    return (
      <span className="block my-6">
        <ImageLightbox
          src={src}
          alt={alt || ""}
          {...rest}
        />
      </span>
    );
  },
};
