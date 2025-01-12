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
      sans: ['Brother-1816', 'Brother-1816 Fallback', ...defaultTheme.fontFamily.sans],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ['12px'],
      sm: ['14px'],
      md: ['15px'],
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
        2: '#80EAFF',
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
        2: '#FFE999',
      },
      purple: {
        DEFAULT: '#9092FF',
        2: '#E18CF2',
      },
      red: {
        DEFAULT: '#E51A5E',
      },
      blue: {
        2: '#809FFF',
      },
    }),
    backgroundImage: {
      'join-us': 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.7) 100%);',
      'input-gradient':
        'linear-gradient(268deg, #FFBB33 14.72%, #FFFFFF 51.94%, #E300BD 82.34%, #FF006A 94.81%)',
      'hero-gradient': "url('components/pages/hacktoberfest/hero/images/background.svg')",
      'blue-gradient': 'linear-gradient(135deg, #FFE27D 14.04%, #64E3FF 50.5%, #9192FF 86.21%)',
      'pink-yellow-gradient':
        'linear-gradient(258deg, #FFBB33 21.09%, #E300BD 55.18%, #FF006A 92.64%)',
      'pink-red-gradient': 'linear-gradient(278.49deg, #F9493E 38.24%, #EA1C71 101.21%)',
      'gray-gradient': 'linear-gradient(180deg, #262626 0%, #171717 100%)',
      'gray-gradient-2':
        'linear-gradient(258deg, rgba(88, 88, 88, 0.0804) -4.87%, rgba(24, 24, 24, 0.12) 49.06%, rgba(92, 92, 92, 0.12) 96.07%)',
      'gray-gradient-3':
        'linear-gradient(258deg, rgba(176, 166, 191, 0.6) -8.62%, rgba(176, 166, 191, 0.3) 113.79%)',
      'gray-gradient-4':
        'linear-gradient(258deg, rgba(176, 166, 191, 0.2) -8.62%, rgba(176, 166, 191, 0.1) 113.79%)',
      'active-gray-gradient': 'linear-gradient(180deg, #131313 0%, #0B0B0B 100%)',
      'hs-form-gradient':
        'linear-gradient(180deg, rgba(26, 26, 26, 0.80) 0%, rgba(26, 26, 26, 0.70) 100%)',
      'yellow-gradient': 'linear-gradient(270deg, #FFE14D 0%, rgba(255, 225, 77, 0) 100%)',
      'echo-gradient':
        'linear-gradient(90deg, #333333 20.54%, #34336C 29.07%, #6D87E5 36.23%, #34336C 44.15%, #333333 52.29%)',
      'community-card-stars-border-gradient':
        'radial-gradient(79.68% 200.52% at 100% 79.68%, rgba(148, 255, 255, 0.3) 0%, rgba(188, 197, 201, 0.1) 24.77%, rgba(255, 255, 255, 0) 73.23%)',
      'community-card-open-issues-border-gradient':
        'radial-gradient(409.94% 496.3% at 0% 176.49%, rgba(126, 209, 214, 0.2) 0%, rgba(126, 209, 214, 0) 100%)',
      'community-card-open-issues-sm-border-gradient':
        'radial-gradient(27.74% 100% at 50% 0%, rgba(126, 209, 214, 0.2) 0%, rgba(126, 209, 214, 0) 100%)',
      'community-card-closed-issues-border-gradient':
        'radial-gradient(413.3% 999.68% at -101.22% 180.36%, rgba(126, 209, 214, 0.2) 0%, rgba(126, 209, 214, 0) 100%)',
      'community-card-contributors-border-gradient':
        'radial-gradient(100% 497.33% at 0% 55.53%, rgba(126, 209, 214, 0.2) 0%, rgba(126, 209, 214, 0) 100%)',
      'community-card-pr-border-gradient':
        'radial-gradient(154.48% 768.53% at 156.61% -75.6%, rgba(126, 209, 214, 0.2) 0%, rgba(126, 209, 214, 0) 100%)',
      'community-card-forks-border-gradient':
        'radial-gradient(364.94% 203.08% at 5.08% -57.44%, rgba(126, 209, 214, 0.2) 0%, rgba(126, 209, 214, 0) 100%)',
      'community-card-commits-border-gradient':
        'radial-gradient(386.07% 1022.92% at -105.49% -66.96%, rgba(126, 209, 214, 0.2) 0%, rgba(126, 209, 214, 0) 100%)',
      'open-issues-table-bg':
        'radial-gradient(29.56% 37.42% at 79.15% -21.6%, rgba(250, 115, 107, 0.08) 0%, rgba(250, 115, 107, 0) 100%), radial-gradient(42.78% 60.42% at 0% 15.35%, #3A2C32 0%, #141216 100%)',
      'open-issues-table-border':
        'radial-gradient(9.93% 10.83% at 80.23% -7.39%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(16.35% 34.63% at 81.2% -15.3%, rgba(250, 164, 158, 0.8) 0%, rgba(250, 164, 158, 0) 100%), radial-gradient(4.29% 6.22% at 0% 16.6%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(19.21% 24.06% at 0% 16.41%, #F5A3C5 0%, rgba(245, 163, 197, 0) 100%), linear-gradient(0deg, #33282D, #33282D)',
      'common-card-border':
        'linear-gradient(215.33deg, rgba(51, 51, 71, 0.6) 20.1%, rgba(43, 43, 59, 0.4) 75.75%)',
      'purple-card-border':
        'radial-gradient(114.29% 113.4% at 81.66% -13.4%, #ECD1FA 10.74%, rgba(95, 82, 122, 0.3) 49.79%, rgba(168, 148, 209, 0.1) 100%)',
      'purple-card-light':
        'radial-gradient(65.61% 130.08% at 74.29% 61.64%, #FFB7E2 27.2%, #FF96FB 80.5%, #F047FF 100%)',
      'blue-card-border':
        'radial-gradient(114.29% 113.4% at 81.66% -13.4%, rgba(236, 209, 250, 0.8) 10.74%, rgba(95, 82, 122, 0.3) 41.53%, rgba(168, 148, 209, 0.1) 100%)',
      'blue-card-light':
        'radial-gradient(65.61% 130.08% at 74.29% 61.64%, #B7C9FF 27.2%, #96B0FF 80.5%, #4775FF 100%)',
      'green-card-border':
        'radial-gradient(114.29% 113.4% at 81.66% -13.4%, rgba(209, 243, 250, 0.8) 10.74%, rgba(82, 116, 122, 0.3) 41.53%, rgba(148, 199, 209, 0.1) 100%)',
      'green-card-light':
        'radial-gradient(65.61% 130.08% at 74.29% 61.64%, #B7F3FF 27.2%, #96EEFF 80.5%, #47E0FF 100%)',
      'code-block-bg':
        'linear-gradient(168.3deg, #1B2137 6.29%, #111522 91.42%), radial-gradient(67.44% 45.73% at 27.61% 0%, rgba(194, 209, 255, 0.09) 0%, rgba(194, 209, 255, 0) 76.65%)',
      'code-block-border':
        'radial-gradient(83.26% 102.85% at 61.61% -2.85%, #6B7DB3 6.8%, #1A1E2E 65.55%)',
      'testimonials-text':
        'linear-gradient(98.67deg, rgba(255, 255, 255, 0.85) 9.63%, rgba(255, 255, 255, 0.6) 113.79%)',
      'gray-btn':
        'linear-gradient(258deg, rgba(176, 166, 191, 0.06) -8.62%, rgba(176, 166, 191, 0.03) 113.79%)',
      'white-gray-gradient':
        'radial-gradient(66.82% 361.31% at 50.23% -67.39%, #ffffff 0%, #666666 100%)',
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
      xs: { max: '639px' },
      'sm-xs': { max: '500px' },
      '2xs': { max: '359px' },
    },
    extend: {
      lineHeight: {
        denser: '1.125',
      },
      letterSpacing: {
        snug: '-0.02em',
        tighter: '-0.04em',
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
