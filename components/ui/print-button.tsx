"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
    >
      Download as PDF
    </button>
  );
}
