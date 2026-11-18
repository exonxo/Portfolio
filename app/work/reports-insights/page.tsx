import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseSection, HighlightList, PullQuote } from "@/components/case-study/Section";
import { NextCase } from "@/components/case-study/NextCase";
import { Footer } from "@/components/sections/Footer";
import { getCaseStudy } from "@/content/caseStudies";
import { FlowFigure } from "@/components/case-study/FlowFigure";
import { Compass, Eye, ListOrdered, Ban, LayoutGrid, MessageSquare, Lightbulb, Code2 } from "lucide-react";

export const metadata = {
  title: "Reports and Insights 2.0 Case Study | Proloy Karmakar",
  description:
    "Customer research with five retail reporting teams, and a coded prototype of a new report builder for Ginesys One.",
};

// Customer and people names are deliberately left out: the visit records are
// confidential to Ginesys and its customers.
export default function ReportsInsightsCaseStudy() {
  const caseStudy = getCaseStudy("reports-insights");
  if (!caseStudy) return null;

  return (
    <>
      <CaseStudyHero caseStudy={caseStudy} />

      <CaseSection eyebrow="The setup" title="Five customers, two weeks." icon={Compass}>
        <p>
          I spoke to reporting teams at five retailers between 11 and 20 August
          2026, two at their offices and three by call. They were not a tidy
          sample. One had stopped using our reports altogether and was running
          the business off POS data. One was technical enough to patch around
          the product and ran a separate BI tool beside it. One contact had
          joined from an SAP shop a few months earlier and was the only new user
          in the group.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Method" title="What asking didn't tell me." icon={Eye}>
        <p>
          At the first site I asked the person walking me through their current
          tool what was difficult about it. He said nothing much. In the same
          session it came out that combining stock and sales meant exporting
          both and matching them by hand in Excel: a few hours each quarter, and
          about two days for one particular merge.
        </p>
        <p>After that I asked fewer questions and watched more.</p>
        <p>
          At another session I had opened by saying we were there to talk about
          design. Twice the customer began to raise something and stopped
          himself. When I widened the question, both points came straight out.
          The narrow framing had been costing me information.
        </p>
        <PullQuote>
          People who have used a tool for years stop noticing its problems.
          Watching them work tells you more than asking them what&apos;s wrong.
        </PullQuote>
      </CaseSection>

      <CaseSection
        eyebrow="Findings"
        title="What reporting teams wanted, in their order."
        icon={ListOrdered}
      >
        <ol className="list-decimal space-y-4 pl-5 marker:text-foreground-subtle">
          <li>
            <strong className="text-foreground">Numbers they can trust.</strong>{" "}
            One user had scheduled the same stock report at midnight, when
            nothing was transacting, and compared two runs to prove a mismatch
            was real. Another assumed correct output so completely that it never
            appeared on his wish list.
          </li>
          <li>
            <strong className="text-foreground">To know how long a run will take.</strong>{" "}
            A progress bar that sits at 5% and jumps to done is worse than none.
            One user said that if he knew it would take an hour, he would go and
            do something else.
          </li>
          <li>
            <strong className="text-foreground">Two modules in one report.</strong>{" "}
            Three of the five could not combine data such as sales with stock,
            or inventory with finance, and did it in Excel.
          </li>
          <li>
            <strong className="text-foreground">Pivot.</strong> Asked for by
            name at two accounts. One team kept four separate reports where one
            pivoted report would do.
          </li>
          <li>
            <strong className="text-foreground">The interface.</strong> The
            problems were real: field names that could not be told apart,
            filters that took one value at a time against 450 brands, no
            guidance in the builder. But the newest user told me plainly these
            were the complaints he would trade away.
          </li>
        </ol>
      </CaseSection>

      <CaseSection
        eyebrow="A decision"
        title="What I decided not to design."
        icon={Ban}
      >
        <p>
          One customer described a single heavy report freezing the system for
          everyone, with no way to cancel it. That affected more people than
          anything else I heard, and it needed a queue, a cancel button and an
          admin permission, not a redesign. I logged it with engineering as its
          own item so it would not wait on the new builder.
        </p>
      </CaseSection>

      {/* TODO(Proloy): confirm which finding drove each of these, and add what the visits changed and what you rejected. */}
      <CaseSection
        eyebrow="The prototype"
        title="What went into the new builder."
        icon={LayoutGrid}
      >
        <p>
          The prototype is a working web app, not a set of frames, so customers
          could build a real report with sample data.
        </p>
        <FlowFigure
          src="/case-studies/reports-insights/builder-table.jpg"
          width={2240}
          height={1400}
          alt="The report builder: dimensions and measures on the left, the chosen columns and page filters across the top, and net sales by zone for three months in the table. All figures are sample data."
          caption="The builder with sample data"
        />
        <HighlightList
          items={[
            "Arranging a report costs nothing until you run it. You drag fields onto Rows, Columns and Values, and nothing is queried until you press Generate. The customer most attached to their old tool valued exactly this: looking around without committing to anything.",
            "Pivot is the default. A new sheet opens as a crosstab, with a plain table one click away.",
            "Choosing the period is part of setup, with a note that a shorter range returns faster. The setup shows how fresh each data model is, and after a run the footer shows the record count and how long it took.",
            "Sharing and scheduling are separate, and each says what the recipient will see. A share opens under the recipient's own permissions; a scheduled file is generated under the sender's access. Two customers had reports where anyone could remove a filter or edit an admin's report.",
          ]}
        />
        <FlowFigure
          src="/case-studies/reports-insights/new-sheet-wizard.jpg"
          width={1840}
          height={1260}
          alt="The New Sheet setup, step one of three: sheet name and description, followed by model and period."
          caption="A new sheet starts with three short steps: details, data model, period"
        />
      </CaseSection>

      <CaseSection eyebrow="Building it" title="I wrote the front end myself." icon={Code2}>
        <p>
          The builder is a Next.js app with AG Grid for the tables. I designed
          it and wrote the whole front end: the field list, arranging rows,
          columns and values, the filters, the new sheet setup, and the share
          and schedule screens. I keep improving it and send each change as a
          pull request, the same way the engineers do.
        </p>
        <p>
          I write it with AI coding agents. Claude is my daily driver, in
          Cursor and Claude Code; I use Grok for quick changes and fixes; and
          for bigger changes I split the work across several agents. I review
          what they produce, and I ask the developers when something touches
          the backend or I&rsquo;m unsure of the approach.
        </p>
        <HighlightList
          items={[
            "No handoff loop. Nobody rebuilds my screens from Figma, so the back and forth between design and development on this module went away.",
            "The module didn't need a separate front-end engineer.",
            "My time moved from polishing mockups to checking whether a feature works with real data, and whether it is needed at all.",
          ]}
        />
      </CaseSection>

      <CaseSection eyebrow="Reaction" title="Asked to trial it, unprompted." icon={MessageSquare}>
        <p>
          One customer&apos;s team saw the prototype and said it was better than
          their current tool. They picked out drag and drop and pivoting, and
          asked to trial it for a day or two without being prompted. I held the
          trial until the prototype reflects change requests from the internal
          product review.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Reflection" title="What I'd do differently, and the limits." icon={Lightbulb}>
        <p>
          I would open every session wide. Framing a meeting as a design
          conversation made people hold back the problems they assumed were out
          of scope, and those were often the important ones.
        </p>
        <p>
          The limits are plain: five accounts, one researcher, no usage data.
          At one account everything was described to me rather than shown, so
          those defects still need reproducing before anyone acts on them.
        </p>
      </CaseSection>

      <NextCase currentSlug="reports-insights" />
      <Footer />
    </>
  );
}
