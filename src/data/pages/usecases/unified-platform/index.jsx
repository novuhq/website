import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import backlog from 'images/pages/usecases/unified-platform/pain-restatement/backlog.svg';
import capabilities from 'images/pages/usecases/unified-platform/pain-restatement/capabilities.svg';
import contentIteration from 'images/pages/usecases/unified-platform/pain-restatement/content-iteration.svg';

const HERO = {
  title: 'Unified product notification platform for development and product teams',
  description:
    'One platform for all of your notification needs, streamlining how your teams work together, and your users experience notifications.',
  links: [
    {
      text: 'Create free account',
      url: 'https://dashboard.novu.co/?utm_campaign=usecase-CTA',
      target: '_blank',
    },
    {
      text: 'Book Meeting',
      url: 'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=website-usecase-unifiedPlatform',
      target: '_blank',
    },
  ],
};

const PAIN_RESTATEMENT = {
  title: 'Notifications the right way are not trivial',
  description:
    'Flexible notification infrastructure is very difficult to implement. Spend your development cycles where they can best make a difference.',
  cards: [
    {
      title: 'Evolving requirements',
      description:
        'Every new channel or provider requires development to build new app capabilities to new API endpoints.',
      image: <img width={80} height={80} src={capabilities} alt="Create template" loading="lazy" />,
    },
    {
      title: 'Endless backlog',
      description: 'Engineering teams lag behind product team notification requirements and needs.',
      image: <img width={80} height={80} src={backlog} alt="Connect providers" loading="lazy" />,
    },
    {
      title: 'Constant cross-team friction',
      description:
        'Product teams want to rapidly iterate and update content, but require developer time and interrupts to be successful, causing friction from mismanaged expectations and misalignment.',
      image: <img width={80} height={80} src={contentIteration} alt="Add trigger" loading="lazy" />,
    },
  ],
};

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

export default {
  hero: HERO,
  painRestatement: PAIN_RESTATEMENT,
  benefits: BENEFITS,
};
