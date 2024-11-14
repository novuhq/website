import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import discordIcon from 'icons/discord.svg';
import githubIcon from 'icons/github.svg';
import novuIcon from 'icons/novu-gradient-logo.svg';

const TITLE = 'Get involved: start, engage, contribute';

const ITEMS = [
  {
    icon: novuIcon,
    title: 'Novu Cloud',
    description: 'Embark on your journey by creating your personalized account',
    linkText: 'Get started',
    linkUrl: 'https://dashboard.novu.co/?utm_campaign=community_page',
  },
  {
    icon: discordIcon,
    title: 'Join Discord',
    description: 'Immerse yourself in the community by joining our dedicated server',
    linkText: 'Join discord',
    linkUrl: 'https://discord.novu.co/',
  },
  {
    icon: githubIcon,
    title: 'Fork and Work',
    description: 'Discover an issue within our project and make a valuable contribution',
    linkText: 'Find an issue',
    linkUrl: 'https://github.com/novuhq/novu/issues',
  },
];

const GetInvolved = () => (
  <section className="get-involved safe-paddings relative z-10 mt-[70px] md:mt-24 sm:mt-20">
    <div className="container grid-gap-x relative z-10 grid grid-cols-12">
      <Heading
        className="col-span-full text-center font-medium leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {TITLE}
      </Heading>
      <ul className="col-span-8 col-start-3 mt-14 grid grid-cols-3 gap-x-16 gap-y-8 lg:col-span-full lg:mt-12 lg:gap-x-7 md:mt-11 md:gap-x-5 sm:mt-8 sm:grid-cols-1">
        {ITEMS.map(({ icon, title, description, linkText, linkUrl }, index) => (
          <li key={index} className="flex flex-col items-center">
            <img className="h-10 w-auto md:h-9 sm:h-8" src={icon} alt="" width={40} height={40} />
            <h3 className="mt-6 text-center text-3xl font-medium leading-tight lg:text-2xl md:mt-5 md:text-xl sm:mt-4">
              {title}
            </h3>
            <p className="mt-1.5 text-center font-light leading-snug text-gray-9 md:mt-2 sm:max-w-[280px]">
              {description}
            </p>
            <Link
              className="mt-6 text-[13px] font-medium leading-none !tracking-normal md:mt-4 sm:mt-5"
              theme="primary-underline"
              to={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default GetInvolved;
