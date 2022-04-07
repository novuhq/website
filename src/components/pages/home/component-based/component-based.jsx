import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import illustration from './images/illustration.svg';

const TITLE = 'Component based';
const DESCRIPTION =
  'Notu API first approach, means that you can  use just what you need, when you need it.';
const BUTTON_TEXT = 'Get Started';
const BUTTON_URL = '/';

const ComponentBased = () => (
  <section className="component-based safe-paddings bg-black py-40 lg:py-24 md:py-20 sm:py-10">
    <div className="container grid-gap-x grid grid-cols-12 items-center md:flex md:flex-col">
      <div className="col-start-1 col-end-5 lg:col-end-7 md:max-w-[590px] md:text-center">
        <Heading size="lg" tag="h2" className="leading-tight lg:text-4xl sm:text-3xl" theme="white">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg font-light leading-snug text-gray-8 sm:text-base">
          {DESCRIPTION}
        </p>
        <Button className="mt-7" to={BUTTON_URL} size="sm" theme="primary">
          {BUTTON_TEXT}
        </Button>
      </div>

      <div className="col-start-6 col-end-13 lg:col-start-7 md:mt-10" aria-hidden>
        <img
          className="md:max-w-[712px] sm:max-w-full"
          src={illustration}
          alt=""
          loading="lazy"
          width={842}
          height={560}
        />
      </div>
    </div>
  </section>
);

export default ComponentBased;
