import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Icon, ArrowRight } from "@/components/Icons";
import RichText from "@/components/RichText";
import {
  breadcrumb, btn, hDisplay, hSection, lede, pageHero,
  outcomeGrid, stat, statDivider, statLabel, statNum,
  section, sectionTight, wrap, wrapBase,
} from "@/components/styles";
import { sanityFetch } from "@/sanity/lib/client";
import { caseStudyBySlugQuery, caseStudySlugsQuery } from "@/sanity/lib/queries";
import { CASE_STUDIES_SEED } from "@/sanity/lib/seed";
import type { CaseStudy } from "@/sanity/lib/types";

/** Prerenders every case study at build time. Falls back to the seed slugs
 *  while Sanity is unconfigured, so the routes exist either way. */
export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(
    caseStudySlugsQuery,
    {},
    CASE_STUDIES_SEED.map((c) => c.slug),
  );
  return slugs.map((slug) => ({ slug }));
}

async function getCaseStudy(slug: string) {
  return sanityFetch<CaseStudy | null>(
    caseStudyBySlugQuery,
    { slug },
    CASE_STUDIES_SEED.find((c) => c.slug === slug) ?? null,
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) return { title: "Not found" };
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) notFound();

  /* A client who has asked not to be named still gets a full case study — the
     metrics carry it, the logo and name are simply withheld. */
  const attribution = cs.client?.isOwnProduct
    ? "Our own product"
    : cs.client?.isAnonymous
      ? "Client, name withheld"
      : cs.client?.name ?? "Client work";

  return (
    <>
      <header className={pageHero} data-screen-label="Case study — Hero">
        <div className={wrap}>
          <div className={breadcrumb}>
            <Link href="/" className="hover:text-ink">Home</Link> <span>/</span>{" "}
            <Link href="/work" className="hover:text-ink">Work</Link> <span>/</span>{" "}
            <span>{cs.client?.isOwnProduct ? cs.client?.name : attribution}</span>
          </div>
          <div className="flex items-center gap-3.5" data-reveal>
            {cs.logoPath ? (
              <span className="grid size-11 shrink-0 place-items-center rounded-brand-md bg-ink p-2">
                <Image src={cs.logoPath} alt="" width={28} height={28} className="size-7 object-contain" />
              </span>
            ) : null}
            <span className="eyebrow">{attribution}</span>
          </div>
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[18ch]`} data-reveal-words>
            {cs.title}
          </h1>
          <p className={`${lede} mt-6 max-w-[680px] [--reveal-delay:140ms]`} data-reveal>
            {cs.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-2.5" data-reveal>
            {cs.industry?.name ? (
              <span className="rounded-pill border border-line px-[13px] py-[6px] font-body text-[12.5px] font-medium text-ink-3">
                {cs.industry.name}
              </span>
            ) : null}
            {cs.capabilities?.map((c) => (
              <span
                key={c.slug}
                className="rounded-pill bg-surface-2 px-[13px] py-[6px] font-body text-[12.5px] font-medium text-ink-3"
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Outcomes */}
      {cs.outcomes?.length ? (
        <section className={sectionTight} data-screen-label="Case study — Outcomes">
          <div className={wrap}>
            <div className="rounded-brand bg-surface-2 px-10 py-11" data-reveal>
              <div className={outcomeGrid[Math.min(cs.outcomes.length, 4)] ?? outcomeGrid[4]}>
                {cs.outcomes.map((o) => (
                  <div className={stat} key={o.label}>
                    <span className={statNum}>{o.metric}</span>
                    <div className={statDivider}></div>
                    <span className={statLabel}>{o.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Story */}
      <section className={section} data-screen-label="Case study — Story">
        <div className={wrap}>
          <div className="grid grid-cols-1 gap-10 w881:grid-cols-[0.35fr_0.65fr] w881:gap-16">
            <div>
              <span className="eyebrow" data-reveal>The challenge</span>
            </div>
            <div data-reveal>
              <RichText value={cs.challenge} />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-14 w881:grid-cols-[0.35fr_0.65fr] w881:gap-16">
            <div>
              <span className="eyebrow" data-reveal>What we did</span>
            </div>
            <div data-reveal>
              <RichText value={cs.approach} />

              {cs.stack?.length ? (
                <div className="mt-8 border-t border-line pt-7">
                  <h3 className="mb-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-3">
                    Built with
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-pill bg-surface-2 px-[11px] py-[5px] font-body text-[12.5px] font-medium text-ink-3"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {cs.testimonial?.quote ? (
        <section className={sectionTight} data-screen-label="Case study — Testimonial">
          <div className={wrap}>
            <div className="rounded-brand bg-band px-14 py-16 text-band-ink" data-reveal>
              <p className="max-w-[24ch] font-display text-[clamp(22px,2.6vw,34px)] font-bold leading-[1.28] tracking-[-0.03em] text-band-ink text-balance">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </p>
              <div className="mt-7 text-[14px] text-band-ink-3">
                {cs.testimonial.name}
                {cs.testimonial.role ? `, ${cs.testimonial.role}` : ""}
                {cs.testimonial.company ? ` · ${cs.testimonial.company}` : ""}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className={`${sectionTight} pb-24`} data-screen-label="Case study — CTA">
        <div className={`${wrapBase} mx-auto max-w-[760px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>
            Want something built like this?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
            <Link className={btn("primary", "lg")} href="/contact">
              Start a conversation
              <ArrowRight size={17} />
            </Link>
            <Link className={btn("ghost", "lg")} href="/work">See more work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
