/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '440px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#ff4800",
        twitter: '#00ACEE',
        linkdin: '#0E76A8',
        github: '#171515',
        cardsboxred: '#C22C39',
        cardsboxblue: '#1f396E',
      },
      fontFamily: {
        balsamiq: "'Balsamiq Sans', cursive",
        comfortaa: "'Comfortaa', cursive",
        luckiestGuy: "'Luckiest Guy', cursive",
        mohave: "'Mohave', sans-serif",
        pressStart: "'Press Start 2P', cursive",
        yanoneK: "'Yanone Kaffeesatz', sans-serif",
        BebasNeue: "'Bebas Neue', cursive",
        PTSans: "'PT Sans', sans-serif",
        CaveatBrush: "'Caveat Brush', cursive",
        NanumoenScript: "'Nanum Pen Script', cursive",
      },
    },
  },
  plugins: [],
};
