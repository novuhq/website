/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
      red: {
        DEFAULT: '#E51A5E',
      },
    }),
    backgroundImage: {
      'join-us': 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.7) 100%);',
      'input-gradient':
        'linear-gradient(268.91deg, #FFBB33 14.72%, #FFFFFF 51.94%, #E300BD 82.34%, #FF006A 94.81%)',
      'hero-gradient': "url('components/pages/hacktoberfest/hero/images/background.svg')",
      'blue-gradient': 'linear-gradient(135deg, #FFE27D 14.04%, #64E3FF 50.5%, #9192FF 86.21%)',
      'pink-yellow-gradient':
        'linear-gradient(257.22deg, #FFBB33 21.09%, #E300BD 55.18%, #FF006A 92.64%)',
      'pink-red-gradient': 'linear-gradient(278.49deg, #F9493E 38.24%, #EA1C71 101.21%)',
      'gray-gradient': 'linear-gradient(180deg, #262626 0%, #171717 100%)',
      'gray-gradient-2':
        'linear-gradient(258.24deg, rgba(88, 88, 88, 0.0804) -4.87%, rgba(24, 24, 24, 0.12) 49.06%, rgba(92, 92, 92, 0.12) 96.07%)',
      'active-gray-gradient': 'linear-gradient(180deg, #131313 0%, #0B0B0B 100%)',
      'hs-form-gradient':
        'linear-gradient(180deg, rgba(26, 26, 26, 0.80) 0%, rgba(26, 26, 26, 0.70) 100%)',
      'yellow-gradient': 'linear-gradient(270deg, #FFE14D 0%, rgba(255, 225, 77, 0) 100%)',
      'open-issues-table-bg':
        'radial-gradient(29.56% 37.42% at 79.15% -21.6%, rgba(250, 115, 107, 0.08) 0%, rgba(250, 115, 107, 0) 100%), radial-gradient(42.78% 60.42% at 0% 15.35%, #3A2C32 0%, #141216 100%)',
      'open-issues-table-border':
        'radial-gradient(9.93% 10.83% at 80.23% -7.39%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(16.35% 34.63% at 81.2% -15.3%, rgba(250, 164, 158, 0.8) 0%, rgba(250, 164, 158, 0) 100%), radial-gradient(4.29% 6.22% at 0% 16.6%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(19.21% 24.06% at 0% 16.41%, #F5A3C5 0%, rgba(245, 163, 197, 0) 100%), linear-gradient(0deg, #33282D, #33282D)',
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
  plugins: [
    require('tailwindcss-safe-area'),

    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'border-image': (value) => ({
            background: `${value.replaceAll(/(, ?[a-z]+-gradient)/g, ' border-box$1')} border-box`,
          }),
        },
        { values: theme('backgroundImage') }
      );
    }),
  ],
};
