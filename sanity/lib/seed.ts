import type { Service } from "./types";

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
