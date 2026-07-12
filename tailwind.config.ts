import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f5f0e6",
        ink: "#1a1a1a",
        nb: {
          pink: "#ffd6e0",
          blue: "#c4e8ff",
          peach: "#ffecd2",
          lavender: "#e0d4f5",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      borderWidth: {
        "2.5": "2.5px",
      },
      boxShadow: {
        nb: "5px 5px 0 #1a1a1a",
        nbSm: "3px 3px 0 #1a1a1a",
        nbLg: "6px 6px 0 #1a1a1a",
        nbBtn: "4px 4px 0 #1a1a1a",
        nbBtnSm: "2px 2px 0 #1a1a1a",
        nbBadge: "2px 2px 0 #1a1a1a",
        nbPill: "3px 3px 0 #1a1a1a",
      },
      borderRadius: {
        card: "14px",
        cta: "16px",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
