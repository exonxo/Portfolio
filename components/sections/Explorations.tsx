import { ArrowUpRight } from "lucide-react";

type Exploration = {
  title: string;
  href: string;
  image: string;
  tag: string;
};

const explorations: Exploration[] = [
  {
    title: "Bitescape: Discover the perfect venue powered by AI",
    href: "https://www.behance.net/gallery/180630815/Bitescape-Discover-the-perfect-venue-powered-by-AI",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/329411180630815.Y3JvcCwzMDk3LDI0MjMsNjEsMA.png",
    tag: "AI product",
  },
  {
    title: "HireNow: Candidate Recruitment Bot",
    href: "https://www.behance.net/gallery/199749687/HireNow-Candidate-Recruitment-Bot",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/83512b199749687.Y3JvcCwxMjk2LDEwMTQsMjgsMA.png",
    tag: "Conversational UX",
  },
  {
    title: "Apple Vision Pro 3D Web Design (Prototype)",
    href: "https://www.behance.net/gallery/183861555/Apple-VisionPro-3D-WebDesign-(Prototype)",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/af1c72183861555.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png",
    tag: "Spatial / 3D",
  },
  {
    title: "Dark Mode Landing Page",
    href: "https://www.behance.net/gallery/201242245/Dark-Mode-Landing-Page",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/139687201242245.Y3JvcCwyMzAxLDE4MDAsNTEsMA.png",
    tag: "Web design",
  },
  {
    title: "Subscription Page Design",
    href: "https://www.behance.net/gallery/199665469/Subscription-Page-Design-(Web-design)",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/751132199665469.Y3JvcCwxMTY0LDkxMSwwLDA.png",
    tag: "Web design",
  },
  {
    title: "Simple Messaging Mobile App",
    href: "https://www.behance.net/gallery/189062463/Simple-Messaging-Mobile-App",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/1f450f189062463.Y3JvcCw4MDgsNjMyLDAsMA.png",
    tag: "Mobile UI",
  },
  {
    title: "Redesigning Spotify, Light Mode",
    href: "https://www.behance.net/gallery/179637093/Redesigning-Spotify-Light-Mode",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/f04ceb179637093.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
    tag: "Concept redesign",
  },
  {
    title: "Myntra App Redesign",
    href: "https://www.behance.net/gallery/179756877/App-redesign-Myntra",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/9dca56179756877.Y3JvcCw4NjIsNjc1LDkxLDA.png",
    tag: "Concept redesign",
  },
  {
    title: "Spiderman Retro Illustration",
    href: "https://www.behance.net/gallery/206356475/Spiderman-Retro-Illustration",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/8d1f2a206356475.Y3JvcCwxNjQwLDEyODIsMCw1Mzk.png",
    tag: "Illustration",
  },
];

export function Explorations() {
  return (
    <section id="explorations" className="border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-foreground-subtle font-mono">
              Explorations
            </div>
            <h2 className="mt-6 font-display text-display text-balance text-foreground">
              Side experiments
              <br />
              <span className="text-foreground-muted">
                to sharpen the craft.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-foreground-muted lg:text-lg">
              In my free time I explore designs and run small experiments,
              illustration, concept redesigns, AI products, and the
              occasional spatial UI. A few of them live below.
            </p>
          </div>

          <a
            href="https://www.behance.net/proloykarmakar"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
          >
            See more on Behance
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:rotate-45"
              strokeWidth={2.25}
            />
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {explorations.map((exp) => (
            <a
              key={exp.href}
              href={exp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-border-strong"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm ring-1 ring-border-strong transition-transform duration-500 group-hover:rotate-45 group-hover:bg-accent group-hover:text-accent-foreground group-hover:ring-accent">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="inline-flex w-fit rounded-full border border-border-strong bg-background/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground-muted font-mono">
                  {exp.tag}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground text-balance">
                  {exp.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
