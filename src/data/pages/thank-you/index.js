import discordIcon from 'icons/discord.svg';
import githubIcon from 'icons/github.svg';
import novuIcon from 'icons/novu-gradient-logo.svg';
import capgemini from 'images/pages/thank-you-discovery-session/section-with-logos/capgemini.svg';
import feegow from 'images/pages/thank-you-discovery-session/section-with-logos/feegow.svg';
import hemnet from 'images/pages/thank-you-discovery-session/section-with-logos/hemnet.svg';
import mateo from 'images/pages/thank-you-discovery-session/section-with-logos/mateo.svg';
import mongoDB from 'images/pages/thank-you-discovery-session/section-with-logos/mongo-db.svg';
import mundi from 'images/pages/thank-you-discovery-session/section-with-logos/mundi.svg';
import novacy from 'images/pages/thank-you-discovery-session/section-with-logos/novacy.svg';
import rankmi from 'images/pages/thank-you-discovery-session/section-with-logos/rankmi.svg';
import siemens from 'images/pages/thank-you-discovery-session/section-with-logos/siemens.svg';
import tenderd from 'images/pages/thank-you-discovery-session/section-with-logos/tenderd.svg';
import traace from 'images/pages/thank-you-discovery-session/section-with-logos/traace.svg';
import unity from 'images/pages/thank-you-discovery-session/section-with-logos/unity.svg';

const COMPANIES = {
  title: 'Used by innovative companies worldwide',
  description:
    'Built from scratch to integrate your existing tooling and content with the Novu Platform.',
  logos: [
    {
      src: unity,
      alt: 'Unity logo',
      width: 133,
      height: 50,
    },
    {
      src: mongoDB,
      alt: 'MongoDB logo',
      width: 178,
      height: 50,
    },
    {
      src: hemnet,
      alt: 'hemnet logo',
      width: 164,
      height: 50,
    },
    {
      src: siemens,
      alt: 'Siemens logo',
      width: 136,
      height: 50,
    },
    {
      src: capgemini,
      alt: 'Capgemini logo',
      width: 182,
      height: 50,
    },
    {
      src: mateo,
      alt: 'Mateo logo',
      width: 77,
      height: 26,
    },
    {
      src: rankmi,
      alt: 'Rankmi logo',
      width: 88,
      height: 26,
    },
    {
      src: traace,
      alt: 'Traace logo',
      width: 78,
      height: 26,
    },
    {
      src: tenderd,
      alt: 'Tenderd logo',
      width: 135,
      height: 26,
    },
    {
      src: novacy,
      alt: 'Novacy logo',
      width: 77,
      height: 26,
    },
    {
      src: mundi,
      alt: 'Mundi logo',
      width: 77,
      height: 26,
    },
    {
      src: feegow,
      alt: 'Feegow logo',
      width: 84,
      height: 26,
    },
  ],
};

const GET_INVOLVED = {
  title: 'Get involved: start, engage, contribute',
  isCentered: true,
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

export default {
  companies: COMPANIES,
  getInvolved: GET_INVOLVED,
};
