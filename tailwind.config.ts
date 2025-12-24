import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2540",
          light: "#1A3550",
          dark: "#051530",
        },
        accent: {
          DEFAULT: "#C4A052",
          light: "#D4B062",
          dark: "#B49042",
        },
        background: "#FAFAFA",
        foreground: "#1A1A2E",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
