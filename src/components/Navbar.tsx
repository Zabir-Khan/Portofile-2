"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[100] flex h-[72px] items-center justify-between border-b border-ink-border bg-ink/90 px-5 text-warm backdrop-blur-xl sm:px-8 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Go to home"
          className="flex min-w-0 items-baseline gap-0.5 no-underline"
        >
          <span className="font-display text-[22px] font-black tracking-tight text-warm">
            ZK
          </span>
          <span className="ml-1.5 hidden whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-gold sm:inline">
            Photographer
          </span>
        </Link>

        {/* Desktop nav */}
        <div role="navigation" aria-label="Main" className="hidden gap-8 md:flex">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "true" : undefined}
                className={`text-[12px] font-medium uppercase tracking-[0.1em] no-underline transition-colors duration-300 ${
                  active ? "text-gold" : "text-muted hover:text-warm"
                }`}
              >
                {l.number}. {l.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-5">
          <Link href="/contact" className="btn-primary hidden no-underline md:inline-flex">
            Hire Me
          </Link>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex cursor-pointer items-center justify-center border-none bg-transparent p-1 text-warm md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          role="navigation"
          aria-label="Mobile"
          className="animate-fadeIn fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 bg-ink/[0.98] backdrop-blur-xl md:hidden"
        >
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-[28px] no-underline ${
                  active ? "text-gold" : "text-warm"
                }`}
              >
                {l.number}. {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
