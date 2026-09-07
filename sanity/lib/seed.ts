import type { Article, CaseStudy, Person, Service } from "./types";

/* Seed content.
 *
 * Every page reads through `sanityFetch(query, params, fallback)`, which returns
 * the fallback whenever Sanity is not configured. That keeps the site rendering
 * real content before the CMS project exists, and the same data doubles as the
 * import for seeding the dataset once it does.
 *
 * Copy here is a working draft. Final wording is phase 00. */

export const SERVICES_SEED: Service[] = [
  {
    _id: "seed-payments",
    title: "Payments infrastructure",
    slug: "payments-infrastructure",
    coverPath: "/assets/covers/payments-infrastructure.png",
    icon: "card",
    summary:
      "Gateways, merchant tooling and payout rails, built to move real money under real regulatory load.",
    includes: [
      "Payment gateways",
      "Merchant dashboards and tooling",
      "POS and agent networks",
      "Cross-border wallets and payouts",
      "Settlement and reconciliation",
    ],
  },
  {
    _id: "seed-data",
    title: "Data & infrastructure",
    slug: "data-infrastructure",
    coverPath: "/assets/covers/data-infrastructure.png",
    icon: "network",
    summary:
      "The layer everything else depends on: schema design, connection pooling, pipelines, and the observability to know it is healthy.",
    includes: [
      "Database and schema design",
      "Connection pooling at scale",
      "Data pipelines and ETL",
      "Cloud architecture",
      "Monitoring and observability",
    ],
  },
  {
    _id: "seed-ai",
    title: "AI & automation",
    slug: "ai-automation",
    coverPath: "/assets/covers/ai-automation.png",
    icon: "bolt",
    summary:
      "Agents and automated workflows that take real work off people, running in production rather than in a demo.",
    includes: [
      "Autonomous agents",
      "Workflow automation",
      "Document and data extraction",
      "AI-assisted support",
      "Model integration and evaluation",
    ],
  },
  {
    _id: "seed-blockchain",
    title: "Blockchain & crypto",
    slug: "blockchain-crypto",
    coverPath: "/assets/covers/blockchain-crypto.png",
    icon: "chevrons",
    summary:
      "Smart contracts, exchange mechanics and on-chain payments, written to be read and audited.",
    includes: [
      "Smart contract development",
      "Token and subscription mechanics",
      "Exchange and swap systems",
      "Wallet integration",
      "Open-source contributions",
    ],
  },
  {
    _id: "seed-ecommerce",
    title: "E-commerce",
    slug: "e-commerce",
    coverPath: "/assets/covers/e-commerce.png",
    icon: "dollar",
    summary:
      "Storefronts and checkout that convert, wired properly into payments, inventory and fulfilment.",
    includes: [
      "Storefront builds",
      "Checkout and payment integration",
      "Inventory and order flows",
      "Subscriptions and recurring billing",
      "Performance and Core Web Vitals",
    ],
  },
  {
    _id: "seed-product",
    title: "Product engineering",
    slug: "product-engineering",
    coverPath: "/assets/covers/product-engineering.png",
    icon: "grid",
    summary:
      "Custom web and mobile products, from a research platform to an internal dashboard to a consumer app.",
    includes: [
      "Web applications",
      "Mobile apps for iOS and Android",
      "Internal tools and dashboards",
      "API design and integration",
      "Design systems",
    ],
  },
];


/* ---- Case studies ---- */


/** Wraps plain paragraphs in Portable Text blocks, so seed content and CMS
 *  content render through exactly the same path. */
function pt(paragraphs: string[], keyPrefix = "seed") {
  return paragraphs.map((raw, i) => {
    // "## " marks a subheading; everything else is a paragraph.
    const isHeading = raw.startsWith("## ");
    const text = isHeading ? raw.slice(3) : raw;
    return {
      _type: "block" as const,
      _key: `${keyPrefix}-${i}`,
      style: isHeading ? ("h2" as const) : ("normal" as const),
      markDefs: [],
      children: [{ _type: "span" as const, _key: `${keyPrefix}-${i}-0`, text, marks: [] }],
    };
  });
}

/* Two of the four launch case studies, seeded from KuvarTech's own products.
 * The e-commerce and digital humanities studies are pending client detail.
 *
 * Outcome figures reuse claims already published on the current site
 * (five markets, 99.98% rail uptime). They should be confirmed before launch
 * rather than taken as verified. */

export const CASE_STUDIES_SEED: CaseStudy[] = [
  {
    _id: "seed-kuvarpay",
    title: "KuvarPay: accept crypto on any chain, settle in local currency",
    slug: "kuvarpay",
    coverPath: "/assets/covers/kuvarpay.png",
    logoPath: "/assets/kuvarpay-mark.svg",
    icon: "card",
    featured: true,
    summary:
      "A payment gateway that takes Bitcoin, Solana, Stellar and EVM payments, converts across five collection currencies, and settles the business in the currency it actually banks in.",
    client: { name: "KuvarTech", isOwnProduct: true },
    industry: { name: "Fintech", slug: "fintech" },
    capabilities: [
      { name: "Payments infrastructure", slug: "payments-infrastructure" },
      { name: "Blockchain & crypto", slug: "blockchain-crypto" },
      { name: "Data & infrastructure", slug: "data-infrastructure" },
    ],
    challenge: pt([
      "A business that decides to accept crypto inherits every hard part of it at once: which chains to support, which coins, how to price against a rate that moves while the customer is still on the checkout page, and how to end up holding money it can actually pay salaries with.",
      "Doing that properly means running node infrastructure, an internal ledger, FX, and compliance in four different places. Most merchants are not equipped to run any of it, and the ones who try end up holding assets they never wanted.",
    ]),
    approach: pt([
      "We built one gateway across four chain families — Bitcoin, Solana, Stellar and EVM — so the merchant integrates once and never learns the differences between them. Customers pay in whatever they hold.",
      "Collection is supported in five global currencies, with FX handled server-side and settlement amounts derived from the session rather than recalculated on the client, which is where rounding and timing errors normally creep in. The business is paid out in its own currency.",
      "Around that sits the rest of a real payments product: hosted checkout, payment links, POS, an API with a sandbox simulator, split payments, subaccounts, and on-chain recurring billing through an upgradeable subscription contract. Settlement and webhook delivery run as queued background jobs so a slow chain never blocks a checkout, and the merchant dashboard streams status over server-sent events.",
      "Identity checks run in-house, including on-device liveness detection, rather than being outsourced to a third party that would not cover every market we operate in.",
    ]),
    outcomes: [
      { metric: "4", label: "Chain families behind one integration" },
      { metric: "5", label: "Collection currencies, auto-converted" },
      { metric: "Local", label: "Currency the business settles in" },
    ],
    stack: [
      "TypeScript", "Fastify", "PostgreSQL", "Drizzle", "BullMQ", "Redis",
      "Solana web3.js", "Stellar SDK", "bitcoinjs-lib", "Circle", "TensorFlow",
    ],
  },
  {
    _id: "seed-litscape",
    title: "LitScape: when a city erases its landmarks, the novels become the archive",
    slug: "litscape",
    coverPath: "/assets/covers/litscape.png",
    icon: "globe",
    featured: true,
    summary:
      "Bar Beach is buried under Eko Atlantic. Ilojo Bar was demolished despite being a listed monument. LitScape turns seventy years of Nigerian fiction into a map of the Lagos that no longer exists.",
    client: { name: "LitScape" },
    industry: { name: "Research & education", slug: "research-education" },
    capabilities: [
      { name: "Product engineering", slug: "product-engineering" },
      { name: "Data & infrastructure", slug: "data-infrastructure" },
      { name: "AI & automation", slug: "ai-automation" },
    ],
    challenge: pt([
      "Lagos keeps demolishing its own memory. Bar Beach is buried under Eko Atlantic. Ilojo Bar came down in 2016 despite being a listed national monument. What remains of those places is often nothing more than a paragraph in a novel.",
      "That archive is real but unusable. A researcher who wants to know how Lagosians described Bar Beach across seventy years has to read seventy years of novels and hold the answer in their head. The knowledge exists; it just cannot be asked a question.",
      "There was a harder problem underneath. Making this searchable at all means letting software read the corpus and propose connections — and the moment software proposes a literary claim, someone has to decide whether scholarship can stand on it.",
    ]),
    approach: pt([
      "We inverted the unit of analysis. Libraries organise by book; LitScape organises by place. Click Bar Beach and you get every novel that named it, oldest first, each with the passage and the page — a single location read across seven decades of writing.",
      "Automation does the reading, but it is never given the last word. Everything the pipeline proposes is marked unverified and shown as a candidate, visibly separate from a claim. Only the researcher can promote one, and that rule sits in the data model rather than in a review process, so an extraction error cannot quietly become a citation someone else builds on.",
      "Fiction rarely gives coordinates. Rather than dropping a confident pin and implying a precision the text never had, every place is drawn with its actual uncertainty — a tight circle where the novel is exact, a wide one where the reference is symbolic. The reader can see how firmly a place is known.",
      "The corpus is under copyright, so it never reaches the internet. Full texts stay on the researcher's machine; only short quotations for criticism and teaching are ever published.",
    ]),
    outcomes: [
      { metric: "Place", label: "The unit of analysis, not the book" },
      { metric: "1954–2024", label: "Seventy years readable in one view" },
      { metric: "0", label: "Machine claims published without review" },
    ],
    stack: [
      "Next.js", "TypeScript", "Tailwind", "Drizzle", "Neon Postgres",
      "MapLibre GL", "OpenStreetMap", "Python",
    ],
  },
{
    _id: "seed-kuvarsend",
    title: "KuvarSend: a self-custody wallet with local-currency payouts",
    slug: "kuvarsend",
    coverPath: "/assets/covers/kuvarsend.png",
    logoPath: "/assets/kuvarsend-mark.png",
    icon: "globe2",
    featured: true,
    summary:
      "A React Native app for cross-border transfer across Africa. Senders hold value themselves; recipients are paid out through local rails in the money they actually spend.",
    client: { name: "KuvarTech", isOwnProduct: true },
    industry: { name: "Fintech", slug: "fintech" },
    capabilities: [
      { name: "Product engineering", slug: "product-engineering" },
      { name: "Payments infrastructure", slug: "payments-infrastructure" },
      { name: "Blockchain & crypto", slug: "blockchain-crypto" },
    ],
    challenge: pt([
      "Sending money between African countries could cost more and take longer than sending it to London, and the person receiving it often had no idea what would arrive until it landed.",
      "The friction was never the transfer itself. It was fragmented local rails, an FX spread nobody could see, and custody arrangements that asked people to trust an intermediary with money they had already earned.",
    ]),
    approach: pt([
      "KuvarSend is a mobile app where the sender keeps custody of their own balance, connecting a wallet directly rather than depositing into ours. Value is held in a dollar-denominated form, which protects against local volatility until the moment they send.",
      "Payout runs over local rails in each market, so the recipient receives in their own currency through a channel they already use, with saved beneficiaries for repeat transfers and an express path for the ones people make every month.",
      "The app ships with the security work a wallet actually needs rather than the security work that demos well: jailbreak and root detection, biometric sign-in through Apple and Google, and push delivery for transfer state so nobody is left refreshing a screen.",
      "It runs on the same gateway as KuvarPay. That is not a marketing line — the transfer, beneficiary, notification and support endpoints live in the same service, so rails, compliance and FX built for one product are immediately available to the other.",
    ]),
    outcomes: [
      { metric: "5", label: "Markets with local payout" },
      { metric: "Minutes", label: "Typical settlement time" },
      { metric: "Self-custody", label: "Sender keeps their own keys" },
    ],
    stack: [
      "React Native", "TypeScript", "Reown AppKit", "WalletConnect", "ethers",
      "Firebase Cloud Messaging", "Notifee",
    ],
  },
];


/* ---- People ---- */


export const PEOPLE_SEED: Person[] = [
  { _id: "seed-person-1", name: "Aderemi Azeez", role: "Software Engineer", isLeadership: true, order: 1 },
  { _id: "seed-person-2", name: "Abdulazeez Jubril", role: "Business Analyst", isLeadership: true, order: 2 },
  { _id: "seed-person-3", name: "Abdulazeez Abdulhammed", role: "Data Engineer", isLeadership: true, order: 3 },
  { _id: "seed-person-4", name: "Alarape Yusuf", role: "Product Designer", isLeadership: true, order: 4 },
];


/* ---- Articles ---- */

/* Chosen on one rule: each is something only we can write, because it comes
 * from work we actually did. Generic trend pieces rank nowhere and prove
 * nothing. Drafts — final wording is phase 00. */

export const ARTICLES_SEED: Article[] = [
  {
    _id: "seed-article-local-currency",
    title: "Why we settle merchants in local currency, not crypto",
    slug: "settle-in-local-currency",
    coverPath: "/assets/covers/settle-in-local-currency.png",
    category: "engineering",
    excerpt:
      "A merchant who accepts crypto and gets paid in crypto has not been paid. They have been handed a position they did not ask for.",
    publishedAt: "2026-02-18T09:00:00.000Z",
    featured: true,
    author: { name: "KuvarTech" },
    body: pt([
      "There is a version of crypto payments that is easy to build and useless to run. The customer pays in USDT, the merchant receives USDT, and everyone declares the integration a success. Then the merchant tries to pay salaries.",
      "A business that accepts crypto and is settled in crypto has not been paid. It has been handed a position it did not ask for, in an asset it did not choose, with a treasury problem it is not staffed to solve. The payment only completes when the money is spendable.",
      "## The rate moves while the page is open",
      "The hard part is not the transfer. It is that the price is agreed at one moment and settled at another, and the gap between them is where every rounding error, timing bug and angry support ticket lives.",
      "Our rule is that the settlement amount is derived from the checkout session on the server, never recalculated on the client. A browser that recomputes the figure will disagree with the backend eventually — over a slow network, a stale tab, a retried request — and when it does, the merchant and the customer have two different truths about the same payment.",
      "## Conversion belongs to whoever can carry the risk",
      "Someone has to absorb the movement between the customer paying and the merchant settling. It should not be the merchant, because they cannot price it and cannot hedge it. Pushing that risk onto the smallest party in the transaction is not a neutral technical decision; it is a decision to make their business harder.",
      "So the gateway converts, and the business receives its own currency. Naira, Rwandan francs, whatever it banks in. The crypto is real, and it is entirely our problem.",
      "## What this costs us",
      "It is more work. It means running FX, an internal ledger, and payout rails per market rather than forwarding a token and calling it done. It means settlement runs as queued background work so a congested chain cannot hold a checkout open.",
      "That is the trade. The merchant gets a payment. We get the complexity. That division is the entire product.",
    ], "a1"),
  },
  {
    _id: "seed-article-machine-suggests",
    title: "When the machine is only allowed to suggest",
    slug: "when-the-machine-is-only-allowed-to-suggest",
    coverPath: "/assets/covers/when-the-machine-is-only-allowed-to-suggest.png",
    category: "engineering",
    excerpt:
      "We built a system where automated extraction can never become a published claim without a human promoting it — and the rule lives in the data model, not in a policy document.",
    publishedAt: "2026-03-06T09:00:00.000Z",
    featured: true,
    author: { name: "KuvarTech" },
    body: pt([
      "Most discussion of AI safety in software is about what a model should refuse to say. A more practical question, for the kind of systems most of us actually build, is narrower: what is the machine allowed to assert on its own?",
      "We had to answer it concretely on LitScape, a literary atlas that maps the places Nigerian novelists named across seventy years of writing. Automated extraction reads the corpus and proposes that a novel referenced a place. That proposal, published unchallenged, would be a scholarly claim — and a wrong one would be a citation someone else builds on.",
      "## Make the rule structural, not cultural",
      "The obvious approach is a review process: extract, then have someone check before publishing. That works until the day it is inconvenient, and processes that depend on nobody ever being in a hurry are not really controls.",
      "So the constraint went into the data model instead. Every machine-produced link is written as unverified and surfaces in the interface as a candidate, visibly distinct from a claim. Only the researcher can promote it. There is no code path where an extraction becomes a citation on its own — not a discouraged one, an absent one.",
      "## Draw the uncertainty",
      "The second rule was about honesty in presentation. Fiction rarely supplies coordinates. A novel says a character crossed the lagoon, not that they were at 6.45°N, 3.40°E.",
      "The tempting move is to place a neat pin and let the interface imply a precision the source never had. Instead every place carries a confidence level drawn as an actual circle on the map — 500 metres when the text is exact, two kilometres when the reference is symbolic. The reader sees how firmly a place is known, not just where it supposedly is.",
      "## Why this generalises",
      "Neither idea is specific to literature. Any system where automated output feeds something consequential — a credit decision, a compliance flag, a medical note — faces the same question, and usually answers it with a policy rather than a schema.",
      "A policy is a promise about behaviour. A data model is a constraint on it. When the stakes are someone else's work being wrong in public, the second is worth the extra afternoon.",
    ], "a2"),
  },
  {
    _id: "seed-article-build-or-buy",
    title: "Build or buy: how to tell which one you actually need",
    slug: "build-or-buy",
    coverPath: "/assets/covers/build-or-buy.png",
    category: "industry",
    excerpt:
      "The question is not which is cheaper. It is which parts of your business you are willing to let someone else define.",
    publishedAt: "2026-04-14T09:00:00.000Z",
    featured: false,
    author: { name: "KuvarTech" },
    body: pt([
      "Most build-or-buy conversations start with a price comparison and end badly. A subscription looks cheaper than an engineering team, so the business buys — and eighteen months later it is running four tools that do not talk to each other, paying per seat for all of them, and shaping its operations around what the software permits.",
      "The cost comparison is not wrong. It is just answering a smaller question than the one being asked.",
      "## Ask what the thing is to you",
      "The useful split is not cost. It is whether the capability is something your customers experience as you.",
      "Payroll is not. Nobody chooses a supplier because of how their payroll runs. Buy it, integrate it, forget it. But the thing your customer touches — how they check out, how their order is tracked, how a claim gets assessed — is a place where being identical to your competitors is a strategic cost, not a saving.",
      "If a capability is how you differ, and you buy it off the shelf, you have bought the same differentiation everyone else can buy.",
      "## The questions that actually decide it",
      "Would a competitor be able to tell what we do from the outside? If yes, that is a build candidate. If they could not care less, buy it.",
      "How often does this need to change? Tools are excellent at stable problems and painful at moving ones. If the process changes quarterly because the market does, configuration will run out before the change does.",
      "What happens when the vendor changes their mind? Pricing, roadmap, an acquisition. If a decision made in another company can break yours, you have taken on a risk that does not appear in the price.",
      "## Usually the answer is both",
      "In practice the right shape is rarely all of one. Buy the commodity layers, build the thin part that is genuinely yours, and spend the engineering budget on the seam between them — because the integration is where most of the value and nearly all of the pain lives.",
      "That is also the honest version of what a consultancy should tell you. If the answer is buy, the useful thing we can do is say so and help you wire it in properly.",
    ], "a3"),
  },
];
