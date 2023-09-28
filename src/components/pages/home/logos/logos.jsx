import clsx from 'clsx';
import React from 'react';

import capgemini from './images/capgemini.svg';
import cogoport from './images/cogoport.svg';
import feegow from './images/feegow.svg';
import mateo from './images/mateo.svg';
import mongoDB from './images/mongo-db.svg';
import mundi from './images/mundi.svg';
import novacy from './images/novacy.svg';
import preflet from './images/preflet.svg';
import rankmi from './images/rankmi.svg';
import siemens from './images/siemens.svg';
import tenderd from './images/tenderd.svg';
import traace from './images/traace.svg';
import unity from './images/unity.svg';

const TITLE = 'used by';
const LOGOS = [
  {
    src: unity,
    alt: 'Unity logo',
    width: 131,
    height: 48,
  },
  {
    src: mongoDB,
    alt: 'MongoDB logo',
    width: 167,
    height: 48,
  },
  {
    src: cogoport,
    alt: 'Cogoport logo',
    width: 210,
    height: 48,
  },
  {
    src: siemens,
    alt: 'Siemens logo',
    width: 168,
    height: 48,
  },
  {
    src: capgemini,
    alt: 'Capgemini logo',
    width: 210,
    height: 48,
  },
  {
    src: traace,
    alt: 'Traace logo',
    width: 106,
    height: 30,
  },
  {
    src: tenderd,
    alt: 'Tenderd logo',
    width: 183,
    height: 30,
  },
  {
    src: rankmi,
    alt: 'Rankmi logo',
    width: 112,
    height: 30,
  },
  {
    src: preflet,
    alt: 'Preflet logo',
    width: 105,
    height: 30,
  },
  {
    src: novacy,
    alt: 'Novacy logo',
    width: 105,
    height: 30,
  },
  {
    src: mateo,
    alt: 'Mateo logo',
    width: 83,
    height: 30,
  },
  {
    src: feegow,
    alt: 'Feegow logo',
    width: 83,
    height: 30,
  },
  {
    src: mundi,
    alt: 'Mundi logo',
    width: 80,
    height: 30,
  },
];

const Logos = () => (
  <section className="logos safe-paddings bg-black pb-40 pt-24 lg:py-16 md:py-14 sm:py-9">
    <div className="container">
      <h2 className="text-md text-center font-book uppercase leading-none">{TITLE}</h2>
      <ul className="mx-auto mt-10 flex w-full max-w-[1380px] flex-wrap justify-center gap-y-10 xl:max-w-[1280px] lg:max-w-[1040px] md:flex-wrap md:gap-x-16 md:gap-y-7 md:space-x-0 sm:mt-6 sm:gap-x-5 sm:gap-y-5">
        {LOGOS.map(({ src, alt, width, height }, index) => (
          <li
            className={index < 5 ? 'mx-10 xl:mx-8 lg:mx-5 md:mx-0' : 'mx-8 xl:mx-6 lg:mx-4 md:mx-0'}
            key={index}
          >
            <img
              className={clsx(
                index < 5 ? 'h-12 xl:h-11 lg:h-10 md:h-8' : 'h-[30px] xl:h-7 lg:h-6 md:h-8',
                'w-auto sm:h-6'
              )}
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
