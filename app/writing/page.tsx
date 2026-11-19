import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/posts";
import { PostRow } from "@/components/sections/Writing";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Writing | Proloy Karmakar",
  description: "Short posts by Proloy Karmakar on designing and building retail software.",
};

export default function WritingIndex() {
  return (
    <>
      <section id="writing" className="relative scroll-mt-24 border-b border-border">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
          <Link
            href="/#writing"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle transition-colors hover:text-accent"
          >
            ← Back home
          </Link>
          <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground-subtle">
            <span className="inline-block h-px w-8 bg-accent" />
            Writing
          </div>
          <h1 className="mt-6 font-display text-display text-balance text-foreground">
            Notes from the work.
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-foreground-muted lg:text-lg">
            Short posts on designing retail software and building the front end myself.
          </p>

          <ul className="mt-12 max-w-3xl divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
