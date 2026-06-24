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
        /* ── Beaver Pest Defense brand tokens ── */
        brand: {
          black: "#0A0A0A",     // Primary background
          charcoal: "#111111",  // Section backgrounds
          dark: "#1C1C1C",      // Card / panel backgrounds
          border: "#2A2A2A",    // Subtle borders
          lime: "#6DC02F",      // Primary brand color
          "lime-light": "#80D636", // Hover / highlight
          "lime-dim": "#4E8B21",  // Muted lime for backgrounds
          silver: "#C8C8C8",    // Metallic accents / secondary text
        },
      },
      fontFamily: {
        display: ["var(--font-bc)", "Impact", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "shield-pattern": "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 2L4 12v16c0 14.4 10.8 27.9 26 31.4C46.2 55.9 57 42.4 57 28V12L30 2z' fill='none' stroke='%236DC02F' stroke-width='0.5' stroke-opacity='0.12'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
