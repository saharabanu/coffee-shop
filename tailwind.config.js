/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        lemon: ["Lemon", "serif"],
        sanspro: ["Value Sans Pro", "serif"],
        baklida: ["Bakilda Histori", "serif"],
        lemonada: ["Lemonada", "cursive"],
       
      },
      colors:{
        'primaryWine':"#86371C",
        'primaryWine1':"#270A05",
        'purple':"#FFFAF2",
       
        
        
      },
      backgroundImage: {
        'banner-bg':"url('/banner-bg.png')",
        'open-bg':"url('/opening-bg.png)",
        'footer-bg': "url('/footer.png')",

        
      },
    },
  },
  plugins: [],
};
