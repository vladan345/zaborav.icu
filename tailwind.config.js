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
      animation: {
        float: "float 3s ease-in-out alternate infinite",
      },
    },
    spacing: {
      1: "10px",
      2: "20px",
      3: "30px",
      4: "40px",
      5: "50px",
      6: "50px",
    },
  },
  plugins: [],
};
