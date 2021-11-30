const defaultTheme = require('tailwindcss/defaultTheme');
const animationConfig = require('./tailwind.config.animation');

module.exports = {
  // prefix: 'elon-', // 需将 css 中 apply 的内容手动增加前缀
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      tablet: '960px',
      pc: '1200px',
    },

    boxShadow: {
      sm: '0px 2px 4px 0px rgba(11,10,55,0.15)',
      md: '0px 4px 8px 0px rgba(22,19,88,0.12)',
      lg: '0px 8px 20px 0px rgba(18,16,99,0.06)',
    },

    fontFamily: {
      sans: ['Noto Sans SC', ...defaultTheme.fontFamily.sans],
      serif: ['Noto Serif SC', ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      sm: [
        '12px',
        { lineHeight: '16px', letterSpacing: '-0.03em', fontWeight: 400 },
      ],
      base: [
        '14px',
        { lineHeight: '18px', letterSpacing: '-0.03em', fontWeight: 400 },
      ],
      lg: [
        '18px',
        { lineHeight: '22px', letterSpacing: '-0.03em', fontWeight: 600 },
      ],
      xl: [
        '20px',
        { lineHeight: '24px', letterSpacing: '-0.032em', fontWeight: 600 },
      ],
      '2xl': [
        '24px',
        { lineHeight: '28px', letterSpacing: '-0.032em', fontWeight: 600 },
      ],
      '3xl': [
        '28px',
        { lineHeight: '32px', letterSpacing: '-0.032em', fontWeight: 600 },
      ],
      '4xl': [
        '30px',
        { lineHeight: '36px', letterSpacing: '-0.032em', fontWeight: 600 },
      ],
      '5xl': [
        '32px',
        { lineHeight: '40px', letterSpacing: '-0.032em', fontWeight: 600 },
      ],
      '6xl': [
        '36px',
        { lineHeight: '44px', letterSpacing: '-0.032em', fontWeight: 600 },
      ],
      '7xl': [
        '40px',
        { lineHeight: '48px', letterSpacing: '-0.032em', fontWeight: 600 },
      ],
      '8xl': [
        '44px',
        { lineHeight: '52px', letterSpacing: '-0.032em', fontWeight: 600 },
      ],
      '9xl': [
        '48px',
        { lineHeight: '56px', letterSpacing: '-0.032em', fontWeight: 600 },
      ],
    },

    colors: {
      primary: {
        50: 'rgba(var(--semi-primary-0), 1)',
        100: 'rgba(var(--semi-primary-1), 1)',
        200: 'rgba(var(--semi-primary-2), 1)',
        300: 'rgba(var(--semi-primary-3), 1)',
        400: 'rgba(var(--semi-primary-4), 1)',
        500: 'rgba(var(--semi-primary-5), 1)', // default
        600: 'rgba(var(--semi-primary-6), 1)',
        700: 'rgba(var(--semi-primary-7), 1)',
        800: 'rgba(var(--semi-primary-8), 1)',
        900: 'rgba(var(--semi-primary-9), 1)',
      },
      gray: {
        50: 'rgba(var(--semi-grey-0), 1)',
        100: 'rgba(var(--semi-grey-1), 1)',
        200: 'rgba(var(--semi-grey-2), 1)',
        300: 'rgba(var(--semi-grey-3), 1)',
        400: 'rgba(var(--semi-grey-4), 1)',
        500: 'rgba(var(--semi-grey-5), 1)', // default
        600: 'rgba(var(--semi-grey-6), 1)',
        700: 'rgba(var(--semi-grey-7), 1)',
        800: 'rgba(var(--semi-grey-8), 1)',
        900: 'rgba(var(--semi-grey-9), 1)',
      },
      red: {
        50: 'rgba(var(--semi-red-0), 1)',
        100: 'rgba(var(--semi-red-1), 1)',
        200: 'rgba(var(--semi-red-2), 1)',
        300: 'rgba(var(--semi-red-3), 1)',
        400: 'rgba(var(--semi-red-4), 1)',
        500: 'rgba(var(--semi-red-5), 1)', // default
        600: 'rgba(var(--semi-red-6), 1)',
        700: 'rgba(var(--semi-red-7), 1)',
        800: 'rgba(var(--semi-red-8), 1)',
        900: 'rgba(var(--semi-red-9), 1)',
      },
      green: {
        50: 'rgba(var(--semi-green-0), 1)',
        100: 'rgba(var(--semi-green-1), 1)',
        200: 'rgba(var(--semi-green-2), 1)',
        300: 'rgba(var(--semi-green-3), 1)',
        400: 'rgba(var(--semi-green-4), 1)',
        500: 'rgba(var(--semi-green-5), 1)', // default
        600: 'rgba(var(--semi-green-6), 1)',
        700: 'rgba(var(--semi-green-7), 1)',
        800: 'rgba(var(--semi-green-8), 1)',
        900: 'rgba(var(--semi-green-9), 1)',
      },
      yellow: {
        50: 'rgba(var(--semi-yellow-0), 1)',
        100: 'rgba(var(--semi-yellow-1), 1)',
        200: 'rgba(var(--semi-yellow-2), 1)',
        300: 'rgba(var(--semi-yellow-3), 1)',
        400: 'rgba(var(--semi-yellow-4), 1)',
        500: 'rgba(var(--semi-yellow-5), 1)', // default
        600: 'rgba(var(--semi-yellow-6), 1)',
        700: 'rgba(var(--semi-yellow-7), 1)',
        800: 'rgba(var(--semi-yellow-8), 1)',
        900: 'rgba(var(--semi-yellow-9), 1)',
      },
      blue: {
        50: 'rgba(var(--semi-blue-0), 1)',
        100: 'rgba(var(--semi-blue-1), 1)',
        200: 'rgba(var(--semi-blue-2), 1)',
        300: 'rgba(var(--semi-blue-3), 1)',
        400: 'rgba(var(--semi-blue-4), 1)',
        500: 'rgba(var(--semi-blue-5), 1)', // default
        600: 'rgba(var(--semi-blue-6), 1)',
        700: 'rgba(var(--semi-blue-7), 1)',
        800: 'rgba(var(--semi-blue-8), 1)',
        900: 'rgba(var(--semi-blue-9), 1)',
      },
    },

    extend: {
      keyframes: animationConfig.keyframes,
      animation: animationConfig.animation,
    },
    // 用于 svg 填充
    fill: (theme) => theme('colors'),
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'active'], // 允许目标前缀下可使用 animation utilities
      transform: ['hover', 'focus', 'active'],
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
};
