/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FAF6F3',
          100: '#F5EDE7',
          200: '#E6D5C7',
          300: '#D7BDA7',
          400: '#C4A484',
          500: '#B18B67',
          600: '#9E724A',
          700: '#7D5B3B',
          800: '#5C442C',
          900: '#3B2D1D',
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        float: 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
};