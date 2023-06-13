/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: "1520px",
      contentContainer: "1280px",
    },
    extend: {
      backgroundImage: {
        mainBackground: "url('/images/background.png')",
      },
      colors: {
        lightskyblue: "#a2d2ff",
        lightblue: "#bde0fe",
        aliceblue: "#ecf3f9",
        gainsboro: "#d9d9d9",
        lightpink: "#ffafcc",
      },
      borderRadius: {
        "7xl": "26px",
        "23xl": "42px",
        "41xl": "60px",
        "39xl": "58px",
        "31xl": "50px",
        "56xl": "75px",
        "8xs": "5px",
      },
    },
    fontFamily: {
      antic: "Antic",
      inter: "Inter",
      "im-fell-double-pica-sc": "'IM FELL Double Pica SC'",
    },
    fontSize: {
      "xl" : "22px",
      "8xl": "20px",
      lg: "18px",
      base: "16px",
      "7xl": "26px",
      "45xl": "36px",
      "21xl": "35px",
      "2xl": "18px",
    },
  },
  plugins: [],
}



// colors: {
//   white: "#fff",
//   black: "#000",
//   lightskyblue: "#a2d2ff",
//   lightpink: "#ffafcc",
//   lightblue: "#bde0fe",
// },
// fontFamily: {
//   inter: "Inter",
// },
// borderRadius: {
//   "41xl": "60px",
//   "8xs": "5px",
// },
// },
// fontSize: {
// "8xl": "20px",
// "7xl": "19px",
// "21xl": "35px",
// "2xl": "18px",
//     },