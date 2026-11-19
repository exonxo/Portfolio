import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import type { CaseStudy } from "@/content/caseStudies";
import { designToCode, doDifferently, flowMaps, keyDecisions } from "@/content/caseStudyMeta";
import { DesignToCode } from "./DesignToCode";
import { DoDifferently } from "./DoDifferently";
import { FlowMap } from "./FlowMap";
import { CaseStudyHero } from "./CaseStudyHero";
import { KeyDecisions } from "./KeyDecisions";
import { NextCase } from "./NextCase";
import { CaseSection, sectionId } from "./Section";
import { SectionIndex, type SectionIndexItem } from "./SectionIndex";

const WORDS_PER_MINUTE = 220;

// Props whose text is read on the page (section titles, list items, captions).
const TEXT_PROPS = ["eyebrow", "title", "caption", "items", "children"] as const;

/** Counts the words in a server-rendered JSX tree, so reading time follows the page text. */
function countWords(node: unknown): number {
  if (typeof node === "string") return node.split(/\s+/).filter(Boolean).length;
  if (typeof node === "number") return 1;
  if (Array.isArray(node)) return node.reduce<number>((sum, n) => sum + countWords(n), 0);
  if (isValidElement(node)) {
    const props = node.props as Record<string, unknown>;
    return TEXT_PROPS.reduce((sum, key) => sum + countWords(props[key]), 0);
  }
  return 0;
}

type CaseSectionElement = ReactElement<{ eyebrow: string; title: string }>;

/**
 * Shared frame for a case study page: hero, key decisions, the sections with a
 * sticky index beside them on wide screens, then previous and next links.
 * Pass the page's <CaseSection> elements as children.
 */
export function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: CaseStudy;
  children: ReactNode;
}) {
  const decisions = keyDecisions[caseStudy.slug] ?? [];

  const sections = Children.toArray(children).filter(
    (child): child is CaseSectionElement =>
      isValidElement(child) && child.type === CaseSection,
  );
  const indexItems: SectionIndexItem[] = sections.map((s) => ({
    id: sectionId(s.props.eyebrow),
    label: s.props.eyebrow,
  }));

  const words =
    countWords(caseStudy.title) +
    countWords(Object.values(caseStudy.brief)) +
    countWords(decisions.flatMap((d) => [d.decision, d.why])) +
    countWords(children);
  const readingMinutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return (
    <>
      <CaseStudyHero caseStudy={caseStudy} readingMinutes={readingMinutes} />
      <KeyDecisions decisions={decisions} />
      <FlowMap map={flowMaps[caseStudy.slug]} />
      <DesignToCode data={designToCode[caseStudy.slug]} />

      <div className="relative">
        {/* The index sits in the left rail that CaseSection leaves free at xl. */}
        <div className="pointer-events-none absolute inset-0 hidden xl:block">
          <div className="mx-auto h-full w-full max-w-7xl px-10 pt-24">
            <div className="pointer-events-auto sticky top-28">
              <SectionIndex items={indexItems} />
            </div>
          </div>
        </div>
        {children}
      </div>

      <DoDifferently points={doDifferently[caseStudy.slug]} />
      <NextCase currentSlug={caseStudy.slug} />
    </>
  );
}
