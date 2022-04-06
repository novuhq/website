import clsx from 'clsx';
import React from 'react';

import Heading from 'components/shared/heading';

import CopyCode from '../copy-code/copy-code';

import bg from './images/bg.svg';

const TITLE = 'Subscribe to the blog updates';
const DESCRIPTION =
  "Novu's latest articles, right in your inbox. Keep in touch with our news and updates.";

/* TODO: find a way to simplify the styles for applying a gradient border for the input field */

const Subscribe = () => (
  <section className="subscribe safe-paddings relative overflow-hidden bg-black pt-24 pb-24">
    <div className="container relative z-10 flex flex-col items-center">
      <Heading
        className="z-10 max-w-[789px] text-center font-normal leading-tight"
        size="xl"
        tag="h1"
        theme="white"
      >
        {TITLE}
      </Heading>
      <p className=" mt-5 text-center text-lg font-light text-gray-8 lg:max-w-[716px]">
        {DESCRIPTION}
      </p>

      <CopyCode className={clsx(' mt-10 h-16 max-w-[464px]')} text="npx notu init" />

      <img
        className=" absolute left-1/2 -z-10 min-w-[1920px] -translate-x-1/2 "
        src={bg}
        loading="eager"
        alt=""
        aria-hidden
      />
    </div>
  </section>
);

export default Subscribe;
