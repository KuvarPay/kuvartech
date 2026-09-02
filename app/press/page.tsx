import Link from "next/link";
import { Icon, ArrowRight, BrandMark } from "@/components/Icons";
import { arrowLink, breadcrumb, btn, cardHover, hDisplay, hSection, lede, pageHero, section, sectionTight, wrap } from "@/components/styles";

export const metadata = {
  title: "Press & Newsroom",
  description: "Press releases, media coverage and brand assets from Kuvar Technologies.",
};

const RELEASES = [
  { icon: "globe2", tag: "Product", date: "· Apr 2026", title: "KuvarSend opens its USD wallet to five new African markets", excerpt: "Recipients can now cash out in NGN, GHS, KES, XOF and ZAR within minutes.", d: 0 },
  { icon: "star", tag: "Recognition", date: "· Mar 2026", title: "Named among Africa's most promising fintech infrastructure firms", excerpt: "Recognised for the reliability and breadth of its cross-border settlement network.", d: 100 },
  { icon: "chevrons", tag: "Company", date: "· Feb 2026", title: "Kuvar announces developer platform for African builders", excerpt: "The rails powering KuvarPay and KuvarSend will open to third-party developers.", d: 200 },
] as const;

const COVERAGE = [
  { outlet: "TechCabal", head: "How Kuvar is quietly building the rails behind Africa's payments boom" },
  { outlet: "Rest of World", head: "The infrastructure layer trying to connect Africa's currencies" },
  { outlet: "Disrupt Africa", head: "KuvarSend brings USD wallets and instant local payouts to five markets" },
  { outlet: "Quartz", head: "Why fintech infrastructure is the next frontier on the continent" },
];

const ASSETS = [
  { name: "Logo pack", sub: "SVG · PNG" },
  { name: "Product shots", sub: "High-res" },
  { name: "Headshots", sub: "Leadership" },
  { name: "Fact sheet", sub: "PDF" },
];

export default function PressPage() {
  return (
    <>
      <header className={pageHero} data-screen-label="Press — Hero">
        <div className={wrap}>
          <div className={breadcrumb}><Link href="/" className="hover:text-ink">Home</Link> <span>/</span> <span>Press</span></div>
          <span className="eyebrow" data-reveal>Newsroom</span>
          <h1 className={`${hDisplay} reveal-words`} data-reveal-words style={{ marginTop: "18px", maxWidth: "14ch" }}>
            Press &amp; media.
          </h1>
          <p className={lede} data-reveal style={{ "--reveal-delay": "140ms", marginTop: "24px", maxWidth: "640px" }}>
            The latest from Kuvar Technologies — announcements, coverage and resources for journalists
            and partners.
          </p>
        </div>
      </header>

      {/* Featured */}
      <section className={sectionTight} data-screen-label="Press — Featured">
        <div className={wrap}>
          <div className="feature-press" data-reveal>
            <div className="fp-media">
              <div className="morph2"></div>
              <span className="fp-mark"><BrandMark size={80} /></span>
            </div>
            <div className="fp-body">
              <div className="fp-meta"><span className="press-tag">Announcement</span><span>· May 14, 2026</span></div>
              <h2 className="fp-title">Kuvar Technologies raises to expand its pan-African payment rails</h2>
              <p className="text-ink-3" style={{ fontSize: "15px", margin: 0 }}>
                New capital will accelerate corridor coverage across the continent and bring the Kuvar
                Developer Platform to early access later this year.
              </p>
              <a className={arrowLink} href="#" style={{ marginTop: "6px" }}>
                Read the release <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press releases */}
      <section className={section} data-screen-label="Press — Releases">
        <div className={wrap}>
          <div style={{ maxWidth: "560px", marginBottom: "40px" }}>
            <span className="eyebrow" data-reveal>Press releases</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              Latest announcements.
            </h2>
          </div>
          <div className="press-grid">
            {RELEASES.map((r) => (
              <a className={`${cardHover} press-card`} href="#" key={r.title} data-reveal style={{ "--reveal-delay": `${r.d}ms` }}>
                <div className="press-thumb"><Icon name={r.icon} size={40} sw={1.4} /></div>
                <div className="press-body">
                  <div className="press-meta"><span className="press-tag">{r.tag}</span><span>{r.date}</span></div>
                  <h3 className="press-title">{r.title}</h3>
                  <p className="press-excerpt">{r.excerpt}</p>
                  <span className={arrowLink} style={{ marginTop: "auto" }}>
                    Read more <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Media coverage */}
      <section className={section} style={{ background: "var(--bg-2)" }} data-screen-label="Press — Coverage">
        <div className={wrap}>
          <div style={{ maxWidth: "560px", marginBottom: "36px" }}>
            <span className="eyebrow" data-reveal>In the media</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              Coverage.
            </h2>
          </div>
          <div className="coverage" data-reveal>
            {COVERAGE.map((c) => (
              <a className="cov" href="#" key={c.outlet}>
                <div className="cov-outlet">{c.outlet}</div>
                <div className="cov-head">{c.head}</div>
                <Icon name="arrowUpRight" size={18} sw={2} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand assets */}
      <section className={sectionTight} data-screen-label="Press — Brand assets">
        <div className={wrap}>
          <div className="assets-band" data-reveal>
            <div>
              <span className="eyebrow">For media</span>
              <h2 className={hSection} style={{ marginTop: "16px" }}>Brand &amp; press kit.</h2>
              <p style={{ color: "var(--dark-section-ink-3)", margin: "16px 0 0", maxWidth: "380px" }}>
                Logos, product shots, executive headshots and boilerplate — everything you need to
                cover Kuvar Technologies.
              </p>
            </div>
            <div className="asset-tiles">
              {ASSETS.map((a) => (
                <a className="asset-tile" href="#" key={a.name}>
                  <div>
                    <div className="at-name">{a.name}</div>
                    <div className="at-sub">{a.sub}</div>
                  </div>
                  <span className="dl"><Icon name="download" size={17} sw={2.2} /></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className={sectionTight} style={{ paddingBottom: "96px" }} data-screen-label="Press — Contact">
        <div className={wrap} style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>Media enquiries.</h2>
          <p className={lede} data-reveal style={{ "--reveal-delay": "100ms", margin: "18px auto 0" }}>
            For interviews, statements and press requests, reach our communications team directly.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", marginTop: "28px", flexWrap: "wrap" }} data-reveal>
            <Link className={btn("primary", "lg")} href="/contact#press">
              Contact press team
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
