import LINKS from 'constants/links.js';

const MENUS = {
  header: [
  /*Removing temporarily - justnems 20240301*/
   /* {
      text: 'Hacktoberfest',
      ...LINKS.hacktoberfest,
    },*/
    {
      text: 'Contributors',
      ...LINKS.contributors,
    },
    {
      text: 'Pricing',
      ...LINKS.pricing,
    },
    {
      text: 'Blog',
      ...LINKS.blog,
    },
    {
      text: 'Documentation',
      ...LINKS.documentation,
    },
    { text: 'Careers', ...LINKS.careers },
  ],
  footer: [
    [
      /*Remocing temporarily - justnems 20240301*/
      /*{ text: 'Hacktoberfest', ...LINKS.hacktoberfest },*/
      { text: 'Blog', ...LINKS.blog },
      { text: 'Contributors', ...LINKS.contributors },
      // { text: 'Podcast', ...LINKS.podcast },
      { text: 'Pricing', ...LINKS.pricing },
      { text: 'Careers', ...LINKS.careers },
      /*{ text: '2022 Events', ...LINKS.timeline },*/
      { text: 'OSS Friends', ...LINKS.ossFriends },
    ],
    [
      { text: 'Documentation', ...LINKS.documentation },
      { text: 'Roadmap', ...LINKS.roadmapPage },
      { text: 'Providers', ...LINKS.providers },
      { text: 'Handbook', ...LINKS.handbook },
      { text: 'Contact Us', ...LINKS.discord },
      { text: 'Press Kit', ...LINKS.pressKit },
      { text: 'Polishing Season', ...LINKS.polishing },
      { text: 'Notifications Directory', ...LINKS.notificationDirectory },
    ],
    [
      { text: 'Discord', ...LINKS.discord },
      { text: 'Twitter', ...LINKS.twitter },
      { text: 'GitHub', ...LINKS.github },
    ],
    [
      { text: 'Terms of Use', ...LINKS.termsOfUse },
      { text: 'Privacy Policy', ...LINKS.privacyPolicy },
      { text: 'DPA', ...LINKS.dataProcessingAgreement },
      { text: 'Status Page', ...LINKS.statusPage },
    ],
  ],
  mobile: [
    {
      text: 'Documentation',
      ...LINKS.documentation,
    },
    { text: 'Hacktoberfest', ...LINKS.hacktoberfest },
    { text: 'Blog', ...LINKS.blog },
    { text: 'Contributors', ...LINKS.contributors },
    { text: 'Careers', ...LINKS.careers },
    {
      text: 'Pricing',
      ...LINKS.pricing,
    },
  ],
};

export default MENUS;
