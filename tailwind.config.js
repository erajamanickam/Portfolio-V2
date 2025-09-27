/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '480px',
        'sm-plus': '510px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        'readex': ['"Readex Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

