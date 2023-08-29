import type { Config } from "tailwindcss";
//import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Here, you can extend the tailwind classes
    extend: {
      colors: {
        black: "#26272B",
      },
      // adds a custom font
      // fontFamily: {
      //   brand: ['var(--font-mazzard)', ...fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
export default config;
