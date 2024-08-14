import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const BENEFITS = {
  title: 'Empower product teams to build notifications experiences that delight',
  description:
    'Novu is the easy button for notifications. Developers get the framework they need, and product teams get the content editing access they demand.',
  sections: [
    {
      title: 'Relevant notifications',
      description:
        'Communicate with your users at the right time, in the right channel, and in the best language for them.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/improve-communication-experience/benefits/time-relevant-notifications.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
    {
      title: 'Personalized messages',
      description:
        'Highly-customized and tailored messages increase brand perception and customer experience.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/improve-communication-experience/benefits/personalized-messages.jpg"
          alt=""
          width={842}
          height={495}
        />
      ),
    },
    {
      title: 'Consistent branding',
      description:
        'Product and marketing teams maintain ownership of messaging and branding, and can iterate as fast as they need to.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/improve-communication-experience/benefits/consistent-branding.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
    {
      title: 'Multi-channel Accessibility',
      description:
        'Reach your users on the channels they prefer, be it email, SMS, push notifications, Chat or in-app messages.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/improve-communication-experience/benefits/multi-channel-accessibility.jpg"
          alt=""
          width={842}
          height={532}
        />
      ),
    },
  ],
};

export default BENEFITS;
