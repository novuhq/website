import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

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

export default BENEFITS;
