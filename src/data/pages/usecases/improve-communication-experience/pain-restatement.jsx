import React from 'react';

import missed from 'images/pages/usecases/improve-communication-experience/pain-restatement/missed.svg';
import negative from 'images/pages/usecases/improve-communication-experience/pain-restatement/negative.svg';
import notifications from 'images/pages/usecases/improve-communication-experience/pain-restatement/notifications.svg';

const PAIN_RESTATEMENT = {
  title: 'Poor notifications experiences hurt your business',
  description:
    'End users expect seamless, on-brand, and timely notifications that add to their experience.',
  cards: [
    {
      title: 'Missed updates',
      description:
        'Without timely notifications, users miss critical information such as order updates, password resets, or one-time password messages, leading to a poor experience with your application.',
      image: <img width={72} height={72} src={missed} alt="Create template" loading="lazy" />,
    },
    {
      title: 'Notification fatigue',
      description:
        'Poorly targeted or excessive notifications overwhelm and annoy users, causing distractions and encouraging them to ignore notifications altogether.',
      image: (
        <img width={72} height={72} src={notifications} alt="Connect providers" loading="lazy" />
      ),
    },
    {
      title: 'Negative brand perception',
      description:
        'Poorly managed notifications reflect negatively on your brand, and increase customer churn.',
      image: <img width={72} height={72} src={negative} alt="Add trigger" loading="lazy" />,
    },
  ],
};

export default PAIN_RESTATEMENT;
