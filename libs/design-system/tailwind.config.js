import extend from './src/styles/config-tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend,
  },
  plugins: [],
};
