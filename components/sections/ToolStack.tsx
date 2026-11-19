"use client";

import {
  ClaudeIcon,
  FigmaIcon,
  JiraIcon,
  LottieIcon,
  MiroIcon,
  NotionIcon,
  RiveIcon,
  StitchIcon,
  VSCodeIcon,
} from "@/components/ui/tool-icons";
import { Atom, Code2, Database, GitPullRequest, Table2 } from "lucide-react";

type ToolItem = {
  name: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const tools: { category: string; items: ToolItem[] }[] = [
  {
    category: "Front end I ship",
    items: [
      {
        name: "Next.js and React",
        description: "Production front ends, like Ginesys Insights",
        Icon: Atom,
      },
      {
        name: "TypeScript and Tailwind CSS",
        description: "Typed components styled with design tokens",
        Icon: Code2,
      },
      {
        name: "AG Grid",
        description: "Data-heavy tables in the report builder",
        Icon: Table2,
      },
      {
        name: "Supabase",
        description: "Database, sign-in and realtime for BAWAAL",
        Icon: Database,
      },
      {
        name: "Git, pull requests, Vercel",
        description: "How my front-end changes ship",
        Icon: GitPullRequest,
      },
    ],
  },
  {
    category: "Design Systems",
    items: [
      {
        name: "Figma",
        description: "Screens, vectors, prototypes",
        Icon: FigmaIcon,
      },
    ],
  },
  {
    category: "Editor and coding agents",
    items: [
      {
        name: "VS Code",
        description: "Primary code editor",
        Icon: VSCodeIcon,
      },
      {
        name: "Claude",
        description: "Daily coding agent, in Cursor and Claude Code",
        Icon: ClaudeIcon,
      },
    ],
  },
  {
    category: "Ideation & Exploration",
    items: [
      {
        name: "Miro",
        description: "Wireframing, ideation, exploration",
        Icon: MiroIcon,
      },
      {
        name: "Stitch by Google",
        description: "Image generation and design assets",
        Icon: StitchIcon,
      },
    ],
  },
  {
    category: "Animation & Motion",
    items: [
      {
        name: "Rive",
        description: "Interactive motion graphics",
        Icon: RiveIcon,
      },
      {
        name: "Lottie",
        description: "Lightweight vector animations",
        Icon: LottieIcon,
      },
    ],
  },
  {
    category: "Collaboration & Ops",
    items: [
      {
        name: "Notion",
        description: "Documentation and knowledge base",
        Icon: NotionIcon,
      },
      {
        name: "Jira",
        description: "Project management and tracking",
        Icon: JiraIcon,
      },
    ],
  },
];

export function ToolStack() {
  return (
    <section id="tools" className="border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-foreground-subtle font-mono">
              Tools and stack
            </div>
            <h2 className="mt-6 font-display text-display text-balance text-foreground">
              How I design
              <br />
              <span className="text-foreground-muted">and build.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-foreground-muted lg:text-lg">
              Figma for the design, then the production front end in code,
              shipped through pull requests like the rest of the engineering
              team.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-16">
          {tools.map((category) => (
            <div key={category.category}>
              <h3 className="text-xs uppercase tracking-[0.22em] text-foreground-subtle font-mono mb-6">
                {category.category}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => {
                  const Icon = item.Icon;
                  return (
                    <div
                      key={item.name}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-500 hover:border-border-strong hover:bg-surface-elevated"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#0f1419] ring-1 ring-border overflow-hidden">
                          <Icon className="h-7 w-7" strokeWidth={1.75} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display text-lg font-semibold text-foreground">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-sm text-foreground-muted">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
