/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:["poppins","sans-serif"],
        cursive: ["Fleur De Leah","cursive"],
        
        },
        colors: {
          primary:"#B15F27" ,
          secondary:"#95430b",
          brandDark:"#702400",
        },
        container: {
          center: true ,
          padding: {
            default: "1rem",
            sm: "2rem",
          }
        }
    },
  },
  plugins: [],
}

