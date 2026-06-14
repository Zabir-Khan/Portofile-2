import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortfolioPhoto from "@/components/ui/PortfolioPhoto";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink pt-[72px] text-warm">
      {/* Film grain texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Radial gold highlight */}
      <div
        className="pointer-events-none absolute right-[10%] top-[10%] h-[45vw] w-[45vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:px-12 lg:grid-cols-2 lg:py-24">
        {/* Left: text content */}
        <div>
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-10 bg-gold" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Hello, I&apos;m
            </span>
          </div>

          <h1 className="animate-fadeUp font-display text-[clamp(48px,8vw,96px)] font-black leading-[0.95] tracking-tight [animation-delay:0.2s]">
            <span className="block text-warm">ZABIR</span>
            <span className="block text-gold">KHAN</span>
          </h1>

          <p className="animate-fadeUp mt-4 text-lg text-[#bbbbbb] [animation-delay:0.3s]">
            Photographer
            <br />
            Storyteller | Visual Artist
          </p>

          <p className="animate-fadeUp mb-9 mt-6 max-w-[460px] text-[clamp(14px,1.6vw,17px)] leading-[1.7] text-[#aaaaaa] [animation-delay:0.4s]">
            {SITE.tagline}
          </p>

          <div className="animate-fadeUp flex flex-wrap gap-4 [animation-delay:0.6s]">
            <Link href="/portfolio" className="btn-primary no-underline">
              View My Work <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-outline no-underline">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Right: photographer portrait */}
        <div className="relative">
          <PortfolioPhoto
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&q=80&auto=format&fit=crop"
            seed={0}
            alt="Zabir Khan, photographer, holding a camera"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[4/5] w-full"
          />

          {/* Scroll indicator */}
          <div className="absolute -bottom-6 right-0 hidden flex-col items-center gap-2 opacity-60 sm:flex">
            <span className="text-[10px] uppercase tracking-[0.18em] [writing-mode:vertical-rl]">
              Scroll
            </span>
            <div className="h-12 w-px bg-warm" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
