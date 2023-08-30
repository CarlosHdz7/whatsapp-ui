/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.tml', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00A884',
        gray: {
          100: '#0C1317',
          75: '#111B21',
          50: '#202C33',
          25: '#222E35',
          1: '#AEBAC1',
        },
      },
    },
  },
  plugins: [],
};
