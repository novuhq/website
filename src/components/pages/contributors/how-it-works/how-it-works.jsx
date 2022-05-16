import React from 'react';

import Heading from 'components/shared/heading/heading';

import stage1Icon from './images/stage-1.svg';
import stage2Icon from './images/stage-2.svg';
import stage3Icon from './images/stage-3.svg';
import stage4Icon from './images/stage-4.svg';

const TITLE = 'How it works';
const STAGES = [
  {
    title: 'Malesuada nisl risus erat amet netus egestas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas quis tortor tristique ornare sed ac.',
    icon: stage1Icon,
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, in mi, aliquet purus.',
    icon: stage2Icon,
  },
  {
    title: 'Vitae sed sodales blandit eu diam cras a aliquet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sagittis, ullamcorper justo accumsan. Sit pellentesque molestie vitae, enim platea orci elementum.',
    icon: stage3Icon,
  },
  {
    title: 'Sem tincidunt est amet sit sem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sagittis, ullamcorper justo accumsan. Sit pellentesque molestie vitae, enim platea orci elementum.',
    icon: stage4Icon,
  },
];

const HowItWorks = () => (
  <section className="how-it-works safe-paddings bg-gray-2 py-40 lg:py-32 md:py-20 sm:py-16">
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
              <span className="absolute top-1/2 left-22 h-px w-[calc(100%-56px)] -translate-y-1/2 border-t border-dashed border-gray-6 group-last:hidden xl:w-[calc(100%-76px)] lg:left-20 lg:w-[calc(100%-64px)] md:top-20 md:left-1/2 md:h-[calc(100%-92px)] md:w-px md:translate-y-0 md:-translate-x-1/2 md:border-t-0 md:border-l sm:top-16 sm:h-[calc(100%-72px)]" />
            </div>
            <div className="mt-6 lg:mt-9 md:mt-0 md:pb-10 md:group-last:pb-0 sm:pb-6">
              <h4 className="text-xl font-medium leading-tight">{title}</h4>
              <p className="mt-2 text-base font-book leading-snug text-gray-8">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowItWorks;
