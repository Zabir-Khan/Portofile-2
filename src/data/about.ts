// Content for the About section: skills, career timeline, and quick facts.

export interface Skill {
  name: string;
  pct: number;
}

export const SKILLS: Skill[] = [
  { name: "Composition & Light", pct: 95 },
  { name: "Adobe Lightroom / Capture One", pct: 92 },
  { name: "Documentary Storytelling", pct: 88 },
  { name: "Studio & Event Lighting", pct: 85 },
];

export interface TimelineEntry {
  year: string;
  event: string;
}

export const TIMELINE: TimelineEntry[] = [
  { year: "2019", event: "Started professional photography — portrait and street work in Mumbai" },
  { year: "2021", event: "Joined international group project: 'Urban Borders' across 4 countries" },
  { year: "2022", event: "Exhibited at Delhi Photo Festival and Singapore Art Week" },
  { year: "2023", event: "Participated in UNESCO-supported documentary project" },
  { year: "2024", event: "Featured in Lens & Light magazine; launched independent studio" },
];

export const ABOUT_FACTS = [
  { icon: "location" as const, label: "Based in India" },
  { icon: "globe" as const, label: "Available worldwide" },
  { icon: "handshake" as const, label: "Open to long-term collaborations" },
];
