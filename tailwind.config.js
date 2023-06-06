const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', ...fontFamily.sans],
        secondary: ['Pacifico', ...fontFamily.sans],
        tertiary: ['Nunito', ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1172px',
        '2xl': '1352px',
        'max-md': { raw: '(max-width: 991px)' },
        'max-sm': { raw: '(max-width: 767px)' },
      },
      colors: {
        danger: '#F23306',
        black: '#333333',
        blackLight: '#555555',
        primary: '#7F4D4F',
        primaryLight: '#A58283',
        secondary: 'rgba(101, 61, 63, 0.2)',
        tertiary: 'rgba(127, 77, 79, 0.15)',
        gray: '#777777',
        grayLight: '#F2EDED',
        white: '#FFFFFF',
        whiteLight: '#F2F2F2',
        whiteMoreLight: '#F8FBFF',
        blueIrish: '#33C1C1',
        greenLight: '#0EC842',
        blue: '#5E5AFF',
        yellow: '#FFC107',
      },
      backgroundImage: {},
      fontSize: {
        base: ['1rem', { lineHeight: '130.19%', fontWeight: 500 }],
        md: ['1.125rem', { lineHeight: '130.19%', fontWeight: 600 }],
        lg: ['1.25rem', { lineHeight: '1.875rem', fontWeight: 700 }],
        xl: ['2.25rem', { lineHeight: '3.063rem', fontWeight: 800 }],
        '2xl': ['2.875rem', { lineHeight: '4.75rem', fontWeight: 900 }],
        '3xl': ['3.125rem', { lineHeight: '130.19%', fontWeight: 800 }],
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
