import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Solutions",
  description:
    "A deep dive into KuvarPay and KuvarSend — the products built on Kuvar's pan-African financial infrastructure.",
};

const PAY_FEATURES = [
  { icon: "card", title: "Payment gateway", body: "Accept cards, bank transfers, USSD and mobile money through one integration with a single, predictable settlement.", d: 0 },
  { icon: "barChart", title: "Merchant tools", body: "Dashboards, payment links, invoicing, split payments and subscriptions — everything a business needs to get paid.", d: 80 },
  { icon: "network", title: "Agent network", body: "A distributed cash-in / cash-out network that reaches customers far beyond the banked, last-mile included.", d: 160 },
] as const;

const PAYOUTS = [
  { flag: "🇳🇬", cur: "NGN — Nigerian Naira", name: "Bank, wallet & cash pickup", time: "Minutes" },
  { flag: "🇬🇭", cur: "GHS — Ghanaian Cedi", name: "Mobile money & bank", time: "Minutes" },
  { flag: "🇰🇪", cur: "KES — Kenyan Shilling", name: "M-Pesa & bank", time: "Minutes" },
  { flag: "🇨🇮", cur: "XOF — West African CFA", name: "Mobile money & bank", time: "Same day" },
  { flag: "🇿🇦", cur: "ZAR — South African Rand", name: "Bank transfer", time: "Same day" },
];

const SEND_FEATURES = [
  { icon: "clock", title: "Settled in minutes", body: "Most payouts land in minutes through local rails — not the days legacy remittance takes.", d: 0 },
  { icon: "dollar", title: "USD-denominated wallet", body: "Hold a stable balance and protect value against local volatility until the moment you send.", d: 80 },
  { icon: "eye", title: "Transparent FX", body: "The rate you see is the rate you get. No spreads buried in the fine print.", d: 160 },
] as const;

const INFRA = [
  { n: "01", h: "Bank-grade security", p: "Encryption, monitoring and controls applied once, inherited everywhere." },
  { n: "02", h: "Built-in compliance", p: "KYC, AML and licensing handled at the rail layer, market by market." },
  { n: "03", h: "Shared liquidity", p: "One settlement network means deeper liquidity and better pricing." },
  { n: "04", h: "99.98% uptime", p: "Redundant, multi-region infrastructure engineered to stay on." },
];

export default function SolutionsPage() {
  return (
    <>
      {/* hero */}
      <header className="page-hero" data-screen-label="Solutions — Hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <span>Solutions</span></div>
          <span className="eyebrow" data-reveal>Our Solutions</span>
          <h1 className="h-display reveal-words" data-reveal-words style={{ marginTop: "18px", maxWidth: "14ch" }}>
            Products built on shared rails.
          </h1>
          <p className="lede" data-reveal style={{ "--reveal-delay": "140ms", marginTop: "24px" }}>
            Each Kuvar product solves a hard money problem in Africa. They run on one bank-grade
            infrastructure core — so reliability, compliance and reach compound with every launch.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }} data-reveal>
            <a className="btn btn-ghost" href="#kuvarpay">KuvarPay</a>
            <a className="btn btn-ghost" href="#kuvarsend">KuvarSend</a>
            <a className="btn btn-ghost" href="#platform">Developer Platform</a>
          </div>
        </div>
      </header>

      {/* KuvarPay */}
      <section className="prod" id="kuvarpay" data-screen-label="Solutions — KuvarPay">
        <div className="wrap">
          <div className="prod-head">
            <div>
              <div className="prod-badge-row">
                <span className="prod-mark">
                  <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                    <path d="M11 11 L20 20 L11 29" stroke="#CDF140" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 11 L30 20 L21 29" stroke="#CDF140" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h2 className="prod-name" data-reveal>Kuvar<span className="accent">Pay</span></h2>
              <p className="prod-tagline" data-reveal style={{ "--reveal-delay": "80ms" }}>
                Payment infrastructure that lets businesses accept crypto — on any chain or coin —
                from their customers and settle in their own local currency, with all the crypto
                complexity abstracted away. Collect through payment links, a web checkout or our API
                — and pay suppliers across our markets in their local currencies too.
              </p>
              <a className="btn btn-primary" href="https://kuvarpay.com/" target="_blank" rel="noopener noreferrer" data-reveal style={{ "--reveal-delay": "140ms" }}>
                Get Started
                <ArrowRight size={17} />
              </a>
            </div>
            <div className="prod-visual pay" data-reveal style={{ "--reveal-delay": "120ms" }}>
              <div className="gw-card tilt">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "16px" }}>Checkout</span>
                  <span className="gw-chip">Secured by KuvarPay</span>
                </div>
                <div className="gw-row"><span className="gw-label">Pay to</span><span style={{ fontWeight: 600 }}>Acme Stores</span></div>
                <div className="gw-row"><span className="gw-label">Amount due</span><span className="gw-amt">₦64,500</span></div>
                <div style={{ padding: "14px 0", borderBottom: "1px solid #262626" }}>
                  <div className="gw-label" style={{ marginBottom: "10px", fontSize: "13px" }}>Pay with crypto — any coin, any chain</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {["USDT", "USDC", "BTC", "ETH"].map((c) => (
                      <span key={c} style={{ border: "1px solid #2f2f2f", borderRadius: "8px", padding: "6px 10px", fontSize: "12px", fontWeight: 600 }}>{c}</span>
                    ))}
                    <span style={{ border: "1px solid #2f2f2f", borderRadius: "8px", padding: "6px 10px", fontSize: "12px", fontWeight: 600, color: "#9CA3AF" }}>+ more</span>
                  </div>
                </div>
                <div className="gw-btn">Pay with crypto</div>
                <div style={{ textAlign: "center", marginTop: "12px", color: "#9CA3AF", fontSize: "11.5px" }}>
                  Acme is settled in NGN — crypto complexity handled for them
                </div>
              </div>
            </div>
          </div>

          <div className="feat-grid">
            {PAY_FEATURES.map((f) => (
              <div className="card feat" key={f.title} data-reveal style={{ "--reveal-delay": `${f.d}ms` }}>
                <span className="feat-icon"><Icon name={f.icon} size={22} sw={2} /></span>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KuvarSend */}
      <section className="prod" id="kuvarsend" data-screen-label="Solutions — KuvarSend">
        <div className="wrap">
          <div className="prod-head">
            <div className="prod-visual send" data-reveal style={{ "--reveal-delay": "120ms" }}>
              <img className="app-shot light" src="/assets/kuvarsend-app-light.png" alt="KuvarSend app" />
              <img className="app-shot dark" src="/assets/kuvarsend-app-dark.png" alt="KuvarSend app" />
            </div>
            <div>
              <div className="prod-badge-row">
                <span className="prod-mark"><img src="/assets/kuvarsend-mark.png" alt="KuvarSend" /></span>
                <span className="tag-pill"><span className="dot"></span> Closed beta · Invite only</span>
              </div>
              <h2 className="prod-name" data-reveal>Kuvar<span className="accent">Send</span></h2>
              <p className="prod-tagline" data-reveal style={{ "--reveal-delay": "80ms" }}>
                Cross-border money transfer across Africa. Hold value in a USD-denominated wallet and
                pay out to recipients in their local currency — fast, transparent and borderless.
              </p>
              <a className="btn btn-primary" href="#" data-reveal style={{ "--reveal-delay": "140ms" }}>
                Join the waitlist
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: "52px", alignItems: "start" }}>
            <div>
              <span className="eyebrow" data-reveal>Pay out locally</span>
              <h3 className="h-section" data-reveal style={{ "--reveal-delay": "80ms", marginTop: "16px", fontSize: "clamp(26px,3vw,40px)" }}>
                One wallet. Every local currency.
              </h3>
              <p className="lede" data-reveal style={{ "--reveal-delay": "140ms", marginTop: "16px" }}>
                Senders keep a stable USD balance. Recipients receive in the money they actually
                spend — no guesswork, no hidden FX.
              </p>
            </div>
            <div className="payout-list" data-reveal style={{ "--reveal-delay": "120ms" }}>
              {PAYOUTS.map((p) => (
                <div className="payout" key={p.cur}>
                  <span className="flag">{p.flag}</span>
                  <div className="py-info"><div className="py-cur">{p.cur}</div><div className="py-name">{p.name}</div></div>
                  <span className="py-time">{p.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="feat-grid">
            {SEND_FEATURES.map((f) => (
              <div className="card feat" key={f.title} data-reveal style={{ "--reveal-delay": `${f.d}ms` }}>
                <span className="feat-icon"><Icon name={f.icon} size={22} sw={2} /></span>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer platform */}
      <section className="prod" id="platform" data-screen-label="Solutions — Platform">
        <div className="wrap">
          <div className="prod-head">
            <div>
              <div className="prod-badge-row">
                <span className="prod-mark" style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>
              </div>
              <h2 className="prod-name" data-reveal>Developer Platform</h2>
              <p className="prod-tagline" data-reveal style={{ "--reveal-delay": "80ms" }}>
                The same rails our own products run on, exposed as one clean API. Payments, payouts,
                wallets and compliance — for any builder in Africa.
              </p>
              <a className="btn btn-primary" href="https://developers.kuvarpay.com/" target="_blank" rel="noopener noreferrer" data-reveal style={{ "--reveal-delay": "140ms" }}>
                Read the docs
                <ArrowRight size={17} />
              </a>
            </div>
            <div className="prod-visual pay" data-reveal style={{ "--reveal-delay": "120ms" }}>
              <div className="gw-card tilt" style={{ fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: "12.5px", lineHeight: 1.7 }}>
                <div style={{ color: "#9CA3AF" }}>// one call, every rail</div>
                <div><span style={{ color: "var(--accent)" }}>const</span> payout = <span style={{ color: "var(--accent)" }}>await</span> kuvar.payouts.create({"{"}</div>
                <div style={{ paddingLeft: "16px" }}>amount: <span style={{ color: "#CDF140" }}>250</span>,</div>
                <div style={{ paddingLeft: "16px" }}>currency: <span style={{ color: "#CDF140" }}>&quot;KES&quot;</span>,</div>
                <div style={{ paddingLeft: "16px" }}>channel: <span style={{ color: "#CDF140" }}>&quot;mpesa&quot;</span>,</div>
                <div style={{ paddingLeft: "16px" }}>recipient: account_id</div>
                <div>{"}"});</div>
                <div style={{ marginTop: "10px", color: "#9CA3AF" }}>→ settled in <span style={{ color: "var(--accent)" }}>42s</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared infrastructure */}
      <section className="section" data-screen-label="Solutions — Infrastructure">
        <div className="wrap">
          <div className="infra-band" data-reveal>
            <div style={{ maxWidth: "640px" }}>
              <span className="eyebrow">One core, many products</span>
              <h2 className="h-section" style={{ marginTop: "16px" }}>Why everything runs on the same rails.</h2>
            </div>
            <div className="infra-grid">
              {INFRA.map((i) => (
                <div className="infra-item" key={i.n}>
                  <div className="ii-num">{i.n}</div>
                  <h4>{i.h}</h4>
                  <p>{i.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight" style={{ paddingBottom: "96px" }} data-screen-label="Solutions — CTA">
        <div className="wrap" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="h-section reveal-words" data-reveal-words>Build on the rails moving Africa.</h2>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", marginTop: "28px", flexWrap: "wrap" }} data-reveal>
            <Link className="btn btn-primary btn-lg" href="/contact">
              Get in touch
              <ArrowRight size={17} />
            </Link>
            <Link className="btn btn-ghost btn-lg" href="/about">About Kuvar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
