import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, formatPostDate, type PostBlock } from "@/content/posts";
import { DraftBadge } from "@/components/sections/Writing";
import { Footer } from "@/components/sections/Footer";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Proloy Karmakar`,
    description: post.summary,
    // Drafts stay out of search results until they're reviewed.
    robots: post.draft ? { index: false, follow: true } : undefined,
  };
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="pt-6 font-display text-2xl font-semibold text-balance text-foreground">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-3 pl-5 marker:text-accent">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6 py-20 lg:py-24">
          <Link
            href="/#writing"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle transition-colors hover:text-accent"
          >
            ← All writing
          </Link>

          <header className="mt-10">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
              <span className="inline-block h-px w-8 bg-accent" />
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
              {post.draft && <DraftBadge />}
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-balance text-foreground sm:text-5xl">
              {post.title}
            </h1>
            {post.draft && (
              <p className="mt-6 rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground-muted">
                This is a draft and hasn&apos;t been reviewed yet.
              </p>
            )}
          </header>

          <div className="mt-10 space-y-5 text-pretty leading-relaxed text-foreground-muted lg:text-lg">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
