import React from 'react';

import branding from 'images/pages/usecases/content-management/pain-restatement/branding.svg';
import cms from 'images/pages/usecases/content-management/pain-restatement/cms.svg';
import interrupts from 'images/pages/usecases/content-management/pain-restatement/interrupts.svg';

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

export default PAIN_RESTATEMENT;
