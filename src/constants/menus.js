import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    {
      title: 'Contributors',
      ...LINKS.contributors,
    },
    {
      title: 'Blog',
      ...LINKS.blog,
    },
    {
      title: 'Documentation',
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
      title: 'Documentation',
      ...LINKS.documentation,
    },
    { text: 'Blog', ...LINKS.blog },
    { text: 'Contributors', ...LINKS.contributors },
  ],
};

export default MENUS;
