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
        terracota: {
          DEFAULT: "#8B3E2F",
          dark: "#6B2D1E",
          light: "#A85240",
        },
        bege: {
          DEFAULT: "#C4A882",
          queimado: "#B8956A",
          cru: "#F5F0E8",
        },
        ferrugem: "#7C3D1E",
        dourado: {
          DEFAULT: "#B8860B",
          opaco: "#9A7209",
          claro: "#D4A017",
        },
        preto: {
          DEFAULT: "#0D0D0D",
          profundo: "#080808",
        },
        cinza: {
          quente: "#2A2318",
          medio: "#4A3F32",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        editorial: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "breath": "breath 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "grain": "grain 0.5s steps(2, end) infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        breath: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.02)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(1%, 2%)" },
          "30%": { transform: "translate(-3%, 1%)" },
          "40%": { transform: "translate(2%, -2%)" },
          "50%": { transform: "translate(-1%, 3%)" },
          "60%": { transform: "translate(3%, 1%)" },
          "70%": { transform: "translate(-2%, -1%)" },
          "80%": { transform: "translate(1%, 2%)" },
          "90%": { transform: "translate(-3%, -2%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "texture-barro": "url('/images/texture-barro.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
