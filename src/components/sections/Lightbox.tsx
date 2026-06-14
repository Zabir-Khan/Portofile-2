"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import PortfolioPhoto from "@/components/ui/PortfolioPhoto";
import type { PortfolioItem } from "@/data/portfolio";

interface LightboxProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} preview`}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute right-8 top-6 cursor-pointer border-none bg-transparent text-warm"
      >
        <X size={28} />
      </button>
      <div className="text-center" onClick={(e) => e.stopPropagation()}>
        <PortfolioPhoto
          src={item.image}
          seed={item.seed}
          alt={item.title}
          sizes="80vw"
          className="mx-auto h-[min(70vh,500px)] w-[min(80vw,700px)]"
        />
        <div className="mt-5">
          <div className="mb-1.5 text-[11px] uppercase tracking-[0.1em] text-gold">
            {item.category}
          </div>
          <div className="font-display text-2xl">{item.title}</div>
          <div className="mt-1.5 text-[13px] text-muted">{item.desc}</div>
        </div>
      </div>
    </div>
  );
}
