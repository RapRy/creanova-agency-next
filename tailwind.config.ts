import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-general)"],
      },
      colors: {
        primary: "#f3f3f3",
        secondary: "#312f2f",
        red: "#fe5e54",
        bisque: "#ffe1c5",
        "text-color-1": "#312F2F",
        "text-color-2": "#939394",
      },
    },
  },
  plugins: [],
};
export default config;
