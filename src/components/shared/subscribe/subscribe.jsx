import React from 'react';

import Heading from 'components/shared/heading';

import Form from './form';
import bg from './images/bg.svg';

const TITLE = 'Subscribe to the blog updates';
const DESCRIPTION =
  "Novu's latest articles, right in your inbox. Keep in touch with our news and updates.";

const Subscribe = () => (
  <section className="subscribe safe-paddings relative overflow-hidden pt-24 pb-24">
    <div className="container relative z-10 flex flex-col items-center">
      <Heading
        className="max-w-[789px] text-center font-normal leading-tight md:text-4xl sm:text-3xl"
        size="xl"
        tag="h2"
        theme="white"
      >
        {TITLE}
      </Heading>
      <p className="mt-5 text-center text-lg font-book text-gray-8 lg:max-w-[716px] md:text-base sm:mt-3">
        {DESCRIPTION}
      </p>
      <Form />
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="lazy"
      alt=""
      aria-hidden
    />
  </section>
);

export default Subscribe;
