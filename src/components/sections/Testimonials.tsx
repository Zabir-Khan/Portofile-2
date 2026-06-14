"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RevealSection from "@/components/ui/RevealSection";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const current = TESTIMONIALS[idx];

  if (!current) return null;

  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <RevealSection
      id="testimonials"
      className="bg-ink-alt px-5 py-24 text-warm sm:px-8 md:px-12 lg:py-[100px]"
    >
      <div className="mx-auto max-w-[800px] text-center">
        <p className="section-label">05. Testimonial</p>
        <h2 className="section-title mb-16">
          Kind
          <br />
          <em className="font-display italic text-gold">Words</em>
        </h2>

        <div className="testimonial-card relative">
          <div
            aria-hidden="true"
            className="mb-7 font-serif text-[64px] leading-[0.7] text-gold/60"
          >
            &ldquo;
          </div>
          <p className="mb-8 text-[clamp(15px,2vw,18px)] italic leading-[1.8] text-[#cccccc]">
            {current.quote}
          </p>
          <div className="mx-auto mb-6 h-px w-10 bg-gold" aria-hidden="true" />
          <div className="text-sm font-semibold text-warm">{current.author}</div>
          <div className="mt-1 text-xs text-muted">{current.role}</div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.author}
              onClick={() => setIdx(i)}
              aria-label={`Show testimonial from ${t.author}`}
              aria-current={i === idx ? "true" : undefined}
              className={`h-2 cursor-pointer rounded-full border-none p-0 transition-all duration-300 ${
                i === idx ? "w-6 bg-gold" : "w-2 bg-ink-border"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-5 flex justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 cursor-pointer items-center justify-center border border-ink-border text-warm transition-colors duration-300 hover:border-gold"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 cursor-pointer items-center justify-center border border-ink-border text-warm transition-colors duration-300 hover:border-gold"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </RevealSection>
  );
}
