import Image from "next/image";

type FlowFigureProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

/** A wide image (a flow or a whole design file) shown uncropped, with a link to the full size. */
export function FlowFigure({ src, width, height, alt, caption }: FlowFigureProps) {
  return (
    <figure className="mt-8 flex flex-col gap-3">
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl border border-border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1024px) 100vw, 800px"
          className="h-auto w-full"
        />
        <span className="sr-only">(opens full size in a new tab)</span>
      </a>
      {caption && (
        <figcaption className="font-mono text-xs uppercase tracking-[0.16em] text-foreground-subtle">
          {caption} · click to enlarge
        </figcaption>
      )}
    </figure>
  );
}
