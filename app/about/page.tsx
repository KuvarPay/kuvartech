import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";
import { btn, card, hDisplay, hSection, lede, section, sectionTight, wrap } from "@/components/styles";

export const metadata = {
  title: "About",
  description:
    "The story, mission, values and people behind Kuvar Technologies — the financial infrastructure layer for Africa.",
};

const TIMELINE = [
  { year: "2022", h: "Founded", p: "Kuvar Technologies is started with a single belief: Africa needs its own money infrastructure.", d: 0 },
  { year: "2023", h: "KuvarPay goes live", p: "The payment gateway and merchant tools launch, processing for the first businesses.", d: 100 },
  { year: "2024", h: "Agent network", p: "Cash-in / cash-out reach extends to the last mile across multiple markets.", d: 200 },
  { year: "2026", h: "KuvarSend & platform", p: "Cross-border transfers launch and the developer platform enters early access.", d: 300 },
];

const VALUES = [
  { icon: "shield", title: "Trust is the product", body: "We hold other people's money. Security, compliance and uptime are the foundation, not a feature.", d: 0 },
  { icon: "globe", title: "Built for the continent", body: "Pan-African by default. We design for every currency, regulator and corridor — not just the easy ones.", d: 80 },
  { icon: "bolt", title: "Move with speed", body: "We ship, learn and harden quickly — without ever cutting corners on safety.", d: 160 },
  { icon: "grid", title: "Infrastructure thinking", body: "We build rails, not silos. Every product shares the same core so the whole gets stronger.", d: 0 },
  { icon: "users", title: "Customers, not users", body: "Behind every transaction is a business making payroll or a family being supported.", d: 80 },
  { icon: "scale", title: "Open by design", body: "The best financial system is one others can build on. We expose our rails so the ecosystem can grow.", d: 160 },
] as const;

const TEAM = [
  { initials: "AO", name: "Adaeze Okafor", role: "Co-founder & CEO", d: 0 },
  { initials: "KM", name: "Kwame Mensah", role: "Co-founder & CTO", d: 80 },
  { initials: "FN", name: "Fatima Ndiaye", role: "Chief Compliance Officer", d: 160 },
  { initials: "DM", name: "David Mwangi", role: "VP, Engineering", d: 240 },
  { initials: "LA", name: "Lindiwe Abara", role: "VP, Operations", d: 0 },
  { initials: "TB", name: "Tunde Bello", role: "Head of Product", d: 80 },
  { initials: "RK", name: "Rania Kamau", role: "Head of Partnerships", d: 160 },
  { initials: "SG", name: "Samuel Gyasi", role: "Head of Finance", d: 240 },
];

export default function AboutPage() {
  return (
    <>
      <header className="page-hero" data-screen-label="About — Hero">
        <div className={wrap}>
          <div className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <span>About</span></div>
          <span className="eyebrow" data-reveal>About Kuvar</span>
          <h1 className={`${hDisplay} reveal-words`} data-reveal-words style={{ marginTop: "18px", maxWidth: "16ch" }}>
            We&apos;re building Africa&apos;s money rails.
          </h1>
          <p className={lede} data-reveal style={{ "--reveal-delay": "140ms", marginTop: "24px", maxWidth: "680px" }}>
            Kuvar Technologies is the infrastructure company behind KuvarPay and KuvarSend — laying
            the foundation for how value moves across a continent of 1.4 billion people.
          </p>
        </div>
      </header>

      {/* Founding story */}
      <section className={section} style={{ background: "var(--bg-2)" }} data-screen-label="About — Story">
        <div className={wrap}>
          <span className="eyebrow" data-reveal>Our Story</span>
          <p className="story-lead" data-reveal style={{ "--reveal-delay": "80ms", marginTop: "20px" }}>
            Africa is one of the world&apos;s fastest-growing economies — held back by some of its slowest
            financial plumbing.
          </p>
          <div className="story-cols">
            <div data-reveal>
              <p>Sending money from Lagos to Nairobi could cost more and take longer than sending it to London. A merchant in Accra could lose a sale because the payment simply wouldn&apos;t go through. Behind every one of those failures was the same root cause: fragmented, ageing infrastructure that was never built for how Africa actually moves money.</p>
              <p>Kuvar Technologies was founded to rebuild that foundation. Not another consumer app bolted onto broken rails — the rails themselves: secure, compliant, pan-African infrastructure that any product can stand on.</p>
            </div>
            <div data-reveal style={{ "--reveal-delay": "120ms" }}>
              <p>We started with payments — KuvarPay — proving the core could move real money for real businesses at scale. Then KuvarSend, bringing borderless, USD-denominated transfers to families and freelancers across the continent.</p>
              <p>Each product makes the next one stronger, because they all share one infrastructure core. Today, that same core is becoming a platform others can build on — so the whole African ecosystem moves forward, not just us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={section} data-screen-label="About — Timeline">
        <div className={wrap}>
          <div style={{ maxWidth: "620px", marginBottom: "44px" }}>
            <span className="eyebrow" data-reveal>The journey</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              From one rail to a network.
            </h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="tl" key={t.year} data-reveal style={{ "--reveal-delay": `${t.d}ms` }}>
                <div className="tl-year">{t.year}</div>
                <h4>{t.h}</h4>
                <p>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={section} style={{ background: "var(--bg-2)" }} data-screen-label="About — Mission & Vision">
        <div className={wrap}>
          <div style={{ maxWidth: "620px", marginBottom: "40px" }}>
            <span className="eyebrow" data-reveal>What drives us</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              Mission &amp; vision.
            </h2>
          </div>
          <div className="mv-full">
            <div className="mv-block mission" data-reveal>
              <div className="lbl">Mission</div>
              <p className="txt">To give every African business and individual borderless access to the financial system — through infrastructure they can trust.</p>
            </div>
            <div className="mv-block vision" data-reveal style={{ "--reveal-delay": "120ms" }}>
              <div className="lbl">Vision</div>
              <p className="txt">A single, connected financial network for Africa, where value moves instantly across every border, currency and channel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={section} data-screen-label="About — Values">
        <div className={wrap}>
          <div style={{ marginBottom: "44px", maxWidth: "640px" }}>
            <span className="eyebrow" data-reveal>What we stand for</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              The values behind every decision.
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

      {/* Leadership */}
      <section className={section} style={{ background: "var(--bg-2)" }} id="team" data-screen-label="About — Leadership">
        <div className={wrap}>
          <div style={{ marginBottom: "44px", maxWidth: "640px" }}>
            <span className="eyebrow" data-reveal>Leadership</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              The people building the rails.
            </h2>
            <p className={lede} data-reveal style={{ "--reveal-delay": "120ms", marginTop: "16px" }}>
              A team of builders, operators and compliance experts from across Africa and beyond.
            </p>
          </div>
          <div className="team-grid-6">
            {TEAM.map((m, i) => (
              <div className={`${card} team-card tilt`} key={m.name} data-reveal style={{ "--reveal-delay": `${m.d}ms` }}>
                <div className="team-photo">
                  <image-slot id={`ab-team-${i + 1}`} shape="rect" placeholder="Drop photo"></image-slot>
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

      {/* Impact */}
      <section className={section} data-screen-label="About — Impact">
        <div className={wrap}>
          <div style={{ maxWidth: "620px", marginBottom: "44px" }}>
            <span className="eyebrow" data-reveal>By the numbers</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              Built in Africa, at scale.
            </h2>
            <p className="text-ink-3" data-reveal style={{ "--reveal-delay": "120ms", marginTop: "14px", fontSize: "14px" }}>
              Placeholder figures — swap in your live metrics.
            </p>
          </div>
          <div className="stat-grid">
            <div className="stat"><span className="stat-num" data-counter data-to="14" data-suffix="+"></span><div className="stat-divider"></div><span className="stat-label">Countries on our rails</span></div>
            <div className="stat"><span className="stat-num" data-counter data-to="38000" data-suffix="+"></span><div className="stat-divider"></div><span className="stat-label">Merchants &amp; agents</span></div>
            <div className="stat"><span className="stat-num" data-counter data-to="60" data-suffix="+"></span><div className="stat-divider"></div><span className="stat-label">Team members</span></div>
            <div className="stat"><span className="stat-num" data-counter data-to="5" data-suffix="M+"></span><div className="stat-divider"></div><span className="stat-label">Transactions to date</span></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={sectionTight} style={{ paddingBottom: "96px" }} data-screen-label="About — CTA">
        <div className={wrap} style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>Want to help build it?</h2>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", marginTop: "28px", flexWrap: "wrap" }} data-reveal>
            <Link className={btn("primary", "lg")} href="/careers">
              See open roles
              <ArrowRight size={17} />
            </Link>
            <Link className={btn("ghost", "lg")} href="/solutions">Explore solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
