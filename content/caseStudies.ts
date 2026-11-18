// Single source for every case study. The home page cards, the case study
// headers and the "next case study" links all read from this list, so the
// order, years and labels only need changing here.

export type Metric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  capability: string;
  /** One or two sentences for the home page card and the "next" link. */
  summary: string;
  description: string;
  role: string;
  timeline: string;
  team: string;
  industry: string;
  status: "shipped" | "in-progress" | "placeholder";
  /** Honest label shown on cards and headers: Shipped, Research and prototype… */
  statusLabel: string;
  /** Short year shown on the card. */
  year: string;
  /** Real screenshot for the card. Leave empty rather than using a stock photo. */
  image?: string;
  imageAlt?: string;
  /** The four lines a reviewer can read in 30 seconds. */
  brief: {
    problem: string;
    myRole: string;
    whatIDid: string;
    whereItStands: string;
  };
  metrics?: Metric[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ginesys-pos",
    title: "Ginesys POS: Designing the mPOS stream at Pan-India scale",
    shortTitle: "Ginesys POS",
    capability: "Enterprise-scale product ownership",
    summary:
      "A point-of-sale app that runs on a phone, so store staff can bill in the aisle when the counters are backed up. Shipped, and in use at more than 1,000 retailers.",
    description:
      "Owning UX for the mobile POS stream of one of India's largest retail platforms. Translating retail billing, inventory, and operational rules into a fast, scalable mobile experience.",
    role: "Lead Product Designer for mPOS",
    timeline: "2024 to present",
    team: "CTO, business analysts, backend and frontend engineers",
    industry: "Retail, POS, ERP, Pan-India deployment",
    status: "shipped",
    statusLabel: "Shipped",
    year: "2024 to now",
    image: "/case-studies/ginesys-pos/scanner.png",
    imageAlt: "Ginesys POS barcode scanner screen on a phone",
    brief: {
      problem:
        "In peak season the billing counter is the bottleneck, and a store can't add terminals for a few weeks a year. The existing mobile flow was a port of the desktop POS: dense screens, stacked dialogs, twelve-field forms.",
      myRole:
        "Lead designer for the mPOS stream, from the first flows to the shipped Quebuster MVP, working with the CTO, business analysts and engineering.",
      whatIDid:
        "Designed the billing flow end to end (login, customer tagging, scanning, pricing, cart, payment), 436 screens across 48 modules, with developer notes wherever behaviour couldn't be read off the screen.",
      whereItStands:
        "Quebuster shipped Pan-India in time for the festive peak and is in use at more than 1,000 retailers.",
    },
    metrics: [
      { value: "1,000+", label: "Active retail customers" },
      { value: "436", label: "Screens across 48 modules" },
      { value: "136", label: "Designed cart states" },
    ],
    href: "/work/ginesys-pos",
  },
  {
    slug: "reports-insights",
    image: "/case-studies/reports-insights/builder-table.jpg",
    imageAlt: "The report builder prototype: a field list on the left, rows, columns and filters across the top, and net sales by zone in a table",
    title: "Reports and Insights 2.0: What report builders actually needed",
    shortTitle: "Reports and Insights 2.0",
    capability: "Research, design and front end",
    summary:
      "Customers were unhappy with the report builder, so I spent two weeks with several of them. The interface turned out to be the complaint they cared about least. That changed what we built.",
    description:
      "Customer research with multiple retail reporting teams, then a new report builder for Ginesys One that I designed and built the front end of.",
    role: "Product Designer and front-end developer",
    timeline: "2026",
    team: "Product owner, CXO, customer reporting teams",
    industry: "Retail ERP, reporting and MIS",
    status: "in-progress",
    statusLabel: "Designed and built · In pilot",
    year: "2026",
    brief: {
      problem:
        "Customers of Ginesys One were complaining about the report builder. The working assumption was that it needed a new interface.",
      myRole:
        "Designer on the module, working with the product owner and a CXO. I ran customer sessions in August 2026, on site and by call, and I built the entire front end myself in Next.js.",
      whatIDid:
        "Found that the people who build reports would put up with a clumsy interface if the numbers were right and arrived on time, and that several of the worst problems had nothing to do with design.",
      whereItStands:
        "One customer saw it, called it better than their current tool and asked to trial it. It is now in pilot testing with users and is planned to go live in February 2027. I keep improving the front end through pull requests.",
    },
    metrics: [
      { value: "Next.js", label: "Front end I built myself" },
      { value: "2 weeks", label: "Of sessions, August 2026" },
      { value: "1", label: "Customer asked to trial it, unprompted" },
    ],
    href: "/work/reports-insights",
  },
  {
    slug: "ginesys-wms",
    image: "/case-studies/ginesys-wms/adhoc-scanning.jpg",
    imageAlt: "Four phone screens from the Delivery Challan flow: empty scan list, live scanner, scanned items with batch and serial tags",
    title: "Ginesys WMS: Redesigning a warehouse app nobody wanted to use",
    shortTitle: "Ginesys WMS",
    capability: "Operational workflow optimization",
    summary:
      "A warehouse app that was deployed but barely used. I rebuilt it around one rule: everything has to work with one hand free.",
    description:
      "Rebuilt the Ginesys warehouse management app around a single constraint: warehouse workers need operational clarity, and they need it with one hand free.",
    role: "Lead Product Designer for mobile WMS",
    timeline: "2024 to 2025",
    team: "CTO, business analysts, mobile engineers, warehouse operators",
    industry: "Retail operations, supply chain, warehouse management",
    status: "shipped",
    statusLabel: "Shipped",
    year: "2024 to 2025",
    brief: {
      problem:
        "The warehouse app was a desktop application stretched onto phones. It was deployed but barely used, and floor supervisors were finishing the day on paper.",
      myRole:
        "Lead designer for the mobile WMS, working with the CTO, business analysts, mobile engineers and warehouse operators.",
      whatIDid:
        "Made one-handed use the rule for every screen: bottom sheets instead of dialogs, task cards instead of tables, a viewfinder scanner, and a 15-field goods receipt form turned into four guided steps.",
      whereItStands:
        "Shipped across eight modules under one design system.",
    },
    metrics: [
      { value: "15 to 4", label: "Form fields reduced via guided steps" },
      { value: "8", label: "Modules unified by one design system" },
      { value: "1 hand", label: "Operable throughout the app" },
    ],
    href: "/work/ginesys-wms",
  },
  {
    slug: "easecare",
    image: "/case-studies/easecare/screens.jpg",
    imageAlt: "Three EaseCare screens: the home page, the Elder Care service list and step two of posting a care request",
    title: "EaseCare: A unified marketplace for home care services",
    shortTitle: "EaseCare",
    capability: "Two-sided systems design",
    summary:
      "A home care marketplace where families post a need and providers bid on it. Two apps with opposite priorities, built on one shared model.",
    description:
      "Designed a cross-platform home care marketplace where consumers post needs and providers bid in real time, balancing two very different mental models in one product.",
    role: "Designer and front-end developer (freelance)",
    timeline: "2025 to February 2026",
    team: "Founders; the product owner built the backend",
    industry: "Healthcare, marketplace, consumer plus B2B",
    status: "shipped",
    statusLabel: "Shipped · Freelance",
    year: "2025 to 2026",
    brief: {
      problem:
        "Home care in India is split between small independents and agencies on one side and anxious families on the other. Existing apps make families scroll long provider lists and leave providers chasing work over WhatsApp.",
      myRole:
        "Freelance for the founders. I designed both apps and built the front end of both, the consumer app and the provider app, first in Figma Make and then in Claude Code. The product owner built the backend and connected it to my front end.",
      whatIDid:
        "Designed two apps on one shared model of requests, bids, bookings and conversations: a consumer app built for speed and confidence, and a provider app built for focus.",
      whereItStands:
        "Live on web and mobile with twelve service categories and a working real-time bidding loop.",
    },
    metrics: [
      { value: "12", label: "Service categories live" },
      { value: "2", label: "Apps shipped (consumer, provider)" },
      { value: "Real-time", label: "Bid and match flow" },
    ],
    href: "/work/easecare",
  },
  {
    slug: "playbawaal",
    image: "/case-studies/playbawaal/home.jpg",
    imageAlt: "The BAWAAL home page: a yellow comic-style hero reading Ghar mein sab hain? Toh BAWAAL karo! with Start a Bawaal and Explore games buttons",
    title: "BAWAAL: Desi party games for the whole family",
    shortTitle: "BAWAAL",
    capability: "Personal project, designed and built solo",
    summary:
      "At Diwali my cousins were all home and all on their phones. So I built party games where the TV is the board and every phone is a controller.",
    description:
      "A personal project: 13 desi party games played on one big screen, with everyone joining from their phones. I designed it and built the front end, realtime layer and database myself.",
    role: "Designer and developer, solo",
    timeline: "November 2026",
    team: "Just me, with Claude Code and Cursor agents",
    industry: "Consumer, games, family",
    status: "shipped",
    statusLabel: "Personal project · Live",
    year: "2026",
    brief: {
      problem:
        "During Diwali the whole family was home, but most of my cousins were on their own phones. I wanted something everyone could play together in one room.",
      myRole:
        "Everything: the idea, the design, the Next.js front end, the Supabase realtime and database setup, testing and deployment.",
      whatIDid:
        "Built party games where a TV or laptop is the board and everyone joins from their phone with a 4-letter code. No app to install and no account for players; only the host signs in.",
      whereItStands:
        "Live at playbawaal.vercel.app with 13 games, and open on GitHub.",
    },
    metrics: [
      { value: "13", label: "Party games" },
      { value: "0", label: "Apps to install for players" },
      { value: "4 letters", label: "Room code to join" },
    ],
    href: "/work/playbawaal",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
