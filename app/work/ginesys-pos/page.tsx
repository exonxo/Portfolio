import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import {
  CaseSection,
  HighlightList,
  PullQuote,
} from "@/components/case-study/Section";
import { ScreenSlot, ScreenGrid } from "@/components/case-study/ScreenSlot";
import { NextCase } from "@/components/case-study/NextCase";
import { Footer } from "@/components/sections/Footer";
import { FlowFigure } from "@/components/case-study/FlowFigure";
import { getCaseStudy } from "@/content/caseStudies";
import {
  Compass,
  Layers,
  ScanLine,
  ShieldAlert,
  Hand,
  ListChecks,
  CreditCard,
  FileText,
  Search,
  Target,
  TrendingUp,
  Wifi,
} from "lucide-react";

export const metadata = {
  title: "Ginesys POS Case Study | Proloy Karmakar",
  description:
    "Designing the mPOS stream for Ginesys One — a Pan-India retail platform handling 436 screens, 48 modules, and the operational reality of thousands of store associates.",
};

export default function GinesysPosCaseStudy() {
  const caseStudy = getCaseStudy("ginesys-pos");
  if (!caseStudy) return null;

  return (
    <>
      <CaseStudyHero caseStudy={caseStudy} />

      {/* ─── Problem ─── */}
      <CaseSection
        eyebrow="The problem"
        title="Retail billing is brutal. Mobile POS makes it brutaler."
        icon={Compass}
      >
        <p>
          Ginesys One is one of India&apos;s largest retail POS and ERP
          platforms, deployed across thousands of stores from boutique outlets
          to nation-wide chains. The mobile POS stream — mPOS — is what a store
          associate holds in their hand while ringing up a customer. It has to
          do everything a desktop POS does: barcode scanning, customer tagging,
          dynamic pricing, multi-tender payments, returns, exchanges, loyalty,
          GST splits, promotions. On a 5-inch screen. One-handed. At peak
          retail load. Often on flaky 3G.
        </p>
        <p>
          When I joined as the IC leading the mPOS design stream, the existing
          flow was a literal port of the desktop POS: dense screens, modal-stack
          dialogs, forms with twelve fields visible at once. Associates trained
          for days, made errors anyway, and slowed checkouts during the busiest
          retail hours. The product team had committed to a Pan-India rollout
          of MVP &ldquo;Quebuster&rdquo; — a fast-lane POS for queue-busting
          during festive sales. The current UX would not survive contact with
          a Diwali rush.
        </p>
        <HighlightList
          items={[
            "Retail business rules are dense and stacked — taxes, promotions, loyalty, multiple price lists, member discounts",
            "Associates change frequently and train minimally; the UI is their only documentation",
            "Network is unreliable in store basements and tier-2/3 city outlets where Ginesys is heavily deployed",
            "Every second of friction at the counter is a measurable loss in revenue per store hour",
          ]}
        />
      </CaseSection>

      {/* ─── Approach ─── */}
      <CaseSection
        eyebrow="The approach"
        title="Treat the POS as an operating system, not a form."
        icon={Layers}
      >
        <p>
          I started by mapping every business object in retail — items, lines,
          carts, customers, tenders, promotions, returns — and how each one
          mutates through a single checkout. From that, I worked backwards to
          the smallest possible screen that an associate actually needs to see
          at each step. The mental model I built around: one primary action per
          screen, every state legible from across a counter, and every edge
          case explicitly designed.
        </p>
        <PullQuote>
          Mobile POS is not a form to fill out. It is a stream of decisions a
          human is making faster than they can think. The design has to hold
          their place when the network drops, when the customer changes their
          mind, when the next person in queue is already glaring.
        </PullQuote>
        <p>
          I worked directly with the CTO and senior business analysts to
          interpret the retail rules — what looks like a small detail on paper
          (e.g. &ldquo;a member discount can stack with a coupon but not with a
          promotional price&rdquo;) drives entire UI states. From there, I
          partnered with backend and frontend engineering teams to make every
          decision feasible inside their data contracts and offline cache
          design. We shipped weekly.
        </p>
      </CaseSection>

      {/* ─── Core flow ─── */}
      <CaseSection
        eyebrow="The core flow"
        title="Login. Scan. Tag. Tender. Done."
        icon={ScanLine}
      >
        <p>
          The mPOS happy path is five touches if the associate is fast. Each
          screen is built so the most likely next action is the largest target,
          the next most likely is one tap away, and everything else is hidden
          behind progressive disclosure.
        </p>
        <ScreenGrid>
          <ScreenSlot
            caption="Login — user ID + password"
            src="/case-studies/ginesys-pos/login.png"
            alt="Ginesys POS login screen with user ID and password fields"
          />
          <ScreenSlot
            caption="Home — empty cart, ready to scan"
            src="/case-studies/ginesys-pos/home-blank.png"
            alt="Ginesys POS home screen with empty cart state"
          />
          <ScreenSlot
            caption="Scanner — camera viewfinder with live capture"
            src="/case-studies/ginesys-pos/scanner.png"
            alt="Ginesys POS barcode scanner with camera viewfinder"
          />
          <ScreenSlot
            caption="Item details — price, batch, RSP"
            src="/case-studies/ginesys-pos/item-details.png"
            alt="Item details sheet showing price, barcode, and batch information"
          />
          <ScreenSlot
            caption="Search customer — tag a member to the cart"
            src="/case-studies/ginesys-pos/search-customer.png"
            alt="Search customer sheet to find and tag a member"
          />
          <ScreenSlot
            caption="Checkout — multi-line cart with customer tagged"
            src="/case-studies/ginesys-pos/payment.png"
            alt="Checkout screen showing items, customer tag, and payment button"
          />
        </ScreenGrid>
        <p className="mt-8">
          The cart itself has{" "}
          <strong className="text-foreground">136 designed states</strong> —
          empty, loading, item added, item edited, member tagged, discount
          applied, promotion auto-applied, returns mixed in, GST split visible,
          out-of-stock warning, and so on. Every one of those states is a
          deliberate screen, not a tooltip or a toast.
        </p>
      </CaseSection>

      {/* ─── Scanning (from the Figma developer notes) ─── */}
      <CaseSection
        eyebrow="Scanning"
        title="A cashier with a phone in one hand."
        icon={Hand}
      >
        <p>
          A counter terminal has a keyboard, a scanner and a person who sits at
          it all day. Quebuster is used standing up, in a crowded shop, by
          someone holding a phone and often a garment. That shaped most of the
          small decisions.
        </p>
        <p>
          Scanning takes no tap. Holding a barcode in front of the camera adds
          the item, the phone beeps, and a short message names what was added.
          The cashier never has to look at the screen to know a scan landed.
        </p>
        <p>
          When scanning is finished, &ldquo;Done&rdquo; appears exactly where
          &ldquo;Scan&rdquo; was. I wrote this into the build notes as a rule:
          swap the label and the action, keep the position and the styling. A
          button that moves between two states of the same screen is a button
          people miss with their thumb.
        </p>
        <FlowFigure
          src="/case-studies/ginesys-pos/scan-item-flow.jpg"
          width={1590}
          height={510}
          alt="The scan item flow: empty cart, scanner, a scanned item with its price options, assigning a sales person, the scanned items list and the delete confirmation."
          caption="The scan flow, from the Figma file"
        />
      </CaseSection>

      {/* ─── Policy ─── */}
      <CaseSection
        eyebrow="Retailer policy"
        title="One app, many rule books."
        icon={ListChecks}
      >
        <p>
          Every retailer on Ginesys configures its own billing policy, and the
          app has to follow it without the cashier thinking about policy at
          all.
        </p>
        <p>
          Customer tagging is the clearest case. Some retailers want the
          customer identified before the first item is scanned. Others let the
          cashier start scanning and only insist on a customer before the bill
          closes. I designed both as one flow with two entry points, and
          described it to engineering as a soft requirement at the start and a
          hard requirement at the end.
        </p>
        <FlowFigure
          src="/case-studies/ginesys-pos/customer-tagging-flow.jpg"
          width={1590}
          height={570}
          alt="Customer tagging before scanning: the prompt to tag a customer, search by phone number, no results found, and the add new customer form with the number already filled in."
          caption="Tagging a customer before the first scan, with my note to engineering at top right"
        />
        <p>
          The same thinking applies to controls. If a retailer&apos;s policy
          does not allow price edits, the Edit Pricing option is not shown at
          all. I asked for it to be left out of the screen, not greyed out. A
          disabled control on a phone takes up space and invites a question the
          cashier can&apos;t answer.
        </p>
        <p>
          To tag a customer, the cashier types a phone number and searches. If
          nobody matches, they add a new customer, and the number they just
          typed is already filled in. It is a small thing that matters when
          there is a queue behind the customer.
        </p>
        <HighlightList
          items={[
            "One item, several prices: when the same item is in stock at more than one price, the cashier picks the price before it goes into the cart",
            "Batch and serial numbers: scanning one opens a sheet with the batch or serial, expiry and quantity, so the right unit is billed",
            "Negative stock: an item whose stock is below zero is refused at scan",
            "Clearing a customer also empties the cart, so the app asks first, with both buttons given equal weight so the design doesn't push the cashier either way",
            "Settings are visible to everyone and editable only by an admin",
          ]}
        />
      </CaseSection>

      {/* ─── Payment ─── */}
      <CaseSection
        eyebrow="Payment"
        title="Taking payment without a counter."
        icon={CreditCard}
      >
        <p>
          The cashier can take payment where they stand: a UPI QR code on the
          phone or on a connected payment machine, a payment link sent by SMS
          and email, card through a connected card machine, cash, or a credit
          note. A bill can be put on hold and picked up again from the action
          menu.
        </p>
        <p>
          Coupons and loyalty discounts belong to a third-party system. They
          open inside the app and hand the result back to the bill. In my notes
          I listed the cases engineering had to handle: the cashier closes the
          screen halfway, the third party times out, or a coupon is removed and
          applied again.
        </p>
      </CaseSection>

      {/* ─── Item Enquiry ─── */}
      <CaseSection
        eyebrow="Item Enquiry"
        title="Price, stock and offers from one scan."
        icon={Search}
      >
        <p>
          A later module in the same app, now live in production. A store
          associate scans a tag and the
          item opens straight away: price, stock at each stock point, the
          offers that apply and how it has sold. Speed Search and Enter Code
          are there for a missing or unreadable tag.
        </p>
        <p>
          Most of the 25 screens are the cases around the happy path: camera
          permission on the first scan, a barcode that isn&rsquo;t in this
          store&rsquo;s catalogue, and a lost connection while the item loads.
          Each one offers a way forward instead of a dead end.
        </p>
        <FlowFigure
          src="/case-studies/ginesys-pos/item-enquiry-flow.jpg"
          width={2940}
          height={800}
          alt="Item Enquiry screens: the home tile, camera permission, the live scanner, the item detail in three states, and the not-in-catalogue and failed-to-load states."
          caption="Item Enquiry: the scan path and its failure states"
        />
      </CaseSection>

      {/* ─── Handoff ─── */}
      <CaseSection
        eyebrow="Handoff"
        title="Notes beside every flow, not a spec somewhere else."
        icon={FileText}
      >
        <p>
          The Figma file carries the design system (type scale, colour ramps,
          buttons, sheets) and dated developer notes next to the flows they
          describe. Each note states a behaviour rule that a screen alone
          can&apos;t show, such as the action sheet growing and shrinking with
          its content and scrolling when it runs out of room.
        </p>
        <FlowFigure
          src="/case-studies/ginesys-pos/canvas-overview.jpg"
          width={1876}
          height={1175}
          alt="The full design file zoomed out: a component library on the left and about twenty labelled flows on the right."
          caption="The whole file. Green labels mark each flow."
        />
      </CaseSection>

      {/* ─── Edge cases ─── */}
      <CaseSection
        eyebrow="The edges"
        title="Edge cases are not edges. They are most of the work."
        icon={ShieldAlert}
      >
        <p>
          Retail is mostly edges. Customers change their mind, networks drop,
          devices get stolen, sessions get hijacked, prices get manually
          overridden, returns get processed across stores, members get added
          mid-cart, promotions stack in unexpected ways. The bulk of the
          mPOS design system is dedicated to making these moments calm.
        </p>
        <ScreenGrid>
          <ScreenSlot
            caption="Device limit reached"
            src="/case-studies/ginesys-pos/device-limit.png"
            alt="Device limit reached error shown as a banner above the login screen"
          />
          <ScreenSlot
            caption="Active session detected"
            src="/case-studies/ginesys-pos/active-session.png"
            alt="Active session detected modal with option to switch here"
          />
          <ScreenSlot
            caption="Connection failed — inline retry"
            src="/case-studies/ginesys-pos/connection-failed.png"
            alt="Connection failed error banner with retry affordance"
          />
        </ScreenGrid>
        <p className="mt-8">
          Three patterns I leaned on:
        </p>
        <HighlightList
          items={[
            "Inline status — every screen has a network state pill at the top so the associate is never guessing whether the cart is synced",
            "Soft errors over modals — recoverable errors live in a footer bar with a retry; only destructive states get a full sheet",
            "Explicit state names — the design system has a name for every cart state so engineering and support can refer to the same thing",
          ]}
        />
      </CaseSection>

      {/* ─── Dynamic pricing ─── */}
      <CaseSection
        eyebrow="Hardest design problem"
        title="Manual price overrides without breaking the books."
        icon={Target}
      >
        <p>
          A senior associate can override the system price at the counter —
          customer service, damaged goods, loyalty exceptions. But the override
          has to be auditable, policy-bound, and reversible. I designed a price
          override stream that combines a quick-edit numeric pad, a reason
          code, an authorisation prompt for amounts beyond a threshold, and a
          visible trail on the receipt and back-office report.
        </p>
        <ScreenGrid>
          <ScreenSlot
            caption="Numeric input sheet — qty and price edits"
            src="/case-studies/ginesys-pos/update-quantity.png"
            alt="Numeric input sheet used for quantity and price editing"
          />
          <ScreenSlot
            caption="Bill summary — tax, discount, promotion breakdown"
            src="/case-studies/ginesys-pos/bill-summary.png"
            alt="Bill summary sheet showing price, taxes, discounts, and promotions"
          />
          <ScreenSlot
            caption="Cart with tagged member — active pricing context"
            src="/case-studies/ginesys-pos/tagged-customer.png"
            alt="Cart home screen with a customer member tagged showing active pricing"
          />
        </ScreenGrid>
        <p className="mt-8">
          We designed 18 variations of the price edit flow to cover every
          permission tier, every product type, and every overlapping discount
          scenario. Each variation has a corresponding rule in the backend; the
          UI is the visible half of an audit system.
        </p>
      </CaseSection>

      {/* ─── Connectivity ─── */}
      <CaseSection
        eyebrow="Designing for reality"
        title="Network failure is a feature, not a bug."
        icon={Wifi}
      >
        <p>
          Ginesys clients run stores in places where the network is fragile.
          The mPOS holds carts in local state and queues sync events. The UX
          had to make this invisible when things go well and obvious when
          things go wrong.
        </p>
        <p>
          The connectivity model has three explicit modes: online (live sync),
          weak (cart held locally with visible queue), and offline (read-only
          item lookup with deferred billing). Each mode has a colour and an
          icon in the header that&apos;s glanceable from across a counter.
          Associates know what they can do and what will catch up later.
        </p>
      </CaseSection>

      {/* ─── Impact ─── */}
      <CaseSection
        eyebrow="The impact"
        title="Pan-India deployment. Live during festive peak."
        icon={TrendingUp}
      >
        <HighlightList
          items={[
            "MVP Quebuster shipped Pan-India across Ginesys retail clients in time for festive peak",
            "In use today at more than 1,000 active retail customers",
            "436 screens designed across 48 modules — every state, every edge case, explicit",
            "68 customer-management screens covering search, add, tag, multi-cart association",
            "Reduced average checkout time at high-volume Quebuster stores by reorienting the scan-first flow",
            "Established the mPOS design system that the wider ERP team now references for mobile work",
          ]}
        />
        <p className="mt-8">
          Beyond the metric improvements, the bigger shift was internal:
          Ginesys now treats mobile as a first-class POS surface, not a
          mini-version of the desktop. The mPOS design system feeds back into
          the ERP web design and has become the team&apos;s shared vocabulary
          for retail interaction.
        </p>
      </CaseSection>

      {/* ─── Reflection ─── */}
      <CaseSection
        eyebrow="Reflection"
        title="What I&rsquo;d do differently next time."
        icon={Layers}
      >
        <p>
          The biggest lesson was on documentation pace. We designed 436 screens
          in roughly the time we&apos;d normally design 100, and the design
          system documentation lagged the production work. Engineers asked
          questions I&apos;d already answered six weeks earlier. Next time
          I&apos;d build the doc site in parallel from week one, even at the
          cost of slower screen output.
        </p>
        <p>
          The second lesson was on early hardware testing. Designs that felt
          good in Figma sometimes failed on the actual scanner-equipped
          devices our clients use — different aspect ratios, different
          touch targets, different lighting. We added hardware-in-the-loop
          reviews around month three. It saved a re-design of the scan screen.
        </p>
      </CaseSection>

      <NextCase currentSlug="ginesys-pos" />
      <Footer />
    </>
  );
}
