import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    {
      title: 'Documentation',
      ...LINKS.documentation,
    },
    {
      title: 'Blog',
      ...LINKS.blog,
    },
    {
      title: 'FAQ',
      ...LINKS.faq,
    },
  ],
  footer: [
    [
      { text: 'Blog', ...LINKS.blog },
      { text: 'FAQ', ...LINKS.faq },
    ],
    [
      { text: 'Documentation', ...LINKS.documentation },
      { text: 'Providers', ...LINKS.providers },
      { text: 'SDK', ...LINKS.sdk },
    ],
    [
      { text: 'Contact Us', ...LINKS.contactUs },
      { text: 'Discord', ...LINKS.discord },
    ],
    [
      { text: 'Twitter', ...LINKS.twitter },
      { text: 'Github', ...LINKS.github },
    ],
  ],
  footerSm: [
    [
      { text: 'Documentation', ...LINKS.documentation },
      { text: 'Providers', ...LINKS.providers },
      { text: 'SDK', ...LINKS.providers },
    ],
    [
      { text: 'Blog', ...LINKS.blog },
      { text: 'FAQ', ...LINKS.faq },
    ],

    [
      { text: 'Contact Us', ...LINKS.contactUs },
      { text: 'Discord', ...LINKS.discord },
    ],
    [
      { text: 'Twitter', ...LINKS.twitter },
      { text: 'Github', ...LINKS.github },
    ],
  ],
  mobile: [],
};

export default MENUS;
