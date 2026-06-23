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
        deep: "#0C2512",
        forest: "#1B5E20",
        canopy: "#2E7D32",
        honeycomb: "#E09000",
        linen: "#F8F6F1",
        stone: "#1C1917",
        mist: "#786E65",
      },
      fontFamily: {
        display: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 70% 50%, #1B5E2022 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
