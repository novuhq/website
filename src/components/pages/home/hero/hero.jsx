import React from 'react';

import Heading from 'components/shared/heading';

import logo5 from './images/ab-in-bev.svg';
import logo2 from './images/buzzfeed.svg';
import logo1 from './images/google.svg';
import logo4 from './images/relive.svg';
import logo7 from './images/rvezy.svg';
import logo6 from './images/tesla.svg';
import logo3 from './images/typeform.svg';

const LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const TITLE = 'The open-source notification infrastructure for developers';
const DESCRIPTION =
  'Simple components and APIs for managing all communication channels in one place: Email, SMS, Direct, and Push';

const LOGOS_TITLE = 'Loved by engineers from';

const Hero = () => (
  <section className="safe-paddings bg-black pt-20 pb-20">
    <div className="container flex flex-col items-center">
      <Heading size="xl" tag="h1" className="max-w-[764px] text-center leading-tight">
        {TITLE}
      </Heading>
      <p className="mt-5 text-lg text-white">{DESCRIPTION}</p>
      <div className="mt-20 text-white">TODO: input</div>
      <h3 className="text-md mt-40 text-center text-white">{LOGOS_TITLE}</h3>
      <ul className="mt-8 flex w-full justify-between">
        {LOGOS.map((item, index) => (
          <li key={index} className="block h-10 min-w-min">
            <img src={item} className="w-auto" loading="lazy" alt={`logo-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
