import React from 'react';

import cloudDataIcon from './images/cloud-data.svg';
import consoleIcon from './images/console.svg';
import debugIcon from './images/debug.svg';
import editIcon from './images/edit.svg';
import integrationIcon from './images/integration.svg';
import migrationIcon from './images/migration.svg';

const TITLE =
  'Seamlessly integrate with existing services and&nbsp;legacy systems to facilitate adoption';

const CARDS = [
  {
    title: 'Runs in your IT boundary',
    description:
      'Deploy within your organization`s VPC, Kubernetes, serverless setups, or locally for secure data access.',
    image: cloudDataIcon,
  },
  {
    title: 'Limitless integrations',
    description:
      'Use ReactEmail, MJML, LaunchDarkly (and more!), and fetch content and values from anywhere.',
    image: integrationIcon,
  },
  {
    title: 'Easy migration',
    description:
      'Seamlessly integrate with existing services and legacy systems to facilitate adoption.',
    image: migrationIcon,
  },
  {
    title: 'No-code editor',
    description:
      'Product teams can manage workflow configurations without the risk of breaking notification flows.',
    image: editIcon,
  },
  {
    title: 'Powerful debugging',
    description:
      'Rapidly identify and solve previously complicated content hydrating and notification routing issues.',
    image: debugIcon,
  },
  {
    title: 'Speaks your language',
    description: 'Native developer experience and autocomplete in your code and IDE of choice.',
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
