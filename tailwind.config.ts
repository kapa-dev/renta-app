import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        main: "#B4BDC6",

        // LIGHT
        primary: "#3AB54A",
        secondary: "#F9F9FB",

        // DARK
        "dark-primary": "#1A1E26",
        "dark-secondary": "#272C37",
      },
      maxWidth: {
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
