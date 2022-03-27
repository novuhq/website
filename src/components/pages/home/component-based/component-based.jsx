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
  <section className="community safe-paddings bg-black pt-40 pb-40">
    <div className="container flex items-center justify-between lg:flex-col">
      <div className="max-w-[464px] xl:max-w-[525px] lg:max-w-[782px] lg:text-center md:max-w-[712px] sm:w-full sm:max-w-none">
        <Heading size="lg" tag="h2" className="leading-tight xl:text-5xl sm:text-3xl">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg font-light text-gray-8 sm:text-base">{DESCRIPTION}</p>
        <Button className="mt-7" to={BUTTON_URL} size="sm" theme="primary">
          {BUTTON_TEXT}
        </Button>
      </div>
      <div className="lg:mt-6" aria-hidden>
        <img
          className="xl:max-w-[600px] lg:max-w-[782px] md:max-w-[712px] sm:max-w-full"
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
