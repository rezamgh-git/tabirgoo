import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f2f7ff",
          100: "#e6effe",
          200: "#cfe2fd",
          300: "#a9ccfb",
          400: "#76aaf7",
          500: "#3f85f2",
          600: "#2565d9",
          700: "#1c4fb0",
          800: "#183f8a",
          900: "#15356f",
          950: "#0e244b"
        }
      },
      boxShadow: {
        soft: "0 2px 12px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        xl2: "1rem"
      },
      fontFamily: {
        vazir: ["Vazirmatn", "system-ui", "Segoe UI", "Tahoma"]
      }
    }
  },
  plugins: []
} satisfies Config;