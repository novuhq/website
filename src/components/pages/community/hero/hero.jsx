import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import bg from './images/bg-pattern.svg';

const DESCRIPTION = `Join the community, contribute code, meet new friends, learn, create and innovate with us!`;
const BUTTON_TEXT = 'Sign up with Github';

// TODO: update illustration
const Hero = () => (
  <section
    className={clsx(
      'hero relative safe-paddings bg-gradient-to-b from-[#130D16] via-inherit z-10 pt-[266px] pb-[186px]',
      'before:absolute before:inset-0 before:z-0 before:bg-gradient-to-b before:from-[#130D16] before:via-[#130D16] before:via-[57%] before:to-transparent before:opacity-90'
    )}
  >
    <div className="container grid grid-cols-12 grid-gap-x relative z-10">
      <Heading
        className="font-bold col-start-2 col-span-5 leading-denser"
        size="2xl"
        tag="h1"
        theme="white"
      >
        Welcome to Novu&nbsp;Community
      </Heading>
      <p
        className="col-start-2 col-span-4 mt-4 text-xl font-book leading-snug text-white opacity-70"
        dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
      />
      <Button className="col-start-2 col-span-4 w-fit mt-12" size="sm" theme="pink-to-red-gradient">
        {BUTTON_TEXT}
      </Button>
    </div>
    <div className="absolute z-0 top-0 left-1/2 min-w-[1920px] -translate-x-1/2" aria-hidden>
      <img
        className="min-w-[1480px]"
        src={bg}
        width={1920}
        height={1480}
        alt=""
        loading="eager"
        aria-hidden
      />
      <StaticImage
        className="!absolute top-[103px] left-[40.2%] min-w-[957px]"
        src="./images/animals.png"
        width={957}
        height={575}
        alt=""
        loading="eager"
      />
    </div>
  </section>
);

export default Hero;
