/**
 * Shared utility strings for patterns that repeat across pages.
 *
 * These exist because the same set of ~15 utilities appears on 19 buttons
 * spread over <Link>, <a> and <button>. A helper keeps the markup structural
 * and avoids an `as` prop just to share a class list.
 */

type Variant = "primary" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex cursor-pointer items-center gap-[9px] whitespace-nowrap rounded-pill border font-body font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-[180ms] ease-[ease] hover:-translate-y-0.5 [&_svg]:size-[17px]";

const VARIANTS: Record<Variant, string> = {
  primary: "border-transparent bg-accent text-accent-ink shadow-[0_8px_22px_var(--accent-glow)] hover:shadow-[0_12px_30px_var(--accent-glow)]",
  dark: "border-transparent bg-ink text-surface",
  ghost: "bg-transparent text-ink border-line-2 hover:border-ink",
};

const SIZES: Record<Size, string> = {
  sm: "px-[18px] py-2.5 text-[13.5px]",
  md: "px-6 py-3.5 text-[15px]",
  lg: "px-[30px] py-[17px] text-[16px]",
};

export function btn(variant: Variant = "primary", size: Size = "md") {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]}`;
}

/** Text link with a trailing arrow; the gap widens on hover. */
export const arrowLink =
  "inline-flex items-center gap-[7px] font-body text-[15px] font-semibold text-ink transition-[gap] duration-[180ms] ease-[ease] hover:gap-[11px] [&_svg]:size-4 [&_svg]:transition-transform [&_svg]:duration-[180ms]";

/** Bordered surface used for most content cards. */
export const card =
  "rounded-brand border border-line bg-card transition-[transform,box-shadow,border-color] duration-[250ms] ease-out";

/** `card` plus the lift-on-hover treatment. */
export const cardHover = `${card} hover:-translate-y-1 hover:shadow-brand`;

/** Centred page column with the responsive gutter. */
export const wrap = "mx-auto max-w-wrap px-gutter";

/** Vertical rhythm for a full section; tightens under 761px. */
export const section = "py-16 w761:py-24";

/** Section rhythm that does not change with viewport. */
export const sectionTight = "py-16";

/** Display headline. Every use sits in a page hero, which is why the clamp
 *  is the interior-hero one rather than the larger unscoped size. */
export const hDisplay =
  "m-0 font-display text-[clamp(44px,7vw,88px)] font-black leading-[0.98] tracking-[-0.045em] text-balance";

/** Section headline. */
export const hSection =
  "m-0 font-display text-[clamp(32px,4.6vw,60px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-balance";

/** Standfirst paragraph under a headline. */
export const lede =
  "max-w-[620px] text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-2 text-pretty";

/** Top band on interior pages, above the display headline. */
export const pageHero = "pt-[72px] pb-14";

/** "Home / Section" trail at the top of an interior page. */
export const breadcrumb = "mb-[22px] inline-flex items-center gap-2 text-[13px] text-ink-3";

/** Text input, textarea and select share one look. */
export const fieldControl =
  "w-full rounded-brand-md border border-line-2 bg-surface px-4 py-3.5 font-body text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-ink-4 focus:border-accent-deep focus:shadow-[0_0_0_3px_var(--accent-glow)]";

/** Label + control stack. */
export const field = "flex flex-col gap-2";

/** Label above a form control. */
export const fieldLabel = "font-body text-[13.5px] font-semibold text-ink-2";
