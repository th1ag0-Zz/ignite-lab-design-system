/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: {
        black: '#000000',

        'gray-100': '#e1e1e6',
        'gray-200': '#c4c4cc',
        'gray-400': '#7c7c8a',
        'gray-800': '#202024',
        'gray-900': '#121214',

        'cyan-300': '#acf3ff',
        'cyan-500': '#81d8e7',
      },
    },
  },
  plugins: [],
};
