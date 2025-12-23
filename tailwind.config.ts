import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@premieroctet/next-admin/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "280px",
      md: "768px",
      md1: "1000px",
      md2: "1200px",
      lg: "1440px",
      lg1: "1500px",
      lg2: "1630px",
      xl: "1920px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      cormorant_infant: ["cormorant_infant"],
      jakarta: ["var(--font-jakarta)", "sans-serif"],
      spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
    },
    borderWidth: {
      DEFAULT: "1px",
    },
    extend: {
      colors: {
        primary: "#370054",
        primaryLight: "#7a2fb5",
      },
      animation: {
        bounceTwice: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
