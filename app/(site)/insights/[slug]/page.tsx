import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/components/Icons";
import RichText from "@/components/RichText";
import {
  breadcrumb, btn, hSection, lede, pageHero, sectionTight, wrapBase,
} from "@/components/styles";
import { sanityFetch } from "@/sanity/lib/client";
import { articleBySlugQuery, articleSlugsQuery } from "@/sanity/lib/queries";
import { ARTICLES_SEED } from "@/sanity/lib/seed";
import type { Article } from "@/sanity/lib/types";

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

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(
    articleSlugsQuery,
    {},
    ARTICLES_SEED.map((a) => a.slug),
  );
  return slugs.map((slug) => ({ slug }));
}

async function getArticle(slug: string) {
  return sanityFetch<Article | null>(
    articleBySlugQuery,
    { slug },
    ARTICLES_SEED.find((a) => a.slug === slug) ?? null,
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) return { title: "Not found" };
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <header className={pageHero} data-screen-label="Article — Hero">
        {/* Narrower than the site column: long-form wants ~65 characters a line. */}
        <div className={`${wrapBase} max-w-[760px]`}>
          <div className={breadcrumb}>
            <Link href="/" className="hover:text-ink">Home</Link> <span>/</span>{" "}
            <Link href="/insights" className="hover:text-ink">Insights</Link>
          </div>
          <div className="mb-5 flex flex-wrap items-center gap-2.5 text-[12.5px] text-ink-3">
            <span className="rounded-pill bg-surface-2 px-[13px] py-[6px] font-body font-medium">
              {CATEGORY_LABEL[article.category] ?? article.category}
            </span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          <h1 className="m-0 font-display text-[clamp(32px,4.4vw,52px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-balance">
            {article.title}
          </h1>
          <p className={`${lede} mt-5 max-w-none`}>{article.excerpt}</p>

          {article.author?.name ? (
            <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
              <span className="grid size-10 place-items-center rounded-full bg-surface-2 font-display text-[14px] font-bold text-ink-3">
                {article.author.name.slice(0, 2).toUpperCase()}
              </span>
              <div>
                <div className="font-display text-[14.5px] font-bold tracking-[-0.01em]">
                  {article.author.name}
                </div>
                {article.author.role ? (
                  <div className="text-[13px] text-ink-3">{article.author.role}</div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </header>

      {/* Tighter than a normal section: the byline already separates the hero from the body. */}
      <article className="pt-4 pb-16 w761:pb-24" data-screen-label="Article — Body">
        <div className={`${wrapBase} max-w-[760px]`}>
          <RichText value={article.body} />
        </div>
      </article>

      <section className={`${sectionTight} pb-24`} data-screen-label="Article — CTA">
        <div className={`${wrapBase} mx-auto max-w-[760px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>
            Working on something like this?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
            <Link className={btn("primary", "lg")} href="/contact">
              Start a conversation
              <ArrowRight size={17} />
            </Link>
            <Link className={btn("ghost", "lg")} href="/insights">More writing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
