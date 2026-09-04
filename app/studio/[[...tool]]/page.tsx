import { isSanityConfigured } from "@/sanity/env";
import Studio from "./Studio";

/* Rendered outside app/(site), so the Studio gets no marketing nav or footer.
   The Studio itself is client-only; this server component just gates it. */
export const dynamic = "force-dynamic";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div style={{ fontFamily: "system-ui", padding: "48px", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
        <h1 style={{ fontSize: "22px", marginBottom: "12px" }}>Sanity is not configured yet</h1>
        <p style={{ color: "#555" }}>Set these in <code>.env.local</code> and restart.</p>
      </div>
    );
  }
  return <Studio />;
}
