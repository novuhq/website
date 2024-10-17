import clsx from 'clsx';
import React from 'react';

import capgemini from './images/capgemini.svg';
import feegow from './images/feegow.svg';
import hemnet from './images/hemnet.svg';
import mateo from './images/mateo.svg';
import mongoDB from './images/mongo-db.svg';
import mundi from './images/mundi.svg';
import novacy from './images/novacy.svg';
import rankmi from './images/rankmi.svg';
import siemens from './images/siemens.svg';
import tenderd from './images/tenderd.svg';
import traace from './images/traace.svg';
import unity from './images/unity.svg';

const TITLE = 'Used by innovative companies worldwide';
const LOGOS = [
  {
    src: unity,
    alt: 'Unity logo',
    width: 133,
    height: 50,
  },
  {
    src: mongoDB,
    alt: 'MongoDB logo',
    width: 178,
    height: 50,
  },
  {
    src: hemnet,
    alt: 'hemnet logo',
    width: 164,
    height: 50,
  },
  {
    src: siemens,
    alt: 'Siemens logo',
    width: 136,
    height: 50,
  },
  {
    src: capgemini,
    alt: 'Capgemini logo',
    width: 182,
    height: 50,
  },
  {
    src: mateo,
    alt: 'Mateo logo',
    width: 77,
    height: 26,
  },
  {
    src: rankmi,
    alt: 'Rankmi logo',
    width: 88,
    height: 26,
  },
  {
    src: traace,
    alt: 'Traace logo',
    width: 78,
    height: 26,
  },
  {
    src: tenderd,
    alt: 'Tenderd logo',
    width: 135,
    height: 26,
  },
  {
    src: novacy,
    alt: 'Novacy logo',
    width: 77,
    height: 26,
  },
  {
    src: mundi,
    alt: 'Mundi logo',
    width: 77,
    height: 26,
  },
  {
    src: feegow,
    alt: 'Feegow logo',
    width: 84,
    height: 26,
  },
];

const Logos = () => (
  <section className="logos safe-paddings md:mt-10">
    <div className="container">
      <h2 className="text-md text-center font-book uppercase leading-none sm:text-sm sm:leading-snug">
        {TITLE}
      </h2>
      <ul className="mx-auto mt-12 flex w-full max-w-[1080px] flex-wrap items-center justify-center gap-y-10 lg:max-w-[1000px] lg:gap-y-9 md:flex-wrap md:gap-x-12 md:gap-y-7 md:space-x-0 sm:mt-6 sm:gap-x-5 sm:gap-y-5">
        {LOGOS.map(({ src, alt, width, height }, index) => (
          <li
            className={index < 5 ? 'mx-[27px] lg:mx-7 md:mx-0' : 'mx-8 lg:mx-5 md:mx-0'}
            key={index}
          >
            <img
              className={clsx(index < 5 ? 'h-[50px] lg:h-10 md:h-8 sm:h-7' : 'h-[26px]', 'w-auto')}
              src={src}
              loading="eager"
              alt={alt}
              width={width}
              height={height}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Logos;
