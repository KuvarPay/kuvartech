import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";
import {
  arrowLink, btn, card, cardHover, hSection, lede, section, sectionTight, wrap,
  stat, statDividerOnAccent, statGrid, statLabelOnAccent, statNumOnAccent,
  teamInfo, teamInitials, teamName, teamPhoto, teamRole,
  valueBody, valueCell, valueGrid, valueIcon, valueTitle,
  pressBody, pressExcerpt, pressMeta, pressTag, pressThumb, pressTitle,
} from "@/components/styles";

const VALUES = [
  { icon: "shield", title: "Trust is the product", body: "We hold other people's money. Security, compliance and uptime are not features — they are the foundation everything else stands on.", d: 0 },
  { icon: "globe", title: "Built for the continent", body: "Pan-African by default. We design for every currency, regulator and corridor — not just the easy ones.", d: 80 },
  { icon: "bolt", title: "Move with speed", body: "Markets shift fast here. We ship, learn and harden quickly — without ever cutting corners on safety.", d: 160 },
  { icon: "grid", title: "Infrastructure thinking", body: "We build rails, not silos. Every product shares the same core so the whole gets stronger with each launch.", d: 0 },
  { icon: "users", title: "Customers, not users", body: "Behind every transaction is a business making payroll or a family being supported. We never forget who we serve.", d: 80 },
  { icon: "scale", title: "Open by design", body: "The best financial system is one others can build on. We expose our rails so the whole ecosystem can grow.", d: 160 },
] as const;

const TEAM = [
  { initials: "AO", name: "Adaeze Okafor", role: "Co-founder & CEO", d: 0 },
  { initials: "KM", name: "Kwame Mensah", role: "Co-founder & CTO", d: 80 },
  { initials: "FN", name: "Fatima Ndiaye", role: "Chief Compliance Officer", d: 160 },
  { initials: "DM", name: "David Mwangi", role: "VP, Engineering", d: 240 },
];

const PARTNERS = [
  "Meridian Bank", "PayStack Rails", "MobileMoney Co.", "Sahel Capital", "Zenith Switch",
  "Atlas Telco", "Kora Networks", "Nile Ventures", "FirstGate", "Lagos FinHub",
];

const IMPACT = [
  { to: "14", suffix: "+", label: "Countries on our rails" },
  { to: "38000", suffix: "+", label: "Merchants & agents" },
  { to: "12.4", suffix: "M", prefix: "$", decimals: "1", label: "Processed monthly" },
  { to: "5", suffix: "M+", label: "Transactions to date" },
];

const NEWS = [
  { icon: "newspaper", tag: "Announcement", date: "· May 2026", title: "Kuvar Technologies raises to expand its pan-African payment rails", excerpt: "New capital will accelerate corridor coverage and the launch of the Kuvar Developer Platform.", d: 0 },
  { icon: "globe2", tag: "Product", date: "· Apr 2026", title: "KuvarSend opens its USD wallet to five new African markets", excerpt: "Recipients can now cash out in NGN, GHS, KES, XOF and ZAR within minutes.", d: 100 },
  { icon: "star", tag: "Recognition", date: "· Mar 2026", title: "Named among Africa's most promising fintech infrastructure firms", excerpt: "Kuvar recognised for reliability and breadth of its cross-border settlement network.", d: 200 },
] as const;

const ROUTES = [
  { href: "/contact#partnerships", name: "Partnerships", desc: "Banks, telcos & infrastructure providers" },
  { href: "/contact#press", name: "Press & media", desc: "Interviews, brand assets & statements" },
  { href: "/contact#investors", name: "Investor relations", desc: "For current & prospective investors" },
  { href: "/contact#support", name: "Product support", desc: "Help with KuvarPay or KuvarSend" },
];

const PC_TAG = "rounded-pill bg-surface-2 px-[11px] py-[5px] font-body text-[12.5px] font-medium text-ink-3";
const PC_NAME = "font-display text-[30px] font-extrabold tracking-[-0.03em]";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="relative overflow-clip pt-14 pb-[88px]" data-screen-label="Home — Hero">
        <div className={`${wrap} grid grid-cols-1 items-center gap-12 w981:grid-cols-[1.05fr_0.95fr] w981:gap-14`}>
          <div>
            <a
              className="inline-flex items-center gap-2 rounded-pill border border-line bg-card px-3.5 py-[7px] text-[13px] font-medium text-ink-2"
              href="https://developers.kuvarpay.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
            >
              <span className="pill-dot"></span> New — the Kuvar Developer Platform is now live
            </a>
            <h1 className="reveal-words mt-[26px] mb-6 font-display text-[clamp(46px,6.6vw,96px)] font-black leading-[0.97] tracking-[-0.05em] text-balance" data-reveal-words>
              The financial infrastructure layer for Africa.
            </h1>
            <p className="mb-9 max-w-[540px] text-[clamp(17px,1.3vw,20px)] text-ink-2 text-pretty [--reveal-delay:120ms]" data-reveal>
              Kuvar Technologies builds the rails that move money across borders, power merchants,
              and connect African commerce to the world — one trusted product at a time.
            </p>
            <div className="mb-11 flex flex-wrap gap-3.5 [--reveal-delay:200ms]" data-reveal>
              <Link className={btn("primary", "lg")} href="/solutions">
                Explore Solutions
                <ArrowRight size={17} />
              </Link>
              <Link className={btn("ghost", "lg")} href="/about">
                Our Story
              </Link>
            </div>
            <div className="flex max-w-[560px] flex-wrap items-center gap-[30px] border-t border-line pt-7 [--reveal-delay:280ms]" data-reveal>
              <div className="flex flex-col gap-[3px]">
                <span className="font-display text-[26px] font-extrabold tracking-[-0.03em]">5+</span>
                <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-ink-3">Countries</span>
              </div>
              <span className="h-[34px] w-px bg-line-2"></span>
              <div className="flex flex-col gap-[3px]">
                <span className="font-display text-[26px] font-extrabold tracking-[-0.03em]">2</span>
                <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-ink-3">Public products</span>
              </div>
              <span className="h-[34px] w-px bg-line-2"></span>
              <div className="flex flex-col gap-[3px]">
                <span className="font-display text-[26px] font-extrabold tracking-[-0.03em]">99.98%</span>
                <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-ink-3">Rail uptime</span>
              </div>
            </div>
          </div>

          {/* The currency network keeps its CSS: absolute node placement plus
              four keyframe animations. */}
          <div className="[--reveal-delay:160ms]" data-reveal>
            <div className="hero-stage">
              <div className="morph"></div>
              <svg className="net-svg" viewBox="0 0 460 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <g>
                  <path className="net-line" d="M230 230 L230 32" />
                  <path className="net-line" d="M230 230 L419 152" />
                  <path className="net-line" d="M230 230 L368 400" />
                  <path className="net-line" d="M230 230 L92 400" />
                  <path className="net-line" d="M230 230 L41 152" />
                </g>
                <g>
                  <path className="net-pulse" d="M230 230 L230 32" />
                  <path className="net-pulse" d="M230 230 L419 152" style={{ animationDelay: ".6s" }} />
                  <path className="net-pulse" d="M230 230 L368 400" style={{ animationDelay: "1.2s" }} />
                  <path className="net-pulse" d="M230 230 L92 400" style={{ animationDelay: "1.8s" }} />
                  <path className="net-pulse" d="M230 230 L41 152" style={{ animationDelay: "2.4s" }} />
                </g>
              </svg>
              <div className="node node-core n-core">
                <span className="core-amt">USD</span>
                <span className="core-lbl">Wallet</span>
              </div>
              <div className="node n-ngn"><span className="flag">🇳🇬</span> NGN <span className="cur">Naira</span></div>
              <div className="node n-kes"><span className="flag">🇰🇪</span> KES <span className="cur">Shilling</span></div>
              <div className="node n-zar"><span className="flag">🇿🇦</span> ZAR <span className="cur">Rand</span></div>
              <div className="node n-ghs"><span className="flag">🇬🇭</span> GHS <span className="cur">Cedi</span></div>
              <div className="node n-xof"><span className="flag">🇺🇬</span> UGX <span className="cur">Shilling</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* Solutions */}
      <section className={section} id="solutions" data-screen-label="Home — Solutions">
        <div className={wrap}>
          <div className="mb-12 max-w-[720px]">
            <span className="eyebrow" data-reveal>Our Solutions</span>
            <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
              Two products. One infrastructure.
            </h2>
            <p className={`${lede} mt-[18px] [--reveal-delay:120ms]`} data-reveal>
              Each Kuvar product solves a hard money problem in Africa — built on shared, bank-grade
              rails so they work together by design.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[22px] w881:grid-cols-2">
            {/* KuvarPay */}
            <Link className={`${card} tilt group relative flex min-h-[340px] flex-col gap-6 overflow-hidden p-9`} href="/solutions#kuvarpay" data-reveal style={{ "--reveal-delay": "0ms" }}>
              <span className="pointer-events-none absolute -top-[120px] -right-[120px] size-[360px] rounded-full bg-accent opacity-10 blur-[70px] transition-opacity duration-300 group-hover:opacity-[0.18]"></span>
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-[52px] shrink-0 place-items-center rounded-brand-md bg-ink">
                  <img src="/assets/kuvarpay-mark.svg" alt="KuvarPay" className="size-[34px] object-contain" />
                </span>
                <span className="rounded-pill border border-line px-[11px] py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-3">Live</span>
              </div>
              <div>
                <h3 className={PC_NAME}>Kuvar<span className="text-accent-deep">Pay</span></h3>
                <p className="flex-1 text-[16px] text-ink-2">Full payments infrastructure — a payment gateway, merchant tools, and an agent network spanning Africa.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={PC_TAG}>Payment gateway</span>
                <span className={PC_TAG}>Merchant tools</span>
                <span className={PC_TAG}>Agent network</span>
              </div>
              <div className="flex items-center justify-between border-t border-line pt-[22px]">
                <span className="text-[13.5px] text-ink-3">Accept &amp; move money, anywhere</span>
                <span className={arrowLink}>Visit <ArrowRight size={16} /></span>
              </div>
            </Link>

            {/* KuvarSend */}
            <Link className={`${card} tilt group relative flex min-h-[340px] flex-col gap-6 overflow-hidden p-9`} href="/solutions#kuvarsend" data-reveal style={{ "--reveal-delay": "100ms" }}>
              <span className="pointer-events-none absolute -top-[120px] -right-[120px] size-[360px] rounded-full bg-accent opacity-10 blur-[70px] transition-opacity duration-300 group-hover:opacity-[0.18]"></span>
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-[52px] shrink-0 place-items-center rounded-brand-md bg-ink">
                  <img src="/assets/kuvarsend-mark.png" alt="KuvarSend" className="size-[34px] object-contain" />
                </span>
                <span className="rounded-pill border border-line px-[11px] py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-3">Launching soon</span>
              </div>
              <div>
                <h3 className={PC_NAME}>Kuvar<span className="text-accent-deep">Send</span></h3>
                <p className="flex-1 text-[16px] text-ink-2">Cross-border money transfer across Africa. Hold a USD-denominated wallet, pay out in local currencies.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={PC_TAG}>USD wallet</span>
                <span className={PC_TAG}>NGN · GHS · KES</span>
                <span className={PC_TAG}>UGX · ZAR</span>
              </div>
              <div className="flex items-center justify-between border-t border-line pt-[22px]">
                <span className="text-[13.5px] text-ink-3">The borderless way to send</span>
                <span className={arrowLink}>Visit <ArrowRight size={16} /></span>
              </div>
            </Link>

            {/* Platform teaser */}
            <div className={`${card} col-span-full flex flex-wrap items-center justify-between gap-7 px-9 py-[30px]`} data-reveal style={{ "--reveal-delay": "200ms" }}>
              <div className="flex items-center gap-5">
                <span className="grid size-[50px] place-items-center rounded-brand-md border border-line bg-surface-2 text-ink-2">
                  <Icon name="chevrons" size={24} sw={1.8} />
                </span>
                <div>
                  <h3 className="mb-1 font-display text-[21px] font-bold tracking-[-0.02em]">
                    Kuvar Developer Platform{" "}
                    <span className="text-[12px] font-semibold tracking-[0.06em] text-accent-deep">· LIVE</span>
                  </h3>
                  <p className="text-[14.5px] text-ink-3">
                    One API for payments, payouts and wallets — the same rails our own products run on.
                  </p>
                </div>
              </div>
              <a className={arrowLink} href="https://developers.kuvarpay.com/" target="_blank" rel="noopener noreferrer">
                View developer docs <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={`${section} bg-surface-2`} id="story" data-screen-label="Home — Story">
        <div className={`${wrap} grid grid-cols-1 items-start gap-9 w881:grid-cols-[0.9fr_1.1fr] w881:gap-16`}>
          <div>
            <span className="eyebrow" data-reveal>Our Story</span>
            <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
              Money should move as freely as people do.
            </h2>
          </div>
          <div
            className="[--reveal-delay:120ms] [&>p]:mb-5 [&>p]:max-w-[560px] [&>p]:text-[17px] [&>p]:leading-[1.65] [&>p]:text-ink-2"
            data-reveal
          >
            <p className="!mb-7 font-display !text-[clamp(22px,2.2vw,28px)] font-semibold !leading-[1.32] tracking-[-0.02em] !text-ink">Africa is the youngest, fastest-growing market on earth — yet moving money within it remains slow, costly, and fragmented.</p>
            <p>Kuvar Technologies was founded to fix that at the root: by building the underlying infrastructure that payments, transfers and commerce all depend on. Not another app on top of broken rails — the rails themselves.</p>
            <p>Today that infrastructure powers two products and a live developer platform. Every line of it is built in Africa, for Africa, to a global standard.</p>
            <Link className={`${arrowLink} mt-1.5`} href="/about">
              Read the full story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={sectionTight} data-screen-label="Home — Mission & Vision">
        <div className={wrap}>
          <div className="grid grid-cols-1 overflow-hidden rounded-brand bg-band text-band-ink w881:grid-cols-2" data-reveal>
            <div className="px-[52px] py-14">
              <div className="mb-[22px] font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Mission</div>
              <p className="font-display text-[clamp(24px,2.6vw,36px)] font-bold leading-[1.18] tracking-[-0.03em] text-band-ink text-balance">To give every African business and individual <em className="italic text-accent">borderless</em> access to the financial system — through infrastructure they can trust.</p>
            </div>
            <div className="border-t border-band-line px-[52px] py-14 w881:border-t-0 w881:border-l">
              <div className="mb-[22px] font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Vision</div>
              <p className="font-display text-[clamp(24px,2.6vw,36px)] font-bold leading-[1.18] tracking-[-0.03em] text-band-ink text-balance">A single, connected financial network for Africa, where value moves <em className="italic text-accent">instantly</em> across every border, currency and channel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className={sectionTight} data-screen-label="Home — Impact">
        <div className={wrap}>
          <div className="rounded-brand bg-accent px-[52px] py-16 text-accent-ink" data-reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow on-accent">By the numbers</span>
                <h2 className={`${hSection} mt-3.5 text-accent-ink`}>Infrastructure at scale.</h2>
              </div>
              <p className="max-w-[340px] text-[15px] text-[rgba(10,10,10,0.62)]">
                Placeholder figures — swap in your live metrics. Counters animate as they enter view.
              </p>
            </div>
            <div className={statGrid}>
              {IMPACT.map((s) => (
                <div className={stat} key={s.label}>
                  <span
                    className={statNumOnAccent}
                    data-counter
                    data-to={s.to}
                    data-suffix={s.suffix}
                    {...(s.prefix ? { "data-prefix": s.prefix } : {})}
                    {...(s.decimals ? { "data-decimals": s.decimals } : {})}
                  ></span>
                  <div className={statDividerOnAccent}></div>
                  <span className={statLabelOnAccent}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={section} data-screen-label="Home — Values">
        <div className={wrap}>
          <div className="mb-12 max-w-[680px]">
            <span className="eyebrow" data-reveal>What we stand for</span>
            <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
              Values that hold under pressure.
            </h2>
          </div>
          <div className={valueGrid}>
            {VALUES.map((v) => (
              <div className={valueCell} key={v.title} data-reveal style={{ "--reveal-delay": `${v.d}ms` }}>
                <span className={valueIcon}><Icon name={v.icon} size={23} sw={2} /></span>
                <h3 className={valueTitle}>{v.title}</h3>
                <p className={valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`${section} bg-surface-2`} data-screen-label="Home — Leadership">
        <div className={wrap}>
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[640px]">
              <span className="eyebrow" data-reveal>Leadership</span>
              <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
                The people building the rails.
              </h2>
            </div>
            <Link className={arrowLink} href="/about#team" data-reveal>
              Meet the full team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[22px] w561:grid-cols-2 w981:grid-cols-4">
            {TEAM.map((m, i) => (
              <div className={`${card} tilt overflow-hidden`} key={m.name} data-reveal style={{ "--reveal-delay": `${m.d}ms` }}>
                <div className={teamPhoto}>
                  <image-slot id={`team-${i + 1}`} shape="rect" placeholder="Drop photo"></image-slot>
                  <span className={teamInitials}>{m.initials}</span>
                </div>
                <div className={teamInfo}>
                  <h3 className={teamName}>{m.name}</h3>
                  <p className={teamRole}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className={sectionTight} data-screen-label="Home — Partners">
        <div className={wrap}>
          <p className="eyebrow is-plain is-block mb-7 text-ink-3" data-reveal>
            Trusted by partners across banking, mobile money &amp; infrastructure
          </p>
          <div className="grid grid-cols-2 overflow-hidden rounded-brand border border-line bg-card w881:grid-cols-5" data-reveal>
            {PARTNERS.map((p) => (
              <div
                className="grid min-h-24 place-items-center border-r border-b border-line px-[18px] py-[30px] text-center font-display text-[17px] font-bold tracking-[-0.02em] text-ink-3 transition-[color,background-color] duration-200 hover:bg-card-2 hover:text-ink"
                key={p}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className={section} data-screen-label="Home — Newsroom">
        <div className={wrap}>
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[640px]">
              <span className="eyebrow" data-reveal>Newsroom</span>
              <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
                Kuvar in the news.
              </h2>
            </div>
            <Link className={arrowLink} href="/press" data-reveal>
              All press <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[22px] w881:grid-cols-3">
            {NEWS.map((n) => (
              <Link className={`${cardHover} flex flex-col overflow-hidden p-0`} href="/press" key={n.title} data-reveal style={{ "--reveal-delay": `${n.d}ms` }}>
                <div className={pressThumb}><Icon name={n.icon} size={40} sw={1.4} /></div>
                <div className={pressBody}>
                  <div className={pressMeta}><span className={pressTag}>{n.tag}</span><span>{n.date}</span></div>
                  <h3 className={pressTitle}>{n.title}</h3>
                  <p className={pressExcerpt}>{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Careers callout */}
      <section className={sectionTight} data-screen-label="Home — Careers">
        <div className={wrap}>
          <div
            className="grid grid-cols-1 items-center gap-7 rounded-brand bg-ink px-14 py-16 text-surface w881:grid-cols-[1.2fr_0.8fr] w881:gap-10 dark:border dark:border-line dark:bg-card"
            data-reveal
          >
            <div>
              <span className="eyebrow is-accent">Careers</span>
              <h2 className="mt-4 font-display text-[clamp(28px,3.4vw,46px)] font-extrabold leading-[1.05] tracking-[-0.035em]">Help build the<br />money rails for a continent.</h2>
              <div className="mt-7">
                <Link className={btn("primary", "lg")} href="/careers">
                  See open roles
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-9">
              {[
                { n: "60+", l: "Team members" },
                { n: "9", l: "Nationalities" },
                { n: "Remote", l: "First culture" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-[32px] font-extrabold tracking-[-0.03em] text-accent">{s.n}</div>
                  <div className="text-[13px] text-white/60 dark:text-ink-3">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={`${section} bg-surface-2`} data-screen-label="Home — Contact">
        <div className={`${wrap} grid grid-cols-1 items-center gap-9 w881:grid-cols-2 w881:gap-14`}>
          <div>
            <span className="eyebrow" data-reveal>Get in touch</span>
            <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
              Let&apos;s build the rails together.
            </h2>
            <p className={`${lede} mt-[18px] [--reveal-delay:120ms]`} data-reveal>
              Whether you&apos;re a bank, a business, the press or an investor — there&apos;s a direct line to
              the right team at Kuvar.
            </p>
            <div className="mt-7" data-reveal>
              <Link className={btn("dark", "lg")} href="/contact">
                Contact us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col border-t border-line [--reveal-delay:140ms]" data-reveal>
            {ROUTES.map((r) => (
              <Link
                className="flex items-center justify-between gap-[18px] border-b border-line px-1 py-[22px] transition-[padding] duration-200 hover:pl-3 [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:text-ink-3"
                href={r.href}
                key={r.name}
              >
                <div>
                  <div className="font-display text-[19px] font-bold tracking-[-0.02em]">{r.name}</div>
                  <div className="mt-0.5 text-[13.5px] text-ink-3">{r.desc}</div>
                </div>
                <Icon name="arrowRight" size={20} sw={2} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
