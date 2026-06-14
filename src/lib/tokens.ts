// Design tokens — single source of truth for the palette used outside Tailwind
// (e.g. inline SVG fills inside PhotoScene). Keep in sync with tailwind.config.js.

export const TOKENS = {
  ink: "#0A0A0A",
  inkAlt: "#111111",
  card: "#181818",
  border: "#2A2A2A",
  gold: "#C9A96E",
  goldDim: "#9A7A4E",
  warm: "#F0EDE8",
  muted: "#888888",
} as const;
