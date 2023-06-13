/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          black: "#000",
          lightpink: "#ffafcc",
          thistle: "#ffd6ff",
          lemonchiffon: "#fafbc7",
          lightblue: "#bde0fe",
        },
        fontFamily: {
          inter: "Inter",
        },
        borderRadius: {
          "39xl": "58px",
          xl: "20px",
          "41xl": "60px",
        },
      },
      fontSize: {
        xs: "12px",
        base: "16px",
        "8xl": "27px",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  