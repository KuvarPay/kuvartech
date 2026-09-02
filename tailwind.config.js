/** @type {import('tailwindcss').Config} */
module.exports = {
  // Dark mode is driven by the [data-theme="dark"] attribute on <html>.
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      /*
       * Brand tokens. Colours point at the CSS variables defined in
       * app/globals.css so they automatically flip in dark mode.
       * Usage: bg-surface, text-ink-2, text-accent-deep, border-line, …
       */
      colors: {
        accent: {
          DEFAULT: "var(--accent)",
          ink: "var(--accent-ink)",
          deep: "var(--accent-deep)",
          soft: "var(--accent-soft)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
          4: "var(--ink-4)",
        },
        surface: {
          DEFAULT: "var(--bg)",
          2: "var(--bg-2)",
        },
        card: {
          DEFAULT: "var(--card)",
          2: "var(--card-2)",
        },
        line: {
          DEFAULT: "var(--border)",
          2: "var(--border-2)",
        },
      },
      fontFamily: {
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
        body: ["Switzer", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        brand: "24px",
        "brand-md": "14px",
        "brand-sm": "10px",
        pill: "999px",
      },
      boxShadow: {
        "brand-sm": "var(--shadow-sm)",
        brand: "var(--shadow-md)",
        "brand-lg": "var(--shadow-lg)",
      },
      maxWidth: {
        wrap: "1240px",
      },
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" },
          "33%": { borderRadius: "60% 40% 38% 62% / 56% 58% 42% 44%" },
          "66%": { borderRadius: "38% 62% 56% 44% / 62% 38% 62% 38%" },
        },
        spin: { to: { transform: "rotate(360deg)" } },
        dash: { to: { strokeDashoffset: "-360" } },
        bob: {
          "0%, 100%": { transform: "translate(-50%, -50%)" },
          "50%": { transform: "translate(-50%, calc(-50% - 7px))" },
        },
        pulsering: {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--accent-glow)" },
          "50%": { boxShadow: "0 0 0 6px transparent" },
        },
      },
      animation: {
        morph: "morph 16s ease-in-out infinite, spin 40s linear infinite",
        dash: "dash 3.2s linear infinite",
        bob: "bob 6s ease-in-out infinite",
        pulsering: "pulsering 2.4s infinite",
      },
    },
  },
  plugins: [],
};
