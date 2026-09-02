# Tailwind Migration — kuvar-technologies

> **Status: complete.** All six pages converted; `globals.css` 807 → 337 lines.
> Kept as a record of what was decided and what went wrong.

Moving the site from 807 lines of hand-written CSS to Tailwind v4 utilities.

**Strategy:** utilities in markup for layout / spacing / colour / typography; a thin CSS
layer survives only for what utilities genuinely cannot express.

**Target:** Tailwind **v4.3.3**, matching `kuvarpay-agent-dashboard` (the newest sibling app,
already on v4 with `@theme` and the same `#CDF140` accent + Switzer/Outfit pairing).

---

## Starting state

| | |
|---|---|
| Custom CSS classes | **192** across 807 lines in `app/globals.css` |
| Inline `style={{}}` objects | **178** across the pages |
| Tailwind status | installed but **inert** — `content` glob says `.{js,jsx}`, every file is `.tsx` |
| `npm run build` | **failing** — ESLint error at `app/solutions/page.tsx:206` |
| `npx tsc --noEmit` | passing |
| Version control | **none** — no `.git` anywhere in `/Users/apple/Code/Kuvarpay` |

> ⚠️ **Blocker to resolve before Phase 2.** A refactor touching ~2,900 lines with no git
> history has no undo. `git init` + a baseline commit is the cheapest insurance here.

---

## Phase 0 — Unblock and upgrade the foundation

No visual change. The site must look pixel-identical when this phase ends.

1. Fix the build error: `app/solutions/page.tsx:206` — `<div>// one call, every rail</div>`
   trips `react/jsx-no-comment-textnodes`. Wrap as `{"// one call, every rail"}`.
2. `npm i tailwindcss@4 @tailwindcss/postcss` · `npm rm autoprefixer` (v4 bundles it).
3. Replace `postcss.config.js` with the v4 plugin.
4. Delete `tailwind.config.js` — v4 is CSS-first.
5. Rewrite the head of `globals.css`: `@import "tailwindcss"` in place of the three
   `@tailwind` directives. All 807 lines of existing CSS stay put for now.

**Exit:** `npm run build` green, site visually unchanged.

---

## Phase 1 — Token layer

Map the existing CSS variables into `@theme` so utilities resolve to them.

### Theme swapping stays variable-driven

Today `:root` and `[data-theme="dark"]` redefine `--ink`, `--bg`, `--card`… and everything
downstream flips for free. **Keep that.** Semantic tokens that already flip mean the markup
needs almost no `dark:` variants — `bg-surface` is correct in both themes.

This requires **`@theme inline`**. Plain `@theme` resolves values at build time and would
bake in the light-mode colour, breaking the toggle.

```css
@custom-variant dark ([data-theme="dark"] &);

@theme inline {
  --color-accent: var(--accent);
  --color-ink: var(--ink);
  --color-surface: var(--bg);
  --font-display: var(--display);
  --radius-brand: 24px;
}
```

`@custom-variant` is needed because v4's `dark:` defaults to `prefers-color-scheme`, not the
`data-theme` attribute this site uses.

### Breakpoints — the main hazard

The existing CSS is **desktop-first** (`max-width`); Tailwind is **mobile-first**
(`min-width`). Every one of these has to be inverted by hand, not mechanically translated:

`420 · 480 · 520 · 560 · 720 · 760 · 880 · 920 · 980`

None line up with Tailwind's defaults (640/768/1024/1280). Custom `--breakpoint-*` tokens
matching the existing values keep the layout identical; normalising to Tailwind's scale
would shift breakpoints and is a separate decision.

**Exit:** utilities generate and resolve to brand tokens; theme toggle still works.

---

## Phase 2 — Component-by-component conversion

Leaf-first, so shared primitives settle before the pages that consume them. Each step is
independently verifiable in the browser.

| # | Target | Why this order |
|---|---|---|
| 1 | `Nav.tsx`, `Footer.tsx` | Self-contained, high reuse, visible on every page |
| 2 | Shared primitives — `.wrap` `.section` `.eyebrow` `.h-display` `.h-section` `.lede` `.btn` `.arrow-link` `.card` | Used 200+ times; everything downstream depends on them |
| 3 | `/contact` + `ContactSection.tsx` | Smallest page (59 lines); exercises form styling |
| 4 | `/press`, `/careers`, `/about` | Mid-size, mostly grids and cards |
| 5 | `/solutions`, `/` | Largest and most bespoke — hero, network animation, gateway card |

**Exit per step:** page renders identically, `tsc` clean, build green.

---

## Phase 3 — Inline styles *(folded into the page steps)*

Done per page rather than as a separate pass — leaving `style={{background:…}}`
beside utilities would have been half-done work. Two kinds:

- **Static values** → utilities. `style={{ marginTop: "18px" }}` becomes `mt-[18px]`.
- **Custom properties** → arbitrary properties, which Tailwind supports directly:
  `style={{ "--reveal-delay": "140ms" }}` becomes `[--reveal-delay:140ms]`.

This also retires the `types/global.d.ts` shim that exists purely to let CSS custom
properties through React's `CSSProperties` type.

---

## Cascade layers — learned the hard way

Tailwind emits `@layer theme, base, components, utilities`. **Unlayered CSS outranks
every layered rule regardless of specificity**, so any bare element selector left in
`globals.css` silently beats utilities.

`a { color: inherit }` did exactly that: after Nav was converted, `text-ink-2` on the nav
links lost to it and they rendered `#0A0A0A` instead of `#2A2A2A`. Eyeballing a screenshot
did not catch it; a pixel diff did. The site's base rules now sit in `@layer base`.

The remaining component CSS is deliberately left **unlayered**. Moving it into
`@layer components` would invert existing overrides — `.press-card { padding: 0 }` would
start losing to `card-pad`'s `p-8`. It stays unlayered until each block is deleted.

## Phase 4 — What stays as CSS

Roughly 120 lines, kept deliberately. These are not failures of the migration — they are
things utilities express worse than plain CSS:

- `@keyframes` — `morph`, `spin`, `dash`, `bob`, `pulse`, `spin2`
- `.hl::before` — the signature rotated highlight behind a word
- `.eyebrow::before` — the accent dash
- `[data-reveal]` / `.reveal-words` — scroll-reveal machinery driven by `SiteEffects.tsx`
- Hero network: `.node` absolute positioning, `.net-line`, `.net-pulse`
- `::selection`, `image-slot` sizing

Anything genuinely reusable moves to `@utility` (the v4 idiom the agent dashboard already uses).

---

## Phase 5 — Cleanup

- Rewrite `README.md` — currently claims `.jsx` files, "no CSS framework", and references
  `home.css` / `solutions.css` that do not exist.
- `npm run lint` and `npm run build` green.
- Side-by-side visual pass, light and dark, at each breakpoint.

---

## Explicitly out of scope

Real issues, but not this migration — raise separately:

- 16 dead `href="#"` links (footer legal pages, socials, press assets)
- Contact form has no backend — validates, then just sets `sent = true`
- Placeholder stats on home and about, labelled as such in-page
- Unused brand assets in `../kuvar-technologies-brand/`
- `kuvarpay-payment-frontend` Tailwind config is inconsistent (v4 PostCSS plugin, v3 dep and syntax)


---

## What actually went wrong

Kept because each was silent — the build stayed green and the page looked fine.

| # | Defect | How it was caught |
|---|---|---|
| 1 | Unlayered `a { color: inherit }` beat `text-ink-2`; nav links rendered `#0A0A0A` not `#2A2A2A` | pixel diff (a screenshot review had already missed it) |
| 2 | 4200px capture window truncated every page, hiding a 736k-pixel regression on `/` | measuring real page heights |
| 3 | `grid-cols-N` is `minmax(0,1fr)`, not `1fr` — impact figures collided | pixel diff |
| 4 | `${wrap} max-w-[760px]` did not narrow the column — two `max-width` utilities, source order wins | pixel diff on `/solutions` only |
| 5 | `border-transparent` in the button base beat the ghost variant's `border-line-2` | pixel diff |
| 6 | `.h-display` was only ever used inside `.page-hero`, whose override was the real size | pixel diff |
| 7 | Deleting `.section`'s media query would have taken `--gutter: 22px` with it | read before deleting |

**The recurring one is #3/#4/#5: two utilities for the same CSS property resolve by source
order in the generated stylesheet, not by the order written in `className`.** Never layer a
shared string with an override; write a separate variant.

Verification that worked: full-height headless Chrome with
`--force-prefers-reduced-motion`, diffed per page against the previous commit, with the
noise floor measured by capturing the same build twice.
