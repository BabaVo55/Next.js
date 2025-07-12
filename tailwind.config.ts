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
      colors:{
        ethemSky: "#C3EBFA",
        ethemPurple: "#D9C6F2",
        ethemBlue: "#A2DFF7",
        ethemGreen: "#B7F2C6",
        ethemYellow: "#F2EBC6",
        ethemRed: "#F2C6C6",
        ethemGray: "#F7F8FA",
      }
    },
  },
  plugins: [],
};
export default config;
