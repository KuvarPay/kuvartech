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

/** Centred page column without a width cap. Use when the caller supplies its
 *  own max-width: combining `wrap` with another max-w-* would leave two
 *  max-width utilities competing, and source order decides, not class order. */
export const wrapBase = "mx-auto px-gutter";

/** Centred page column with the responsive gutter. */
export const wrap = `${wrapBase} max-w-wrap`;

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

/* ---- Blocks shared by /about and / ---- */

/** Bordered 3-up grid of value cells. */
export const valueGrid =
  "grid grid-cols-1 overflow-hidden rounded-brand border border-line bg-card w881:grid-cols-3";
export const valueCell =
  "flex flex-col gap-3.5 border-r border-b border-line px-8 py-[34px] transition-[background-color] duration-200 hover:bg-card-2";
export const valueIcon =
  "grid size-[46px] place-items-center rounded-brand-md bg-accent text-accent-ink";
export const valueTitle = "font-display text-[21px] font-bold tracking-[-0.02em]";
export const valueBody = "text-[14.5px] text-ink-2";

/** Leadership cards. */
export const teamPhoto =
  "relative grid aspect-[4/5] w-full place-items-center overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,color-mix(in_oklab,var(--accent)_22%,var(--bg-2))_0%,var(--bg-2)_60%)]";
export const teamInitials =
  "font-display text-[52px] font-extrabold tracking-[-0.04em] text-ink/30";
export const teamInfo = "px-[22px] pt-5 pb-6";
export const teamName = "mb-[3px] font-display text-[19px] font-bold tracking-[-0.02em]";
export const teamRole = "text-[13.5px] text-ink-3";

/** Animated counter block. `.suffix` is injected by SiteEffects at runtime. */
export const statNum =
  "font-display text-[clamp(44px,5.4vw,76px)] font-black leading-[0.95] tracking-[-0.05em] [&_.suffix]:text-accent-deep";
export const statLabel = "font-body text-[14px] font-medium text-ink-3";
export const statDivider = "my-1 h-px w-full bg-line";
/* repeat(N,1fr), not grid-cols-N. Tailwind's grid-cols-N emits minmax(0,1fr),
   which forces equal columns; the original 1fr is minmax(auto,1fr), letting a
   wide figure like "38,000+" claim the room it needs. */
export const statGrid =
  "grid grid-cols-[repeat(2,1fr)] gap-5 w881:grid-cols-[repeat(4,1fr)] w881:gap-7";
export const stat = "flex flex-col gap-1.5";

/** Press teaser card, used on / and /press. */
export const pressThumb =
  "grid aspect-video w-full place-items-center bg-[linear-gradient(135deg,var(--bg-2),color-mix(in_oklab,var(--accent)_14%,var(--bg-2)))] text-ink-4";
export const pressBody = "flex flex-1 flex-col gap-3 px-[26px] pt-6 pb-7";
export const pressMeta = "flex items-center gap-2.5 text-[12.5px] text-ink-3";
export const pressTag = "text-[11px] font-semibold uppercase tracking-[0.06em] text-accent-deep";
export const pressTitle = "font-display text-[21px] font-bold leading-[1.2] tracking-[-0.02em]";
export const pressExcerpt = "flex-1 text-[14px] text-ink-2";

/** Stat block on the accent-coloured impact band. A separate string rather than
 *  an override: two utilities for the same property resolve by source order. */
export const statNumOnAccent =
  "font-display text-[clamp(44px,5.4vw,76px)] font-black leading-[0.95] tracking-[-0.05em] text-accent-ink [&_.suffix]:text-[#0A0A0A] [&_.suffix]:opacity-55";
export const statLabelOnAccent = "font-body text-[14px] font-medium text-[rgba(10,10,10,0.62)]";
export const statDividerOnAccent = "my-1 h-px w-full bg-[rgba(10,10,10,0.14)]";
