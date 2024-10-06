import colors from './src/styles/config/color';
import spacing from './src/styles/config/spacing';
import fontFamily from './src/styles/config/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily,
    },
  },
  plugins: [],
};
