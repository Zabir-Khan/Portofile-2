// Portfolio gallery items.
//
// `image` is a direct Unsplash CDN URL (free for commercial use, no
// attribution required — see https://unsplash.com/license). The `seed`
// field is kept as a fallback for PhotoScene (inline SVG) in case an image
// fails to load or is removed.
//
// Replace `image` with paths to Zabir's own photography (e.g. "/images/...")
// when available — no other code changes needed.

export type PortfolioCategory =
  | "Portrait"
  | "Travel"
  | "Documentary"
  | "Events"
  | "Landscape"
  | "Street";

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  title: string;
  desc: string;
  seed: number;
  image: string;
}

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&q=80&auto=format&fit=crop`;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Portrait",
    title: "Soulful Silence",
    desc: "Capturing raw expression",
    seed: 0,
    image: UNSPLASH("1506863530036-1efeddceb993"),
  },
  {
    id: 2,
    category: "Travel",
    title: "Mountain Reverie",
    desc: "Where clouds kiss peaks",
    seed: 1,
    image: UNSPLASH("1500964757637-c85e8a162699"),
  },
  {
    id: 3,
    category: "Documentary",
    title: "Urban Pulse",
    desc: "Stories in motion",
    seed: 2,
    image: UNSPLASH("1522897048979-e407743f3603"),
  },
  {
    id: 4,
    category: "Events",
    title: "Stage Lights",
    desc: "Moments that electrify",
    seed: 3,
    image: UNSPLASH("1517649763962-0c623066013b"),
  },
  {
    id: 5,
    category: "Landscape",
    title: "Golden Hour",
    desc: "Nature's daily masterpiece",
    seed: 4,
    image: UNSPLASH("1612441804231-77a36b284856"),
  },
  {
    id: 6,
    category: "Street",
    title: "City Veins",
    desc: "Life between the lines",
    seed: 5,
    image: UNSPLASH("1488034976201-ffbaa99cbf5c"),
  },
  {
    id: 7,
    category: "Portrait",
    title: "Inner Light",
    desc: "Identity through the lens",
    seed: 6,
    image: UNSPLASH("1544005313-94ddf0286df2"),
  },
  {
    id: 8,
    category: "Travel",
    title: "Coastal Drift",
    desc: "Endless horizons",
    seed: 7,
    image: UNSPLASH("1435732960391-11053ee5e6b6"),
  },
  {
    id: 9,
    category: "Documentary",
    title: "The Craftsmen",
    desc: "Hands that shape the world",
    seed: 0,
    image: UNSPLASH("1429292394373-ddbcc6bb7468"),
  },
];

export const PORTFOLIO_CATEGORIES: ("All" | PortfolioCategory)[] = [
  "All",
  ...Array.from(new Set(PORTFOLIO_ITEMS.map((p) => p.category))),
];
