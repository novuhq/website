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
    ],
    [
      { text: 'Documentation', ...LINKS.documentation },
      { text: 'Providers', ...LINKS.providers },
      { text: 'Contact Us', ...LINKS.discord },
    ],
    [
      { text: 'Discord', ...LINKS.discord },
      { text: 'Twitter', ...LINKS.twitter },
      { text: 'Github', ...LINKS.github },
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
