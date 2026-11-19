"use client";

import { useRouter } from "next/navigation";
import PictureRailGallery, { type PictureRailItem } from "@/components/ui/picture-rail-gallery";
import { caseStudies } from "@/content/caseStudies";

// How each case study hangs on the rail. Covers are the real screenshots from
// the case studies; the frames and drops just keep the wall from looking uniform.
const hang: Record<string, Pick<PictureRailItem, "aspect" | "frame" | "mat" | "drop" | "tag">> = {
  "ginesys-pos": { aspect: 412 / 920, frame: "black", mat: true, drop: 0, tag: "Shipped" },
  "reports-insights": { aspect: 1.6, frame: "white", mat: true, drop: 0.08, tag: "In pilot" },
  "ginesys-wms": { aspect: 1.6, frame: "oak", drop: -0.04, tag: "Shipped" },
  easecare: { aspect: 1.6, frame: "black", mat: true, drop: 0.12, tag: "Live" },
  playbawaal: { aspect: 1.6, frame: "oak", mat: true, drop: 0.02, tag: "Live" },
};

const items: PictureRailItem[] = caseStudies
  .filter((cs) => cs.image)
  .map((cs) => ({
    id: cs.slug,
    title: cs.shortTitle,
    artist: cs.capability,
    year: cs.year,
    image: cs.image as string,
    ...hang[cs.slug],
  }));

export function CaseRail() {
  const router = useRouter();
  return (
    <PictureRailGallery
      items={items}
      autoplay
      interval={3200}
      caption="Point at a frame to light it. Click one to open the case study."
      labels={{ front: "Front", back: "Back", close: "Close", open: "Click to open" }}
      onOpen={(i) => {
        const slug = items[i]?.id;
        const cs = caseStudies.find((c) => c.slug === slug);
        if (cs) router.push(cs.href);
      }}
      className="bg-transparent"
    />
  );
}
