const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal
        // Configure your color palette here
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
