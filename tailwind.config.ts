import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f1c2c", // Color principal de NovaDev
        secondary: "#928dab", // Color secundario de NovaDev
        accent: "#00bfa5", // Color de acento de NovaDev
        background: "#f5f5f5", // Color de fondo
        foreground: "#333333", // Color de texto
      },
    },
  },
  plugins: [],
} satisfies Config;
