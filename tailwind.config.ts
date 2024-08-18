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
      colors: {
        primary: {
          800: '#1F2937', // equivalent to gray-800
          700: '#374151', // equivalent to gray-700
          400: '#9CA3AF', // equivalent to gray-400
          white: '#FFFFFF', // white color
        },
      }
    },
  },
  plugins: [],
};
export default config;
