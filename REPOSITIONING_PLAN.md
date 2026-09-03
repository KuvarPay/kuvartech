# KuvarTech — Repositioning Plan

Moving kuvar.co from a fintech product company to a technology consultancy.
Working document — this is the source of truth across sessions.

**Status:** planning. No code written yet.
**Priority:** go live as soon as possible.

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
| Client naming | Named with logos by default; anonymised where a client requires it. |
| Blog / Insights | **Deferred past launch.** |

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
             (Insights deferred past launch)
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
/about  /careers  /contact
/studio               Sanity Studio, embedded

deferred: /insights, /insights/[slug]

redirects (301)
/solutions            → /services
/solutions#kuvarpay   → /work/kuvarpay
/press                → /about  (until Insights ships)
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

siteSettings   nav · footer · defaultSeo · socials · offices

deferred:  article (title · slug · author→ · category · body · cover · seo)
```

`client.isAnonymous` exists because some clients will not permit naming — the template
must render "a pan-African lender" with metrics intact and no logo.

`industry` and `capability` are taxonomies, **not** page types. That single decision is
what stops the site sprawling into dozens of thin landing pages.

---

## Staying minimal

1. **Case studies are the hero content type.** One excellent template, reused. Three
   strong ones beat eight thin ones.
2. **No industry landing pages.** Industry is a filter, promoted to a page only if a
   sector proves out.
3. **Six nav items, hard cap.** Anything new displaces something.

### The design system already covers most of it

| Existing | Reused as |
|---|---|
| `pressThumb` / `pressBody` / `pressTitle` | Case study cards — already ~90% right |
| `statGrid` / `statNum` | Outcome metrics on a case study |
| `valueGrid` / `valueCell` | Services grid |
| `bg-band` + `text-band-ink` | Testimonial and CTA bands |
| `cardHover`, `btn()`, `hSection`, `lede` | Unchanged throughout |

Genuinely new: filter chips (deferred with Insights), a Portable Text renderer, author
byline and pagination (both deferred).

> **Carry-over trap from the Tailwind migration.** Two utilities for the same CSS property
> resolve by source order in the generated stylesheet, not by the order written in
> `className`. When the CMS starts driving variants — a featured card, a wider layout —
> write a separate variant string rather than layering an override onto a shared one.
> This bit us three times.

---

## Brand assets — blocked

Three logos were supplied in `public/assets/`:

| File | Size | Background | Usable for |
|---|---|---|---|
| `KuvarTech-Favicon-logo.png` | 500×500 | white | favicon, social avatar, app icon |
| `KuvarTech-logo1.png` | 500×500 | **solid black** | dark surfaces only |
| `KuvarTech-logo2.png` | 500×500 | white, black pill | light surfaces only |

**Three blockers before these can be wired in:**

1. **No alpha channel on any of them.** `logo1` renders a black square on a light page;
   `logo2` renders a white square on a dark page. The site has both themes, so neither
   works everywhere as supplied.
2. **Raster, and small.** 500×500 makes the horizontal wordmark ~460px wide — fine in the
   nav at ~180px, soft above that. The current `BrandMark` is inline SVG: sharp at any
   size and it inherits theme colour.
3. **The name changed.** The logo reads **KuvarTech**; the site says "Kuvar Technologies"
   in the nav, footer, page titles, metadata and body copy. This is a naming decision, not
   a logo swap.

**Needed:** SVG with transparent background, ideally mark and wordmark as separate files
so the nav can compose and colour them per theme. Failing that, transparent PNG at 3×.

### Strings that contradict the new positioning today

These ship the old story regardless of what the pages say, and belong in the first commit:

- `components/Nav.tsx` — wordmark tagline "Financial infrastructure"
- `components/Footer.tsx` — same tagline
- `app/layout.tsx` — title "Kuvar Technologies — Africa's financial infrastructure layer"
  and the matching description

---

## Build sequence

Ordered for the fastest credible launch. **Copy is the critical path** — engineering runs
in parallel behind it.

### Launch scope

**In:** Home · Work (3–4 case studies) · Services · About · Careers · Contact
**Out:** Insights/blog, service detail pages, filters

Deferring the blog is deliberate: an empty blog, or one with two posts and no cadence,
reads as abandoned and costs more credibility than it earns. Filters are pointless with
four case studies.

| # | Phase | Output |
|---|---|---|
| 00 | **Positioning & copy** — no code. Narrative, six service definitions, homepage story, 3–4 case study write-ups. The bottleneck. | approved messaging + copy deck |
| 01 | **Brand assets** — SVG logos, naming decision (KuvarTech vs Kuvar Technologies) | usable, theme-aware brand files |
| 02 | **Sanity foundation** — project, schemas, Studio at `/studio`, revalidation webhook, preview. Runs parallel to 00. | editors can create content |
| 03 | **Identity strings & nav** — tagline, metadata, new nav, routes, redirects | site no longer says "financial infrastructure" |
| 04 | **Work** — index plus case study template. The highest-value surface: this is what a prospect reads before contacting you. | `/work`, `/work/[slug]` |
| 05 | **Services** — six capabilities. `/solutions` retires. | `/services` live, old route redirecting |
| 06 | **Homepage** — largest single piece, deliberately late: it composes Work and Services, so it is cheapest once those exist. | new homepage |
| 07 | **About, Careers, Contact** — team and roles to CMS, story reframed, contact routing | no hardcoded people or roles left |
| 08 | **SEO & launch** — sitemap, structured data, OG images, analytics, redirect audit | launch-ready |
| — | *Post-launch:* Insights, filters, service detail pages | |

---

## Open questions

- **Naming.** Is the company now KuvarTech, or is that a logo treatment of Kuvar
  Technologies? Affects every page, metadata and all copy.
- **Brand files.** SVG versions with transparency — blocker for phase 01.
- **Case study count for launch.** Three strong ones beat eight thin ones; this sets the
  Work page layout.
- **Content owner.** Undecided. Sanity is chosen precisely so this can stay open — but a
  CMS with nobody driving it is only a slower way to have a stale site.
- **Domain.** Does `kuvar.co` stay?
- **Lead capture.** Anything beyond the contact form — newsletter, booking link?
