import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

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

export default BENEFITS;
