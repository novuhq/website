import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const BENEFITS = {
  title: 'Never build notifications again',
  description:
    'Increase team velocity and customer experience by adding notifications to your existing application.',
  sections: [
    {
      title: 'Ship faster',
      description:
        'Engineering teams easily deliver notification capabilities into the applications.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/unified-platform/benefits/ship-faster.jpg"
          alt=""
          width={842}
          height={532}
        />
      ),
    },
    {
      title: 'Reduce engineering interrupts',
      description:
        'Developers specify which fields and values product teams can manipulate, empowering them to iterate faster.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/unified-platform/benefits/reduce-engineering-interrupts.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
    {
      title: 'Consistent user experience',
      description:
        'Product and marketing teams maintain ownership of messaging and branding, and can iterate as fast as they need to.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/unified-platform/benefits/consistent-user-experience.png"
          alt=""
          width={842}
          height={532}
        />
      ),
    },
    {
      title: 'Effortless collaboration',
      description:
        'Developers and product teams work together on a platform that unifies all notifications content and logic.',
      image: (
        <StaticImage
          src="../../../../images/pages/usecases/unified-platform/benefits/effortless-collaboration.jpg"
          alt=""
          width={842}
          height={502}
        />
      ),
    },
  ],
};

export default BENEFITS;
