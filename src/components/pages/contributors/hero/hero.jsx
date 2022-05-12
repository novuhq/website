import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import bg from './images/bg.svg';
import Illustration from './images/illustration.svg';

const TITLE = 'Contributors';
const DESCRIPTION =
  "Novu is more than just a notification system. It's a community. We want to let other people achieve a better status in our community by offering incentives unrelated to money.";
const BUTTON_TEXT = 'How it works';

const Hero = () => (
  <section className="safe-paddings relative overflow-hidden pt-32 pb-30">
    <div className="container-lg relative z-10">
      <div className="flex items-center justify-between md:flex md:flex-col">
        <div className="max-w-[488px] md:max-w-none">
          <Heading
            size="xl"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {TITLE}
          </Heading>
          <p className="mt-5 text-lg font-light leading-snug text-gray-8">{DESCRIPTION}</p>
          <Button className="mt-7 md:mt-6" size="sm" theme="primary">
            {BUTTON_TEXT}
          </Button>
        </div>

        <img
          className="-mt-2.5 -mr-2.5"
          src={Illustration}
          width={660}
          height={420}
          loading="eager"
          alt=""
          aria-hidden
        />
      </div>
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
