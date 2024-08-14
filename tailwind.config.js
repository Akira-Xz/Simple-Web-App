/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryr: '#ffff',
        secondary: '#ffff',
        text: '#ffff',
        accent: '#ffff',
        error: '#ffff',
        white: '#ffff',
        black: '#ffff',
        background: '#ffff',
        input: '#ffff',
        border: '#ffff',
        tag: '#ffff',        
      },
      fontFamily: {        
        nameFont: ['nameFont', 'sans-serif'],     
      },
      screens: {
        wtablet: '1024px',
        wmob: '767px',
      }
    },
  },
  plugins: [],
}