import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Natural, calm palette — sandy creams, sage greens, warm terracotta
        sand: {
          50: "#fbf8f3",
          100: "#f5f0e8",
          200: "#ebe2d3",
          300: "#ddcfb7",
          400: "#c9b393",
        },
        sage: {
          50: "#f3f5f1",
          100: "#e3e9dd",
          200: "#c8d3bd",
          300: "#a8b89a",
          400: "#869a78",
          500: "#6b7d63",
          600: "#54634f",
          700: "#404b3d",
          800: "#2f372d",
          900: "#1f251e",
        },
        clay: {
          300: "#e0b9a8",
          400: "#c89784",
          500: "#b07a63",
          600: "#8e5f4d",
        },
        ink: {
          DEFAULT: "#2c2a26",
          soft: "#4a4842",
          mute: "#7a7872",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(60, 50, 40, 0.18)",
        lift: "0 25px 50px -20px rgba(60, 50, 40, 0.25)",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.15) translate(-2%, -2%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-out forwards",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;