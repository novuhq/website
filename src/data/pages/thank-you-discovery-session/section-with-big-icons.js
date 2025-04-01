import discordIcon from 'icons/discord.svg';
import githubIcon from 'icons/github.svg';
import novuIcon from 'icons/novu-gradient-logo.svg';

const SECTION_WITH_BIG_ICONS = {
  title: 'Get involved: start, engage, contribute',
  items: [
    {
      icon: novuIcon,
      title: 'Novu Cloud',
      description: 'Embark on your journey by creating your personalized account',
      linkText: 'Get started',
      linkUrl: 'https://dashboard.novu.co/?utm_campaign=community_page',
    },
    {
      icon: discordIcon,
      title: 'Join Discord',
      description: 'Immerse yourself in the community by joining our dedicated server',
      linkText: 'Join discord',
      linkUrl: 'https://discord.novu.co/',
    },
    {
      icon: githubIcon,
      title: 'Fork and Work',
      description: 'Discover an issue within our project and make a valuable contribution',
      linkText: 'Find an issue',
      linkUrl: 'https://github.com/novuhq/novu/issues',
    },
  ],
};

export default SECTION_WITH_BIG_ICONS;
