import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseSection, HighlightList, PullQuote } from "@/components/case-study/Section";
import { NextCase } from "@/components/case-study/NextCase";
import { Footer } from "@/components/sections/Footer";
import { getCaseStudy } from "@/content/caseStudies";
import { Compass, Lightbulb, LayoutGrid, Activity } from "lucide-react";

export const metadata = {
  title: "EaseCare Case Study | Proloy Karmakar",
  description:
    "Designing a unified two sided marketplace for home care services across consumer and provider apps.",
};

export default function EaseCareCaseStudy() {
  const caseStudy = getCaseStudy("easecare");
  if (!caseStudy) return null;

  return (
    <>
      <CaseStudyHero caseStudy={caseStudy} />

      <CaseSection
        eyebrow="The problem"
        title="Home care is a fragmented, low trust market."
        icon={Compass}
      >
        <p>
          The home care space in India is split between unorganized
          independents and small agencies on the supply side, and anxious
          families with urgent needs on the demand side. Existing apps
          force consumers to scroll through long lists of providers without
          context, and force providers to chase opportunities through
          WhatsApp and phone calls.
        </p>
        <p>
          The founders of EaseCare wanted a single product that could serve
          both sides cleanly. Consumers needed to post requirements quickly
          and feel confident about who they were hiring. Providers needed a
          calm, focused workspace to receive jobs, send bids, and manage
          their workforce.
        </p>
        <HighlightList
          items={[
            "Twelve distinct service categories from elder care to plumbing, each with their own mental model",
            "Two very different user types with opposite expectations on speed, trust, and visibility",
            "Real time bidding, scheduling, and messaging needed to coexist without overwhelming either side",
          ]}
        />
      </CaseSection>

      <CaseSection
        eyebrow="The approach"
        title="One product, two carefully separated mental models."
        icon={Lightbulb}
      >
        <p>
          I framed EaseCare as two products that share a spine. The consumer
          app is built around confidence and speed, getting from a fresh
          request to a chosen provider in as few steps as possible. The
          provider app is built around focus and throughput, surfacing only
          the opportunities that are relevant and actionable right now.
        </p>
        <p>
          A small set of shared primitives, service requests, bids, bookings,
          and conversations, let the two apps interoperate without forcing
          either side to learn the other&apos;s vocabulary. Every interaction
          rooted itself in this primitive language.
        </p>
        <PullQuote>
          Marketplaces fail when one side&apos;s clarity is bought at the cost of
          the other&apos;s. The job is to design both halves at once.
        </PullQuote>
      </CaseSection>

      <CaseSection
        eyebrow="Key flows"
        title="Designing the spine: request, bid, book."
        icon={LayoutGrid}
      >
        <p>
          On the consumer side, I designed a fast posting flow with
          contextual fields per service category, a swipeable shortlisting
          experience for incoming bids, and a clear booking confirmation
          path that reduced last minute drop offs.
        </p>
        <p>
          On the provider side, the dashboard centers on an incoming
          requests feed with smart filters and a quick add pool for instant
          matching. Agencies can manage their workforce, dispatch jobs, and
          track bookings through one interface. Independent providers get a
          lighter version focused on personal earnings and reputation.
        </p>
        <HighlightList
          items={[
            "Swipe to shortlist pattern that compresses comparison shopping into a single screen",
            "Provider feed prioritized by category match, distance, and historical acceptance rate",
            "Real time messaging integrated into the booking thread, not a separate inbox to manage",
            "Payment, ratings, and dispute resolution surfaced contextually at the right moment in the journey",
          ]}
        />
      </CaseSection>

      <CaseSection
        eyebrow="Outcome"
        title="A shippable cross platform marketplace, end to end."
        icon={Activity}
      >
        <p>
          The product shipped on web and mobile (React with Capacitor) with
          a unified design system, twelve live service categories, and a
          working real time bidding loop. Production deployment is live at
          easecarecrossplatform.vercel.app.
        </p>
        <p>
          More importantly, the team now has a stable design language and
          interaction grammar to extend the product into new verticals
          without rewriting the foundation. Adding a thirteenth service
          category is a content decision, not a design decision.
        </p>
      </CaseSection>

      <NextCase currentSlug="easecare" />
      <Footer />
    </>
  );
}
