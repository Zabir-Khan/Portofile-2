"use client";

import { NAV_LINKS } from "@/data/site";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-ink-border px-5 py-8 text-center sm:px-8 md:px-12">
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-lg font-black text-warm">ZK</span>
        <span className="ml-1 text-[10px] uppercase tracking-[0.18em] text-gold">
          Photographer
        </span>
      </div>

      <p className="text-xs text-muted">
        &copy; {new Date().getFullYear()} Zabir Khan. All rights reserved.
      </p>

      <div className="flex gap-6">
        {NAV_LINKS.slice(1).map((l) => (
          <span
            key={l.id}
            role="link"
            tabIndex={0}
            className="nav-link text-xs"
            onClick={() => scrollToId(l.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") scrollToId(l.id);
            }}
          >
            {l.label}
          </span>
        ))}
      </div>
    </footer>
  );
}
