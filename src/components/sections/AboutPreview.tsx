import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import PortfolioPhoto from "@/components/ui/PortfolioPhoto";
import { ICONS } from "@/components/ui/icons";
import { STATS } from "@/data/content";

export default function AboutPreview() {
  return (
    <RevealSection
      id="about"
      className="bg-cream px-5 py-24 text-ink sm:px-8 md:px-12 lg:py-[100px]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <PortfolioPhoto
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop"
          seed={1}
          alt="Zabir Khan sitting on a rock overlooking a mountain landscape"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="order-first aspect-[4/5] w-full"
        />

        {/* Text + stats */}
        <div>
          <p className="section-label">02. About Me</p>
          <h2 className="mb-6 font-display text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-ink">
            Capturing real stories
            <br />
            around the world.
          </h2>
          <p className="mb-8 max-w-[480px] text-[15px] leading-[1.8] text-ink/70">
            I&apos;m a photographer who believes in authenticity, light and emotion. I love
            turning ordinary moments into timeless memories.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {STATS.map((stat) => {
              const ApertureIcon = ICONS.aperture;
              return (
                <div key={stat.label}>
                  {ApertureIcon && (
                    <ApertureIcon size={18} className="mb-2 text-gold" aria-hidden="true" />
                  )}
                  <div className="font-display text-2xl font-black text-ink">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-xs text-ink/50">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <Link
            href="/about"
            className="btn-outline mt-10 border-ink/15 text-ink no-underline hover:border-gold hover:text-gold"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
