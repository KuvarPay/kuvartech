import Image from "next/image";
import { Icon } from "./Icons";
import { pressThumb } from "./styles";
import { urlFor } from "@/sanity/lib/image";
import type { CaseStudy } from "@/sanity/lib/types";

/* Renders the editor's cover image when there is one, and falls back to the
   gradient-and-icon treatment otherwise. Seed content has no images yet, and
   a case study should never be blocked on artwork. */
export default function CaseStudyThumb({
  caseStudy,
  iconSize = 44,
}: {
  caseStudy: Pick<CaseStudy, "coverImage" | "coverPath" | "icon" | "title">;
  iconSize?: number;
}) {
  const { coverImage, coverPath, icon, title } = caseStudy;

  if (coverImage?.asset) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
        <Image
          src={urlFor(coverImage as never).width(1200).url()}
          alt={coverImage.alt ?? title}
          fill
          sizes="(max-width: 880px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (coverPath) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
        <Image src={coverPath} alt="" fill sizes="(max-width: 880px) 100vw, 50vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div className={pressThumb}>
      <Icon name={(icon ?? "grid") as Parameters<typeof Icon>[0]["name"]} size={iconSize} sw={1.4} />
    </div>
  );
}
