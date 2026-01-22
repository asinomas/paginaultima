/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores por defecto para asegurar que no fallen
        primary: "#000000",
        secondary: "#1e293b",
      },
    },
  },
  plugins: [],
}
