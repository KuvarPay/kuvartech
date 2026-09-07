/* Turns the seed data in sanity/lib/seed.ts into an NDJSON file that
 * `sanity dataset import` can load.
 *
 * Run with:  npm run seed:generate
 *
 * The same data drives the site's fallback rendering, so what gets imported is
 * exactly what the site already shows before Sanity is configured.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SERVICES_SEED, CASE_STUDIES_SEED } from "../sanity/lib/seed.ts";

const here = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(here, "../sanity/seed/seed.ndjson");

type Doc = Record<string, unknown>;
const docs: Doc[] = [];

/* Ids use hyphens, not dots. Sanity reads the segment before a dot as a path
   prefix — the same mechanism behind `drafts.` — and path-prefixed documents
   are not readable anonymously, so a public dataset silently returns nothing
   for them. */
const slugField = (current: string) => ({ _type: "slug", current });
const ref = (id: string, key?: string) => ({
  _type: "reference",
  _ref: id,
  ...(key ? { _key: key } : {}),
});

/* ---- taxonomies, collected from what the case studies actually reference ---- */
const industries = new Map<string, string>();
const capabilities = new Map<string, string>();

for (const cs of CASE_STUDIES_SEED) {
  if (cs.industry) industries.set(cs.industry.slug, cs.industry.name);
  for (const c of cs.capabilities ?? []) capabilities.set(c.slug, c.name);
}
// Services are capabilities too, so the taxonomy covers all six.
for (const s of SERVICES_SEED) capabilities.set(s.slug, s.title);

for (const [slug, name] of industries) {
  docs.push({ _id: `industry-${slug}`, _type: "industry", name, slug: slugField(slug) });
}
for (const [slug, name] of capabilities) {
  docs.push({ _id: `capability-${slug}`, _type: "capability", name, slug: slugField(slug) });
}

/* ---- services ---- */
SERVICES_SEED.forEach((s, i) => {
  docs.push({
    _id: `service-${s.slug}`,
    _type: "service",
    title: s.title,
    slug: slugField(s.slug),
    summary: s.summary,
    icon: s.icon,
    includes: s.includes,
    order: i + 1,
  });
});

/* ---- case studies ---- */
CASE_STUDIES_SEED.forEach((cs, i) => {
  docs.push({
    _id: `caseStudy-${cs.slug}`,
    _type: "caseStudy",
    title: cs.title,
    slug: slugField(cs.slug),
    summary: cs.summary,
    icon: cs.icon,
    featured: cs.featured ?? false,
    client: cs.client,
    challenge: cs.challenge,
    approach: cs.approach,
    // Every object inside a Sanity array needs its own _key.
    outcomes: cs.outcomes?.map((o, n) => ({ ...o, _key: `outcome-${n}` })),
    stack: cs.stack,
    ...(cs.industry ? { industry: ref(`industry-${cs.industry.slug}`) } : {}),
    capabilities: (cs.capabilities ?? []).map((c, n) =>
      ref(`capability-${c.slug}`, `cap-${n}`),
    ),
    order: i + 1,
    publishedAt: new Date().toISOString(),
  });
});

/* ---- site settings singleton ---- */
docs.push({
  _id: "siteSettings",
  _type: "siteSettings",
  siteName: "KuvarTech",
  legalName: "KuvarTechnology",
});

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, docs.map((d) => JSON.stringify(d)).join("\n") + "\n", "utf8");

const counts = docs.reduce<Record<string, number>>((acc, d) => {
  const t = String(d._type);
  acc[t] = (acc[t] ?? 0) + 1;
  return acc;
}, {});

console.log(`Wrote ${docs.length} documents to sanity/seed/seed.ndjson`);
for (const [type, n] of Object.entries(counts).sort()) {
  console.log(`  ${type.padEnd(14)} ${n}`);
}
