/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#0E0E0E",
        offwhite: "#F5F5F5",
        electricBlue: "#4AB2F7",
        amber: "#EBA94A",
      },
      fontFamily: {
        sans: ["Aeonik", "Satoshi", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(74, 178, 247, 0.35)",
      },
      backgroundImage: {
        'grid-lines': "radial-gradient(circle at center, rgba(74, 178, 247, 0.12) 0, rgba(14, 14, 14, 0) 55%)",
      },
      borderRadius: {
        xl: "1.5rem",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
