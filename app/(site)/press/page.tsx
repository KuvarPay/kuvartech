import Link from "next/link";
import { Icon, ArrowRight, BrandMark } from "@/components/Icons";
import {
  arrowLink, breadcrumb, btn, cardHover, hDisplay, hSection, lede, pageHero, pressBody, pressExcerpt, pressMeta, pressTag, pressThumb, pressTitle, section, sectionTight, wrap, wrapBase,
} from "@/components/styles";

export const metadata = {
  title: "Press & Newsroom",
  description: "Press releases, media coverage and brand assets from KuvarTech.",
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
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[14ch]`} data-reveal-words>
            Press &amp; media.
          </h1>
          <p className={`${lede} mt-6 max-w-[640px] [--reveal-delay:140ms]`} data-reveal>
            The latest from KuvarTech — announcements, coverage and resources for journalists
            and partners.
          </p>
        </div>
      </header>

      {/* Featured */}
      <section className={sectionTight} data-screen-label="Press — Featured">
        <div className={wrap}>
          <div
            className="grid grid-cols-1 overflow-hidden rounded-brand border border-line bg-card w881:grid-cols-[1.1fr_0.9fr]"
            data-reveal
          >
            <div className="relative grid min-h-[320px] place-items-center overflow-hidden bg-[linear-gradient(150deg,#0A0A0A,#1a1a14)]">
              <div className="morph2"></div>
              <span className="relative z-[1] size-20"><BrandMark size={80} /></span>
            </div>
            <div className="flex flex-col justify-center gap-3.5 p-11">
              <div className={pressMeta}>
                <span className={pressTag}>Announcement</span><span>· May 14, 2026</span>
              </div>
              <h2 className="font-display text-[clamp(24px,2.6vw,36px)] font-extrabold leading-[1.12] tracking-[-0.03em]">
                KuvarTech raises to expand its pan-African payment rails
              </h2>
              <p className="text-[15px] text-ink-3">
                New capital will accelerate corridor coverage across the continent and bring the Kuvar
                Developer Platform to early access later this year.
              </p>
              <a className={`${arrowLink} mt-1.5`} href="#">
                Read the release <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press releases */}
      <section className={section} data-screen-label="Press — Releases">
        <div className={wrap}>
          <div className="mb-10 max-w-[560px]">
            <span className="eyebrow" data-reveal>Press releases</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              Latest announcements.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-[22px] w881:grid-cols-3">
            {RELEASES.map((r) => (
              <a
                className={`${cardHover} flex flex-col overflow-hidden p-0`}
                href="#"
                key={r.title}
                data-reveal
                style={{ "--reveal-delay": `${r.d}ms` }}
              >
                <div className={pressThumb}>
                  <Icon name={r.icon} size={40} sw={1.4} />
                </div>
                <div className={pressBody}>
                  <div className={pressMeta}>
                    <span className={pressTag}>{r.tag}</span><span>{r.date}</span>
                  </div>
                  <h3 className={pressTitle}>{r.title}</h3>
                  <p className={pressExcerpt}>{r.excerpt}</p>
                  <span className={`${arrowLink} mt-auto`}>
                    Read more <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Media coverage */}
      <section className={`${section} bg-surface-2`} data-screen-label="Press — Coverage">
        <div className={wrap}>
          <div className="mb-9 max-w-[560px]">
            <span className="eyebrow" data-reveal>In the media</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              Coverage.
            </h2>
          </div>
          <div className="flex flex-col border-t border-line" data-reveal>
            {COVERAGE.map((c) => (
              <a
                className="grid grid-cols-[1fr_auto] items-center gap-6 border-b border-line px-1.5 py-[26px] transition-[padding,background-color] duration-[180ms] hover:pl-3.5 w721:grid-cols-[1.4fr_2fr_auto] [&_svg]:size-[18px] [&_svg]:text-ink-3"
                href="#"
                key={c.outlet}
              >
                <div className="col-start-1 font-display text-[18px] font-bold tracking-[-0.02em]">{c.outlet}</div>
                <div className="text-[15px] text-ink-2">{c.head}</div>
                <Icon name="arrowUpRight" size={18} sw={2} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand assets */}
      <section className={sectionTight} data-screen-label="Press — Brand assets">
        <div className={wrap}>
          <div
            className="grid grid-cols-1 items-center gap-8 rounded-brand bg-band p-14 text-band-ink w881:grid-cols-2 w881:gap-12"
            data-reveal
          >
            <div>
              <span className="eyebrow is-accent">For media</span>
              <h2 className={`${hSection} mt-4 text-band-ink`}>Brand &amp; press kit.</h2>
              <p className="mt-4 max-w-[380px] text-band-ink-3">
                Logos, product shots, executive headshots and boilerplate — everything you need to
                cover KuvarTech.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {ASSETS.map((a) => (
                <a
                  className="flex items-center justify-between gap-3 rounded-brand-md border border-band-line bg-band-card p-[22px] transition-[border-color] duration-[180ms] hover:border-accent"
                  href="#"
                  key={a.name}
                >
                  <div>
                    <div className="font-display text-[15px] font-bold text-band-ink">{a.name}</div>
                    <div className="text-[12px] text-band-ink-3">{a.sub}</div>
                  </div>
                  <span className="grid size-[34px] shrink-0 place-items-center rounded-full bg-accent text-[#0A0A0A]">
                    <Icon name="download" size={17} sw={2.2} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className={`${sectionTight} pb-24`} data-screen-label="Press — Contact">
        <div className={`${wrapBase} max-w-[680px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>Media enquiries.</h2>
          <p className={`${lede} mx-auto mt-[18px] [--reveal-delay:100ms]`} data-reveal>
            For interviews, statements and press requests, reach our communications team directly.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
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
