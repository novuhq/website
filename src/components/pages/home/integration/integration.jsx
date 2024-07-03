import React from 'react';

import cloudDataIcon from './images/cloud-data.svg';
import consoleIcon from './images/console.svg';
import debugIcon from './images/debug.svg';
import editIcon from './images/edit.svg';
import integrationIcon from './images/integration.svg';
import migrationIcon from './images/migration.svg';

const TITLE = 'Integrates easily, delivers powerful notifications';

const CARDS = [
  {
    title: 'Powerful workflows',
    description: 'Code-first workflows that can be run inside your own IT boundary.',
    image: cloudDataIcon,
  },
  {
    title: 'Inbox',
    description:
      'Easily integrate and deploy notifications right into your application via components.',
    image: integrationIcon,
  },
  {
    title: 'End user preferences',
    description:
      'Enable end users to set contact preferences like language, timezone, and channels.',
    image: migrationIcon,
  },
  {
    title: 'No-code editor',
    description:
      'Product teams can manage workflow configurations without the risk of breaking notification flows.',
    image: editIcon,
  },
  {
    title: 'Multi-channel, multi-framework',
    description: 'Access any channel provider, and use any content framework, all with one API.',
    image: debugIcon,
  },
  {
    title: 'API-first, and open-source backed',
    description: 'Native developer experience that’s backed by a huge community.',
    image: consoleIcon,
  },
];

const Integration = () => (
  <section className="integration mt-[120px] lg:mt-[100px] md:mt-20">
    <div className="container-md">
      <h2
        className="text-5xl leading-tight tracking-snug font-medium text-center max-w-4xl mx-auto lg:text-[32px] lg:max-w-2xl md:text-3xl"
        dangerouslySetInnerHTML={{ __html: TITLE }}
      />
      <ul className="grid grid-cols-3 grid-rows-2 mt-12 ml-9 max-w-[928px] gap-y-12 gap-x-8 lg:mt-[44px] lg:gap-x-[52px] lg:ml-0 lg:max-w-none lg:px-9 md:px-0 md:mt-9 md:gap-x-7 md:gap-y-8 sm:grid-cols-2 sm-xs:grid-cols-1 sm:gap-y-[27px] sm:mt-8">
        {CARDS.map(({ title, description, image }, index) => (
          <li key={index}>
            <div className="flex items-center">
              <img
                className="mr-3 md:w-5 md:h-5 md:mr-2.5"
                src={image}
                alt={title}
                width={22}
                height={22}
                loading="lazy"
              />
              <h3 className="font-medium leading-snug tracking-snug md:text-[15px]">{title}</h3>
            </div>
            <p
              className="text-[15px] font-light leading-snug text-gray-9 mt-2.5 md:text-sm"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Integration;
