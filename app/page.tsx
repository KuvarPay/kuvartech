import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="hero" data-screen-label="Home — Hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <a
              className="tag-pill"
              href="https://developers.kuvarpay.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              style={{ textDecoration: "none" }}
            >
              <span className="dot"></span> New — the Kuvar Developer Platform is now live
            </a>
            <h1 className="hero-headline reveal-words" data-reveal-words>
              The financial infrastructure layer for Africa.
            </h1>
            <p className="hero-sub" data-reveal style={{ "--reveal-delay": "120ms" }}>
              Kuvar Technologies builds the rails that move money across borders, power merchants,
              and connect African commerce to the world — one trusted product at a time.
            </p>
            <div className="hero-ctas" data-reveal style={{ "--reveal-delay": "200ms" }}>
              <Link className="btn btn-primary btn-lg" href="/solutions">
                Explore Solutions
                <ArrowRight size={17} />
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/about">
                Our Story
              </Link>
            </div>
            <div className="hero-trust" data-reveal style={{ "--reveal-delay": "280ms" }}>
              <div className="ht-cell">
                <span className="ht-num">5+</span>
                <span className="ht-lbl">Countries</span>
              </div>
              <span className="ht-div"></span>
              <div className="ht-cell">
                <span className="ht-num">2</span>
                <span className="ht-lbl">Public products</span>
              </div>
              <span className="ht-div"></span>
              <div className="ht-cell">
                <span className="ht-num">99.98%</span>
                <span className="ht-lbl">Rail uptime</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-reveal style={{ "--reveal-delay": "160ms" }}>
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
      <section className="section" id="solutions" data-screen-label="Home — Solutions">
        <div className="wrap">
          <div style={{ marginBottom: "48px", maxWidth: "720px" }}>
            <span className="eyebrow" data-reveal>Our Solutions</span>
            <h2 className="h-section reveal-words" data-reveal-words style={{ marginTop: "18px" }}>
              Two products. One infrastructure.
            </h2>
            <p className="lede" data-reveal style={{ "--reveal-delay": "120ms", marginTop: "18px" }}>
              Each Kuvar product solves a hard money problem in Africa — built on shared, bank-grade
              rails so they work together by design.
            </p>
          </div>

          <div className="solutions-grid">
            {/* KuvarPay */}
            <Link className="card card-pad product-card tilt" href="/solutions#kuvarpay" data-reveal style={{ "--reveal-delay": "0ms" }}>
              <span className="pc-glow"></span>
              <div className="pc-head">
                <span className="pc-mark"><img src="/assets/kuvarpay-mark.svg" alt="KuvarPay" /></span>
                <span className="pc-badge">Live</span>
              </div>
              <div>
                <h3 className="pc-name">Kuvar<span className="pay" style={{ color: "var(--accent-deep)" }}>Pay</span></h3>
                <p className="pc-tagline">Full payments infrastructure — a payment gateway, merchant tools, and an agent network spanning Africa.</p>
              </div>
              <div className="pc-tags">
                <span className="pc-tag">Payment gateway</span>
                <span className="pc-tag">Merchant tools</span>
                <span className="pc-tag">Agent network</span>
              </div>
              <div className="pc-foot">
                <span className="muted" style={{ fontSize: "13.5px" }}>Accept &amp; move money, anywhere</span>
                <span className="arrow-link">Visit <ArrowRight size={16} /></span>
              </div>
            </Link>

            {/* KuvarSend */}
            <Link className="card card-pad product-card tilt" href="/solutions#kuvarsend" data-reveal style={{ "--reveal-delay": "100ms" }}>
              <span className="pc-glow"></span>
              <div className="pc-head">
                <span className="pc-mark"><img src="/assets/kuvarsend-mark.png" alt="KuvarSend" /></span>
                <span className="pc-badge">Launching soon</span>
              </div>
              <div>
                <h3 className="pc-name">Kuvar<span className="send" style={{ color: "var(--accent-deep)" }}>Send</span></h3>
                <p className="pc-tagline">Cross-border money transfer across Africa. Hold a USD-denominated wallet, pay out in local currencies.</p>
              </div>
              <div className="pc-tags">
                <span className="pc-tag">USD wallet</span>
                <span className="pc-tag">NGN · GHS · KES</span>
                <span className="pc-tag">UGX · ZAR</span>
              </div>
              <div className="pc-foot">
                <span className="muted" style={{ fontSize: "13.5px" }}>The borderless way to send</span>
                <span className="arrow-link">Visit <ArrowRight size={16} /></span>
              </div>
            </Link>

            {/* Platform teaser */}
            <div className="card platform-card" data-reveal style={{ "--reveal-delay": "200ms" }}>
              <div className="pl-left">
                <span className="platform-icon"><Icon name="chevrons" size={24} sw={1.8} /></span>
                <div>
                  <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "21px", letterSpacing: "-0.02em", margin: "0 0 4px" }}>
                    Kuvar Developer Platform{" "}
                    <span style={{ fontSize: "12px", color: "var(--accent-deep)", fontWeight: 600, letterSpacing: "0.06em" }}>· LIVE</span>
                  </h3>
                  <p className="muted" style={{ fontSize: "14.5px", margin: 0 }}>
                    One API for payments, payouts and wallets — the same rails our own products run on.
                  </p>
                </div>
              </div>
              <a className="arrow-link" href="https://developers.kuvarpay.com/" target="_blank" rel="noopener noreferrer">
                View developer docs <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: "var(--bg-2)" }} id="story" data-screen-label="Home — Story">
        <div className="wrap story-grid">
          <div>
            <span className="eyebrow" data-reveal>Our Story</span>
            <h2 className="h-section reveal-words" data-reveal-words style={{ marginTop: "18px" }}>
              Money should move as freely as people do.
            </h2>
          </div>
          <div className="story-body" data-reveal style={{ "--reveal-delay": "120ms" }}>
            <p className="big">Africa is the youngest, fastest-growing market on earth — yet moving money within it remains slow, costly, and fragmented.</p>
            <p>Kuvar Technologies was founded to fix that at the root: by building the underlying infrastructure that payments, transfers and commerce all depend on. Not another app on top of broken rails — the rails themselves.</p>
            <p>Today that infrastructure powers two products and a live developer platform. Every line of it is built in Africa, for Africa, to a global standard.</p>
            <Link className="arrow-link" href="/about" style={{ marginTop: "6px" }}>
              Read the full story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-tight" data-screen-label="Home — Mission & Vision">
        <div className="wrap">
          <div className="band mv-grid" data-reveal>
            <div className="mv-cell">
              <div className="mv-kicker">Mission</div>
              <p className="mv-text">To give every African business and individual <em>borderless</em> access to the financial system — through infrastructure they can trust.</p>
            </div>
            <div className="mv-cell">
              <div className="mv-kicker">Vision</div>
              <p className="mv-text">A single, connected financial network for Africa, where value moves <em>instantly</em> across every border, currency and channel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-tight" data-screen-label="Home — Impact">
        <div className="wrap">
          <div className="impact" data-reveal>
            <div className="impact-head">
              <div>
                <span className="eyebrow">By the numbers</span>
                <h2 className="h-section" style={{ marginTop: "14px", color: "var(--accent-ink)" }}>Infrastructure at scale.</h2>
              </div>
              <p style={{ maxWidth: "340px", color: "rgba(10,10,10,0.62)", margin: 0, fontSize: "15px" }}>
                Placeholder figures — swap in your live metrics. Counters animate as they enter view.
              </p>
            </div>
            <div className="stat-grid">
              <div className="stat">
                <span className="stat-num" data-counter data-to="14" data-suffix="+"></span>
                <div className="stat-divider"></div>
                <span className="stat-label">Countries on our rails</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-counter data-to="38000" data-suffix="+"></span>
                <div className="stat-divider"></div>
                <span className="stat-label">Merchants &amp; agents</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-counter data-to="12.4" data-decimals="1" data-prefix="$" data-suffix="M"></span>
                <div className="stat-divider"></div>
                <span className="stat-label">Processed monthly</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-counter data-to="5" data-suffix="M+"></span>
                <div className="stat-divider"></div>
                <span className="stat-label">Transactions to date</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" data-screen-label="Home — Values">
        <div className="wrap">
          <div style={{ marginBottom: "48px", maxWidth: "680px" }}>
            <span className="eyebrow" data-reveal>What we stand for</span>
            <h2 className="h-section reveal-words" data-reveal-words style={{ marginTop: "18px" }}>
              Values that hold under pressure.
            </h2>
          </div>
          <div className="value-grid">
            {VALUES.map((v) => (
              <div className="value" key={v.title} data-reveal style={{ "--reveal-delay": `${v.d}ms` }}>
                <span className="value-icon"><Icon name={v.icon} size={23} sw={2} /></span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "var(--bg-2)" }} data-screen-label="Home — Leadership">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "44px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "640px" }}>
              <span className="eyebrow" data-reveal>Leadership</span>
              <h2 className="h-section reveal-words" data-reveal-words style={{ marginTop: "18px" }}>
                The people building the rails.
              </h2>
            </div>
            <Link className="arrow-link" href="/about#team" data-reveal>
              Meet the full team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div className="card team-card tilt" key={m.name} data-reveal style={{ "--reveal-delay": `${m.d}ms` }}>
                <div className="team-photo">
                  <image-slot id={`team-${i + 1}`} shape="rect" placeholder="Drop photo"></image-slot>
                  <span className="initials">{m.initials}</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-tight" data-screen-label="Home — Partners">
        <div className="wrap">
          <p className="eyebrow is-plain" data-reveal style={{ display: "block", textAlign: "center", marginBottom: "28px", color: "var(--ink-3)" }}>
            Trusted by partners across banking, mobile money &amp; infrastructure
          </p>
          <div className="partner-strip" data-reveal>
            {PARTNERS.map((p) => (
              <div className="partner" key={p}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="section" data-screen-label="Home — Newsroom">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "44px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "640px" }}>
              <span className="eyebrow" data-reveal>Newsroom</span>
              <h2 className="h-section reveal-words" data-reveal-words style={{ marginTop: "18px" }}>
                Kuvar in the news.
              </h2>
            </div>
            <Link className="arrow-link" href="/press" data-reveal>
              All press <ArrowRight size={16} />
            </Link>
          </div>
          <div className="press-grid">
            <Link className="card press-card card-hover" href="/press" data-reveal style={{ "--reveal-delay": "0ms" }}>
              <div className="press-thumb"><Icon name="newspaper" size={40} sw={1.4} /></div>
              <div className="press-body">
                <div className="press-meta"><span className="press-tag">Announcement</span><span>· May 2026</span></div>
                <h3 className="press-title">Kuvar Technologies raises to expand its pan-African payment rails</h3>
                <p className="press-excerpt">New capital will accelerate corridor coverage and the launch of the Kuvar Developer Platform.</p>
              </div>
            </Link>
            <Link className="card press-card card-hover" href="/press" data-reveal style={{ "--reveal-delay": "100ms" }}>
              <div className="press-thumb"><Icon name="globe2" size={40} sw={1.4} /></div>
              <div className="press-body">
                <div className="press-meta"><span className="press-tag">Product</span><span>· Apr 2026</span></div>
                <h3 className="press-title">KuvarSend opens its USD wallet to five new African markets</h3>
                <p className="press-excerpt">Recipients can now cash out in NGN, GHS, KES, XOF and ZAR within minutes.</p>
              </div>
            </Link>
            <Link className="card press-card card-hover" href="/press" data-reveal style={{ "--reveal-delay": "200ms" }}>
              <div className="press-thumb"><Icon name="star" size={40} sw={1.4} /></div>
              <div className="press-body">
                <div className="press-meta"><span className="press-tag">Recognition</span><span>· Mar 2026</span></div>
                <h3 className="press-title">Named among Africa's most promising fintech infrastructure firms</h3>
                <p className="press-excerpt">Kuvar recognised for reliability and breadth of its cross-border settlement network.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Careers callout */}
      <section className="section-tight" data-screen-label="Home — Careers">
        <div className="wrap">
          <div className="careers-cta" data-reveal>
            <div>
              <span className="eyebrow">Careers</span>
              <h2 className="cc-title">Help build the<br />money rails for a continent.</h2>
              <div style={{ marginTop: "28px" }}>
                <Link className="btn btn-primary btn-lg" href="/careers">
                  See open roles
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
            <div className="cc-stats">
              <div className="cc-stat"><div className="n">60+</div><div className="l">Team members</div></div>
              <div className="cc-stat"><div className="n">9</div><div className="l">Nationalities</div></div>
              <div className="cc-stat"><div className="n">Remote</div><div className="l">First culture</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" style={{ background: "var(--bg-2)" }} data-screen-label="Home — Contact">
        <div className="wrap contact-band">
          <div>
            <span className="eyebrow" data-reveal>Get in touch</span>
            <h2 className="h-section reveal-words" data-reveal-words style={{ marginTop: "18px" }}>
              Let&apos;s build the rails together.
            </h2>
            <p className="lede" data-reveal style={{ "--reveal-delay": "120ms", marginTop: "18px" }}>
              Whether you&apos;re a bank, a business, the press or an investor — there&apos;s a direct line to
              the right team at Kuvar.
            </p>
            <div style={{ marginTop: "28px" }} data-reveal>
              <Link className="btn btn-dark btn-lg" href="/contact">
                Contact us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="route-list" data-reveal style={{ "--reveal-delay": "140ms" }}>
            <Link className="route" href="/contact#partnerships">
              <div><div className="route-name">Partnerships</div><div className="route-desc">Banks, telcos &amp; infrastructure providers</div></div>
              <Icon name="arrowRight" size={20} sw={2} />
            </Link>
            <Link className="route" href="/contact#press">
              <div><div className="route-name">Press &amp; media</div><div className="route-desc">Interviews, brand assets &amp; statements</div></div>
              <Icon name="arrowRight" size={20} sw={2} />
            </Link>
            <Link className="route" href="/contact#investors">
              <div><div className="route-name">Investor relations</div><div className="route-desc">For current &amp; prospective investors</div></div>
              <Icon name="arrowRight" size={20} sw={2} />
            </Link>
            <Link className="route" href="/contact#support">
              <div><div className="route-name">Product support</div><div className="route-desc">Help with KuvarPay or KuvarSend</div></div>
              <Icon name="arrowRight" size={20} sw={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
