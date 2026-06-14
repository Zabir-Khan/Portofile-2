"use client";

import { useState } from "react";
import RevealSection from "@/components/ui/RevealSection";
import PortfolioPhoto from "@/components/ui/PortfolioPhoto";
import Lightbox from "@/components/sections/Lightbox";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  type PortfolioItem,
} from "@/data/portfolio";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const filtered =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === activeFilter);

  return (
    <RevealSection id="portfolio" className="px-5 py-24 sm:px-8 md:px-12 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
              Selected
              <br />
              <em className="font-display italic text-gold">Work</em>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_CATEGORIES.map((c) => (
              <button
                key={c}
                className={`filter-btn${activeFilter === c ? " active" : ""}`}
                onClick={() => setActiveFilter(c)}
                aria-pressed={activeFilter === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="masonry">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="portfolio-item mb-4 break-inside-avoid"
              style={{ height: i % 3 === 1 ? 380 : 260 }}
              onClick={() => setLightboxItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxItem(item);
              }}
            >
              <PortfolioPhoto
                src={item.image}
                seed={item.seed}
                alt={`${item.title} - ${item.category} photography by Zabir Khan`}
                className="h-full w-full"
              />
              <div className="overlay">
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.1em] text-gold">
                    {item.category}
                  </div>
                  <div className="font-display text-base text-warm">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </RevealSection>
  );
}
