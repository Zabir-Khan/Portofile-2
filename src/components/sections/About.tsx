import { Download } from "lucide-react";
import RevealSection from "@/components/ui/RevealSection";
import { ABOUT_FACTS, SKILLS, TIMELINE } from "@/data/about";
import { ICONS } from "@/components/ui/icons";

export default function About() {
  return (
    <RevealSection id="about" className="px-5 py-24 sm:px-8 md:px-12 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left column */}
        <div>
          <p className="section-label">About Me</p>
          <h2 className="section-title mb-6">
            Light is my
            <br />
            <em className="font-display italic text-gold">language.</em>
          </h2>
          <p className="mb-5 text-[15px] leading-[1.8] text-[#999999]">
            I&apos;m a photographer based in India who believes that the most powerful
            images are the ones you almost didn&apos;t take. I work at the intersection
            of documentary sensitivity and fine-art composition.
          </p>
          <p className="mb-9 text-[15px] leading-[1.8] text-[#999999]">
            From portrait sessions in quiet studios to documentary projects spanning
            continents, I approach every assignment with the same philosophy: disappear
            into the environment, and let the truth surface naturally.
          </p>

          <div className="flex flex-col gap-3.5">
            {ABOUT_FACTS.map((fact) => {
              const Icon = ICONS[fact.icon];
              return (
                <div key={fact.label} className="flex items-center gap-3">
                  {Icon && <Icon size={16} className="text-gold" aria-hidden="true" />}
                  <span className="text-sm text-[#bbbbbb]">{fact.label}</span>
                </div>
              );
            })}
          </div>

          <button className="btn-outline mt-8">
            Download CV <Download size={14} aria-hidden="true" />
          </button>
        </div>

        {/* Right column: skills + timeline */}
        <div>
          {/* Skills */}
          <div className="mb-12">
            <p className="mb-6 text-xs uppercase tracking-[0.14em] text-muted">
              Core Skills
            </p>
            {SKILLS.map((skill) => (
              <div key={skill.name} className="mb-5">
                <div className="mb-2 flex justify-between">
                  <span className="text-[13px] text-[#cccccc]">{skill.name}</span>
                  <span className="text-[13px] text-gold">{skill.pct}%</span>
                </div>
                <div className="h-0.5 rounded-sm bg-ink-border">
                  <div
                    className="h-0.5 rounded-sm bg-[linear-gradient(90deg,#9A7A4E,#C9A96E)]"
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <p className="mb-6 text-xs uppercase tracking-[0.14em] text-muted">Journey</p>
          <div className="flex flex-col gap-5">
            {TIMELINE.map((entry) => (
              <div key={entry.year} className="timeline-item">
                <span className="text-[11px] font-semibold tracking-[0.08em] text-gold">
                  {entry.year}
                </span>
                <p className="mt-1 text-sm leading-[1.6] text-[#bbbbbb]">{entry.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
