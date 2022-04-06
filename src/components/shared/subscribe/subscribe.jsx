import React from 'react';

import Heading from 'components/shared/heading';

import InputWithCopying from '../input-with-copying/input-with-copying';

import bg from './images/bg.svg';

const TITLE = 'Subscribe to the blog updates';

const DESCRIPTION =
  "Novu's latest articles, right in your inbox. Keep in touch with our news and updates.";

const Subscribe = () => (
  <section className="subscribe safe-paddings relative overflow-hidden bg-black pt-24 pb-24">
    <img
      className="absolute left-1/2 min-w-[1920px] -translate-x-1/2 "
      src={bg}
      loading="lazy"
      alt=""
      aria-hidden
    />
    <div className="container relative z-10 flex flex-col items-center">
      <Heading
        className="max-w-[789px] text-center font-normal leading-tight"
        size="xl"
        tag="h2"
        theme="white"
      >
        {TITLE}
      </Heading>
      <p className="mt-5 text-center text-lg font-light text-gray-8 lg:max-w-[716px]">
        {DESCRIPTION}
      </p>

      <InputWithCopying className="mt-10 h-16 max-w-[464px]" text="npx notu init" />
    </div>
  </section>
);

export default Subscribe;
