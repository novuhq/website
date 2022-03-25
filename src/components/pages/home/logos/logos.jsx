import React from 'react';

import logo5 from './images/ab-in-bev.svg';
import logo2 from './images/buzzfeed.svg';
import logo1 from './images/google.svg';
import logo4 from './images/relive.svg';
import logo7 from './images/rvezy.svg';
import logo6 from './images/tesla.svg';
import logo3 from './images/typeform.svg';

const TITLE = 'Loved by engineers from';
const LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const Logos = () => (
  <section className="safe-paddings bg-black pt-20 pb-20">
    <div className="container">
      <h3 className="text-md text-center font-light text-white">{TITLE}</h3>
      <ul className="mt-8 flex w-full justify-between md:flex-wrap md:justify-center md:gap-y-5 md:gap-x-7">
        {LOGOS.map((item, index) => (
          <li className="block h-10 min-w-min" key={index}>
            <img className="w-auto" src={item} loading="eager" alt={`logo-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Logos;
