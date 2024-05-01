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
    linkUrl: '',
  },
  {
    icon: discordIcon,
    title: 'Join Discord',
    description: 'Immerse yourself in the community by joining our dedicated server',
    linkText: 'Join discord',
    linkUrl: '',
  },
  {
    icon: githubIcon,
    title: 'Fork And Work',
    description: 'Discover an issue within our project and make a valuable contribution',
    linkText: 'Find an issue',
    linkUrl: '',
  },
];

const GetInvolved = () => (
  <section className="get-involved safe-paddings relative z-10 mt-[78px]">
    <div className="container grid grid-cols-12 grid-gap-x relative z-10">
      <Heading
        className="font-medium col-span-full text-[44px] text-center leading-tight"
        tag="h2"
        theme="white"
      >
        {TITLE}
      </Heading>
      <ul className="col-span-8 col-start-3 mt-14 grid grid-cols-3 gap-x-16">
        {ITEMS.map(({ icon, title, description, linkText, linkUrl }, index) => (
          <li key={index} className="flex flex-col items-center">
            <img className="w-10 h-10" src={icon} alt="" width={40} height={40} />
            <h3 className="text-3xl font-medium leading-tight mt-6">{title}</h3>
            <p className="mt-1.5 text-gray-9 text-center font-light leading-snug">{description}</p>
            <Link
              className="mt-6 !tracking-normal leading-none text-[13px]"
              theme="primary-underline"
              to={linkUrl}
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
