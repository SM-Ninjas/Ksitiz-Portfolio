module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs-mobile': '12px',
      'sm-mobile': '14px',
      'lg-mobile': '16px',
      'xl-mobile': '18px',
      'xs': '0.55vw',
      'sm': '0.825vw',
      'lg': '1.115vw',
      'xl': '1.5vw',
    },
    borderRadius: {
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "14px",
      full: "50%",
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'light': '#E0E0E0',
        'dark': '#141415',
        'white': '#ffffff',
        'black': '#000000',
        'fade': '#2B375260',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
