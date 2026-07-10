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
        background: "#FDFBF7",
        foreground: "#26221E",
        muted: "#736A5F",
        card: "#FFFFFF",
        border: "#EAE3D8",
        accent: {
          DEFAULT: "#5D4A82",
          hover: "#4B3B6A",
          soft: "#F1ECF7",
          text: "#5D4A82",
        },
        clay: {
          DEFAULT: "#B4694A",
          soft: "#FBEEE7",
          text: "#A2552F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(38, 34, 30, 0.05)",
        card: "0 1px 3px rgba(38, 34, 30, 0.04), 0 8px 24px rgba(38, 34, 30, 0.05)",
        cardHover: "0 4px 10px rgba(38, 34, 30, 0.06), 0 16px 36px rgba(38, 34, 30, 0.09)",
        button: "0 1px 2px rgba(93, 74, 130, 0.15), 0 4px 14px rgba(93, 74, 130, 0.20)",
        buttonHover: "0 2px 6px rgba(93, 74, 130, 0.22), 0 10px 26px rgba(93, 74, 130, 0.30)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
