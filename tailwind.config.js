/** @type {import('tailwindcss').Config} */
const darkMode = ["class"];
const content = [
  "./pages/**/*.{js,ts,tsx}",
  "./components/**/*.{js,ts,tsx}",
  "./app/**/*.{js,ts,tsx}",
  "./src/**/*.{js,ts,tsx}",
];
const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontSize: {
      title: "6vh",
      description: "2.5vh",
      "title-sm": "4.5vh",
      "description-sm": "2.2vh",
    },

    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    backgroundColor: {
      "gradient-base":
        "linear-gradient(195deg, #5a5a66 0%, #3d3d45 50%, #242428 100%)",
    },
    colors: {
      primary: "#1D2F6F",
      secondary: "#8390FA",
      "background-primary": "#F8F7FF",
      "background-secondary": "#ffffff",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      "slide-top": {
        "0%": {
          transform: "translateY(0)",
        },
        to: {
          transform: "translateY(-6px)",
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
      "scale-out-center": {
        "0%": {
          transform: "scale(1)",
          opacity: "1",
        },
        to: {
          transform: "scale(0)",
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
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "color-change-4x": "color-change-4x 6s linear  infinite alternate both",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "scale-in-center":
        "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      "scale-out-center":
        "scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
      "slide-top":
        "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
const plugins = [require("tailwindcss-animate")];

module.exports = {
  darkMode,
  content,
  theme,
  plugins,
};
