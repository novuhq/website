import React from 'react';

import abInBev from './images/ab-in-bev.svg';
import buzzfeed from './images/buzzfeed.svg';
import google from './images/google.svg';
import relive from './images/relive.svg';
import rvezy from './images/rvezy.svg';
import tesla from './images/tesla.svg';
import typeform from './images/typeform.svg';

const TITLE = 'Loved by engineers from';
const LOGOS = [google, buzzfeed, typeform, relive, abInBev, tesla, rvezy];

const Logos = () => (
  <section className="logos safe-paddings bg-black py-20 lg:py-16 md:py-14 sm:py-12">
    <div className="container">
      <h3 className="text-md text-center font-light text-white">{TITLE}</h3>
      <ul className="mt-8 flex w-full justify-between lg:space-x-11 md:flex-wrap md:justify-center md:gap-y-7 md:gap-x-16 md:space-x-0">
        {LOGOS.map((item, index) => (
          <li key={index}>
            <img className="h-9.5 w-auto md:h-8" src={item} loading="eager" alt={`logo-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Logos;
