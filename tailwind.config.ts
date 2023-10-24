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
    },
    keyframes: {
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
