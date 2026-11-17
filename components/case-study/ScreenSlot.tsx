import Image from "next/image";
import { ImageIcon } from "lucide-react";

type ScreenSlotProps = {
  /** Caption shown below the image */
  caption?: string;
  /** Path to the actual screenshot (in /public). If omitted, a placeholder is rendered. */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** "phone" = 9:19.5 aspect (mobile), "desktop" = 16:10, "tablet" = 4:3 */
  aspect?: "phone" | "desktop" | "tablet";
};

const aspectClass: Record<NonNullable<ScreenSlotProps["aspect"]>, string> = {
  phone: "aspect-[9/19.5]",
  desktop: "aspect-[16/10]",
  tablet: "aspect-[4/3]",
};

export function ScreenSlot({
  caption,
  src,
  alt,
  aspect = "phone",
}: ScreenSlotProps) {
  return (
    <figure className="flex flex-col gap-3">
      <div
        className={`relative ${aspectClass[aspect]} w-full overflow-hidden rounded-2xl border border-border bg-surface`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? caption ?? "Case study screenshot"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-surface to-surface-elevated">
            <div className="flex flex-col items-center gap-3 text-foreground-subtle">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-background">
                <ImageIcon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                Screenshot pending
              </span>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-xs text-foreground-subtle font-mono uppercase tracking-[0.16em]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Helper to render a grid of screens. */
export function ScreenGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
