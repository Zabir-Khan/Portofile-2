import RevealSection from "@/components/ui/RevealSection";
import PortfolioPhoto from "@/components/ui/PortfolioPhoto";
import { ACHIEVEMENT_HIGHLIGHTS } from "@/data/content";
import { ICONS } from "@/components/ui/icons";

export default function Achievements() {
  return (
    <RevealSection id="achievements" className="px-5 py-24 sm:px-8 md:px-12 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="section-label">Achievements</p>
          <h2 className="section-title mb-8">
            Recognition
            <br />
            <em className="font-display italic text-gold">&amp; Impact</em>
          </h2>
          <p className="mb-10 text-[15px] leading-[1.8] text-[#999999]">
            From international exhibitions to collaborative projects spanning multiple
            continents, each milestone reflects a commitment to photography as a tool
            for human connection.
          </p>

          <div className="flex flex-col gap-7">
            {ACHIEVEMENT_HIGHLIGHTS.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.title} className="flex gap-5">
                  {Icon && (
                    <Icon
                      size={20}
                      className="mt-0.5 flex-shrink-0 text-gold"
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <div className="mb-1.5 text-[15px] font-semibold text-warm">
                      {item.title}
                    </div>
                    <div className="text-[13px] leading-[1.7] text-muted">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual block */}
        <div className="relative order-first lg:order-last">
          <PortfolioPhoto
            src="https://images.unsplash.com/photo-1546636889-ba9fdd63583e?w=900&q=80&auto=format&fit=crop"
            seed={4}
            alt="Zabir Khan at an international photography exhibition"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-[480px] w-full"
          />
          <div className="absolute -bottom-6 left-4 max-w-[calc(100%-32px)] border border-ink-border bg-ink-alt px-8 py-6 lg:-left-6">
            <div className="font-display text-[42px] font-black text-gold">10+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.1em] text-muted">
              International Events
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
