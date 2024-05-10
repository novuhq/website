import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import bugIcon from './images/bug.svg';
import ideaIcon from './images/idea.svg';
import improveIcon from './images/improve.svg';
import microphoneIcon from './images/microphone.svg';
import paintIcon from './images/paint.svg';
import settingsIcon from './images/settings.svg';

const TITLE = 'Other ways to help';
// TODO: set links
const ITEMS = [
  {
    icon: paintIcon,
    title: 'Create content',
    description: 'Help others discover Novu with videos and blog articles.',
    linkUrl: '',
  },
  {
    icon: microphoneIcon,
    title: 'Present at meetups',
    description: 'Share your experience and represent Novu in public meetups.',
    linkUrl: '',
  },
  {
    icon: bugIcon,
    title: 'Report bugs',
    description: 'Find and fix bugs in the code, then submit pull requests to resolve them.',
    linkUrl: '',
  },
  {
    icon: ideaIcon,
    title: 'Submit new ideas',
    description: 'Suggest features, integrations, or SDKs for our roadmap.',
    linkUrl: '',
  },
  {
    icon: improveIcon,
    title: 'Improve documentation',
    description: 'Share your experience and represent Novu in public',
    linkUrl: '',
  },
  {
    icon: settingsIcon,
    title: 'Helping others',
    description: 'Support developers with their projects and contributions',
    linkUrl: '',
  },
];

const Contribute = () => (
  <section className="contribute safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container grid grid-cols-12 grid-gap-x relative z-10">
      <Heading
        className="font-medium col-span-full text-[44px] text-center leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        theme="white"
      >
        {TITLE}
      </Heading>
      <ul className="col-span-10 col-start-2 px-11 mt-12 grid grid-cols-3 gap-x-14 gap-y-12 xl:px-0 lg:col-span-full lg:gap-x-10 md:mt-[58px] md:grid-cols-2 md:gap-x-5 md:gap-y-9 sm:mt-8 sm:grid-cols-1 sm:gap-y-8">
        {ITEMS.map(({ icon, title, description, linkUrl }, index) => (
          <li key={index} className="flex flex-col">
            <img
              className="w-fit h-10 sm:h-8"
              src={icon}
              alt=""
              width={40}
              height={40}
              loading="lazy"
            />
            <h3 className="mt-6 text-2xl leading-snug lg:mt-4 md:text-xl sm:mt-3.5 sm:text-lg">
              {title}
            </h3>
            <p className="mt-2 text-gray-9 font-light leading-snug sm:mt-1">{description}</p>
            <Link
              className="mt-2.5 !tracking-normal font-light leading-snug text-sm"
              theme="primary"
              to={linkUrl}
            >
              Learn more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Contribute;
