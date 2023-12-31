/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00A884',
        secondary: '#005C4B',
        gray: {
          100: '#0C1317',
          75: '#111B21',
          50: '#202C33',
          25: '#222E35',
          1: '#AEBAC1',
          0: '#2A3942'
        },
      },
      backgroundImage: {
        chats: 'url(./public/wallpaper.jpg)',
      },
    },
  },
  plugins: [],
};
