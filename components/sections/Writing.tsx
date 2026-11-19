import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts, formatPostDate, type Post } from "@/content/posts";

// Compact list of posts for the home page. Kept short so it never takes more
// than a few rows on desktop; the full list lives at /writing.

export function DraftBadge() {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
      Draft
    </span>
  );
}

export function PostRow({ post }: { post: Post }) {
  return (
    <li>
      <Link
        href={`/writing/${post.slug}`}
        className="group flex items-start justify-between gap-6 py-5 transition-colors"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
              {post.title}
            </h3>
            {post.draft && <DraftBadge />}
          </div>
          <p className="mt-1 line-clamp-1 text-sm text-foreground-muted">{post.summary}</p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-subtle">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readingTime}
          </p>
        </div>
        <ArrowUpRight
          aria-hidden
          className="mt-1 h-5 w-5 shrink-0 text-foreground-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </Link>
    </li>
  );
}

export function Writing() {
  const latest = posts.slice(0, 3);

  return (
    <section id="writing" className="relative scroll-mt-24 border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
          <span className="inline-block h-px w-8 bg-accent" />
          Writing
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="font-display text-display text-balance text-foreground">
              Notes from the work.
            </h2>
            <Link
              href="/writing"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              All writing
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>

          <ul className="divide-y divide-border border-y border-border lg:col-span-8">
            {latest.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
