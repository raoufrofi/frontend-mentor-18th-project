/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["../*.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        "light-magenta": "hsl(293, 100%, 63%)",
        "light-violet": "hsl(264, 100%, 61%)",
        "white": "hsl(0, 0%, 100%)",
        "light-grayish-violet": "hsl(270, 20%, 96%)",
        "very-dark-desaturated": "hsl(271, 36%, 24%)",
        "very-light-magenta": "hsl(289, 100%, 72%)",
      },
      fontFamily: {
        "rubik": "Rubik, sans serif"
      },
    },
    boxShadow: {
      "sm": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    },
  },
  plugins: [],
}
