import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Beaver Pest Defense exact brand tokens ── */
        brand: {
          black:      "#0A0A0A",   // hero / outer bg
          charcoal:   "#111111",   // nav on scroll, services section
          dark:       "#1C1C1C",   // cards, panels, form fields
          border:     "#2A2A2A",   // borders, dividers
          lime:       "#6DC02F",   // PRIMARY accent — CTAs, icons, headlines
          "lime-light":"#80D636",  // hover
          "lime-dim": "#4E8B21",   // gradient tail
          silver:     "#C8C8C8",   // body text / secondary labels
          // Section backgrounds that differ from black
          light:      "#E8E6E0",   // "Why Choose Us" — only light section
          olive:      "#243318",   // "Properties" — dark olive green
        },
      },
      fontFamily: {
        display: ["var(--font-bc)", "Impact", "Arial Narrow", "sans-serif"],
        sans:    ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
