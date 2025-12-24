import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Trust & Will inspired palette
        primary: {
          DEFAULT: "#2D6A4F",
          light: "#40916C",
          dark: "#1B4332",
        },
        secondary: {
          DEFAULT: "#7B2CBF",
          light: "#9D4EDD",
          dark: "#5A189A",
        },
        accent: {
          DEFAULT: "#2D6A4F",
          light: "#40916C",
          dark: "#1B4332",
        },
        background: "#FFFEF5",
        foreground: "#1A1A2E",
        ivory: "#FFFEF5",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
