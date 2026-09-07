import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import {
  arrowLink, breadcrumb, btn, cardHover, hDisplay, hSection, lede, pageHero,
  pressBody, pressExcerpt, pressMeta, pressThumb, pressTitle,
  section, sectionTight, wrap, wrapBase,
} from "@/components/styles";
import { sanityFetch } from "@/sanity/lib/client";
import { allArticlesQuery } from "@/sanity/lib/queries";
import { ARTICLES_SEED } from "@/sanity/lib/seed";
import type { Article } from "@/sanity/lib/types";

export const metadata = {
  title: "Insights",
  description:
    "Writing from KuvarTech on payments, data, automation and how we decide what to build.",
};

const CATEGORY_LABEL: Record<string, string> = {
  engineering: "Engineering",
  industry: "Industry",
  news: "News",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function InsightsPage() {
  const articles = await sanityFetch<Article[]>(allArticlesQuery, {}, ARTICLES_SEED);

  return (
    <>
      <header className={pageHero} data-screen-label="Insights — Hero">
        <div className={wrap}>
          <div className={breadcrumb}>
            <Link href="/" className="hover:text-ink">Home</Link> <span>/</span> <span>Insights</span>
          </div>
          <span className="eyebrow" data-reveal>Writing</span>
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[15ch]`} data-reveal-words>
            What we learned building it.
          </h1>
          <p className={`${lede} mt-6 max-w-[640px] [--reveal-delay:140ms]`} data-reveal>
            Notes on payments, data and automation — written from work we actually shipped,
            not from a content calendar.
          </p>
        </div>
      </header>

      <section className={section} data-screen-label="Insights — Index">
        <div className={wrap}>
          {articles.length === 0 ? (
            <p className="text-ink-3">Nothing published yet.</p>
          ) : (
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
                    {/* Category is already the thumbnail's label; repeating it here
                        was pure duplication. */}
                    <div className={pressMeta}>
                      <span>{formatDate(a.publishedAt)}</span>
                    </div>
                    <h2 className={pressTitle}>{a.title}</h2>
                    <p className={pressExcerpt}>{a.excerpt}</p>
                    <span className={`${arrowLink} mt-auto pt-2`}>
                      Read <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={`${sectionTight} pb-24`} data-screen-label="Insights — CTA">
        <div className={`${wrapBase} mx-auto max-w-[760px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>
            Got a problem worth writing about?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
            <Link className={btn("primary", "lg")} href="/contact">
              Start a conversation
              <ArrowRight size={17} />
            </Link>
            <Link className={btn("ghost", "lg")} href="/work">See our work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
