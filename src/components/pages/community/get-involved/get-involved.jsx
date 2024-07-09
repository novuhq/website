import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import links from 'constants/links';
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
    <div className="container grid grid-cols-12 grid-gap-x relative z-10">
      <Heading
        className="font-medium col-span-full text-center leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {TITLE}
      </Heading>
      <ul className="col-span-8 col-start-3 mt-14 grid grid-cols-3 gap-y-8 gap-x-16 lg:col-span-full lg:gap-x-7 lg:mt-12 md:mt-11 md:gap-x-5 sm:grid-cols-1 sm:mt-8">
        {ITEMS.map(({ icon, title, description, linkText, linkUrl }, index) => (
          <li key={index} className="flex flex-col items-center">
            <img className="w-auto h-10 md:h-9 sm:h-8" src={icon} alt="" width={40} height={40} />
            <h3 className="mt-6 text-3xl font-medium leading-tight text-center lg:text-2xl md:mt-5 md:text-xl sm:mt-4">
              {title}
            </h3>
            <p className="mt-1.5 text-gray-9 text-center font-light leading-snug md:mt-2 sm:max-w-[280px]">
              {description}
            </p>
            <Link
              className="mt-6 !tracking-normal font-medium leading-none text-[13px] md:mt-4 sm:mt-5"
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
