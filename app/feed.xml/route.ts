import { sanityFetch } from "@/sanity/lib/client";
import { allArticlesQuery } from "@/sanity/lib/queries";
import { ARTICLES_SEED } from "@/sanity/lib/seed";
import type { Article } from "@/sanity/lib/types";

const SITE = "https://kuvar.co";

/** XML has five characters that must never appear raw in content. */
function escapeXml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = await sanityFetch<Article[]>(allArticlesQuery, {}, ARTICLES_SEED);

  const items = articles
    .map((a) => {
      const url = `${SITE}/insights/${a.slug}`;
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(a.excerpt)}</description>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <category>${escapeXml(a.category)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>KuvarTech — Insights</title>
    <link>${SITE}/insights</link>
    <description>Writing from KuvarTech on payments, data, automation and how we decide what to build.</description>
    <language>en</language>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
