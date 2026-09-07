import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, isSanityConfigured } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  /* Deliberately off. Pages are static and only re-read Sanity at build time
     or when the publish webhook regenerates a route. The CDN lags a mutation by
     roughly 20 seconds, so a webhook firing on publish would regenerate the
     page with the content that was just replaced — which looks exactly like
     the publish having failed. Visitors are served static HTML either way, so
     an uncached read here costs nothing at request time. */
  useCdn: false,
  perspective: "published",
});

/**
 * Fetch wrapper that stays safe before the Sanity project exists.
 * Returns the fallback instead of throwing, so pages render empty rather
 * than failing the build.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T,
): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    return await client.fetch<T>(query, params);
  } catch (err) {
    console.error("[sanity] query failed:", err);
    return fallback;
  }
}
