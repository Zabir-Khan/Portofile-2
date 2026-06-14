// Central place for site identity, contact details, and navigation.
// Replace placeholder values here when real information is available.

export const SITE = {
  name: "Zabir Khan",
  title: "Professional Photographer",
  tagline:
    "Storyteller. Visual artist. I capture moments that resist forgetting — the raw, the fleeting, the real.",
  email: "hellozabirkhan@gmail.com",
  phone: "+91 98765 43210",
  location: "India — Available Worldwide",
  url: "https://zabir-khan.vercel.app", // update if a custom domain is added later
};

// Top navigation — numbered labels matching the reference design.
// `href` is a real route; `home` is "/" and others are dedicated pages.
export const NAV_LINKS = [
  { href: "/", number: "01", label: "Home" },
  { href: "/about", number: "02", label: "About" },
  { href: "/portfolio", number: "03", label: "Portfolio" },
  { href: "/experience", number: "04", label: "Experience" },
  { href: "/blog", number: "05", label: "Blog" },
  { href: "/contact", number: "06", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", abbr: "In", href: "#" },
  { label: "Behance", abbr: "Be", href: "#" },
  { label: "Instagram", abbr: "IG", href: "#" },
  { label: "YouTube", abbr: "YT", href: "#" },
] as const;
