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
          lightpink: {
            "100": "#ffafcc",
            "200": "rgba(255, 175, 204, 0.62)",
          },
          lightskyblue: "#a2d2ff",
          lightblue: "#bde0fe",
        },
        fontFamily: {
          inter: "Inter",
          "im-fell-english-sc": "'IM FELL English SC'",
        },
        borderRadius: {
          xl: "20px",
          "39xl": "58px",
        },
      },
      fontSize: {
        xs: "12px",
        base: "16px",
        "3xs": "10px",
        "8xl": "27px",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };