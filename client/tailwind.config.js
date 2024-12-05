/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        xs: "16px",
        sm: "24px",
        md: "32px",
        lg: "40px",
        xl: "48px"
      },
      colors: {
"primary-blue": {
        900: "#35B3F2",
        400: "#64BFFA",
        300: "#94CEFD",
        200: "#C4E1FF"
      },
      "secondary-green": {
        900: "#066F8C"
      },
      c_gray: {
        900: "#182131",
        800: "#1D2739",
        700: "#233046",
        600: "#384B6B",
        500: "#8193B2",
        200: "#EFEFF8",
        100: "#F8F8FD"
      }
      }
      
    },
  },
  plugins: [],
}

