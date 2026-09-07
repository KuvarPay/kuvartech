import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";
import CaseStudyThumb from "@/components/CaseStudyThumb";
import {
  arrowLink, btn, card, cardHover, hSection, lede, section, sectionTight, wrap, wrapBase,
  pressBody, pressExcerpt, pressMeta, pressTag, pressThumb, pressTitle,
  valueBody, valueCell, valueGrid, valueIcon, valueTitle,
} from "@/components/styles";
import { sanityFetch } from "@/sanity/lib/client";
import { allCaseStudiesQuery, allServicesQuery, latestArticlesQuery } from "@/sanity/lib/queries";
import { ARTICLES_SEED, CASE_STUDIES_SEED, SERVICES_SEED } from "@/sanity/lib/seed";
import type { Article, CaseStudy, Service } from "@/sanity/lib/types";

const ROUTES = [
  { href: "/contact#partnerships", name: "New business", desc: "Projects, partnerships and everything commercial" },
  { href: "/contact#press", name: "Press & media", desc: "Interviews, brand assets & statements" },
  { href: "/contact#investors", name: "Investor relations", desc: "For current & prospective investors" },
  { href: "/contact#support", name: "Product support", desc: "Help with KuvarPay or KuvarSend" },
];

const CATEGORY_LABEL: Record<string, string> = {
  engineering: "Engineering",
  industry: "Industry",
  news: "News",
};

export default async function HomePage() {
  const [studies, services, articles] = await Promise.all([
    sanityFetch<CaseStudy[]>(allCaseStudiesQuery, {}, CASE_STUDIES_SEED),
    sanityFetch<Service[]>(allServicesQuery, {}, SERVICES_SEED),
    sanityFetch<Article[]>(latestArticlesQuery, {}, ARTICLES_SEED.slice(0, 3)),
  ]);

  const featured = studies.slice(0, 3);

  return (
    <>
      {/* Hero — type-led. A consultancy's proof is its work, so the work follows
          immediately rather than a decorative visual. */}
      <header className="relative overflow-clip pt-20 pb-16 w761:pt-28 w761:pb-24" data-screen-label="Home — Hero">
        <div className={wrap}>
          <a
            className="inline-flex items-center gap-2 rounded-pill border border-line bg-card px-3.5 py-[7px] text-[13px] font-medium text-ink-2"
            href="https://developers.kuvarpay.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
          >
            <span className="pill-dot"></span> The Kuvar Developer Platform is live
          </a>

          <h1
            className="reveal-words mt-8 mb-7 max-w-[19ch] font-display text-[clamp(42px,6.2vw,86px)] font-black leading-[0.98] tracking-[-0.05em] text-balance"
            data-reveal-words
          >
            We build software businesses run on.
          </h1>

          <p className="mb-10 max-w-[620px] text-[clamp(17px,1.35vw,21px)] leading-[1.55] text-ink-2 text-pretty [--reveal-delay:120ms]" data-reveal>
            KuvarTech is a technology consultancy. Payments, data, AI, blockchain, commerce —
            whatever the problem needs. We know it holds up, because our own products run on it.
          </p>

          <div className="flex flex-wrap gap-3.5 [--reveal-delay:200ms]" data-reveal>
            <Link className={btn("primary", "lg")} href="/work">
              See our work
              <ArrowRight size={17} />
            </Link>
            <Link className={btn("ghost", "lg")} href="/contact">
              Start a conversation
            </Link>
          </div>
        </div>
      </header>

      {/* Selected work */}
      <section className={`${section} bg-surface-2`} data-screen-label="Home — Work">
        <div className={wrap}>
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[620px]">
              <span className="eyebrow" data-reveal>Selected work</span>
              <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
                Things we built that are still running.
              </h2>
            </div>
            <Link className={arrowLink} href="/work" data-reveal>
              All work <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-[22px] w881:grid-cols-3">
            {featured.map((cs, i) => (
              <Link
                key={cs._id}
                href={`/work/${cs.slug}`}
                className={`${cardHover} flex flex-col overflow-hidden p-0`}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 100}ms` }}
              >
                <CaseStudyThumb caseStudy={cs} iconSize={52} />
                <div className={pressBody}>
                  <div className={pressMeta}>
                    <span className={pressTag}>
                      {cs.client?.isOwnProduct ? "Our product" : cs.client?.name ?? "Client work"}
                    </span>
                    {cs.industry?.name ? <span>· {cs.industry.name}</span> : null}
                  </div>
                  <h3 className={pressTitle}>{cs.title}</h3>
                  <p className={pressExcerpt}>{cs.summary}</p>
                  <span className={`${arrowLink} mt-auto pt-2`}>
                    Read <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className={section} data-screen-label="Home — Services">
        <div className={wrap}>
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[620px]">
              <span className="eyebrow" data-reveal>What we do</span>
              <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
                Six things we do properly.
              </h2>
            </div>
            <Link className={arrowLink} href="/services" data-reveal>
              All services <ArrowRight size={16} />
            </Link>
          </div>

          <div className={valueGrid}>
            {services.map((s, i) => (
              <div className={valueCell} key={s._id} data-reveal style={{ "--reveal-delay": `${(i % 3) * 80}ms` }}>
                <span className={valueIcon}>
                  <Icon name={(s.icon ?? "grid") as Parameters<typeof Icon>[0]["name"]} size={23} sw={2} />
                </span>
                <h3 className={valueTitle}>{s.title}</h3>
                <p className={valueBody}>{s.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The differentiator */}
      <section className={sectionTight} data-screen-label="Home — Proof">
        <div className={wrap}>
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-brand bg-band px-14 py-16 text-band-ink w881:grid-cols-[1.05fr_0.95fr] w881:gap-14"
            data-reveal
          >
            <div>
              <span className="eyebrow is-accent">Why us</span>
              <h2 className={`${hSection} mt-4 text-band-ink`}>
                Most consultancies have never shipped a product they own.
              </h2>
            </div>
            <div className="text-[16.5px] leading-[1.7] text-band-ink-3">
              <p className="mb-5">
                KuvarPay and KuvarSend are ours. We run them, we get paged when they break, and we
                carry the consequences of every architectural shortcut we were ever tempted by.
              </p>
              <p>
                That is a different kind of reference from a testimonial. When we tell you a design
                will hold, it is because we have had to live inside one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className={section} data-screen-label="Home — Insights">
        <div className={wrap}>
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[620px]">
              <span className="eyebrow" data-reveal>Writing</span>
              <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
                What we learned building it.
              </h2>
            </div>
            <Link className={arrowLink} href="/insights" data-reveal>
              All writing <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-[22px] w881:grid-cols-3">
            {articles.map((a, i) => (
              <Link
                key={a._id}
                href={`/insights/${a.slug}`}
                className={`${cardHover} flex flex-col overflow-hidden p-0`}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 100}ms` }}
              >
                <div className={pressThumb}>
                  <span className="font-display text-[15px] font-bold uppercase tracking-[0.14em] text-ink-3">
                    {CATEGORY_LABEL[a.category] ?? a.category}
                  </span>
                </div>
                <div className={pressBody}>
                  <h3 className={pressTitle}>{a.title}</h3>
                  <p className={pressExcerpt}>{a.excerpt}</p>
                  <span className={`${arrowLink} mt-auto pt-2`}>
                    Read <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={`${section} bg-surface-2`} data-screen-label="Home — Contact">
        <div className={`${wrap} grid grid-cols-1 items-center gap-9 w881:grid-cols-2 w881:gap-14`}>
          <div>
            <span className="eyebrow" data-reveal>Get in touch</span>
            <h2 className={`${hSection} reveal-words mt-[18px]`} data-reveal-words>
              Tell us what you&apos;re trying to build.
            </h2>
            <p className={`${lede} mt-[18px] [--reveal-delay:120ms]`} data-reveal>
              Bring an idea, a half-built system, or a problem you cannot name yet. If the answer
              is that you don&apos;t need us, we will say so.
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
