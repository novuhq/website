import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import debugging from 'images/pages/usecases/add-notifications/pain-restatement/debugging.svg';
import innovation from 'images/pages/usecases/add-notifications/pain-restatement/innovation.svg';
import integration from 'images/pages/usecases/add-notifications/pain-restatement/integration.svg';

const HERO = {
  title: 'Test in minutes, go to prod before dinner',
  description:
    'Ship notifications in your app with production-ready infrastructure and out-of-the-box components.',
  links: [
    {
      text: 'Create free account',
      url: 'https://dashboard.novu.co/?utm_campaign=usecase-CTA',
      target: '_blank',
    },
    {
      text: 'Book Meeting',
      url: 'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=website-usecase-addNotification',
      target: '_blank',
    },
  ],
};

const PAIN_RESTATEMENT = {
  title: 'DIY Notifications infrastructure is costly',
  description:
    'Building a notifications infrastructure to deliver messages gets exponentially more complex with every channel you add.',
  cards: [
    {
      title: 'Challenging integrations',
      description:
        'Building notifications in-house requires near-constant effort to scope, build, and maintain... even to just make minor content updates.',
      image: <img width={80} height={80} src={integration} alt="Create template" loading="lazy" />,
    },
    {
      title: 'Impossible debugging',
      description:
        "Understanding why a user did or didn't get a notification is time consuming, and the more channels you must support, the harder debugging becomes",
      image: <img width={80} height={80} src={debugging} alt="Connect providers" loading="lazy" />,
    },
    {
      title: 'Decreased Innovation',
      description:
        "Innovation and velocity are intertwined, and When product teams need the development team's time to make even minor content changes, productivity decreases.",
      image: <img width={80} height={80} src={innovation} alt="Add trigger" loading="lazy" />,
    },
  ],
};

const BENEFITS = {
  title: 'Never build notifications again',
  description:
    'Updates, additional capabilities, superior DX, and promote more effective notifications practices, not distracting ongoing infrastructure work.',
  sections: [
    {
      title: 'Extensible integrations',
      description:
        'Integrates with all popular providers and channels, and you can easily extend support to your own custom code.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/add-notifications/benefits/extensible-integration.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
    {
      title: 'Complete flexibility',
      description:
        'Product teams can freely edit content, update branding, and change images--all without any developer input.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/add-notifications/benefits/complete-flexibility.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
    {
      title: 'Scalable and reliable',
      description:
        'Deliver notifications at any scale and through any channel when needed, and get the SLA and observability to prove it.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/add-notifications/benefits/scalable.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
    {
      title: 'Full visibility and compliance',
      description:
        'Simplify debugging with complete observability and ensure compliance with ease.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/add-notifications/benefits/full-visibility.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
    {
      title: 'Open source backed',
      description:
        'Transparent, flexible and allows you to inspect, modify, and enhance the infrastructure along with the community.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/add-notifications/benefits/open-source.jpg"
          alt=""
          width={842}
          height={560}
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
