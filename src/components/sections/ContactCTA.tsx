import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import RevealSection from "@/components/ui/RevealSection";
import { SITE } from "@/data/site";

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Phone, label: "Phone", value: SITE.phone },
  { icon: MapPin, label: "Location", value: SITE.location },
];

export default function ContactCTA() {
  return (
    <RevealSection
      id="contact-cta"
      className="bg-cream px-5 py-24 text-ink sm:px-8 md:px-12 lg:py-[100px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div>
          <p className="section-label">06. Let&apos;s Connect</p>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-ink">
            Have a project in mind?
          </h2>
          <p className="mt-2 text-[clamp(20px,2.6vw,28px)] font-display italic text-gold">
            Let&apos;s create something amazing together.
          </p>

          <Link href="/contact" className="btn-primary mt-8 no-underline">
            Get In Touch <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          {CONTACT_DETAILS.map((c) => (
            <div key={c.label} className="flex items-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-ink/10 text-gold">
                <c.icon size={18} aria-hidden="true" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-ink/40">
                  {c.label}
                </div>
                <div className="text-sm text-ink">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
