"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { useActiveSection } from "@/lib/useActiveSection";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[100] flex h-[72px] items-center justify-between border-b border-ink-border bg-ink/90 px-5 backdrop-blur-xl sm:px-8 md:px-12">
        {/* Logo */}
        <div
          onClick={() => handleNavClick("home")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleNavClick("home");
          }}
          role="button"
          tabIndex={0}
          aria-label="Go to home"
          className="flex min-w-0 cursor-pointer items-baseline gap-0.5"
        >
          <span className="font-display text-[22px] font-black tracking-tight text-warm">
            ZK
          </span>
          <span className="ml-1.5 hidden whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-gold sm:inline">
            Photographer
          </span>
        </div>

        {/* Desktop nav */}
        <div role="navigation" aria-label="Main" className="hidden gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <span
              key={l.id}
              role="link"
              tabIndex={0}
              aria-current={activeSection === l.id ? "true" : undefined}
              className={`nav-link${activeSection === l.id ? " active" : ""}`}
              onClick={() => handleNavClick(l.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleNavClick(l.id);
              }}
            >
              {l.label}
            </span>
          ))}
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-5">
          <button
            className="btn-primary hidden md:inline-flex"
            onClick={() => handleNavClick("contact")}
          >
            Hire Me
          </button>
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
          {NAV_LINKS.map((l) => (
            <span
              key={l.id}
              role="link"
              tabIndex={0}
              aria-current={activeSection === l.id ? "true" : undefined}
              className={`font-display cursor-pointer text-[28px] ${
                activeSection === l.id ? "text-gold" : "text-warm"
              }`}
              onClick={() => handleNavClick(l.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleNavClick(l.id);
              }}
            >
              {l.label}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
