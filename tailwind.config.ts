import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/dashboard/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        light_cyan: {
          DEFAULT: "#cef4ff",
          100: "#00485c",
          200: "#0090b8",
          300: "#14ccff",
          400: "#70e0ff",
          500: "#cef4ff",
          600: "#d6f6ff",
          700: "#e0f8ff",
          800: "#ebfbff",
          900: "#f5fdff",
        },
        non_photo_blue: {
          DEFAULT: "#8fe5ff",
          100: "#003d50",
          200: "#007a9f",
          300: "#00b7ef",
          400: "#3fd2ff",
          500: "#8fe5ff",
          600: "#a5eaff",
          700: "#bcefff",
          800: "#d2f5ff",
          900: "#e9faff",
        },
        sky_blue: {
          DEFAULT: "#69dafc",
          100: "#013646",
          200: "#036c8c",
          300: "#04a2d2",
          400: "#23c8fb",
          500: "#69dafc",
          600: "#87e1fd",
          700: "#a5e9fd",
          800: "#c3f0fe",
          900: "#e1f8fe",
        },
        vivid_sky_blue: {
          DEFAULT: "#3bc7f2",
          100: "#042c39",
          200: "#075871",
          300: "#0b85aa",
          400: "#0eb1e2",
          500: "#3bc7f2",
          600: "#62d3f5",
          700: "#89def7",
          800: "#b0e9fa",
          900: "#d8f4fc",
        },
        cerulean: {
          DEFAULT: "#0a799a",
          100: "#02181f",
          200: "#04303d",
          300: "#06485c",
          400: "#08607b",
          500: "#0a799a",
          600: "#0eabdb",
          700: "#3bc8f3",
          800: "#7ddaf7",
          900: "#beedfb",
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
