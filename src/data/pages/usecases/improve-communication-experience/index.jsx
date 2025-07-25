import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import missed from 'images/pages/usecases/improve-communication-experience/pain-restatement/missed.svg';
import negative from 'images/pages/usecases/improve-communication-experience/pain-restatement/negative.svg';
import notifications from 'images/pages/usecases/improve-communication-experience/pain-restatement/notifications.svg';

const HERO = {
  title: 'Improve end user communication experiences',
  description:
    'Increase engagement with optimized notification experiences tailored to user interactions and preferences.',
  links: [
    {
      text: 'Create free account',
      url: 'https://dashboard.novu.co/?utm_campaign=usecase-CTA',
      target: '_blank',
    },
    {
      text: 'Book Meeting',
      url: 'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=website-usecase-improveComms',
      target: '_blank',
    },
  ],
};

const PAIN_RESTATEMENT = {
  title: 'Poor notifications experiences hurt your business',
  description:
    'End users expect seamless, on-brand, and timely notifications that add to their experience.',
  cards: [
    {
      title: 'Missed updates',
      description:
        'Without timely notifications, users miss critical information such as order updates, password resets, or one-time password messages, leading to a poor experience with your application.',
      image: <img width={72} height={72} src={missed} alt="Create template" loading="lazy" />,
    },
    {
      title: 'Notification fatigue',
      description:
        'Poorly targeted or excessive notifications overwhelm and annoy users, causing distractions and encouraging them to ignore notifications altogether.',
      image: (
        <img width={72} height={72} src={notifications} alt="Connect providers" loading="lazy" />
      ),
    },
    {
      title: 'Negative brand perception',
      description:
        'Poorly managed notifications reflect negatively on your brand, and increase customer churn.',
      image: <img width={72} height={72} src={negative} alt="Add trigger" loading="lazy" />,
    },
  ],
};

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

export default {
  hero: HERO,
  painRestatement: PAIN_RESTATEMENT,
  benefits: BENEFITS,
};
