import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";
import {
  breadcrumb, btn, card, hDisplay, hSection, lede, pageHero, section, sectionTight, stat, statDivider, statGrid, statLabel, statNum, teamInfo, teamInitials, teamName, teamPhoto, teamRole, valueBody, valueCell, valueGrid, valueIcon, valueTitle, wrap, wrapBase,
} from "@/components/styles";

export const metadata = {
  title: "About",
  description:
    "The story, mission, values and people behind KuvarTech — the financial infrastructure layer for Africa.",
};

const TIMELINE = [
  { year: "2022", h: "Founded", p: "KuvarTech is started with a single belief: Africa needs its own money infrastructure.", d: 0 },
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

const STATS = [
  { to: "14", suffix: "+", label: "Countries on our rails" },
  { to: "38000", suffix: "+", label: "Merchants & agents" },
  { to: "60", suffix: "+", label: "Team members" },
  { to: "5", suffix: "M+", label: "Transactions to date" },
];

export default function AboutPage() {
  return (
    <>
      <header className={pageHero} data-screen-label="About — Hero">
        <div className={wrap}>
          <div className={breadcrumb}><Link href="/" className="hover:text-ink">Home</Link> <span>/</span> <span>About</span></div>
          <span className="eyebrow" data-reveal>About Kuvar</span>
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[16ch]`} data-reveal-words>
            We&apos;re building Africa&apos;s money rails.
          </h1>
          <p className={`${lede} mt-6 max-w-[680px] [--reveal-delay:140ms]`} data-reveal>
            KuvarTech is the infrastructure company behind KuvarPay and KuvarSend — laying
            the foundation for how value moves across a continent of 1.4 billion people.
          </p>
        </div>
      </header>

      {/* Founding story */}
      <section className={`${section} bg-surface-2`} data-screen-label="About — Story">
        <div className={wrap}>
          <span className="eyebrow" data-reveal>Our Story</span>
          <p
            className="mt-5 max-w-[18ch] font-display text-[clamp(24px,3vw,40px)] font-semibold leading-[1.28] tracking-[-0.03em] [--reveal-delay:80ms]"
            data-reveal
          >
            Africa is one of the world&apos;s fastest-growing economies — held back by some of its slowest
            financial plumbing.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-7 w881:grid-cols-2 w881:gap-14 [&_p]:mb-5 [&_p]:text-[16.5px] [&_p]:leading-[1.7] [&_p]:text-ink-2">
            <div data-reveal>
              <p>Sending money from Lagos to Nairobi could cost more and take longer than sending it to London. A merchant in Accra could lose a sale because the payment simply wouldn&apos;t go through. Behind every one of those failures was the same root cause: fragmented, ageing infrastructure that was never built for how Africa actually moves money.</p>
              <p>KuvarTech was founded to rebuild that foundation. Not another consumer app bolted onto broken rails — the rails themselves: secure, compliant, pan-African infrastructure that any product can stand on.</p>
            </div>
            <div data-reveal className="[--reveal-delay:120ms]">
              <p>We started with payments — KuvarPay — proving the core could move real money for real businesses at scale. Then KuvarSend, bringing borderless, USD-denominated transfers to families and freelancers across the continent.</p>
              <p>Each product makes the next one stronger, because they all share one infrastructure core. Today, that same core is becoming a platform others can build on — so the whole African ecosystem moves forward, not just us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={section} data-screen-label="About — Timeline">
        <div className={wrap}>
          <div className="mb-11 max-w-[620px]">
            <span className="eyebrow" data-reveal>The journey</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              From one rail to a network.
            </h2>
          </div>
          <div className="mt-2 grid grid-cols-1 border-t-2 border-accent w481:grid-cols-2 w881:grid-cols-4">
            {TIMELINE.map((t) => (
              /* tl keeps the accent dot, which is a ::before */
              <div className="tl" key={t.year} data-reveal style={{ "--reveal-delay": `${t.d}ms` }}>
                <div className="mb-2.5 font-display text-[22px] font-extrabold tracking-[-0.02em]">{t.year}</div>
                <h4 className="mb-2 font-display text-[16.5px] font-bold">{t.h}</h4>
                <p className="text-[14px] text-ink-3">{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`${section} bg-surface-2`} data-screen-label="About — Mission & Vision">
        <div className={wrap}>
          <div className="mb-10 max-w-[620px]">
            <span className="eyebrow" data-reveal>What drives us</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              Mission &amp; vision.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-[22px] w881:grid-cols-2">
            <div
              className="rounded-brand bg-ink p-11 text-surface dark:border dark:border-line dark:bg-card"
              data-reveal
            >
              <div className="mb-5 font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Mission</div>
              <p className="font-display text-[clamp(22px,2.4vw,32px)] font-bold leading-[1.22] tracking-[-0.03em] text-surface">
                To give every African business and individual borderless access to the financial system — through infrastructure they can trust.
              </p>
            </div>
            <div
              className="rounded-brand bg-accent p-11 text-accent-ink [--reveal-delay:120ms]"
              data-reveal
            >
              <div className="mb-5 font-body text-[12px] font-semibold uppercase tracking-[0.16em] opacity-70">Vision</div>
              <p className="font-display text-[clamp(22px,2.4vw,32px)] font-bold leading-[1.22] tracking-[-0.03em]">
                A single, connected financial network for Africa, where value moves instantly across every border, currency and channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={section} data-screen-label="About — Values">
        <div className={wrap}>
          <div className="mb-11 max-w-[640px]">
            <span className="eyebrow" data-reveal>What we stand for</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              The values behind every decision.
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

      {/* Leadership */}
      <section className={`${section} bg-surface-2`} id="team" data-screen-label="About — Leadership">
        <div className={wrap}>
          <div className="mb-11 max-w-[640px]">
            <span className="eyebrow" data-reveal>Leadership</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              The people building the rails.
            </h2>
            <p className={`${lede} mt-4 [--reveal-delay:120ms]`} data-reveal>
              A team of builders, operators and compliance experts from across Africa and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[22px] w521:grid-cols-2 w981:grid-cols-4">
            {TEAM.map((m, i) => (
              <div className={`${card} tilt overflow-hidden`} key={m.name} data-reveal style={{ "--reveal-delay": `${m.d}ms` }}>
                <div className={teamPhoto}>
                  <image-slot id={`ab-team-${i + 1}`} shape="rect" placeholder="Drop photo"></image-slot>
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

      {/* Impact */}
      <section className={section} data-screen-label="About — Impact">
        <div className={wrap}>
          <div className="mb-11 max-w-[620px]">
            <span className="eyebrow" data-reveal>By the numbers</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              Built in Africa, at scale.
            </h2>
            <p className="mt-3.5 text-[14px] text-ink-3 [--reveal-delay:120ms]" data-reveal>
              Placeholder figures — swap in your live metrics.
            </p>
          </div>
          <div className={statGrid}>
            {STATS.map((s) => (
              <div className={stat} key={s.label}>
                <span className={statNum} data-counter data-to={s.to} data-suffix={s.suffix}></span>
                <div className={statDivider}></div>
                <span className={statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${sectionTight} pb-24`} data-screen-label="About — CTA">
        <div className={`${wrapBase} max-w-[760px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>Want to help build it?</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
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
