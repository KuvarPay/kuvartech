/* Reads Sanity config from the environment.
 *
 * projectId falls back to a placeholder so the app still builds before the
 * Sanity project exists - `isSanityConfigured` is the flag everything else
 * checks before attempting a fetch. */

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";

/** False until a real project id is supplied; fetch helpers no-op while false. */
export const isSanityConfigured = projectId !== "placeholder";

/** Server-only. Needed for draft previews, not for published reads. */
export const readToken = process.env.SANITY_API_READ_TOKEN || "";

/** Shared secret the revalidation webhook is signed with. */
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET || "";
