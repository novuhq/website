import React from 'react';

import Heading from 'components/shared/heading/heading';

import StageImg1 from './images/Stage1.svg';
import StageImg2 from './images/Stage2.svg';
import StageImg3 from './images/Stage3.svg';
import StageImg4 from './images/Stage4.svg';

const TITLE = 'How it works';
const STAGE_ITEMS = [
  {
    title: 'Malesuada nisl risus erat amet netus egestas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas quis tortor tristique ornare sed ac.',
    icon: StageImg1,
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, in mi, aliquet purus.',
    icon: StageImg2,
  },
  {
    title: 'Vitae sed sodales blandit eu diam cras a aliquet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sagittis, ullamcorper justo accumsan. Sit pellentesque molestie vitae, enim platea orci elementum.',
    icon: StageImg3,
  },
  {
    title: 'Sem tincidunt est amet sit sem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sagittis, ullamcorper justo accumsan. Sit pellentesque molestie vitae, enim platea orci elementum.',
    icon: StageImg4,
  },
];

const HowItWorks = () => (
  <section className="safe-paddings bg-gray-2 py-40">
    <div className="container-lg">
      <Heading size="xl" tag="h2" className="text-4xl leading-tight sm:text-3xl" theme="white">
        {TITLE}
      </Heading>
      <ul className="mt-16 flex ">
        {STAGE_ITEMS.map(({ title, icon, description }, index) => (
          <li
            className="relative mr-12 flex w-[260px] flex-col items-start after:absolute after:top-9 after:left-22 after:z-10 after:h-[1px] after:w-[200px] after:border-t after:border-dashed after:border-gray-6 last:mr-0 last:after:hidden"
            key={index}
          >
            <img
              className="max-h-[76px] max-w-[76px]"
              src={icon}
              loading="eager"
              alt="stage-icon"
            />
            <div className="mt-6 text-xl font-medium leading-5 text-white">{title}</div>
            <div className="mt-2 text-base font-normal leading-6 text-gray-8">{description}</div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowItWorks;
