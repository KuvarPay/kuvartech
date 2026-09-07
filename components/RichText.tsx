import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@/sanity/lib/types";

/* Maps CMS rich text onto the site's existing type styles, so an editor's
   paragraph looks the same as a hand-written one. */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[16.5px] leading-[1.7] text-ink-2">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 font-display text-[26px] font-bold tracking-[-0.025em] text-ink">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 font-display text-[20px] font-bold tracking-[-0.02em] text-ink">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-7 border-l-2 border-accent pl-5 font-display text-[19px] leading-[1.45] font-semibold text-ink">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-5 flex flex-col gap-2">{children}</ul>,
    number: ({ children }) => (
      <ol className="mb-5 flex list-decimal flex-col gap-2 pl-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-2.5 text-[16px] leading-[1.65] text-ink-2">
        <span className="mt-[10px] size-1 shrink-0 rounded-full bg-accent-deep" aria-hidden="true"></span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[16px] leading-[1.65] text-ink-2">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    code: ({ children }) => (
      <code className="rounded-brand-sm bg-surface-2 px-1.5 py-0.5 font-mono text-[14px] text-ink">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-ink underline decoration-line-2 underline-offset-[3px] transition-colors hover:decoration-accent"
        {...(value?.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    ),
  },
};

export default function RichText({ value }: { value?: PortableTextBlock[] }) {
  if (!value?.length) return null;
  /* The renderer's own block type is structurally compatible; the local alias
     exists so seed content can be written without importing Sanity types. */
  return <PortableText value={value as never} components={components} />;
}
