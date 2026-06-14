"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "portfolio", "services", "achievements", "contact"];

/**
 * Tracks which section is currently in view using IntersectionObserver with
 * a rootMargin tuned to avoid flicker on short viewports (mobile).
 */
export function useActiveSection(): string {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
