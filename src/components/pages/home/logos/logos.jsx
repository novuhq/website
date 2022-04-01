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
  <section className="logos safe-paddings bg-black pt-20 pb-20">
    <div className="container">
      <h3 className="text-md text-center font-light text-white">{TITLE}</h3>
      <ul className="mt-8 flex w-full justify-between lg:space-x-8">
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
