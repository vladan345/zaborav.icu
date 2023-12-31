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
    spacing: {
      1: "10px",
      2: "20px",
      3: "30px",
      4: "40px",
      5: "50px",
      6: "60px",
      7: "70px",
      8: "80px",
    },
  },
  plugins: [],
};
