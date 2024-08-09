import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const BENEFITS = {
  title: 'Powerful, centralized content management in any framework',
  description:
    'From React to Vue to more. Re-use and build content once, then empower your product teams to maintain it.',
  sections: [
    {
      title: 'Effortless collaboration',
      description:
        'Developers and product teams work together with unified notifications content and logic.',
      image: (
        <StaticImage
          className="rounded-[20px]"
          src="../../../../images/pages/usecases/content-management/benefits/effortless-collaboration.jpg"
          alt=""
          width={842}
          height={502}
        />
      ),
    },
    {
      title: 'Reduce engineering interrupts',
      description:
        'Developers specify editable fields, show/hide toggles, and dropdown selectors for properties, empowering product teams to iterate faster.',
      image: (
        <StaticImage
          className="rounded-[20px]"
          src="../../../../images/pages/usecases/content-management/benefits/reduce-engineering-interrupts.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
    {
      title: 'Consistent user experience',
      description:
        'Product and marketing teams maintain ownership of messaging and branding, and can interate as fast as they need to.',
      image: (
        <StaticImage
          className="rounded-[20px]"
          src="../../../../images/pages/usecases/content-management/benefits/consistent-user-experience.png"
          alt=""
          width={842}
          height={532}
        />
      ),
    },
    {
      title: 'Personalized notifications',
      description:
        'Deliver rich, personalized notifications across any channel, and know content updates will never break workflow logic.',
      image: (
        <StaticImage
          className="rounded-[20px]"
          src="../../../../images/pages/usecases/content-management/benefits/personalized-messages.jpg"
          alt=""
          width={842}
          height={495}
        />
      ),
    },
    {
      title: 'Reuse content',
      description:
        'Bring your own content, no matter the format. Novu supports popular frameworks including React, Vue-email, MJML, and more.',
      image: (
        <StaticImage
          className="rounded-[20px]"
          src="../../../../images/pages/usecases/content-management/benefits/reuse-content.jpg"
          alt=""
          width={842}
          height={560}
        />
      ),
    },
  ],
};

export default BENEFITS;
