import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroPortrait from "@/components/sections/HeroPortrait";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink pt-[72px] text-warm">
      {/* Large portrait, masked so it blends into the dark background and
          sits behind/beside the heading rather than in a hard-edged box */}
      <HeroPortrait
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&q=80&auto=format&fit=crop"
        alt="Zabir Khan, photographer"
      />

      {/* Left-to-right dark gradient so the heading stays legible over the photo */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent"
        aria-hidden="true"
      />

      {/* Film grain texture, tying the photo and background together */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Warm glow on the right where the portrait is most visible */}
      <div
        className="pointer-events-none absolute right-[5%] top-[15%] h-[40vw] w-[40vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,169,110,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-[2] flex min-h-[calc(100vh-72px)] items-center px-5 py-16 sm:px-8 md:px-12">
        <div className="max-w-[560px]">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-10 bg-gold" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Hello, I&apos;m
            </span>
          </div>

          <h1 className="animate-fadeUp font-display text-[clamp(48px,9vw,104px)] font-black leading-[0.95] tracking-tight [animation-delay:0.2s]">
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-[2] hidden flex-col items-center gap-2 opacity-60 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.18em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="h-12 w-px bg-warm" aria-hidden="true" />
      </div>
    </section>
  );
}
