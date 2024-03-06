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
      boxShadow: {
        subtle: "0 2px 2px 0 rgba(0, 0, 0, 0.2)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0%"},
          to: { opacity: "100%" }
        },
        "fade-out": {
          from: { opacity: "100%"},
          to: { opacity: "0%" }
        },
        "label-down": {
          "0%": { opacity: "100%", transform: "translateY(-100%)"},
          "50%": { opacity: "30%" },
          "100%": { opacity: "0%", transform: "translateY(0%)" }
        },
        "label-up": {
          "0%": { opacity: "0%"},
          "50%": { opacity: "70%" },
          "100%": { opacity: "100%", transform: "translateY(-100%)" }
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" }
        },
        "slide-up": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" }
        },
        "button-slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease",
        "fade-out": "fade-out 0.3s ease",
        "label-down": "label-down 0.3s ease",
        "label-up": "label-up 0.3s ease",
        "slide-down": "slide-down 0.3s ease",
        "slide-up": "slide-up 0.3s ease",
        "button-slide-up": "button-slide-up 0.3s ease"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}