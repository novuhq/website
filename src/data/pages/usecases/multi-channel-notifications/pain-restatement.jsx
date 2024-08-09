import React from 'react';

import costs from 'images/pages/usecases/multi-channel-notifications/pain-restatement/costs.svg';
import inconsistent from 'images/pages/usecases/multi-channel-notifications/pain-restatement/inconsistent.svg';
import integration from 'images/pages/usecases/multi-channel-notifications/pain-restatement/integration.svg';

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

export default PAIN_RESTATEMENT;
