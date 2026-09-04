import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, isSanityConfigured } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // CDN for published content; disabled in draft mode by the fetch helper.
  useCdn: true,
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
