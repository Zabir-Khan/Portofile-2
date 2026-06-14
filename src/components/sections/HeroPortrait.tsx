"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";

interface HeroPortraitProps {
  src: string;
  alt: string;
}

/**
 * A large, full-bleed portrait used in the Hero section. The image's edges
 * are faded to transparent via a CSS mask gradient so it blends into the
 * dark `bg-ink` background rather than sitting in a hard-edged box —
 * creating a layered, "photo behind the text" effect.
 *
 * If the image fails to load, falls back to a plain gradient so the layout
 * never breaks even without network access.
 */
export default function HeroPortrait({ src, alt }: HeroPortraitProps) {
  const [errored, setErrored] = useState(false);

  // Fades the bottom-left of the image to transparent, revealing the bg-ink
  // color beneath — this is what creates the "blended" look and lets the
  // heading text overlap the image naturally. A single diagonal gradient
  // keeps this robust across browsers (avoids multi-layer mask-composite).
  const maskStyle = {
    maskImage: "linear-gradient(to top right, transparent 0%, transparent 22%, black 58%, black 100%)",
    WebkitMaskImage:
      "linear-gradient(to top right, transparent 0%, transparent 22%, black 58%, black 100%)",
  } as CSSProperties;

  if (errored) {
    return (
      <div
        className="absolute inset-0"
        style={{
          ...maskStyle,
          background:
            "radial-gradient(circle at 70% 35%, rgba(201,169,110,0.18) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="absolute inset-0" style={maskStyle} aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[75%_30%] opacity-90"
        onError={() => setErrored(true)}
      />
    </div>
  );
}
