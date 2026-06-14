/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A", // primary background
          alt: "#111111", // secondary section background
          card: "#181818", // card surfaces
          border: "#2A2A2A", // hairline borders
        },
        gold: {
          DEFAULT: "#C9A96E", // primary accent
          dim: "#9A7A4E", // gradient end / hover
        },
        warm: "#F0EDE8", // primary text on dark / cream section background
        cream: {
          DEFAULT: "#F0EDE8", // light section background
          alt: "#E8E3DA", // secondary light section background
          border: "#DDD9D2", // hairline borders on light sections
        },
        muted: "#888888", // secondary text
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.22em",
      },
      keyframes: {
        kenburns: {
          "0%, 100%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.08) translate(-1%, -1%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        kenburns: "kenburns 20s ease-in-out infinite",
        fadeUp: "fadeUp 1s ease both",
        fadeIn: "fadeIn 0.3s ease both",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
