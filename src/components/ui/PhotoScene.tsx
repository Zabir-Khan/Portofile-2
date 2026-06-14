"use client";

import { useId } from "react";
import { TOKENS } from "@/lib/tokens";

/**
 * Self-contained SVG "photograph" scenes used as placeholders until real
 * photography is available. Each scene is a moody monochrome + gold
 * composition matching a photography genre. Zero network dependency.
 *
 * To replace with real images: swap this component's usage for
 * `next/image` and pass a `src` instead of `seed`.
 */

type SceneRenderer = (id: string) => JSX.Element;

const SCENES: SceneRenderer[] = [
  // 0 — Portrait: silhouette + soft rim light
  (id) => (
    <>
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id={`rim${id}`} cx="75%" cy="35%" r="55%">
          <stop offset="0%" stopColor={TOKENS.gold} stopOpacity="0.35" />
          <stop offset="100%" stopColor={TOKENS.gold} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#bg${id})`} />
      <rect width="400" height="400" fill={`url(#rim${id})`} />
      <ellipse cx="195" cy="155" rx="62" ry="74" fill="#050505" />
      <path d="M120 400 C125 280 150 235 195 232 C240 235 268 280 275 400 Z" fill="#050505" />
      <circle cx="170" cy="60" r="2" fill={TOKENS.gold} opacity="0.5" />
    </>
  ),
  // 1 — Mountain / Travel: layered ridgelines + sun
  (id) => (
    <>
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c2c2c" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id={`sun${id}`} cx="70%" cy="22%" r="18%">
          <stop offset="0%" stopColor={TOKENS.warm} stopOpacity="0.5" />
          <stop offset="100%" stopColor={TOKENS.warm} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#bg${id})`} />
      <circle cx="280" cy="90" r="34" fill={TOKENS.gold} opacity="0.45" />
      <rect width="400" height="400" fill={`url(#sun${id})`} />
      <path d="M0 260 L70 170 L140 240 L210 130 L290 250 L400 180 L400 400 L0 400 Z" fill="#1c1c1c" />
      <path d="M0 320 L100 230 L190 300 L320 210 L400 290 L400 400 L0 400 Z" fill="#050505" />
    </>
  ),
  // 2 — Documentary: figures + window light grid
  (id) => (
    <>
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#080808" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#bg${id})`} />
      <rect x="40" y="40" width="320" height="140" fill="#1a1a1a" opacity="0.5" />
      <rect x="60" y="60" width="60" height="100" fill={TOKENS.gold} opacity="0.18" />
      <rect x="150" y="60" width="60" height="100" fill={TOKENS.gold} opacity="0.1" />
      <rect x="240" y="60" width="60" height="100" fill={TOKENS.gold} opacity="0.18" />
      <ellipse cx="140" cy="300" rx="40" ry="55" fill="#050505" />
      <ellipse cx="140" cy="225" rx="26" ry="30" fill="#050505" />
      <ellipse cx="250" cy="310" rx="44" ry="60" fill="#050505" />
      <ellipse cx="250" cy="230" rx="27" ry="32" fill="#050505" />
    </>
  ),
  // 3 — Event: crowd silhouettes + stage lights
  (id) => (
    <>
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1408" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <radialGradient id={`l1${id}`} cx="25%" cy="0%" r="55%">
          <stop offset="0%" stopColor={TOKENS.gold} stopOpacity="0.55" />
          <stop offset="100%" stopColor={TOKENS.gold} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`l2${id}`} cx="75%" cy="5%" r="50%">
          <stop offset="0%" stopColor={TOKENS.warm} stopOpacity="0.4" />
          <stop offset="100%" stopColor={TOKENS.warm} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#bg${id})`} />
      <rect width="400" height="400" fill={`url(#l1${id})`} />
      <rect width="400" height="400" fill={`url(#l2${id})`} />
      {[...Array(9)].map((_, i) => (
        <ellipse key={i} cx={20 + i * 45} cy={340 + (i % 3) * 8} rx="22" ry="60" fill="#020202" />
      ))}
    </>
  ),
  // 4 — Landscape: horizon + golden gradient field
  (id) => (
    <>
      <defs>
        <linearGradient id={`sky${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3226" />
          <stop offset="55%" stopColor="#1a1610" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id={`gnd${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#15120a" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <radialGradient id={`sun2${id}`} cx="50%" cy="48%" r="14%">
          <stop offset="0%" stopColor={TOKENS.gold} stopOpacity="0.8" />
          <stop offset="100%" stopColor={TOKENS.gold} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#sky${id})`} />
      <rect width="400" height="400" fill={`url(#sun2${id})`} />
      <circle cx="200" cy="190" r="26" fill={TOKENS.gold} opacity="0.5" />
      <rect y="230" width="400" height="170" fill={`url(#gnd${id})`} />
      <path d="M0 235 Q100 220 200 232 T400 228 L400 240 L0 245 Z" fill="#0a0a0a" opacity="0.6" />
    </>
  ),
  // 5 — Street: alley perspective + figure
  (id) => (
    <>
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#202020" />
          <stop offset="100%" stopColor="#060606" />
        </linearGradient>
        <radialGradient id={`light${id}`} cx="50%" cy="20%" r="40%">
          <stop offset="0%" stopColor={TOKENS.warm} stopOpacity="0.25" />
          <stop offset="100%" stopColor={TOKENS.warm} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#bg${id})`} />
      <path d="M0 0 L160 0 L195 400 L0 400 Z" fill="#141414" />
      <path d="M400 0 L240 0 L205 400 L400 400 Z" fill="#101010" />
      <rect width="400" height="400" fill={`url(#light${id})`} />
      <ellipse cx="200" cy="320" rx="20" ry="50" fill="#020202" />
      <ellipse cx="200" cy="255" rx="13" ry="16" fill="#020202" />
    </>
  ),
  // 6 — Hero/general: abstract lens flare composition
  (id) => (
    <>
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#070707" />
        </linearGradient>
        <radialGradient id={`flare${id}`} cx="65%" cy="30%" r="45%">
          <stop offset="0%" stopColor={TOKENS.gold} stopOpacity="0.4" />
          <stop offset="100%" stopColor={TOKENS.gold} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#bg${id})`} />
      <rect width="400" height="400" fill={`url(#flare${id})`} />
      <circle cx="260" cy="120" r="6" fill={TOKENS.gold} opacity="0.6" />
      <circle cx="230" cy="170" r="3" fill={TOKENS.warm} opacity="0.4" />
      <path d="M0 400 C100 320 300 320 400 400 Z" fill="#050505" />
    </>
  ),
  // 7 — About portrait: seated figure on rock
  (id) => (
    <>
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#33312c" />
          <stop offset="60%" stopColor="#171511" />
          <stop offset="100%" stopColor="#080807" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#bg${id})`} />
      <path d="M0 270 Q120 230 200 255 T400 250 L400 400 L0 400 Z" fill="#161310" />
      <path d="M120 280 L260 280 L290 340 L90 340 Z" fill="#0a0908" />
      <ellipse cx="195" cy="245" rx="34" ry="42" fill="#040404" />
      <circle cx="195" cy="195" r="20" fill="#040404" />
    </>
  ),
  // 8 — Craft / hands: warm close detail
  (id) => (
    <>
      <defs>
        <radialGradient id={`bg${id}`} cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#2e2419" />
          <stop offset="100%" stopColor="#0a0805" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#bg${id})`} />
      <ellipse cx="200" cy="240" rx="120" ry="60" fill={TOKENS.gold} opacity="0.12" />
      <path
        d="M120 260 Q200 200 280 260 Q260 320 200 330 Q140 320 120 260 Z"
        fill="#050402"
      />
      <circle cx="200" cy="240" r="14" fill={TOKENS.gold} opacity="0.3" />
    </>
  ),
];

export interface PhotoSceneProps {
  seed: number;
  alt: string;
  className?: string;
}

export default function PhotoScene({ seed, alt, className = "" }: PhotoSceneProps) {
  const reactId = useId();
  const idx = ((seed % SCENES.length) + SCENES.length) % SCENES.length;
  const scene = SCENES[idx];

  if (!scene) return null;

  return (
    <div role="img" aria-label={alt} className={`overflow-hidden bg-ink ${className}`}>
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        className="block h-full w-full"
      >
        {scene(reactId)}
      </svg>
    </div>
  );
}
