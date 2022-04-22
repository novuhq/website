import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    {
      title: 'Documentation',
      to: LINKS.documentation,
      target: '_blank',
    },
    {
      title: 'Blog',
      to: LINKS.blog,
    },
    {
      title: 'FAQ',
      to: LINKS.FAQ,
      target: '_blank',
    },
  ],
  footer: [
    [
      { text: 'Blog', to: LINKS.blog },
      { text: 'FAQ', to: LINKS.FAQ, target: '_blank' },
    ],
    [
      { text: 'Documentation', to: LINKS.documentation },
      { text: 'Providers', to: LINKS.providers },
      { text: 'SDK', to: LINKS.SDK },
    ],
    [
      { text: 'Contact Us', to: LINKS.contactUs },
      { text: 'Discord', to: LINKS.discord, target: '_blank' },
    ],
    [
      { text: 'Twitter', to: LINKS.twitter, target: '_blank' },
      { text: 'Github', to: LINKS.github, target: '_blank' },
    ],
  ],
  footerSm: [
    [
      { text: 'Documentation', to: LINKS.documentation, target: '_blank' },
      { text: 'Providers', to: LINKS.providers },
      { text: 'SDK', to: LINKS.providers, target: '_blank' },
    ],
    [
      { text: 'Blog', to: LINKS.blog },
      { text: 'FAQ', to: LINKS.FAQ, target: '_blank' },
    ],

    [
      { text: 'Contact Us', to: LINKS.contactUs },
      { text: 'Discord', to: LINKS.discord, target: '_blank' },
    ],
    [
      { text: 'Twitter', to: LINKS.twitter, target: '_blank' },
      { text: 'Github', to: LINKS.github, target: '_blank' },
    ],
  ],
  mobile: [],
};

export default MENUS;
