import React from 'react';

import backlog from 'images/pages/usecases/unified-platform/pain-restatement/backlog.svg';
import capabilities from 'images/pages/usecases/unified-platform/pain-restatement/capabilities.svg';
import contentIteration from 'images/pages/usecases/unified-platform/pain-restatement/content-iteration.svg';

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

export default PAIN_RESTATEMENT;
