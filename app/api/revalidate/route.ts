import { revalidateTag, revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { revalidateSecret } from "@/sanity/env";

/* Sanity calls this on publish. It regenerates only the routes affected by
   the changed document, so pages stay statically served. */

type WebhookPayload = {
  _type: string;
  slug?: { current?: string };
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(req, revalidateSecret);

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }
    if (!body?._type) {
      return new NextResponse("Bad request", { status: 400 });
    }

    const slug = body.slug?.current;
    const paths: string[] = ["/"];

    switch (body._type) {
      case "caseStudy":
        paths.push("/work");
        if (slug) paths.push(`/work/${slug}`);
        break;
      case "article":
        paths.push("/insights");
        if (slug) paths.push(`/insights/${slug}`);
        break;
      case "service":
        paths.push("/services");
        break;
      case "role":
        paths.push("/careers");
        break;
      case "person":
      case "testimonial":
        paths.push("/about", "/work");
        break;
      case "siteSettings":
        revalidateTag("siteSettings");
        break;
    }

    paths.forEach((p) => revalidatePath(p));

    return NextResponse.json({ revalidated: true, paths, now: Date.now() });
  } catch (err) {
    console.error("[revalidate]", err);
    return new NextResponse(err instanceof Error ? err.message : "Error", { status: 500 });
  }
}
