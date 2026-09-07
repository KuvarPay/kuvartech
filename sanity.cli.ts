import { readFileSync } from "node:fs";
import { defineCliConfig } from "sanity/cli";

/* Config for the `sanity` CLI (dataset import/export, studio deploy).
 *
 * This is separate from sanity.config.ts, which configures the Studio itself.
 * The CLI runs outside Next, so it never sees .env.local — that is a Next
 * convention, not a general one. Reading the file here keeps the project id in
 * one place instead of duplicating it. */
function fromEnvLocal(key: string): string | undefined {
  try {
    const line = readFileSync(new URL(".env.local", import.meta.url), "utf8")
      .split("\n")
      .find((l) => l.trim().startsWith(`${key}=`));
    return line?.slice(line.indexOf("=") + 1).trim() || undefined;
  } catch {
    return undefined;
  }
}

export default defineCliConfig({
  api: {
    projectId:
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? fromEnvLocal("NEXT_PUBLIC_SANITY_PROJECT_ID"),
    dataset:
      process.env.NEXT_PUBLIC_SANITY_DATASET ?? fromEnvLocal("NEXT_PUBLIC_SANITY_DATASET") ?? "production",
  },
});
