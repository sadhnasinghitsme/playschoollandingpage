import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-baloo)", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        brand: {
          orange: "#FF7A33",
          yellow: "#FFC93C",
          teal: "#1FB6A6",
          blue: "#3D7EFF",
          pink: "#FF5C8D",
          purple: "#8B5CF6",
          cream: "#FFF8ED",
          ink: "#2A2438",
          paleblue: "#E9F4FF",
          peach: "#FFE3CC",
        },
      },
      borderRadius: {
        blob: "60% 40% 55% 45% / 45% 55% 45% 55%",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(42, 36, 56, 0.15)",
        card: "0 8px 24px -8px rgba(42, 36, 56, 0.18)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.97)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        blob: "blob 12s infinite ease-in-out",
        float: "float 4s ease-in-out infinite",
        wiggle: "wiggle 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
