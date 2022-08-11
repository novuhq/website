import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    {
      text: 'Contributors',
      ...LINKS.contributors,
    },
    {
      text: 'Blog',
      ...LINKS.blog,
    },
    {
      text: 'Documentation',
      ...LINKS.documentation,
    },
  ],
  footer: [
    [
      { text: 'Blog', ...LINKS.blog },
      { text: 'Contributors', ...LINKS.contributors },
      { text: 'Podcast', ...LINKS.podcast },
    ],
    [
      { text: 'Documentation', ...LINKS.documentation },
      { text: 'Providers', ...LINKS.providers },
      { text: 'Handbook', ...LINKS.handbook },
      { text: 'Contact Us', ...LINKS.discord },
    ],
    [
      { text: 'Discord', ...LINKS.discord },
      { text: 'Twitter', ...LINKS.twitter },
      { text: 'Github', ...LINKS.github },
    ],
    [
      { text: 'Terms of Use', ...LINKS.termsOfUse },
      { text: 'Privacy Policy', ...LINKS.privacyPolicy },
      { text: 'Status Page', ...LINKS.statusPage },
    ],
  ],
  mobile: [
    {
      text: 'Documentation',
      ...LINKS.documentation,
    },
    { text: 'Blog', ...LINKS.blog },
    { text: 'Contributors', ...LINKS.contributors },
  ],
};

export default MENUS;
