/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Dark Mode wird durch eine Klasse ausgelöst
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          // Farben für den Light Mode
          background: '#ffffff', // Hintergrundfarbe im Light Mode
          text: '#1f2937',       // Textfarbe im Light Mode (z.B. grau)
          primary: '#3b82f6',    // Hauptfarbe (z.B. Buttons, Links im Light Mode)
          secondary: '#64748b',  // Sekundäre Farbe
        },
        dark: {
          // Farben für den Dark Mode
          background: '#1e293b', // Hintergrundfarbe im Dark Mode
          text: '#f1f5f9',       // Textfarbe im Dark Mode (z.B. hellgrau)
          primary: '#3b82f6',    // Hauptfarbe (bleibt gleich wie im Light Mode)
          secondary: '#94a3b8',  // Sekundäre Farbe im Dark Mode
        },
      },
    },
  },
  plugins: [],
}
