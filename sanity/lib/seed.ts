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
    title: "KuvarPay: accept crypto on any chain, settle in local currency",
    slug: "kuvarpay",
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
    _id: "seed-kuvarsend",
    title: "KuvarSend: a self-custody wallet with local-currency payouts",
    slug: "kuvarsend",
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
