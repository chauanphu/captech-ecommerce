import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0047AB',
        brightBlue: '#0073E6',
        lightGray: '#D3D3D3',
        darkGray: '#333333',
      },
    },
  },
  plugins: [],
};
export default config;
