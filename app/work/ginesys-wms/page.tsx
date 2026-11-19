import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { CaseSection, HighlightList, PullQuote } from "@/components/case-study/Section";
import { Footer } from "@/components/sections/Footer";
import { getCaseStudy } from "@/content/caseStudies";
import { FlowFigure } from "@/components/case-study/FlowFigure";

import { Compass, Lightbulb, ScanLine, LayoutGrid, Activity, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Ginesys WMS Case Study | Proloy Karmakar",
  description:
    "Redesigning a warehouse management app for one handed mobile operation in real working environments.",
};

export default function GinesysWmsCaseStudy() {
  const caseStudy = getCaseStudy("ginesys-wms");
  if (!caseStudy) return null;

  return (
    <>
      <CaseStudyLayout caseStudy={caseStudy}>

        <CaseSection
          eyebrow="The problem"
          title="A desktop warehouse app, crammed onto a phone."
          icon={Compass}
        >
          <p>
            The original Ginesys WMS was a desktop application stretched onto
            mobile devices. Five column tables required mental arithmetic
            mid pick. Fifteen field forms lived on six inch screens. The
            scanner was a bare text input with no viewfinder. Workers were
            asked to use two hands while physically handling stock.
          </p>
          <p>
            The product was deployed, but barely used. Floor supervisors were
            finishing the day on paper. The redesign brief was simple to
            state and hard to do: make it something warehouse workers
            actually want to open.
          </p>
          <HighlightList
            items={[
              "Workers operated phones one handed while moving cartons, often in low light and on the move",
              "Eight modules from picklist to bin count to GRN to delivery challan, each with their own field volume",
              "Repeated daily use meant every wasted second compounded across thousands of operations",
            ]}
          />
        </CaseSection>

        <CaseSection
          eyebrow="The constraint"
          title="Operational clarity, with one hand free."
          icon={Lightbulb}
        >
          <p>
            I made one constraint the spine of every design decision:
            everything had to be operable with the thumb of one hand. That
            single rule killed entire patterns. Center screen dialogs were
            out. Top tab bars were out. Dense tables were out. The redesign
            had to commit to bottom sheets, card lists, and progressive
            disclosure.
          </p>
          <PullQuote>
            Warehouse workers need operational clarity, and they need it with
            one hand free.
          </PullQuote>
          <p>
            That constraint also forced honesty about what data actually
            mattered moment to moment. Most of the fields on the legacy
            screens were there because they existed in the database, not
            because the worker needed them. Cutting was the design move.
          </p>
        </CaseSection>

        <CaseSection
          eyebrow="Scanner redesign"
          title="From bare input to progressive viewfinder."
          icon={ScanLine}
        >
          <p>
            The scanner is the most used surface in the app. I replaced the
            plain text input with a progressive viewfinder that gives the
            worker alignment guides, immediate visual confirmation, and a
            running list of items scanned in the current session. As scans
            accumulate, the viewfinder collapses to a compact summary, so
            the worker always knows where they are in the task.
          </p>
          <HighlightList
            items={[
              "Alignment guides adapt as scanned items accumulate",
              "Continuous scanning without dialog interruptions between items",
              "Success and error states surface inside the viewfinder, not as separate modals",
            ]}
          />
          <FlowFigure
            src="/case-studies/ginesys-wms/adhoc-scanning.jpg"
            width={1890}
            height={1181}
            alt="Delivery Challan in Adhoc mode: an empty list waiting for the first scan, the scanner open as a sheet, then the scanned items list with batch and serial tags and Save and Print enabled."
            caption="Delivery Challan, Adhoc mode: before, during and after scanning"
          />
          <FlowFigure
            src="/case-studies/ginesys-wms/adhoc-flow.jpg"
            width={3938}
            height={473}
            alt="The full Adhoc delivery flow, from the home tile to the challan created screen, including the discard, batch, serial and error states."
            caption="The whole Adhoc delivery flow, from the Figma file"
          />
        </CaseSection>

        <CaseSection
          eyebrow="Form and flow redesign"
          title="Fifteen fields, four steps, zero confusion."
          icon={LayoutGrid}
        >
          <p>
            The legacy Goods Receipt Creation form was a fifteen field
            desktop layout. I restructured it into a guided four step mobile
            flow with context aware fields, inline validation, and a clear
            success confirmation at the end. The worker is never asked to
            fill in something the system already knows.
          </p>
          <p>
            Across the eight modules, I replaced data heavy tables with task
            focused product cards. Each card shows the two or three numbers
            the worker actually needs, picked versus pending counts, status,
            and the next action. Everything else is one tap away.
          </p>
          <HighlightList
            items={[
              "Bottom sheets replace center screen dialogs across the entire app",
              "Semantic color coding by operation type keeps modules visually distinct",
              "Inter typeface chosen for legibility on low DPI warehouse devices",
              "Success confirmation screens added to every long form to remove worker uncertainty",
            ]}
          />
        </CaseSection>

        <CaseSection
          eyebrow="Outcome"
          title="An app workers actually open."
          icon={Activity}
        >
          <p>
            The redesign achieved consistency across all eight modules through
            a semantic design system, removed the dependency on two handed
            operation, and gave supervisors a tool they no longer needed to
            shadow with paper notes. The system now reads as one product, not
            eight bolted together.
          </p>
          <p>
            I wrote a longer narrative version of this case study on Medium
            if you want the full story.
          </p>
          <a
            href="https://medium.com/@proloykarmakar25/redesigning-a-warehouse-app-nobody-wanted-to-use-cc2a731ed0aa"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
          >
            Read on Medium
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.25} />
          </a>
        </CaseSection>

      </CaseStudyLayout>
      <Footer />
    </>
  );
}
