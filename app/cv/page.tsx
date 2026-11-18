import Link from "next/link";
import { PrintButton } from "@/components/ui/print-button";

export const metadata = {
  title: "CV | Proloy Karmakar",
  description: "CV of Proloy Karmakar, UX engineer and product designer in Kolkata.",
};

// One-page CV. Plain structure and standard headings so it reads well on a
// phone, prints cleanly to PDF, and parses in applicant tracking systems.
const experience = [
  {
    company: "Capital Numbers",
    title: "UX/Product Designer",
    dates: "July 2024 to present",
    note: "Dedicated to Ginesys One, a retail ERP and POS suite.",
    bullets: [
      "Designed and built the entire front end of Ginesys Insights, a report builder for retail MIS, in Next.js and React with AG Grid. In pilot testing with users, going live February 2027. I ship improvements through pull requests to the product codebase.",
      "Writing the front end myself removed the design-to-development handoff on the module; it did not need a separate front-end engineer. I consult developers on backend and architecture questions.",
      "Ran research with five customer reporting teams before building; one customer asked to trial the new builder.",
      "Designed Quebuster, a mobile POS that lets store staff bill from a phone. Shipped Pan-India and in use at 1,000+ retailers.",
      "Lead the mPOS design stream: 436 screens across 48 modules, working with the CTO, business analysts and engineers. Run design audits and mentor designers.",
      "Redesigned the Ginesys warehouse app for one-handed use across eight modules; cut the goods receipt form from 15 fields to 4 guided steps.",
    ],
  },
  {
    company: "Freelance",
    title: "Designer and Front-end Developer",
    dates: "2025 to February 2026",
    note: "",
    bullets: [
      "Designed EaseCare, a two-sided home care marketplace, and built the front end of both the consumer and provider apps in React, Vite and Tailwind, packaged for mobile with Capacitor. The product owner's backend was integrated with my front end. Live with 12 service categories.",
    ],
  },
  {
    company: "Cloudcraftz Solutions",
    title: "Associate Designer",
    dates: "May 2022 to July 2024",
    note: "",
    bullets: [
      "Designed TalentSPOT, an internal applicant tracking system, from research to developer handoff.",
      "Designed ALYF, a healthcare product for iOS and web, working with the founders.",
      "Mobile and CMS design for QOMIX, a comics app.",
    ],
  },
];

const skills: [string, string][] = [
  ["Design", "Product and interaction design, user research and customer interviews, design systems, accessibility (WCAG), retail ERP and POS"],
  ["Front end", "React, Next.js, TypeScript, Tailwind CSS, Vite, AG Grid, Capacitor, Git and pull requests, Vercel"],
  ["AI-assisted development", "Claude Code, Cursor, Figma Make, Grok; multi-agent workflows for larger changes"],
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
      <p className="mt-2 text-foreground-muted">
        UX Engineer · Product Designer · Kolkata, India ·{" "}
        <a href="mailto:proloykarmakar25@gmail.com" className="underline underline-offset-4">
          proloykarmakar25@gmail.com
        </a>{" "}
        ·{" "}
        <a href="https://www.linkedin.com/in/kproloy" className="underline underline-offset-4">
          linkedin.com/in/kproloy
        </a>{" "}
        · uxproloy.vercel.app
      </p>

      <CvHeading>Summary</CvHeading>
      <p className="text-pretty">
        Product designer who builds the front end of what I design. Four years in
        B2B and retail software. At Ginesys One I designed the mobile POS and
        warehouse apps, and designed and built the Ginesys Insights report
        builder in Next.js, shipping through pull requests. I work with AI
        coding agents every day and talk to customers directly.
      </p>

      <CvHeading>Experience</CvHeading>
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
                <li key={b} className="text-pretty">
                  {b}
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
      <p className="mt-2">Tools: Figma, Cursor, Claude Code, VS Code, GitHub, Miro, Rive, Lottie, Notion, Jira</p>

      <CvHeading>Education</CvHeading>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p>
          <span className="font-semibold">BA, Political Science</span>, Kalipada
          Ghosh Tarai Mahavidyalaya, Darjeeling
        </p>
        <span className="text-sm text-foreground-muted">2018 to 2021</span>
      </div>

      <CvHeading>Certifications</CvHeading>
      <p>Enterprise Design Thinking Practitioner (IBM) · Google UX Design: Empathize, Define, and Ideate</p>

      <CvHeading>Recognition</CvHeading>
      <p>Windows Phone 2024 concept covered by Windows Central, XDA and Digital Trends.</p>
    </div>
  );
}

function CvHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-9 mb-3 border-b border-border pb-1.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground-subtle">
      {children}
    </h2>
  );
}
