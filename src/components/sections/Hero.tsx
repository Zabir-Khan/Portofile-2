"use client";

import { ArrowRight } from "lucide-react";
import { SITE } from "@/data/site";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-end overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="animate-kenburns absolute inset-0 bg-[linear-gradient(135deg,#0f1108_0%,#1a1a0a_35%,#0a0a12_100%)]" />

      {/* Film grain texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Radial gold highlight */}
      <div
        className="pointer-events-none absolute right-[15%] top-[20%] h-[45vw] w-[45vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Oversized decorative letter (hidden on small screens to avoid overflow) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2vw] top-1/2 hidden -translate-y-1/2 select-none font-display text-[clamp(200px,28vw,380px)] font-black leading-none text-gold/[0.04] lg:block"
      >
        Z
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[900px] px-5 pb-[clamp(60px,8vw,100px)] sm:px-8 md:px-12">
        <div className="mb-4 flex items-center gap-4">
          <div className="h-px w-10 bg-gold" aria-hidden="true" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
            {SITE.title}
          </span>
        </div>

        <h1 className="animate-fadeUp [animation-delay:0.2s] font-display text-[clamp(52px,10vw,128px)] font-black leading-[0.95] tracking-tight">
          <span className="block text-warm">ZABIR</span>
          <span className="block text-gold">KHAN</span>
        </h1>

        <p className="animate-fadeUp mb-9 mt-6 max-w-[460px] text-[clamp(14px,1.6vw,18px)] leading-[1.7] text-[#aaaaaa] [animation-delay:0.4s]">
          {SITE.tagline}
        </p>

        <div className="animate-fadeUp flex flex-wrap gap-4 [animation-delay:0.6s]">
          <button className="btn-primary" onClick={() => scrollToId("portfolio")}>
            View Work <ArrowRight size={16} aria-hidden="true" />
          </button>
          <button className="btn-outline" onClick={() => scrollToId("contact")}>
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="animate-fadeIn absolute bottom-8 right-8 hidden flex-col items-center gap-2 opacity-40 [animation-delay:1.2s] sm:flex">
        <span className="text-[10px] uppercase tracking-[0.18em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="h-12 w-px bg-warm" aria-hidden="true" />
      </div>
    </section>
  );
}
