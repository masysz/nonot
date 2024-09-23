const { m } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#ffffffeb",
          secondary: "#rgb(255, 51, 0)",
          accent: "#ff3300",
          // accent: "rgb(255, 51, 0)",
          cards: "#a4a4a433",
          cards2: "#a4a4a421",
          cards3: "#2b2b2be2",
          hoverbg: "#8a8a8a",
          headerCard: "#a4a4a433",
          energybar: "#1D1D1D",
          btn: "#ff3300",
          // btn: "#0059b3",
          btn2: "#00000066",
          btn4: '#ff3300',
          taskicon: "#6b69699c",
          divider: "##ff3300",
          borders: "#ff3300",
          borders2: "rgb(255, 51, 0)",
          energybar: "#1D1D1D",
          accent2: "#bcbcbc",
          cardtext: "#e7e7e7",
          lime: "#rgb(255, 51, 0)",
          dimtext: "#ffffff71",
          divider2: "#554f3f",
          divider3: "#393D43",
          modal: "#303030",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          Inter: ["'Inter', sans-serif"],
          outfit: ["'Outfit', sans-serif"],
          RobotoMono: ["'Roboto Mono', monospace"],
          PublicSans: ["'Public Sans', sans-serif"],
          Monserrat: ["'Montserrat', sans-serif"],
          Syne: ["'Syne', sans-serif"],
          Orkney: ["'Orkney', sans-serif"],
          Cerebri: ["'Cerebri Sans', sans-serif"]
        },
      },
      screens: {
        xs: "480px",
        ss: "600px",
        sm: "768px",
        ms: "1024px",
        md: "1140px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    plugins: [require('tailwindcss')],
  };
  
