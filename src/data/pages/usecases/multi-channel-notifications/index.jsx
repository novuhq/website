import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import costs from 'images/pages/usecases/multi-channel-notifications/pain-restatement/costs.svg';
import inconsistent from 'images/pages/usecases/multi-channel-notifications/pain-restatement/inconsistent.svg';
import integration from 'images/pages/usecases/multi-channel-notifications/pain-restatement/integration.svg';

const HERO = {
  title: 'Expand your reach with multi-channel notifications',
  description:
    'Add new notification channels to your app faster than you can brew a pot of coffee.',
  links: [
    {
      text: 'Create free account',
      url: 'https://dashboard.novu.co/?utm_campaign=usecase-CTA',
      target: '_blank',
    },
    {
      text: 'Book Meeting',
      url: 'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=website-usecase-multiChannel',
      target: '_blank',
    },
  ],
};

const PAIN_RESTATEMENT = {
  title: 'Adding new notification channels is costly and complex',
  description: 'More channels and content sources means more complexity, risk, and team friction.',
  cards: [
    {
      title: 'High costs',
      description:
        'DIY notifications infrastructure requires significant engineering effort, distracting teams from adding value to their products.',
      image: <img width={80} height={80} src={costs} alt="Create template" loading="lazy" />,
    },
    {
      title: 'Integration complexity',
      description:
        'Every new channel comes with a new custom integration, content source requirement, and ongoing maintenance burden.',
      image: (
        <img width={80} height={80} src={integration} alt="Connect providers" loading="lazy" />
      ),
    },
    {
      title: 'Inconsistent user experiences',
      description:
        'When product teams cannot easily manage and iterate on content, user experiences suffer... and so does your brand.',
      image: <img width={80} height={80} src={inconsistent} alt="Add trigger" loading="lazy" />,
    },
  ],
};

const BENEFITS = {
  title: 'All of the flexibility of DIY, none of the hassle',
  description:
    'Increase end user engagement with multi-channel notifications and centralized content.',
  sections: [
    {
      title: 'Extensible integrations',
      description:
        'Integrates with all popular providers and channels, and you can easily extend support to your own custom code.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/multi-channel-notifications/benefits/extensible-integration.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
    {
      title: 'Engage end-users regardless of channel',
      description:
        'Easily implement multi-channel notifications and flexible provider management, boosting platform user engagement.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/multi-channel-notifications/benefits/engage-end-users.jpg"
          alt=""
          width={842}
          height={532}
        />
      ),
    },
    {
      title: 'Reduce friction between development and product teams',
      description:
        'Eliminate productivity barriers when developers provide notifications infrastructure to product teams. Development teams focus on core app value while product iterates.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/multi-channel-notifications/benefits/reduce-distractions.jpg"
          alt=""
          width={842}
          height={495}
        />
      ),
    },
    {
      title: 'Ship faster',
      description:
        'Engineering teams easily deliver notification capabilities into the applications.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/multi-channel-notifications/benefits/ship-faster.jpg"
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
