import RevealSection from "@/components/ui/RevealSection";
import { SERVICES } from "@/data/content";
import { ICONS } from "@/components/ui/icons";

export default function Services() {
  return (
    <RevealSection
      id="services"
      className="bg-ink-alt px-5 py-24 sm:px-8 md:px-12 lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <p className="section-label">Services</p>
          <h2 className="section-title">
            What I
            <br />
            <em className="font-display italic text-gold">Offer</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <div key={service.title} className="service-card">
                {Icon && <Icon size={28} className="mb-5 text-gold" aria-hidden="true" />}
                <h3 className="mb-3.5 font-display text-xl text-warm">{service.title}</h3>
                <p className="text-sm leading-[1.8] text-muted">{service.desc}</p>
                <div className="mt-7 cursor-pointer text-xs tracking-[0.1em] text-gold">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
