"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a <section> and fades/slides it into view the first time it enters
 * the viewport. Respects prefers-reduced-motion via Framer Motion's defaults
 * combined with the global CSS override in globals.css.
 */
export default function RevealSection({ id, children, className = "" }: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
