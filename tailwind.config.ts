import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    animation: {
      "color-change-4x": "color-change-4x 6s linear  infinite alternate both",
      "scale-in-center":
        "scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      "slide-top":
        "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
    },
    keyframes: {
      "slide-top": {
        "0%": {
          transform: "translateY(0)",
        },
        to: {
          transform: "translateY(-100px)",
        },
      },
      "scale-in-center": {
        "0%": {
          transform: "scale(0)",
          opacity: "1",
        },
        to: {
          transform: "scale(1)",
          opacity: "1",
        },
      },
      "color-change-4x": {
        "0%": {
          background: "#19dcea",
        },
        "33.3333%": {
          background: "#b22cff",
        },
        "66.666%": {
          background: "#ea2222",
        },
        to: {
          background: "#f5be10",
        },
      },
    },
  },
  plugins: [],
};
export default config;
