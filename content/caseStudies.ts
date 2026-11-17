export type Metric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  capability: string;
  summary: string;
  description: string;
  role: string;
  timeline: string;
  team: string;
  industry: string;
  status: "shipped" | "in-progress" | "placeholder";
  metrics?: Metric[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "easecare",
    title: "EaseCare: A unified marketplace for home care services",
    shortTitle: "EaseCare",
    capability: "Two-sided systems design",
    summary:
      "Building a unified marketplace for home care that serves both consumers and providers.",
    description:
      "Designed a cross-platform home care marketplace where consumers post needs and providers bid in real time, balancing two very different mental models in one product.",
    role: "Product Designer, end to end",
    timeline: "2025",
    team: "Founders, frontend engineers, backend engineers",
    industry: "Healthcare, marketplace, consumer plus B2B",
    status: "shipped",
    metrics: [
      { value: "12", label: "Service categories live" },
      { value: "2", label: "Apps shipped (consumer, provider)" },
      { value: "Real-time", label: "Bid and match flow" },
    ],
    href: "/work/easecare",
  },
  {
    slug: "ginesys-wms",
    title: "Ginesys WMS: Redesigning a warehouse app nobody wanted to use",
    shortTitle: "Ginesys WMS",
    capability: "Operational workflow optimization",
    summary:
      "Redesigning a warehouse app for one-handed mobile operation in a real working environment.",
    description:
      "Rebuilt the Ginesys warehouse management app around a single constraint: warehouse workers need operational clarity, and they need it with one hand free.",
    role: "Lead Product Designer for mobile WMS",
    timeline: "2024 to 2025",
    team: "CTO, business analysts, mobile engineers, warehouse operators",
    industry: "Retail operations, supply chain, warehouse management",
    status: "shipped",
    metrics: [
      { value: "15 to 4", label: "Form fields reduced via guided steps" },
      { value: "8", label: "Modules unified by one design system" },
      { value: "1 hand", label: "Operable throughout the app" },
    ],
    href: "/work/ginesys-wms",
  },
  {
    slug: "ginesys-pos",
    title: "Ginesys POS: Designing the mPOS stream at Pan-India scale",
    shortTitle: "Ginesys POS",
    capability: "Enterprise-scale product ownership",
    summary:
      "Designing the mPOS stream for a Pan-India retail platform, balancing business rules and engineering feasibility.",
    description:
      "Owning UX for the mobile POS stream of one of India's largest retail platforms. Translating retail billing, inventory, and operational rules into a fast, scalable mobile experience.",
    role: "Lead Product Designer for mPOS",
    timeline: "2024 to Present",
    team: "CTO, business analysts, backend and frontend engineers",
    industry: "Retail, POS, ERP, Pan-India deployment",
    status: "placeholder",
    metrics: [
      { value: "Pan-India", label: "Deployment scale" },
      { value: "End to end", label: "UX ownership" },
      { value: "Live", label: "Quebuster MVP shipped" },
    ],
    href: "/work/ginesys-pos",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
