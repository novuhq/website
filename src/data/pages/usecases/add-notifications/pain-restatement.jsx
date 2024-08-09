import React from 'react';

import debugging from 'images/pages/usecases/add-notifications/pain-restatement/debugging.svg';
import innovation from 'images/pages/usecases/add-notifications/pain-restatement/innovation.svg';
import integration from 'images/pages/usecases/add-notifications/pain-restatement/integration.svg';

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

export default PAIN_RESTATEMENT;
