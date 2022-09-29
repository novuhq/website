import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import bg from './images/bg.svg';

const TITLE = 'Community Heroes';
const DESCRIPTION =
  "Novu is more than just a notification system. It's a community. We want to let other people achieve a better status in our community by offering incentives unrelated to money.";
const BUTTON_URL = '/contributors';
const BUTTON_TEXT = 'How it works';

const CommunityHeroes = () => (
  <section className="hero safe-paddings relative overflow-hidden pt-20 sm:pt-16">
    <div className="container-lg relative z-10">
      <div className="mx-auto max-w-[800px] text-center">
        <Heading size="xl" tag="h2" className="leading-tight md:text-5xl sm:text-4xl" theme="white">
          {TITLE}
        </Heading>
        <p className="mt-11 text-lg font-book leading-snug text-gray-9 md:mt-7 md:text-base">
          {DESCRIPTION}
        </p>
        <Button className="mt-8 md:mt-5" size="sm" theme="white-filled" to={BUTTON_URL}>
          {BUTTON_TEXT}
        </Button>
      </div>
    </div>

    <img
      className="relative left-1/2 -mt-[330px] min-w-[1920px] -translate-x-1/2 lg:-mt-[280px] lg:min-w-[1700px] md:-mt-[210px] md:min-w-[1300px]"
      src={bg}
      loading="eager"
      height={654}
      width={1920}
      alt=""
      aria-hidden
    />
  </section>
);

export default CommunityHeroes;
