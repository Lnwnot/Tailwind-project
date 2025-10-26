/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbff',
          100: '#e6f4ff',
          500: '#0ea5e9',
          700: '#0b7fb0',
        },
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl-2': '1.25rem',
      },
    },
  },
  plugins: [],
}

