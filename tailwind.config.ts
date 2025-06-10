import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Gold/Yellow
          dark: '#FFC000',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFD700', // Base
          600: '#FFC107',
          700: '#FFB300',
          800: '#FFA000',
          900: '#FF8F00',
        },
        dark: {
          DEFAULT: '#000000',
          light: '#1A1A1A',
          50: '#212121',
          100: '#1E1E1E',
          200: '#1A1A1A',
          300: '#171717',
          400: '#141414',
          500: '#121212',
          600: '#0F0F0F',
          700: '#0D0D0D',
          800: '#0A0A0A',
          900: '#080808',
        },
      },
    },
  },
  plugins: [],
};

export default config;