/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        secondary: "var(--secondary)",
        "b-color": "var(--b-color)",
        green: "var(--green)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
