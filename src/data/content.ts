// Content for Services, Achievements (stats + highlights), and Testimonials sections.

export interface Service {
  icon: "aperture" | "camera" | "package" | "briefcase";
  title: string;
  desc: string;
}

// Matches the brief's required four services exactly:
// Event, Product, Portrait, Commercial photography.
export const SERVICES: Service[] = [
  {
    icon: "aperture",
    title: "Portrait Photography",
    desc: "Intimate sessions that reveal character and tell your unique story through light and shadow.",
  },
  {
    icon: "camera",
    title: "Event Photography",
    desc: "Seamless coverage of weddings, concerts, and corporate events — every pivotal moment preserved.",
  },
  {
    icon: "package",
    title: "Product Photography",
    desc: "Clean, detail-driven imagery that shows texture, form, and craftsmanship at their best.",
  },
  {
    icon: "briefcase",
    title: "Commercial Photography",
    desc: "Brand campaigns and editorial work engineered to stop the scroll and communicate value instantly.",
  },
];

export interface StatItem {
  number: string;
  label: string;
  sub: string;
}

export const STATS: StatItem[] = [
  { number: "3+", label: "Years of Experience", sub: "Focused craft" },
  { number: "15+", label: "Group Projects", sub: "International teams" },
  { number: "10+", label: "Events", sub: "Global exhibitions" },
  { number: "100+", label: "Happy Clients", sub: "Across 6 countries" },
];

export interface AchievementHighlight {
  icon: "aperture" | "camera" | "package" | "briefcase";
  title: string;
  desc: string;
}

export const ACHIEVEMENT_HIGHLIGHTS: AchievementHighlight[] = [
  {
    icon: "aperture",
    title: "International Exhibitions",
    desc: "Work displayed at Delhi Photo Festival, Singapore Art Week, and online platforms globally.",
  },
  {
    icon: "camera",
    title: "Documentary Projects",
    desc: "Participant in UNESCO-supported long-form documentary project, 2023.",
  },
  {
    icon: "package",
    title: "Group Collaborations",
    desc: "15+ multi-disciplinary photography projects with teams across Europe and Asia.",
  },
  {
    icon: "briefcase",
    title: "Continuous Learning",
    desc: "Masterclasses with Steve McCurry Foundation alumni and ongoing technical workshops.",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Working with Zabir felt like collaborating with someone who genuinely understood the soul of our project. Every frame he delivered was beyond what we imagined.",
    author: "Ayesha Malik",
    role: "Creative Director, Studio Nine",
  },
  {
    quote:
      "Zabir has an extraordinary ability to become invisible — you never notice him working, but the photographs he produces are absolutely unforgettable.",
    author: "Rohan Verma",
    role: "Editor, Lens & Light Magazine",
  },
  {
    quote:
      "Our international exhibition required someone who could photograph both the art and the atmosphere. Zabir captured both with remarkable sensitivity.",
    author: "Priya Nair",
    role: "Curator, Art House Mumbai",
  },
];
