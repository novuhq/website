import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import branding from 'images/pages/usecases/content-management/pain-restatement/branding.svg';
import cms from 'images/pages/usecases/content-management/pain-restatement/cms.svg';
import interrupts from 'images/pages/usecases/content-management/pain-restatement/interrupts.svg';

const HERO = {
  title: 'Eliminate the content dance between development and product teams',
  description:
    'Developers now empower product teams to safely interact with all of your notifications content, no interrupts needed.',
  links: [
    {
      text: 'Create free account',
      url: 'https://dashboard.novu.co/?utm_campaign=usecase-CTA',
      target: '_blank',
    },
    {
      text: 'Book Meeting',
      url: 'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=website-usecase-contentManagement',
      target: '_blank',
    },
  ],
};

const PAIN_RESTATEMENT = {
  title: 'Content management issues are painful',
  description:
    'Developers build workflows, logic, and formatting, then provide editable content back to product teams.',
  cards: [
    {
      title: 'Frequent developer interrupts',
      description:
        'It takes too long for product teams to get content updated when they constantly rely on developers for even minor changes.',
      image: <img width={80} height={80} src={interrupts} alt="Create template" loading="lazy" />,
    },
    {
      title: 'Inconsistent branding and customer experience',
      description:
        'When updating content is hard, branding and messaging issues slow business velocity, and confuse end users.',
      image: <img width={80} height={80} src={branding} alt="Connect providers" loading="lazy" />,
    },
    {
      title: 'Forced non-native CMS use',
      description:
        'Developers like to work in familiar technologies like React, and requiring them to ingest and use a different CMS slows everyone down.',
      image: <img width={80} height={80} src={cms} alt="Add trigger" loading="lazy" />,
    },
  ],
};

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
          src="../../../../images/pages/usecases/content-management/benefits/reuse-content.jpg"
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
