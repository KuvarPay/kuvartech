# KuvarTechnology — Repositioning Plan

Moving kuvar.co from a fintech product company to a technology consultancy.
Working document — this is the source of truth across sessions.

**Status:** planning. Brand assets prepared; no site code written yet.
**Priority:** follow the optimal plan. Speed matters, but not at the cost of the plan.

---

## Decisions made

| Question | Decision |
|---|---|
| Positioning | Capability-led, industry-agnostic. Breadth earned by shipped work, not asserted. |
| CMS | **Sanity.** Non-technical people will publish, and the content owner may not be technical. |
| Database | **None.** Sanity needs no database. If one is ever needed it is separate from `kuvarpay-db`. |
| KuvarPay / KuvarSend | Case studies under Work. No separate Products section. |
| WordPress | **Not offered as a service.** See below. |
| Technology commitment | None. Best tool per use case — that judgement *is* the service. |
| Client naming | **All four launch clients can be named**, with logos. The anonymised variant stays in the schema for future clients who ask for it. |
| Case studies at launch | **Four.** Enough for a 2×2 grid; too few for filters. |
| Blog / Insights | **In scope.** Built as part of the plan; its *launch* is gated on having 3+ articles, not on the build. |
| Company name | **KuvarTechnology**, shortened to **KuvarTech**. No longer "Kuvar Technologies". |

---

## Naming

| Context | Use |
|---|---|
| Brand name, nav, headings, body copy | **KuvarTech** |
| Legal and formal — footer copyright, terms, contracts | **KuvarTechnology** |
| Logo wordmark | KuvarTech (as supplied) |

The descriptive tagline is **gone entirely** — no replacement. The wordmark stands alone.

"Kuvar Technologies" is retired. It currently appears in the nav, the footer, every page
title, the site metadata and throughout body copy — all of it changes.

---

## Positioning

The claim is breadth *earned*, not breadth asserted. What makes it credible is the
shipped work, not the copy:

| Capability | Proof already built |
|---|---|
| Payments infrastructure | Two gateway generations, merchant dashboard, agent dashboard, POS, KuvarSend cross-border wallets and local-currency payouts |
| Data & infrastructure | Shared schema layer, pgBouncer connection pooling, multi-app data architecture |
| AI & automation | Autonomous Payroll Agent, AI support |
| Blockchain & crypto | Subscription smart contracts, RaySwap, open-source contributions |
| E-commerce | Storefronts built for clients |
| Product engineering | KuvarHQ mobile, digital humanities research platform, custom dashboards |

Direction, not final copy:

> We build software businesses run on. Payments, data, AI, blockchain, commerce —
> we know it holds up, because our own products run on it.

**Most consultancies have never shipped a product they own.** KuvarPay and KuvarSend are
the differentiator, which is exactly why they belong in Work as proof rather than as the
company's identity.

### Why WordPress is not listed

It is a *tool*, not a capability. Listing it beside "payments infrastructure" is a
category error, and it anchors the price bracket downward before a prospect has seen the
serious engineering. "We pick the right technology for the problem" is both truer and a
stronger consulting position — recommending the right stack is the service.

The work still gets taken when it comes in. It just isn't advertised as a product line.

### The digital humanities platform matters

It is the furthest thing from fintech in the portfolio, which makes it the single best
piece of evidence for "any industry". It should be one of the launch case studies.

---

## Information architecture

Six nav items, hard cap.

```
Work · Services · Insights · About · Careers · Contact
```

| Today | Becomes |
|---|---|
| `/` | Rewritten around work and services; products demoted to proof (~70% new) |
| `/solutions` | Splits: capabilities → `/services`, products → `/work/*`. 301 redirect. |
| `/press` | Releases and coverage fold into Insights as a News category; brand assets to About. 301. |
| `/about` | Survives. Story reframed off fintech; team moves to the CMS. |
| `/careers` | Survives. Roles move to the CMS so they open and close without a deploy. |
| `/contact` | Survives. "Partnerships" becomes new business. |

### Routes

Case studies introduce **the first dynamic routes in this codebase** — that, not the
styling, is the real engineering work.

```
/                     home
/work                 index
/work/[slug]          case study                ← new dynamic route
/services             index, six capabilities
/insights             index
/insights/[slug]      article                   ← new dynamic route
/about  /careers  /contact
/studio               Sanity Studio, embedded

redirects (301)
/solutions            → /services
/solutions#kuvarpay   → /work/kuvarpay
/press                → /insights?category=news
```

---

## Why Sanity

Non-technical people publishing regularly rules out file-based content. With MDX or
Keystatic the content is a file in the repo, so **every publish is a code deploy** — a
typo fix becomes a pull request. Keystatic softens this with a browser editor, but the
editor still needs a GitHub account and still triggers a build.

| | Git-based (MDX / Keystatic) | Sanity |
|---|---|---|
| Content lives in | the repo | Sanity's cloud |
| Publishing is | a deploy (2–5 min) | an API write (seconds) |
| Editor needs | GitHub access | an email invite |
| Cost at our size | £0 | £0 (3 users, 10k docs) |
| Undo | `git revert` | version history in the Studio |

**Runner-up: Payload 3.** An open-source TypeScript CMS that installs *into* the Next.js
app, serves an admin UI at `/admin`, and stores content in a Postgres database you own.
Nothing leaves your infrastructure and there is no seat pricing — but you own hosting,
upgrades, auth and backups. Revisit if data residency becomes a requirement.

**Ruled out:** Contentful (free tier fine until it isn't, then ~$300/mo), WordPress (this
site is a portfolio piece).

### The site stays static

- `generateStaticParams` pulls slugs from Sanity at build time.
- Publishing fires a webhook at `/api/revalidate`, regenerating only affected routes.
- Editors preview unpublished work through Next's `draftMode`.
- Images run through Sanity's pipeline into `next/image` — cropping becomes an editor
  decision, not a developer one.

---

## Content model

Getting this right early matters more than the visual design; restructuring content types
once there are fifty documents in them is genuinely painful.

```
caseStudy      title · slug · client{name, logo, isOwnProduct, isAnonymous}
               industry→ · capabilities[]→ · summary
               challenge · approach · outcomes[{metric, label}]
               stack[] · gallery[] · testimonial→ · featured · seo

service        title · slug · summary · icon · includes[]
               relatedCaseStudies[]→ · order

person         name · role · photo · bio · socials[] · isLeadership · order
               ← serves the About team grid AND article bylines

role           title · dept · location · type · description · isOpen

testimonial    quote · name · role · company · caseStudy→

industry       name · slug            ← taxonomy for filtering, not a page
capability     name · slug            ← taxonomy for filtering, not a page

article        title · slug · author→ · category · tags[] · excerpt
               body(PortableText) · coverImage · publishedAt · featured · seo

siteSettings   nav · footer · defaultSeo · socials · offices
```

`client.isAnonymous` is not needed for launch — all four clients can be named — but it
stays in the schema. It costs nothing now and avoids a migration the first time a client
asks not to be named, which you already flagged as likely.

`industry` and `capability` are taxonomies, **not** page types. That single decision is
what stops the site sprawling into dozens of thin landing pages.

---

## Staying minimal

1. **Case studies are the hero content type.** One excellent template, reused. Four strong
   ones beat a dozen thin ones.
2. **No industry landing pages.** Industry is a filter, promoted to a page only if a
   sector proves out.
3. **Six nav items, hard cap.** Anything new displaces something.

### Four case studies changes the Work page

A three-column grid leaves an orphan on the second row, so Work is a **2×2 grid with
larger cards** — which suits four rich case studies better than a dense index would.

**No filter UI at launch.** Filtering four items is friction, not help. The `industry` and
`capability` taxonomies still go into the schema and get tagged on each case study, so the
filter is a UI addition rather than a data migration once there are ten or twelve.

### The design system already covers most of it

| Existing | Reused as |
|---|---|
| `pressThumb` / `pressBody` / `pressTitle` | Case study cards — already ~90% right |
| `statGrid` / `statNum` | Outcome metrics on a case study |
| `valueGrid` / `valueCell` | Services grid |
| `bg-band` + `text-band-ink` | Testimonial and CTA bands |
| `cardHover`, `btn()`, `hSection`, `lede` | Unchanged throughout |

Genuinely new: filter chips for Work and Insights, a Portable Text renderer mapping CMS
blocks to the existing type styles, author byline, and pagination.

> **Carry-over trap from the Tailwind migration.** Two utilities for the same CSS property
> resolve by source order in the generated stylesheet, not by the order written in
> `className`. When the CMS starts driving variants — a featured card, a wider layout —
> write a separate variant string rather than layering an override onto a shared one.
> This bit us three times.

---

## Brand assets

Prepared in `public/assets/brand/`. Originals kept alongside them.

| File | Size | Use |
|---|---|---|
| `mark.png` | 428×428 | Master badge, transparent, works on light and dark |
| `mark-{512,192,180,64,32,16}.png` | as named | PWA icons, apple-touch, favicon sizes |
| `favicon.ico` | 64/32/16 | Multi-resolution favicon |
| `wordmark-on-light.png` | 473×124 | Black pill lockup — **light surfaces only** |
| `wordmark-on-dark.png` | 472×72 | Green lockup — **dark surfaces only** |

### What was done

Backgrounds were flat `#FFFFFF` / `#000000`, so they were removed by flood-fill from the
corners — which only clears the *connected* background and cannot punch holes in white
areas inside the artwork. The badge is a true circle, so its edge was then re-cut with a
clean circular mask; keying alone left a visible halo on dark grounds.

### How they are wired

| Surface | Asset | Why |
|---|---|---|
| Nav, light theme | `wordmark-on-light.png` at 44px | The pill carries its own dark ground, so the accent green reads on a light surface |
| Nav, dark theme | `wordmark-on-dark.png` at 24px | Bare lockup; the page ground is already dark |
| Footer, both themes | `wordmark-on-dark.png` at 28px | The footer is a dark panel in both themes |
| Favicon / touch icon | `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` | Next file conventions pick these up automatically |

Heights are chosen so both nav lockups render ~160px wide; the pill needed to be taller
than the bare lockup because its internal padding makes the wordmark optically smaller at
the same height. Without that correction the brand visibly shrinks when the theme toggles.

### Remaining limitations

- **The wordmarks are single-theme.** The colour is baked into the raster, so the nav needs
  both files swapped by theme — the same `dark:hidden` / `hidden dark:block` pattern the
  KuvarSend screenshots already use. A vector wordmark using `currentColor` would collapse
  this to one file.
- **The 16px favicon loses all detail.** At that size the mark is a green disc; the chevron
  and "Tech" are gone. This is normal for a detailed mark — a **simplified 16px variant**
  (chevron only, no inner text) would be a real improvement, and is a designer task.
- **Everything is raster.** 500×500 sources cap the wordmark at ~473px wide. Fine at nav
  size, soft above it. **SVG is still the right long-term answer** — ideally mark and
  wordmark as separate files.

### Strings that contradict the new positioning today

These ship the old story regardless of what the pages say, and belong in the first commit:

- `components/Nav.tsx` — wordmark tagline "Financial infrastructure"
- `components/Footer.tsx` — same tagline
- `app/layout.tsx` — title "Kuvar Technologies — Africa's financial infrastructure layer"
  and the matching description

---

## Build sequence

**Copy is the critical path, not engineering.** Sanity setup is about a day and runs in
parallel. What cannot be parallelised is deciding what you say.

Full scope — nothing cut for speed.

| # | Phase | Output |
|---|---|---|
| 00 | **Positioning & copy** — narrative, six service definitions, homepage story, case study write-ups. No code. The bottleneck; everything downstream composes it. | approved messaging + copy deck |
| 01 | **Brand assets** — ✅ transparent, trimmed and sized. Outstanding: SVG wordmark, simplified 16px mark. | done, with noted limits |
| 02 | **Sanity foundation** — ✅ live on project `wuck81t6`, dataset `production`. 16 documents imported; /services and /work verified reading from the CMS. | done |
| 03 | **Identity** — 🟡 rename done, logos wired, tagline removed, metadata updated, favicon set. Nav *restructure* deferred to land with the routes it points at. | no "Kuvar Technologies" or "Financial infrastructure" anywhere |
| 04 | **Work** — index with filters, case study template including the anonymised-client variant. Highest-value surface. | `/work`, `/work/[slug]` |
| 05 | **Services** — six capabilities. `/solutions` retires. | `/services` live, old route redirecting |
| 06 | **Insights** — index, category filter, Portable Text article template, RSS | `/insights`, `/insights/[slug]`, `feed.xml` |
| 07 | **Homepage** — largest single piece, deliberately late: it composes Work, Services and Insights, so it is cheapest once those exist. | new homepage |
| 08 | **About, Careers, Contact** — team and roles to CMS, story reframed, contact routing | no hardcoded people or roles left |
| 09 | **SEO & launch** — sitemap, structured data, OG images, analytics, redirect audit | launch-ready |

> **One content gate, not a scope cut.** Insights gets built in full at phase 06, but do not
> *launch* it with fewer than about three articles — an empty blog reads as abandoned and
> costs more credibility than it earns. Build it, hold the nav link until there is content.

---

## Dependency pinning — read before upgrading

Two constraints found while scaffolding. Both matter if anyone bumps versions.

| Package | Pinned to | Why |
|---|---|---|
| `next-sanity` | **11.6.13** | v12+ requires Next 16. v11 accepts `^15.1 \|\| ^16`, so it survives a future Next upgrade without a re-pin. |
| `sanity` | **4.22.1** | v5 calls React's `Activity` and `useEffectEvent`. Our React 19.2.7 has both, but Next 15 vendors its own older React for client components, so the build fails on those imports. Sanity 5 becomes available with Next 16. |
| `@sanity/code-input` | **6.0.4** | Matches Sanity 4. v7 requires Sanity 5. |

**The upgrade path is a set, not one package:** Next 16 → `sanity@5+` → `next-sanity@12+` →
`@sanity/code-input@7`. Moving one alone breaks the build.

### Structural note

Marketing pages live in the `app/(site)/` route group with their own layout carrying Nav,
Footer and SiteEffects. The root layout is now `<html>`/`<body>`, fonts and the theme
script only. This exists so `/studio` renders without a marketing nav wrapped around it.
The route group does not affect URLs.

The Studio adds ~1.85 MB to its own route. It is dynamic and code-split, so the marketing
pages are unchanged at 106 kB First Load JS. If that ever becomes unwelcome, the Studio can
be hosted separately with `sanity deploy` instead of being embedded.

---

## Open questions

- **Which four case studies.** Count and naming are settled; the specific four are needed
  before phase 00 copy can be written. Worth checking the set covers range — ideally not all
  fintech, since proving "any industry" is the whole point.
- **Client logos.** Four logo files, ideally SVG or transparent PNG.
- **Sanity account.** Someone needs to create the project and share the project ID and a
  read token. Schemas can be scaffolded before this exists; nothing can be fetched without it.
- **SVG brand files.** Mark and wordmark as vectors, plus a simplified 16px mark.
- **Content owner.** Still undecided. Sanity is chosen so this can stay open — but a CMS
  nobody drives is only a slower way to have a stale site.
- **Domain.** Does `kuvar.co` stay, given the name is now KuvarTechnology?
- **Lead capture.** Anything beyond the contact form — newsletter, booking link?
