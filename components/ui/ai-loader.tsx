import { cn } from "@/lib/utils";

const LETTERS = "Loading Portfolio".split("");

export function AILoader({ className }: { className?: string }) {
  return (
    <div className={cn("loader-wrapper", className)}>
      {LETTERS.map((char, i) => (
        <span
          key={i}
          className="loader-letter"
          style={{
            animationDelay: `${i * 0.08}s`,
            // preserve real whitespace between "Loading" and "Portfolio"
            whiteSpace: "pre",
          }}
        >
          {char}
        </span>
      ))}
      <div className="loader" />
    </div>
  );
}

export const Component = AILoader;
