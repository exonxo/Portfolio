import Link from "next/link";
import { PrintButton } from "@/components/ui/print-button";

export const metadata = {
  title: "CV | Proloy Karmakar",
  description: "CV of Proloy Karmakar, UX engineer and product designer in Kolkata.",
};

// One-page CV, single column so it parses in applicant tracking systems.
// Pattern taken from senior designer and UX engineer CVs: portfolio link under
// the name, a short summary with a point of view, outcome-led bullets with the
// figure in brackets, and a short grouped skills list instead of a tool dump.
const SITE = "https://uxproloy.vercel.app";

type Bullet = { text: React.ReactNode; key: string };

const experience: {
  company: string;
  title: string;
  dates: string;
  note?: string;
  bullets: Bullet[];
}[] = [
  {
    company: "Capital Numbers",
    title: "UX/Product Designer",
    dates: "July 2024 to present",
    note: "Placed full time with Ginesys One, a retail ERP and POS suite used across India.",
    bullets: [
      {
        key: "insights",
        text: (
          <>
            Designed and built the entire front end of{" "}
            <CaseLink slug="reports-insights">Ginesys Insights</CaseLink>, a report
            builder for retail MIS, in Next.js, React and AG Grid. I ship changes
            through pull requests (in pilot, going live February 2027).
          </>
        ),
      },
      {
        key: "handoff",
        text: "Removed the design-to-development handoff on Insights by writing the front end myself; the module needed no separate front-end engineer, and I consult developers on backend questions.",
      },
      {
        key: "research",
        text: "Ran sessions with multiple customer reporting teams, on site and by call, before building; one customer asked to trial the new builder unprompted.",
      },
      {
        key: "pos",
        text: (
          <>
            Designed <CaseLink slug="ginesys-pos">Quebuster</CaseLink>, a mobile POS
            that lets store staff bill from a phone when counters are backed up;
            shipped Pan-India (1,000+ active retailers).
          </>
        ),
      },
      {
        key: "mpos",
        text: "Lead the mPOS design stream with the CTO, business analysts and engineers (436 screens, 48 modules), including Item Enquiry, now live in production.",
      },
      {
        key: "wms",
        text: (
          <>
            Redesigned the <CaseLink slug="ginesys-wms">warehouse app</CaseLink> for
            one-handed use across eight modules (goods receipt: 15 fields to 4
            guided steps).
          </>
        ),
      },
      {
        key: "lead",
        text: "Run design audits, set UX standards and mentor designers.",
      },
    ],
  },
  {
    company: "EaseCare (freelance)",
    title: "Designer and Front-end Developer",
    dates: "2025 to February 2026",
    bullets: [
      {
        key: "easecare",
        text: (
          <>
            Designed and built the front end of{" "}
            <CaseLink slug="easecare">EaseCare</CaseLink>, a two-sided home care
            marketplace: consumer and provider apps in React, Vite and Tailwind,
            packaged for mobile with Capacitor. The product owner built the backend
            (live, 12 service categories).
          </>
        ),
      },
    ],
  },
  {
    company: "Cloudcraftz Solutions",
    title: "Associate Designer",
    dates: "May 2022 to July 2024",
    bullets: [
      { key: "ts", text: "Designed TalentSPOT, an internal applicant tracking system, from research to developer handoff." },
      { key: "alyf", text: "Designed ALYF, a healthcare product for iOS and web, working directly with the founders." },
      { key: "qomix", text: "Designed the mobile app and CMS for QOMIX, a comics platform." },
    ],
  },
];

const skills: [string, string][] = [
  ["Front end", "TypeScript, JavaScript, React, Next.js, HTML, CSS, Tailwind CSS, Vite, AG Grid, Capacitor"],
  ["Design", "Product and interaction design, design systems, user research, accessibility (WCAG), Figma"],
  ["Prototyping and motion", "Coded prototypes, Figma prototypes, Figma Make, Rive, Lottie"],
  ["Workflow", "Git and pull requests, Vercel, Claude Code, Cursor, multi-agent workflows, Jira, Notion"],
  ["Domain", "Retail ERP, point of sale, warehouse, reporting and MIS"],
];

export default function CvPage() {
  return (
    <div className="cv-page mx-auto w-full max-w-3xl px-6 pt-12 pb-24 text-foreground">
      <div className="print-hidden mb-10 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-sm text-foreground-muted hover:text-foreground">
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <h1 className="text-3xl font-semibold tracking-tight">Proloy Karmakar</h1>
      <p className="mt-1 font-medium">UX Engineer · Product Designer</p>
      <p className="mt-1 text-foreground-muted">
        <a href={SITE} className="underline underline-offset-4">
          Portfolio: uxproloy.vercel.app
        </a>{" "}
        ·{" "}
        <a href="mailto:proloykarmakar25@gmail.com" className="underline underline-offset-4">
          proloykarmakar25@gmail.com
        </a>{" "}
        ·{" "}
        <a href="https://www.linkedin.com/in/kproloy" className="underline underline-offset-4">
          linkedin.com/in/kproloy
        </a>{" "}
        · Kolkata, India
      </p>

      <CvHeading>Summary</CvHeading>
      <p className="text-pretty">
        UX engineer and product designer with four years in B2B retail software. I
        design products and build their front ends: I wrote the whole Ginesys
        Insights interface in Next.js, and designed a mobile POS used by 1,000+
        retailers. Shipping my own code means I spend less time polishing mockups
        and more on whether a feature works, and whether it is needed at all.
      </p>

      <CvHeading>Experience and impact</CvHeading>
      <div className="space-y-6">
        {experience.map((job) => (
          <div key={job.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">
                {job.company}, {job.title}
              </h3>
              <span className="text-sm text-foreground-muted">{job.dates}</span>
            </div>
            {job.note && <p className="text-foreground-muted">{job.note}</p>}
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              {job.bullets.map((b) => (
                <li key={b.key} className="text-pretty">
                  {b.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <CvHeading>Skills</CvHeading>
      <div className="space-y-1.5">
        {skills.map(([k, v]) => (
          <p key={k}>
            <span className="font-semibold">{k}:</span> {v}
          </p>
        ))}
      </div>

      <CvHeading>Education</CvHeading>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p>
          <span className="font-semibold">BA, Political Science</span>, Kalipada
          Ghosh Tarai Mahavidyalaya, Darjeeling
        </p>
        <span className="text-sm text-foreground-muted">2018 to 2021</span>
      </div>

      <CvHeading>Certifications and recognition</CvHeading>
      <p>Enterprise Design Thinking Practitioner (IBM) · Google UX Design: Empathize, Define, and Ideate</p>
      <p className="mt-1">Windows Phone 2024 concept covered by Windows Central, XDA and Digital Trends.</p>
    </div>
  );
}

function CaseLink({ slug, children }: { slug: string; children: React.ReactNode }) {
  return (
    <a href={`${SITE}/work/${slug}`} className="underline underline-offset-2">
      {children}
    </a>
  );
}

function CvHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-9 mb-3 border-b border-border pb-1.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground-subtle">
      {children}
    </h2>
  );
}
