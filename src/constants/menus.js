import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    {
      title: 'Documentation',
      ...LINKS.documentation,
    },
  ],
  footer: [
    [
      { text: 'Documentation', ...LINKS.documentation },
      { text: 'Providers', ...LINKS.providers },
      { text: 'Contact Us', ...LINKS.contactUs },
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
  ],
};

export default MENUS;
