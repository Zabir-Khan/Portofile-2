import RevealSection from "@/components/ui/RevealSection";
import { ACHIEVEMENT_HIGHLIGHTS } from "@/data/content";
import { ICONS } from "@/components/ui/icons";

export default function ExperiencePreview() {
  return (
    <RevealSection
      id="experience"
      className="bg-cream px-5 py-24 text-ink sm:px-8 md:px-12 lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <p className="section-label">04. Experience &amp; Achievements</p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENT_HIGHLIGHTS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.title}>
                {Icon && (
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-ink/10">
                    <Icon size={20} className="text-gold" aria-hidden="true" />
                  </div>
                )}
                <h3 className="mb-2 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-ink/60">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
