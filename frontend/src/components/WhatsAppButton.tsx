import type { ReactNode } from "react";

export function WhatsAppButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 bg-ink text-cream text-[12px] uppercase tracking-[0.2em] py-3.5 px-6 ring-1 ring-ink transition-colors hover:bg-ink/85 ${className}`}
    >
      <span className="shrink-0 grid place-items-center size-5 rounded-full bg-cream/15">
        <span className="size-2.5 rounded-full bg-cream/70" />
      </span>
      {children}
    </a>
  );
}
