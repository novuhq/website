import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import bg from './images/bg-pattern.svg';

const DESCRIPTION = `Join the community, contribute code, meet new friends, learn, create and innovate with us!`;
const BUTTON_TEXT = 'Sign up with Github';

// TODO: replace button with subscribe form
const Hero = () => (
  <section
    className={clsx(
      'hero relative safe-paddings bg-gradient-to-b from-[#130D16] via-inherit z-10 pt-[266px] pb-[186px] xl:pt-[164px] xl:pb-[140px] md:pt-[102px] md:pb-[468px] sm:pt-[98px] sm:pb-72',
      'before:absolute before:inset-0 before:z-0 before:bg-gradient-to-b before:from-[#130D16] before:via-[#130D16] before:via-[57%] before:to-transparent before:opacity-90'
    )}
  >
    <div className="container grid grid-cols-12 grid-gap-x relative z-10">
      <Heading
        className="font-bold col-start-2 col-span-5 leading-denser xl:text-6xl lg:col-span-6 md:col-span-full md:text-center md:text-4xl sm:text-[32px]"
        size="2xl"
        tag="h1"
        theme="white"
      >
        Welcome to{` `}
        <br className="md:hidden" />
        Novu Community
      </Heading>
      <p
        className="col-start-2 col-span-5 mt-4 text-xl font-book max-w-[504px] leading-snug text-white opacity-70 xl:text-lg xl:max-w-[458px] lg:col-span-6 lg:col-start-1 md:col-span-8 md:col-start-3 md:text-base md:text-center md:max-w-none sm:mt-3 sm:col-span-full sm:max-w-[312px] sm:leading-tight sm:mx-auto"
        dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
      />
      <Button
        className="col-start-2 col-span-4 w-fit mt-12 xl:mt-9 lg:col-start-1 md:col-span-full md:mx-auto md:h-11 md:mt-7 sm:mt-6"
        size="sm"
        theme="pink-to-red-gradient"
      >
        {BUTTON_TEXT}
      </Button>
    </div>
    <div
      className="absolute z-0 top-0 left-1/2 w-[1920px] -translate-x-1/2 xl:w-[1480px] xl:top-8 lg:w-[1240px] lg:left-[48.5%] md:w-[1500px] md:left-1/2 md:top-0 md:-translate-x-[70.75%] sm:w-[830px]"
      aria-hidden
    >
      <span className="absolute top-[16%] left-[87.7%] w-[90px] h-[200px] xl:top-[11%] xl:left-[87%] lg:top-[14%] md:top-[28%] sm:left-[85%] sm:top-[42%]">
        <span className="absolute inset-0 bg-[linear-gradient(229deg,#7ECBF1_17.66%,_#7ECBF1_60.48%)] blur-3xl opacity-30 rounded-[100%]" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white blur-xl opacity-40 w-[10%] h-[20%] rounded-[100%] mix-blend-soft-light" />
      </span>
      <span className="absolute z-10 top-[12.7%] left-[47.7%] w-[90px] h-[200px] rotate-[-45deg] xl:top-[7.5%] lg:top-[8.5%] md:top-[24%] sm:left-[46%] sm:top-[42%]">
        <span className="absolute inset-0 bg-[linear-gradient(229deg,#F17EAE_17%,#F17EDE_60%)] blur-3xl opacity-40 rounded-[100%]" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white blur-xl opacity-50 w-[20%] h-[20%] rounded-[100%] mix-blend-soft-light" />
      </span>
      <img
        className="relative -top-[250px] min-w-[1480px] max-w-none xl:w-full xl:min-w-px xl:-top-[248px] lg:-top-[176px] lg:w-[1240px] md:-top-3.5 md:w-[1500px] sm:w-[834px] sm:top-[202px] sm:[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%)]"
        src={bg}
        width={1920}
        height={1800}
        alt=""
        loading="eager"
        aria-hidden
      />
      <StaticImage
        className="!absolute top-[101px] left-[40.2%] w-[957px] xl:w-[740px] xl:top-[1.5%] xl:left-[40.1%] lg:w-[617px] lg:top-[52px] lg:left-[40.3%] md:w-[746px] md:top-[18.6%] sm:top-[45.1%] sm:w-[417px]"
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
