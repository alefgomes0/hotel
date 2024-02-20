/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "label-up": {
          "0%": { opacity: "0%"},
          "50%": { opacity: "70%" },
          "100%": { opacity: "100%", transform: "translateY(-100%)" }
        },
        "label-down": {
          "0%": { opacity: "100%", transform: "translateY(-100%)"},
          "50%": { opacity: "30%" },
          "100%": { opacity: "0%", transform: "translateY(0%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "label-up": "label-up 0.3s ease",
        "label-down": "label-down 0.3s ease"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}