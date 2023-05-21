/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./src/assets/img/background.jpg')",
      },
      colors: {
        "stp-primary": "#D7C9B2",
        "stp-primary-opacity": "rgba(215, 201, 178, 0.7)",
        "stp-secondary": "#F5F5F5",
      },
      fontFamily: {
        OpenSans: ["Open Sans, sans-serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "770px",
      }
    },
  },
  plugins: [],
}

