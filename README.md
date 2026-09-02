# Kuvar Technologies — Website

The Kuvar Technologies marketing site, built with **Next.js 15** (App Router) and **React 19**.
Home of KuvarPay, KuvarSend and the Kuvar Developer Platform.

## Tech stack

- **Next.js 15** — App Router, file-based routing, server components by default
- **React 19**
- Plain global CSS (the original design-system stylesheet, ported verbatim) — no CSS framework, no build-time CSS-in-JS
- Light / dark theme via a `data-theme` attribute on `<html>`, persisted to `localStorage`
- Zero runtime dependencies beyond `next` / `react` / `react-dom`

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
kuvar-next/
├─ app/
│  ├─ layout.jsx            # root layout: fonts, theme init, Nav, Footer, effects
│  ├─ globals.css           # shared design system (tokens, components, utilities)
│  ├─ page.jsx              # Home          → /
│  ├─ home.css
│  ├─ solutions/
│  │  ├─ page.jsx           # Solutions     → /solutions  (#kuvarpay #kuvarsend #platform)
│  │  └─ solutions.css
│  ├─ about/                # About         → /about
│  ├─ careers/              # Careers       → /careers
│  ├─ contact/              # Contact       → /contact
│  └─ press/                # Press         → /press
├─ components/
│  ├─ Nav.jsx               # sticky nav, theme toggle, mobile menu (client)
│  ├─ Footer.jsx            # site footer (server)
│  ├─ Icons.jsx             # shared icon set + brand mark
│  ├─ SiteEffects.jsx       # scroll reveals, counters, 3D tilt (client)
│  └─ ContactSection.jsx    # contact routing + form (client)
└─ public/
   ├─ assets/               # product marks & app screenshots
   └─ image-slot.js         # <image-slot> custom element (team photos)
```

## How the interactive pieces map over

The original static site used one shared `site.js`. In this app that behaviour is split:

| Original                        | Now lives in            |
|---------------------------------|-------------------------|
| Nav + footer injection          | `Nav.jsx` / `Footer.jsx` (real components) |
| Theme toggle + no-flash init    | `Nav.jsx` + `beforeInteractive` script in `layout.jsx` |
| Scroll reveals / word-split     | `SiteEffects.jsx` (`[data-reveal]`, `[data-reveal-words]`) |
| Animated counters               | `SiteEffects.jsx` (`[data-counter]`) |
| 3D tilt cards                   | `SiteEffects.jsx` (`.tilt`) |
| Contact form + dept routing     | `ContactSection.jsx` |

## Editing content

Most page content is defined as small arrays at the top of each `page.jsx`
(team members, open roles, press releases, payout currencies, etc.) — edit those
to change copy without touching markup.

## Notes

- The impact/stat numbers are placeholders — swap in live metrics.
- External links point at the live `kuvarpay.com` and `developers.kuvarpay.com`.
- `<image-slot>` is read-only outside its authoring runtime; team cards fall back
  to initials. Replace with real `<img>` / `next/image` when you have photos.
