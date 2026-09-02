import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";
import { btn, card, hDisplay, hSection, lede, section, sectionTight, wrap } from "@/components/styles";

export const metadata = {
  title: "Careers",
  description:
    "Join Kuvar Technologies and help build the financial infrastructure for Africa. Open roles, culture and benefits.",
};

const WHY = [
  { icon: "globe", title: "Continent-scale impact", body: "The work you ship reaches businesses and families across Africa. Few problems are this hard — or this worth solving.", d: 0 },
  { icon: "file", title: "Real ownership", body: "Small teams, big mandates. You'll own meaningful surface area from day one — and the outcomes that come with it.", d: 80 },
  { icon: "building", title: "Build to last", body: "This is infrastructure. We hire people who care about getting the hard, unglamorous things right — at bank-grade quality.", d: 160 },
] as const;

const PERKS = [
  { icon: "clock", label: "Flexible, remote-first work" },
  { icon: "heart", label: "Comprehensive health cover" },
  { icon: "dollar", label: "Competitive pay & equity" },
  { icon: "book", label: "Learning & growth budget" },
  { icon: "calendar", label: "Generous paid time off" },
  { icon: "usersSmall", label: "Annual team off-sites" },
] as const;

const ROLES = [
  { dept: "Engineering", title: "Senior Backend Engineer, Payments", loc: "Remote · Africa" },
  { dept: "Engineering", title: "Platform / Infrastructure Engineer", loc: "Lagos · Hybrid" },
  { dept: "Product", title: "Product Manager, KuvarSend", loc: "Remote · Africa" },
  { dept: "Compliance", title: "Compliance & AML Analyst", loc: "Nairobi · Hybrid" },
  { dept: "Operations", title: "Payments Operations Lead", loc: "Accra · On-site" },
  { dept: "Design", title: "Senior Product Designer", loc: "Remote · Africa" },
];

export default function CareersPage() {
  return (
    <>
      <header className="page-hero" data-screen-label="Careers — Hero">
        <div className={wrap}>
          <div className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <span>Careers</span></div>
          <span className="eyebrow" data-reveal>Careers</span>
          <h1 className={`${hDisplay} reveal-words`} data-reveal-words style={{ marginTop: "18px", maxWidth: "15ch" }}>
            Build the money rails for a continent.
          </h1>
          <p className={lede} data-reveal style={{ "--reveal-delay": "140ms", marginTop: "24px", maxWidth: "660px" }}>
            We&apos;re a team of builders solving one of the hardest, highest-impact problems in the world
            — and we&apos;re hiring across engineering, product, compliance and operations.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }} data-reveal>
            <a className={btn("primary", "lg")} href="#roles">
              See open roles
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </header>

      {/* Why join */}
      <section className={section} data-screen-label="Careers — Why join">
        <div className={wrap}>
          <div style={{ maxWidth: "640px", marginBottom: "44px" }}>
            <span className="eyebrow" data-reveal>Why Kuvar</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              Work that actually moves the needle.
            </h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className={`${card} why`} key={w.title} data-reveal style={{ "--reveal-delay": `${w.d}ms` }}>
                <span className="why-icon"><Icon name={w.icon} size={23} sw={2} /></span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className={sectionTight} data-screen-label="Careers — Culture">
        <div className={wrap}>
          <div className="culture-band grid-2" data-reveal>
            <div>
              <span className="eyebrow">Our culture</span>
              <p className="culture-quote" style={{ marginTop: "22px" }}>
                We move with <em>urgency</em>, hold ourselves to <em>bank-grade</em> standards, and
                never forget there&apos;s a real person behind every transaction.
              </p>
            </div>
            <div className="cc-stats" style={{ gap: "40px" }}>
              <div className="cc-stat">
                <div className="n" style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "38px", letterSpacing: "-0.03em", color: "var(--accent)" }}>60+</div>
                <div className="l" style={{ fontSize: "13.5px", color: "var(--dark-section-ink-3)" }}>Team members</div>
              </div>
              <div className="cc-stat">
                <div className="n" style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "38px", letterSpacing: "-0.03em", color: "var(--accent)" }}>9</div>
                <div className="l" style={{ fontSize: "13.5px", color: "var(--dark-section-ink-3)" }}>Nationalities</div>
              </div>
              <div className="cc-stat">
                <div className="n" style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "38px", letterSpacing: "-0.03em", color: "var(--accent)" }}>Remote</div>
                <div className="l" style={{ fontSize: "13.5px", color: "var(--dark-section-ink-3)" }}>First, async culture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className={section} style={{ background: "var(--bg-2)" }} data-screen-label="Careers — Benefits">
        <div className={wrap}>
          <div style={{ maxWidth: "640px", marginBottom: "40px" }}>
            <span className="eyebrow" data-reveal>Benefits</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              How we take care of our team.
            </h2>
          </div>
          <div className="perks" data-reveal>
            {PERKS.map((p) => (
              <div className="perk" key={p.label}>
                <Icon name={p.icon} size={22} sw={2} />
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className={section} id="roles" data-screen-label="Careers — Open roles">
        <div className={wrap}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", marginBottom: "36px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "560px" }}>
              <span className="eyebrow" data-reveal>Open roles</span>
              <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
                Find your seat.
              </h2>
            </div>
            <span className="text-ink-3" data-reveal style={{ fontSize: "14px" }}>
              Don&apos;t see your role? Email{" "}
              <Link href="/contact" style={{ color: "var(--ink)", fontWeight: 600 }}>careers@kuvar.co</Link>
            </span>
          </div>
          <div className="roles" data-reveal>
            {ROLES.map((r) => (
              <Link className="role" href="/contact" key={r.title}>
                <div>
                  <span className="dept-tag">{r.dept}</span>
                  <div className="role-title" style={{ marginTop: "8px" }}>{r.title}</div>
                </div>
                <div className="r-dept">{r.dept}</div>
                <div className="r-loc">{r.loc}</div>
                <span className="role-arrow"><ArrowRight size={17} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={sectionTight} style={{ paddingBottom: "96px" }} data-screen-label="Careers — CTA">
        <div className={wrap} style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>Let&apos;s build it together.</h2>
          <p className={lede} data-reveal style={{ "--reveal-delay": "100ms", margin: "18px auto 0" }}>
            Send us your CV and a note on what you&apos;d want to own.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", marginTop: "28px", flexWrap: "wrap" }} data-reveal>
            <Link className={btn("primary", "lg")} href="/contact">
              Apply now
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
