"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoScene from "@/components/ui/PhotoScene";

interface PortfolioPhotoProps {
  src: string;
  seed: number;
  alt: string;
  className?: string;
  sizes?: string;
}

/**
 * Renders a real photo via next/image, falling back to the inline SVG
 * PhotoScene if the image fails to load (e.g. network issue, removed URL).
 */
export default function PortfolioPhoto({
  src,
  seed,
  alt,
  className = "",
  sizes = "(max-width: 480px) 100vw, (max-width: 860px) 50vw, 33vw",
}: PortfolioPhotoProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <PhotoScene seed={seed} alt={alt} className={className} />;
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}
