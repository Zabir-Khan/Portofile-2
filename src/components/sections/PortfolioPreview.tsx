import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealSection from "@/components/ui/RevealSection";
import PortfolioPhoto from "@/components/ui/PortfolioPhoto";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

export default function PortfolioPreview() {
  // Show the first 6 items in a clean 3x2 grid with captions beneath,
  // matching the "Portfolio Highlights" reference layout.
  const items = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <RevealSection
      id="portfolio"
      className="bg-ink px-5 py-24 text-warm sm:px-8 md:px-12 lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label">03. Portfolio Highlights</p>
            <h2 className="section-title">
              A selection of
              <br />
              <em className="font-display italic text-gold">my recent work.</em>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-gold no-underline"
          >
            View Full Portfolio <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id}>
              <PortfolioPhoto
                src={item.image}
                seed={item.seed}
                alt={`${item.title} - ${item.category} photography by Zabir Khan`}
                className="aspect-[4/3] w-full"
              />
              <h3 className="mt-4 font-display text-lg text-warm">{item.category}</h3>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
