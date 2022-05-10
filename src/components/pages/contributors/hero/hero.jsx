import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import bg from './images/bg.svg';

const TITLE = 'Contributors';
const DESCRIPTION =
  "Novu is more than just a notification system. It's a community. We want to let other people achieve a better status in our community by offering incentives unrelated to money.";
const BUTTON_TEXT = 'How it works';

const Hero = () => (
  <section className="safe-paddings relative overflow-hidden py-36">
    <div className="container-lg relative z-10">
      <div className="flex items-center justify-between md:flex md:flex-col">
        <div className="col-start-1 col-end-6 xl:col-end-6 md:text-center">
          <Heading
            size="xl"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {TITLE}
          </Heading>
          <p className="mt-5 max-w-[488px] text-lg font-light leading-snug text-gray-8 lg:mt-3 lg:max-w-[296px] lg:text-base md:max-w-full">
            {DESCRIPTION}
          </p>
          <Button className="mt-7 md:mt-6" size="sm" theme="primary">
            {BUTTON_TEXT}
          </Button>
        </div>
        <div className="" aria-hidden>
          <StaticImage
            className="max-w-[560px]"
            src="./images/illustration-achievments.png"
            alt=""
            loading="lazy"
          />
        </div>
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
