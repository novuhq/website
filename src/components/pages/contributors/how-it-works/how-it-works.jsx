import React from 'react';

import Heading from 'components/shared/heading/heading';
import Link from 'components/shared/link';

import stage1Icon from './images/stage-1.svg';
import stage2Icon from './images/stage-2.svg';
import stage3Icon from './images/stage-3.svg';
import stage4Icon from './images/stage-4.svg';

const TITLE = 'How it works';
const STAGES = [
  {
    icon: stage1Icon,
    title: 'Read the docs',
    description: (
      <>
        Start by reading Novu's{' '}
        <Link
          to="https://github.com/novuhq/novu/blob/main/CONTRIBUTING.md"
          theme="primary"
          target="_blank"
          rel="noreferrer"
        >
          Contributing Guide
        </Link>{' '}
        and{' '}
        <Link
          to="https://docs.novu.co/overview/introduction"
          theme="primary"
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </Link>
        . Learn more about Novu, and set it up
      </>
    ),
  },
  {
    icon: stage2Icon,
    title: 'Pick an issue',
    description: (
      <>
        Head over to{' '}
        <Link
          to="https://github.com/novuhq/novu/issues"
          theme="primary"
          target="_blank"
          rel="noreferrer"
        >
          Novu's issues page
        </Link>
        , Comment on an issue and we will assign it to you. Do you want to open a new issue?{' '}
        <Link
          to="https://github.com/novuhq/novu/issues/new?assignees=&labels=&template=bug_report.md&title="
          theme="primary"
          target="_blank"
          rel="noreferrer"
        >
          Click here
        </Link>
        .
      </>
    ),
  },
  {
    icon: stage3Icon,
    title: 'Solve it',
    description: (
      <>
        Solve the issue while following Novu's guidelines and create a Pull Request. Do you feel
        stuck? Join our{' '}
        <Link to="https://discord.novu.co" theme="primary">
          Discord
        </Link>
        , The community will be super happy to help you
      </>
    ),
  },
  {
    icon: stage4Icon,
    title: 'Earn your badge',
    description: (
      <>
        You will automatically be listed here. Now it's the time to send it to your friends and show
        them how awesome you are!
      </>
    ),
  },
];

const HowItWorks = () => (
  <section
    className="how-it-works safe-paddings bg-gray-2 py-40 lg:py-32 md:py-20 sm:py-16"
    id="started"
  >
    <div className="container-lg">
      <Heading className="leading-tight md:text-4xl sm:text-3xl" size="lg" tag="h2" theme="white">
        {TITLE}
      </Heading>
      <ul className="mt-16 grid grid-cols-12 gap-x-8 lg:gap-x-7 md:mt-14 md:block sm:mt-11">
        {STAGES.map(({ title, icon, description }, index) => (
          <li
            className="group relative col-span-3 flex max-w-[260px] flex-col md:max-w-none md:flex-row"
            key={index}
          >
            <div className="relative flex-shrink-0 md:mr-6" aria-hidden>
              <img
                className="lg:w-16 sm:w-14"
                src={icon}
                width={76}
                height={76}
                loading="lazy"
                alt={`stage number ${index + 1}`}
              />
              <span className="absolute left-22 top-1/2 h-px w-[calc(100%-56px)] -translate-y-1/2 border-t border-dashed border-gray-6 group-last:hidden xl:w-[calc(100%-76px)] lg:left-20 lg:w-[calc(100%-64px)] md:left-1/2 md:top-20 md:h-[calc(100%-92px)] md:w-px md:-translate-x-1/2 md:translate-y-0 md:border-l md:border-t-0 sm:top-16 sm:h-[calc(100%-72px)]" />
            </div>
            <div className="mt-6 lg:mt-9 md:mt-0 md:pb-10 md:group-last:pb-0 sm:pb-6">
              <h4 className="text-xl font-medium leading-tight">{title}</h4>
              <p className="mt-2 text-base font-book leading-snug text-gray-9">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowItWorks;
