/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#E6EBF2",
        gray: {
          100: "#DCE4EE",
          200: "#BBC4D1"
        },
        red: "#F33B3B",
        blue: "#3270F5",
        offblack: "#010110"
      },
      width: {
        100: "100px",
        140: "140px",
        165: "165px",
      },
      height: {
        50: "50px",
        80: "80px",
        100: "100px",
      },
      padding: {
        20: "20px",
        188: "188px"
      }
    },
    transitionDuration: {
      50: "50ms",  
      100: "100ms",
      150: "150ms",
    }
  },
  plugins: [],
}