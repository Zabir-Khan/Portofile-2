import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/site";

interface FooterProps {
  variant?: "dark" | "light";
}

export default function Footer({ variant = "dark" }: FooterProps) {
  const isLight = variant === "light";

  return (
    <footer
      className={`flex flex-wrap items-center justify-between gap-5 border-t px-5 py-8 text-center sm:px-8 md:px-12 ${
        isLight ? "border-cream-border text-ink" : "border-ink-border text-warm"
      }`}
    >
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-lg font-black">ZK</span>
        <span className="ml-1 text-[10px] uppercase tracking-[0.18em] text-gold">
          Photographer
        </span>
      </div>

      <p className={`text-xs ${isLight ? "text-ink/50" : "text-muted"}`}>
        &copy; {new Date().getFullYear()} Zabir Khan. All rights reserved.
      </p>

      <div className="flex gap-4">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.abbr}
            href={s.href}
            aria-label={s.label}
            className={`text-[11px] font-medium uppercase tracking-[0.05em] no-underline transition-colors duration-300 ${
              isLight ? "text-ink/50 hover:text-gold" : "text-muted hover:text-gold"
            }`}
          >
            {s.abbr}
          </a>
        ))}
      </div>

      <div className="flex gap-6">
        {NAV_LINKS.slice(1).map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`text-xs uppercase tracking-[0.08em] no-underline transition-colors duration-300 ${
              isLight ? "text-ink/60 hover:text-gold" : "text-muted hover:text-warm"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
