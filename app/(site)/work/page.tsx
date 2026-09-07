import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import CaseStudyThumb from "@/components/CaseStudyThumb";
import {
  arrowLink, breadcrumb, btn, cardHover, hDisplay, hSection, lede, pageHero,
  pressBody, pressExcerpt, pressMeta, pressTag, pressTitle,
  section, sectionTight, wrap, wrapBase,
} from "@/components/styles";
import { sanityFetch } from "@/sanity/lib/client";
import { allCaseStudiesQuery } from "@/sanity/lib/queries";
import { CASE_STUDIES_SEED } from "@/sanity/lib/seed";
import type { CaseStudy } from "@/sanity/lib/types";

export const metadata = {
  title: "Work",
  description:
    "Case studies from KuvarTech — payments infrastructure, cross-border transfer, e-commerce and custom platforms.",
};

export default async function WorkPage() {
  const studies = await sanityFetch<CaseStudy[]>(allCaseStudiesQuery, {}, CASE_STUDIES_SEED);

  return (
    <>
      <header className={pageHero} data-screen-label="Work — Hero">
        <div className={wrap}>
          <div className={breadcrumb}>
            <Link href="/" className="hover:text-ink">Home</Link> <span>/</span> <span>Work</span>
          </div>
          <span className="eyebrow" data-reveal>Selected work</span>
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[14ch]`} data-reveal-words>
            Things we built that are still running.
          </h1>
          <p className={`${lede} mt-6 max-w-[660px] [--reveal-delay:140ms]`} data-reveal>
            Client projects and our own products, across payments, commerce and research. Two of
            these we operate ourselves — which is the most honest reference we can offer.
          </p>
        </div>
      </header>

      <section className={section} data-screen-label="Work — Index">
        <div className={wrap}>
          {studies.length === 0 ? (
            <p className="text-ink-3">No case studies published yet.</p>
          ) : (
            /* Two columns rather than three: four rich case studies read better
               in a 2×2 than as a dense index, and three columns would orphan
               the fourth card. */
            <div className="grid grid-cols-1 gap-[22px] w881:grid-cols-2">
              {studies.map((cs, i) => (
                <Link
                  key={cs._id}
                  href={`/work/${cs.slug}`}
                  className={`${cardHover} flex flex-col overflow-hidden p-0`}
                  data-reveal
                  style={{ "--reveal-delay": `${(i % 2) * 100}ms` }}
                >
                  <CaseStudyThumb caseStudy={cs} iconSize={72} />
                  <div className={pressBody}>
                    <div className={pressMeta}>
                      <span className={pressTag}>
                        {cs.client?.isOwnProduct ? "Our product" : cs.client?.name ?? "Client work"}
                      </span>
                      {cs.industry?.name ? <span>· {cs.industry.name}</span> : null}
                    </div>
                    <h2 className={pressTitle}>{cs.title}</h2>
                    <p className={pressExcerpt}>{cs.summary}</p>
                    {cs.capabilities?.length ? (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {cs.capabilities.map((c) => (
                          <span
                            key={c.slug}
                            className="rounded-pill bg-surface-2 px-[11px] py-[5px] font-body text-[12px] font-medium text-ink-3"
                          >
                            {c.name}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <span className={`${arrowLink} mt-auto pt-2`}>
                      Read the case study <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={`${sectionTight} pb-24`} data-screen-label="Work — CTA">
        <div className={`${wrapBase} mx-auto max-w-[760px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>
            Have something like this in mind?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
            <Link className={btn("primary", "lg")} href="/contact">
              Start a conversation
              <ArrowRight size={17} />
            </Link>
            <Link className={btn("ghost", "lg")} href="/services">What we do</Link>
          </div>
        </div>
      </section>
    </>
  );
}
