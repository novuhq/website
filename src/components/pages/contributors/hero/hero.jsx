import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';
import LINKS from 'constants/links';

import bg from './images/bg.svg';
import Illustration from './images/illustration.svg';

const TITLE = 'Contributors';
const DESCRIPTION =
  "Novu is more than just a notification system. It's a community. We want to let other people achieve a better status in our community by offering incentives unrelated to money.";
const BUTTON_TEXT = 'How it works';

const Hero = () => (
  <section className="hero safe-paddings relative overflow-hidden pt-32 pb-30 md:pt-30 md:pb-20 sm:pt-22 sm:pb-16">
    <div className="container-lg relative z-10">
      <div className="flex items-center justify-between sm:flex-col">
        <div className="max-w-[488px] lg:max-w-[377px] md:max-w-[346px] sm:max-w-none sm:text-center">
          <Heading
            size="2xl"
            tag="h2"
            className="leading-tight md:text-4xl sm:text-3xl"
            theme="white"
          >
            {TITLE}
          </Heading>
          <p className="mt-5 text-lg font-light leading-snug text-gray-8 md:text-base">
            {DESCRIPTION}
          </p>
          <Button className="mt-7 md:mt-5" size="sm" theme="primary" {...LINKS.home}>
            {BUTTON_TEXT}
          </Button>
        </div>

        <img
          className="-mt-2.5 -mr-2.5 lg:max-w-[510px] md:max-w-[360px] sm:mr-0 sm:mt-10 sm:max-w-full"
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
