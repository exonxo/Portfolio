import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

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
    <section id="explorations" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
              <span className="inline-block h-px w-8 bg-accent" />
              Explorations
            </div>
            <h2 className="mt-6 font-display text-display text-balance text-foreground">
              Side experiments
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-foreground-muted lg:text-lg">
              Concept redesigns, AI product ideas, spatial UI and the odd
              illustration, made in my own time.
            </p>
          </Reveal>

          <a
            href="https://www.behance.net/proloykarmakar"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
          >
            See more on Behance
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:rotate-45"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>

      {/* One swipeable row instead of a tall grid: the work stays visible without the scroll. */}
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-24">
        <ul className="-mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 lg:-mt-8">
          {explorations.map((exp, i) => (
            <Reveal as="li" key={exp.href} index={i} className="w-64 shrink-0 snap-start sm:w-72">
              <a
                href={exp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={exp.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {exp.tag}
                  </span>
                  <h3 className="flex items-start justify-between gap-2 font-display text-sm font-semibold leading-snug tracking-tight text-foreground">
                    {exp.title}
                    <ArrowUpRight
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground-subtle transition-colors group-hover:text-accent"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
