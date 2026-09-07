import type { CaseStudy, Service } from "./types";

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
function pt(paragraphs: string[]) {
  return paragraphs.map((text, i) => ({
    _type: "block" as const,
    _key: `seed-${i}`,
    style: "normal" as const,
    markDefs: [],
    children: [{ _type: "span" as const, _key: `seed-${i}-0`, text, marks: [] }],
  }));
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
    title: "KuvarPay: accept crypto, settle in local currency",
    slug: "kuvarpay",
    icon: "card",
    featured: true,
    summary:
      "Payment infrastructure that lets businesses take crypto on any chain or coin, and settle in the currency they actually bank in.",
    client: { name: "KuvarTech", isOwnProduct: true },
    industry: { name: "Fintech", slug: "fintech" },
    capabilities: [
      { name: "Payments infrastructure", slug: "payments-infrastructure" },
      { name: "Data & infrastructure", slug: "data-infrastructure" },
    ],
    challenge: pt([
      "A business that wants to accept crypto inherits every hard part of it: which chains to support, which coins, how to price against volatility, and how to end up with money it can actually spend.",
      "Most merchants are not equipped to run that, and the ones who try end up holding assets they never wanted.",
    ]),
    approach: pt([
      "We built the gateway so the merchant never touches the complexity. Customers pay in whatever coin they hold; the merchant is settled in their local currency.",
      "Collection runs through payment links, a hosted checkout or the API, so it drops into an existing storefront without a rebuild. The same rails handle supplier payouts across our markets.",
    ]),
    outcomes: [
      { metric: "Any chain", label: "Coins and networks accepted" },
      { metric: "Local", label: "Currency the merchant settles in" },
      { metric: "99.98%", label: "Rail uptime" },
    ],
    stack: ["TypeScript", "Next.js", "PostgreSQL", "pgBouncer", "Redis"],
  },
  {
    _id: "seed-kuvarsend",
    title: "KuvarSend: USD wallets with local-currency payouts",
    slug: "kuvarsend",
    icon: "globe2",
    featured: true,
    summary:
      "Cross-border transfer across Africa. Senders hold a stable USD balance; recipients are paid in the money they actually spend.",
    client: { name: "KuvarTech", isOwnProduct: true },
    industry: { name: "Fintech", slug: "fintech" },
    capabilities: [
      { name: "Payments infrastructure", slug: "payments-infrastructure" },
      { name: "Product engineering", slug: "product-engineering" },
    ],
    challenge: pt([
      "Sending money between African countries could cost more and take longer than sending it to London, and the person receiving it often had no idea what would arrive until it landed.",
      "The friction was never the transfer itself. It was fragmented local rails and an FX spread nobody could see.",
    ]),
    approach: pt([
      "Senders hold value in a USD-denominated wallet, which protects against local volatility until the moment they send.",
      "Payouts run over local rails in each market, so recipients receive in their own currency through the channel they already use. The rate shown is the rate applied.",
    ]),
    outcomes: [
      { metric: "5", label: "Markets with local payout" },
      { metric: "Minutes", label: "Typical settlement time" },
      { metric: "USD", label: "Denominated sender balance" },
    ],
    stack: ["TypeScript", "React Native", "PostgreSQL", "Node.js"],
  },
];
