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
  <section className="how-it-works safe-paddings bg-gray-2 py-40">
    <div className="container-lg">
      <Heading size="md" tag="h2" className="leading-tight" theme="white">
        {TITLE}
      </Heading>
      <ul className="mt-16 flex space-x-[52px]">
        {STAGES.map(({ title, icon, description }, index) => (
          <li
            className="relative flex max-w-[260px] flex-col after:absolute after:top-9 after:left-22 after:z-10 after:h-[1px] after:w-[200px] after:border-t after:border-dashed after:border-gray-6 last:mr-0 last:after:hidden"
            key={index}
          >
            <img
              src={icon}
              width={76}
              height={76}
              loading="lazy"
              alt={`stage number ${index + 1}`}
            />

            <h4 className="mt-6 text-xl font-medium leading-tight text-white">{title}</h4>
            <p className="mt-2 text-base font-book leading-snug text-gray-8">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowItWorks;
