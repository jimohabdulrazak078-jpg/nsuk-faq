import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        "paper-dim": "#F1F1EC",
        ink: "#12131C",
        "ink-soft": "#53556A",
        "ink-faint": "#8B8DA0",
        line: "#E4E3DA",
        indigo: {
          DEFAULT: "#4A56E2",
          soft: "#6F79EA",
          dim: "#EEF0FD",
        },
        violet: {
          DEFAULT: "#8B5CF0",
          dim: "#F3EEFD",
        },
        amber: {
          DEFAULT: "#F0954A",
          dim: "#FDF1E6",
        },
        moss: {
          DEFAULT: "#1F9E7C",
          dim: "#E7F6F0",
        },
      },
      fontFamily: {
        display: [
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: [
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        drift1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(4%, 6%) scale(1.06)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-5%, -4%) scale(1.08)" },
        },
        drift3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -5%) scale(1.05)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drift1: "drift1 22s ease-in-out infinite",
        drift2: "drift2 26s ease-in-out infinite",
        drift3: "drift3 30s ease-in-out infinite",
        rise: "rise 0.5s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
