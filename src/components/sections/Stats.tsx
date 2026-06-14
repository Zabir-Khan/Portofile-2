import RevealSection from "@/components/ui/RevealSection";
import { STATS } from "@/data/content";

export default function Stats() {
  return (
    <RevealSection
      id="stats"
      className="border-y border-ink-border px-5 py-14 sm:px-8 md:px-12"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 text-center md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="stat-number">{stat.number}</div>
            <div className="mt-2 text-[13px] font-medium text-warm">{stat.label}</div>
            <div className="mt-1 text-xs text-muted">{stat.sub}</div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
