import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";
import {
  breadcrumb, btn, card, hDisplay, hSection, lede, pageHero, section, sectionTight, wrap, wrapBase,
} from "@/components/styles";

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

const PROD = "scroll-mt-[100px] border-t border-line py-[88px]";
const PROD_HEAD = "grid grid-cols-1 items-center gap-10 w921:grid-cols-2 w921:gap-14";
const PROD_BADGE_ROW = "mb-6 flex items-center gap-3.5";
const PROD_MARK = "grid size-[60px] place-items-center rounded-brand-md bg-ink";
const PROD_NAME = "mb-[18px] font-display text-[clamp(40px,5vw,68px)] font-black leading-none tracking-[-0.045em]";
const PROD_TAGLINE = "mb-7 max-w-[520px] text-[clamp(18px,1.6vw,22px)] text-ink-2 text-pretty";
const PROD_VISUAL = "relative grid min-h-[380px] place-items-center overflow-hidden rounded-brand p-10";
const VISUAL_DARK = `${PROD_VISUAL} bg-[linear-gradient(150deg,#0A0A0A,#161616)]`;
const FEAT_GRID = "mt-13 grid grid-cols-1 gap-5 w881:grid-cols-3";
const GW_CARD = "w-full max-w-[340px] rounded-brand border border-[#262626] bg-[#141414] p-6 text-[#FAFAF7]";
const GW_ROW = "flex items-center justify-between border-b border-[#262626] py-3 text-[14px] last:border-b-0";
const GW_LABEL = "text-[#9CA3AF]";

function Feature({ f }: { f: { icon: string; title: string; body: string; d: number } }) {
  return (
    <div className={`${card} p-7`} data-reveal style={{ "--reveal-delay": `${f.d}ms` }}>
      <span className="mb-5 grid size-11 place-items-center rounded-brand-md bg-accent text-accent-ink">
        <Icon name={f.icon as Parameters<typeof Icon>[0]["name"]} size={22} sw={2} />
      </span>
      <h4 className="mb-2.5 font-display text-[19px] font-bold tracking-[-0.02em]">{f.title}</h4>
      <p className="text-[14.5px] text-ink-2">{f.body}</p>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      {/* hero */}
      <header className={pageHero} data-screen-label="Solutions — Hero">
        <div className={wrap}>
          <div className={breadcrumb}><Link href="/" className="hover:text-ink">Home</Link> <span>/</span> <span>Solutions</span></div>
          <span className="eyebrow" data-reveal>Our Solutions</span>
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[14ch]`} data-reveal-words>
            Products built on shared rails.
          </h1>
          <p className={`${lede} mt-6 [--reveal-delay:140ms]`} data-reveal>
            Each Kuvar product solves a hard money problem in Africa. They run on one bank-grade
            infrastructure core — so reliability, compliance and reach compound with every launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5" data-reveal>
            <a className={btn("ghost")} href="#kuvarpay">KuvarPay</a>
            <a className={btn("ghost")} href="#kuvarsend">KuvarSend</a>
            <a className={btn("ghost")} href="#platform">Developer Platform</a>
          </div>
        </div>
      </header>

      {/* KuvarPay */}
      <section className={PROD} id="kuvarpay" data-screen-label="Solutions — KuvarPay">
        <div className={wrap}>
          <div className={PROD_HEAD}>
            <div>
              <div className={PROD_BADGE_ROW}>
                <span className={PROD_MARK}>
                  <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                    <path d="M11 11 L20 20 L11 29" stroke="#CDF140" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 11 L30 20 L21 29" stroke="#CDF140" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h2 className={PROD_NAME} data-reveal>Kuvar<span className="text-accent-deep">Pay</span></h2>
              <p className={`${PROD_TAGLINE} [--reveal-delay:80ms]`} data-reveal>
                Payment infrastructure that lets businesses accept crypto — on any chain or coin —
                from their customers and settle in their own local currency, with all the crypto
                complexity abstracted away. Collect through payment links, a web checkout or our API
                — and pay suppliers across our markets in their local currencies too.
              </p>
              <a className={`${btn("primary")} [--reveal-delay:140ms]`} href="https://kuvarpay.com/" target="_blank" rel="noopener noreferrer" data-reveal>
                Get Started
                <ArrowRight size={17} />
              </a>
            </div>
            <div className={`${VISUAL_DARK} [--reveal-delay:120ms]`} data-reveal>
              <div className={`${GW_CARD} tilt`}>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-[16px] font-extrabold">Checkout</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(205,241,64,0.14)] px-2.5 py-[5px] text-[11.5px] font-semibold text-accent">
                    Secured by KuvarPay
                  </span>
                </div>
                <div className={GW_ROW}><span className={GW_LABEL}>Pay to</span><span className="font-semibold">Acme Stores</span></div>
                <div className={GW_ROW}>
                  <span className={GW_LABEL}>Amount due</span>
                  <span className="font-display text-[30px] font-extrabold tracking-[-0.03em]">₦64,500</span>
                </div>
                <div className="border-b border-[#262626] py-3.5">
                  <div className={`${GW_LABEL} mb-2.5 text-[13px]`}>Pay with crypto — any coin, any chain</div>
                  <div className="flex flex-wrap gap-2">
                    {["USDT", "USDC", "BTC", "ETH"].map((c) => (
                      <span key={c} className="rounded-lg border border-[#2f2f2f] px-2.5 py-1.5 text-[12px] font-semibold">{c}</span>
                    ))}
                    <span className="rounded-lg border border-[#2f2f2f] px-2.5 py-1.5 text-[12px] font-semibold text-[#9CA3AF]">+ more</span>
                  </div>
                </div>
                <div className="mt-[18px] w-full rounded-brand-md bg-accent p-3.5 text-center font-body font-bold text-[#0A0A0A]">Pay with crypto</div>
                <div className="mt-3 text-center text-[11.5px] text-[#9CA3AF]">
                  Acme is settled in NGN — crypto complexity handled for them
                </div>
              </div>
            </div>
          </div>

          <div className={FEAT_GRID}>
            {PAY_FEATURES.map((f) => <Feature f={f} key={f.title} />)}
          </div>
        </div>
      </section>

      {/* KuvarSend */}
      <section className={PROD} id="kuvarsend" data-screen-label="Solutions — KuvarSend">
        <div className={wrap}>
          <div className={PROD_HEAD}>
            <div className={`${PROD_VISUAL} border border-line bg-surface-2 [--reveal-delay:120ms]`} data-reveal>
              <img className="block max-h-[420px] max-w-full rounded-brand-md shadow-brand-lg dark:hidden" src="/assets/kuvarsend-app-light.png" alt="KuvarSend app" />
              <img className="hidden max-h-[420px] max-w-full rounded-brand-md shadow-brand-lg dark:block" src="/assets/kuvarsend-app-dark.png" alt="KuvarSend app" />
            </div>
            <div>
              <div className={PROD_BADGE_ROW}>
                <span className={PROD_MARK}><img src="/assets/kuvarsend-mark.png" alt="KuvarSend" className="size-[38px] object-contain" /></span>
                <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-card px-3.5 py-[7px] text-[13px] font-medium text-ink-2">
                  <span className="pill-dot"></span> Closed beta · Invite only
                </span>
              </div>
              <h2 className={PROD_NAME} data-reveal>Kuvar<span className="text-accent-deep">Send</span></h2>
              <p className={`${PROD_TAGLINE} [--reveal-delay:80ms]`} data-reveal>
                Cross-border money transfer across Africa. Hold value in a USD-denominated wallet and
                pay out to recipients in their local currency — fast, transparent and borderless.
              </p>
              <a className={`${btn("primary")} [--reveal-delay:140ms]`} href="#" data-reveal>
                Join the waitlist
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="mt-13 grid grid-cols-1 items-start gap-10 w881:grid-cols-2 w881:gap-14">
            <div>
              <span className="eyebrow" data-reveal>Pay out locally</span>
              {/* Written out rather than composed from hSection: this heading takes a
                  smaller clamp, and two font-size utilities would resolve by source order. */}
              <h3
                className="m-0 mt-4 font-display text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-balance [--reveal-delay:80ms]"
                data-reveal
              >
                One wallet. Every local currency.
              </h3>
              <p className={`${lede} mt-4 [--reveal-delay:140ms]`} data-reveal>
                Senders keep a stable USD balance. Recipients receive in the money they actually
                spend — no guesswork, no hidden FX.
              </p>
            </div>
            <div className="flex w-full max-w-[360px] flex-col gap-2.5 [--reveal-delay:120ms]" data-reveal>
              {PAYOUTS.map((p) => (
                <div className="flex items-center gap-3.5 rounded-brand-md border border-line bg-card px-4 py-3.5" key={p.cur}>
                  <span className="text-[24px]">{p.flag}</span>
                  <div className="flex-1">
                    <div className="font-display text-[15px] font-bold">{p.cur}</div>
                    <div className="text-[12.5px] text-ink-3">{p.name}</div>
                  </div>
                  <span className="text-[12px] font-semibold text-accent-deep">{p.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={FEAT_GRID}>
            {SEND_FEATURES.map((f) => <Feature f={f} key={f.title} />)}
          </div>
        </div>
      </section>

      {/* Developer platform */}
      <section className={PROD} id="platform" data-screen-label="Solutions — Platform">
        <div className={wrap}>
          <div className={PROD_HEAD}>
            <div>
              <div className={PROD_BADGE_ROW}>
                <span className="grid size-[60px] place-items-center rounded-brand-md border border-line bg-surface-2">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>
              </div>
              <h2 className={PROD_NAME} data-reveal>Developer Platform</h2>
              <p className={`${PROD_TAGLINE} [--reveal-delay:80ms]`} data-reveal>
                The same rails our own products run on, exposed as one clean API. Payments, payouts,
                wallets and compliance — for any builder in Africa.
              </p>
              <a className={`${btn("primary")} [--reveal-delay:140ms]`} href="https://developers.kuvarpay.com/" target="_blank" rel="noopener noreferrer" data-reveal>
                Read the docs
                <ArrowRight size={17} />
              </a>
            </div>
            <div className={`${VISUAL_DARK} [--reveal-delay:120ms]`} data-reveal>
              <div className={`${GW_CARD} tilt font-mono text-[12.5px] leading-[1.7]`}>
                <div className="text-[#9CA3AF]">{"// one call, every rail"}</div>
                <div><span className="text-accent">const</span> payout = <span className="text-accent">await</span> kuvar.payouts.create({"{"}</div>
                <div className="pl-4">amount: <span className="text-[#CDF140]">250</span>,</div>
                <div className="pl-4">currency: <span className="text-[#CDF140]">&quot;KES&quot;</span>,</div>
                <div className="pl-4">channel: <span className="text-[#CDF140]">&quot;mpesa&quot;</span>,</div>
                <div className="pl-4">recipient: account_id</div>
                <div>{"}"});</div>
                <div className="mt-2.5 text-[#9CA3AF]">→ settled in <span className="text-accent">42s</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared infrastructure */}
      <section className={section} data-screen-label="Solutions — Infrastructure">
        <div className={wrap}>
          <div className="rounded-brand bg-band px-14 py-16 text-band-ink" data-reveal>
            <div className="max-w-[640px]">
              <span className="eyebrow is-accent">One core, many products</span>
              <h2 className={`${hSection} mt-4 text-band-ink`}>Why everything runs on the same rails.</h2>
            </div>
            <div className="mt-11 grid grid-cols-2 gap-7 w881:grid-cols-4">
              {INFRA.map((i) => (
                <div key={i.n}>
                  <div className="mb-3 font-display text-[15px] font-extrabold text-accent">{i.n}</div>
                  <h4 className="mb-2 font-display text-[19px] font-bold tracking-[-0.02em] text-band-ink">{i.h}</h4>
                  <p className="text-[14px] text-band-ink-3">{i.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${sectionTight} pb-24`} data-screen-label="Solutions — CTA">
        <div className={`${wrapBase} max-w-[760px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>Build on the rails moving Africa.</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
            <Link className={btn("primary", "lg")} href="/contact">
              Get in touch
              <ArrowRight size={17} />
            </Link>
            <Link className={btn("ghost", "lg")} href="/about">About Kuvar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
