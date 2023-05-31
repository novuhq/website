/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Brother-1816', ...defaultTheme.fontFamily.sans],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: ['12px'],
      sm: ['14px'],
      base: ['16px'],
      lg: ['18px'],
      xl: ['20px'],
      '2xl': ['24px'],
      '3xl': ['28px'],
      '4xl': ['36px'],
      '5xl': ['40px'],
      '6xl': ['48px'],
      '7xl': ['56px'],
      '8xl': ['64px'],
    },
    fontWeight: {
      book: 350,
      ...defaultTheme.fontWeight,
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000000',
      white: '#ffffff',
      primary: {
        1: '#00D5FF',
      },
      secondary: {
        1: '#FF33DE',
        2: '#FFE14D',
        3: '#00E585',
      },
      gray: {
        1: '#0D0D0D',
        2: '#1A1A1A',
        3: '#262626',
        4: '#333333',
        5: '#4D4D4D',
        6: '#666666',
        7: '#808080',
        8: '#999999',
        9: '#CCCCCC',
        10: '#E6E6E6',
        11: '#F5F5F5',
      },
      yellow: {
        DEFAULT: '#FFE27D',
      },
      purple: {
        DEFAULT: '#9092FF',
      },
    }),
    backgroundImage: {
      'input-gradient':
        'linear-gradient(268.91deg, #FFBB33 14.72%, #FFFFFF 51.94%, #E300BD 82.34%, #FF006A 94.81%)',
      'hero-gradient': "url('components/pages/hacktoberfest/hero/images/background.svg')",
      'blue-gradient': 'linear-gradient(135deg, #FFE27D 14.04%, #64E3FF 50.5%, #9192FF 86.21%)',
      'pink-yellow-gradient':
        'linear-gradient(257.22deg, #FFBB33 21.09%, #E300BD 55.18%, #FF006A 92.64%)',
      'gray-gradient': 'linear-gradient(180deg, #262626 0%, #171717 100%)',
      'gray-gradient-2':
        'linear-gradient(258.24deg, rgba(88, 88, 88, 0.0804) -4.87%, rgba(24, 24, 24, 0.12) 49.06%, rgba(92, 92, 92, 0.12) 96.07%)',
      'gray-gradient-3': 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.7) 100%)',
      'gray-gradient-4': 'linear-gradient(180deg, #262626 17.59%, #1A1A1A 100%)',
      'active-gray-gradient': 'linear-gradient(180deg, #131313 0%, #0B0B0B 100%)',
      'yellow-gradient': 'linear-gradient(270deg, #FFE14D 0%, rgba(255, 225, 77, 0) 100%)',
      ...defaultTheme.backgroundImage,
    },
    boxShadow: {
      output: '0px 10px 20px #000000',
    },
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      'md-sm': { max: '900px' },
      sm: { max: '767px' },
      'sm-xs': { max: '500px' },
      xs: { max: '359px' },
    },
    extend: {
      lineHeight: {
        denser: '1.125',
      },
      spacing: {
        18: '4.5rem',
        22: '5.75rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      width: {
        'square-diagonal': `${Math.sqrt(2) * 100}%`,
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
