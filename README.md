# Kuvar Technologies — Website

The Kuvar Technologies marketing site, built with **Next.js 15** (App Router), **React 19**
and **Tailwind CSS v4**. Home of KuvarPay, KuvarSend and the Kuvar Developer Platform.

## Tech stack

- **Next.js 15** — App Router, file-based routing, server components by default
- **React 19**
- **Tailwind CSS v4** — CSS-first config; there is no `tailwind.config.js`
- Light / dark theme via a `data-theme` attribute on `<html>`, persisted to `localStorage`
- No runtime dependencies beyond `next` / `react` / `react-dom`

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (next/core-web-vitals)
```

> Requires Node.js 18.18+ (Node 20 LTS recommended).

## Project structure

```
kuvar-technologies/
├─ app/
│  ├─ layout.tsx            # root layout: fonts, theme init, Nav, Footer, effects
│  ├─ globals.css           # Tailwind entry, design tokens, the CSS that stays
│  ├─ page.tsx              # Home       → /
│  ├─ solutions/page.tsx    # Solutions  → /solutions  (#kuvarpay #kuvarsend #platform)
│  ├─ about/page.tsx        # About      → /about
│  ├─ careers/page.tsx      # Careers    → /careers
│  ├─ contact/page.tsx      # Contact    → /contact
│  └─ press/page.tsx        # Press      → /press
├─ components/
│  ├─ Nav.tsx               # sticky nav, theme toggle, mobile menu (client)
│  ├─ Footer.tsx            # site footer (server)
│  ├─ Icons.tsx             # shared icon set + brand mark
│  ├─ SiteEffects.tsx       # scroll reveals, counters, 3D tilt (client)
│  ├─ ContactSection.tsx    # contact routing + form (client)
│  └─ styles.ts             # shared utility strings (see below)
└─ public/
   ├─ assets/               # product marks & app screenshots
   └─ image-slot.js         # <image-slot> custom element (team photos)
```

## Styling

Styling is Tailwind utilities in the markup. Three things are worth knowing before editing.

### Design tokens

`app/globals.css` defines the brand palette as CSS variables on `:root`, which
`[data-theme="dark"]` redefines. Those variables are mapped into Tailwind with
**`@theme inline`**:

```css
@theme inline {
  --color-surface: var(--bg);
  --color-ink-2: var(--ink-2);
}
```

`inline` matters. It makes `bg-surface` emit `var(--bg)` directly rather than routing
through a Tailwind-owned copy, so utilities pick up the dark-mode overrides on their own.
**This is why the markup needs almost no `dark:` variants** — `bg-surface` is already
correct in both themes.

`dark:` is pointed at the attribute via `@custom-variant dark ([data-theme="dark"] &)`,
because v4 otherwise defaults it to `prefers-color-scheme`.

| Utility family | Examples |
|---|---|
| Colour | `bg-surface` `bg-surface-2` `bg-card` `text-ink` `text-ink-2/3/4` `border-line` `bg-accent` `text-accent-deep` |
| Contrast band | `bg-band` `text-band-ink` `text-band-ink-3` `bg-band-card` `border-band-line` |
| Type | `font-display` (Outfit) · `font-body` (Switzer) |
| Radius | `rounded-brand` `rounded-brand-md` `rounded-brand-sm` `rounded-pill` |
| Shadow | `shadow-brand-sm` `shadow-brand` `shadow-brand-lg` |
| Layout | `max-w-wrap` `px-gutter` |

### Breakpoints

Tailwind's defaults are **cleared**. This site has its own scale, and leaving `sm`/`md`/`lg`
in place would invite `md:` (768px), which matches nothing in the design.

The breakpoints are named for their pixel value: `w421 w481 w521 w561 w721 w761 w881 w921 w981`.
Each is the old desktop-first `max-width` **plus 1px** — its exact complement at integer
widths — so `w881:grid-cols-3` covers precisely what `@media (max-width: 880px)` did not.
`w881` is the main one; the others are used a handful of times each.

Write mobile-first: the base classes are the narrow layout, `w881:` and friends widen it.

### `components/styles.ts`

Patterns that repeat across pages live here as exported class strings — `wrap`, `section`,
`card`, `btn()`, `hSection`, the stat/team/value/press blocks. `btn()` in particular sits on
`<Link>`, `<a>` and `<button>`, so a helper avoids an `as` prop just to share a class list.

> **Watch for class conflicts.** Two utilities for the same CSS property resolve by *source
> order in the generated stylesheet*, not by the order you write them. `${wrap} max-w-[760px]`
> does **not** narrow the column — `max-w-wrap` may win. Use `wrapBase` (no width cap) and
> supply your own `max-w-*`. The same applies to `my-* mb-*` and to overriding a shared
> string's colour or font-size: write a separate variant instead.

### What is still CSS, and why

`globals.css` keeps ~140 lines that utilities express worse than plain CSS:

- `.eyebrow` and `.tl` — both hang off a `::before` (the accent dash, the timeline dot).
  Variants: `is-plain`, `is-accent`, `on-accent`, `is-block`.
- The hero currency network — `.hero-stage`, `.morph`, `.net-*`, `.node`, `.n-*` — absolute
  placement plus four keyframe animations.
- `.morph2` (press) and `.pill-dot` — keyframe animations.
- `[data-reveal]` / `.reveal-words` — scroll-reveal machinery driven by `SiteEffects.tsx`.
- `.tilt` — the 3D tilt wrapper; `SiteEffects.tsx` writes `--rx` / `--ry`.
- `image-slot` sizing, and the base element rules.

Base rules sit inside **`@layer base`** deliberately. Unlayered CSS outranks every layered
rule regardless of specificity, so a bare `a { color: inherit }` at the top level would beat
`text-accent-deep` on a link. The remaining component CSS is intentionally *not* layered.

### Inline styles

Only for values that cannot be a class: `style={{ "--reveal-delay": \`${d}ms\` }}` where `d`
is data-driven. Tailwind cannot see a class name assembled at runtime. Static equivalents
are written as `[--reveal-delay:140ms]`.

## Editing content

Most page content is defined as small arrays at the top of each `page.tsx` (team members,
open roles, press releases, payout currencies, etc.) — edit those to change copy without
touching markup.

## Known gaps

- Impact/stat numbers are placeholders, labelled as such in-page.
- 16 `href="#"` links have no destination: footer legal pages (Privacy, Terms, Security,
  Compliance, Status, Cookies), the three social links, and the press releases,
  coverage and brand-asset downloads.
- The contact form validates and shows a success state but has no backend — nothing is sent.
- External links point at the live `kuvarpay.com` and `developers.kuvarpay.com`.
- `<image-slot>` is read-only outside its authoring runtime; team cards fall back to
  initials. Replace with real `<img>` / `next/image` when you have photos.
