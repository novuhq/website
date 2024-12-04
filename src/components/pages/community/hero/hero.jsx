import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Heading from 'components/shared/heading';
import SubscribeForm from 'components/shared/subscribe-form';

import bg from './images/bg-pattern.svg';

const DESCRIPTION = `Innovate, collaborate, and stay up to date with the latest in Notifications infrastructure.`;

const Hero = () => (
  <section
    className={clsx(
      'hero safe-paddings relative z-10 bg-gradient-to-b from-[#130D16] via-inherit pb-[186px] pt-[266px] xl:pb-[140px] xl:pt-[164px] md:pb-[468px] md:pt-[102px] sm:pb-72 sm:pt-[98px]',
      'before:absolute before:inset-0 before:z-0 before:bg-gradient-to-b before:from-[#130D16] before:via-[#130D16] before:via-[57%] before:to-transparent before:opacity-90'
    )}
  >
    <div className="container grid-gap-x relative z-10 grid grid-cols-12">
      <Heading
        className="col-span-5 col-start-2 font-bold leading-denser xl:text-6xl lg:col-span-6 md:col-span-full md:text-center md:text-4xl sm:text-[32px]"
        size="2xl"
        tag="h1"
        theme="white"
      >
        Welcome to the{` `}
        <br className="md:hidden" />
        Novu&nbsp;Community
      </Heading>
      <p className="col-span-5 col-start-2 mt-4 max-w-[504px] text-xl font-book leading-snug text-white opacity-70 xl:max-w-[458px] xl:text-lg lg:col-span-6 lg:col-start-1 md:col-span-8 md:col-start-3 md:max-w-none md:text-center md:text-base sm:col-span-full sm:mx-auto sm:mt-3 sm:max-w-[312px] sm:leading-tight">
        {DESCRIPTION}
      </p>
      <SubscribeForm
        className="col-span-5 col-start-2 ml-0 mt-12 h-14 w-fit max-w-[464px] bg-[#0E0910] xl:mt-9 lg:col-start-1 md:col-span-full md:mt-7 md:max-w-sm sm:mt-6"
        placeholder="Email address..."
        alignment="left"
        theme="pink-red-gradient"
      />
    </div>
    <div
      className="absolute left-1/2 top-0 z-0 w-[1920px] -translate-x-1/2 xl:w-[1480px] lg:left-[48.5%] lg:w-[1240px] md:left-1/2 md:w-[1500px] md:-translate-x-[70.75%] sm:w-[830px]"
      aria-hidden
    >
      <span className="absolute left-[87.7%] top-[16%] h-[200px] w-[90px] xl:left-[87%] xl:top-[11%] lg:top-[14%] md:top-[28%] sm:left-[85%] sm:top-[42%]">
        <span className="absolute inset-0 rounded-[100%] bg-[linear-gradient(229deg,#7ECBF1_17.66%,_#7ECBF1_60.48%)] opacity-30 blur-3xl" />
        <span className="absolute left-1/2 top-1/2 h-[20%] w-[10%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white opacity-40 mix-blend-soft-light blur-xl" />
      </span>
      <span className="absolute left-[47.7%] top-[12.7%] z-10 h-[200px] w-[90px] rotate-[-45deg] xl:top-[7.5%] lg:top-[8.5%] md:top-[27%] sm:left-[46%] sm:top-[42%]">
        <span className="absolute inset-0 rounded-[100%] bg-[linear-gradient(229deg,#F17EAE_17%,#F17EDE_60%)] opacity-40 blur-3xl" />
        <span className="absolute left-1/2 top-1/2 h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white opacity-50 mix-blend-soft-light blur-xl" />
      </span>
      <img
        className="relative -top-[358px] min-w-[1480px] max-w-none xl:-top-72 xl:w-full xl:min-w-px lg:top-[-213px] lg:w-[1240px] md:-top-11 md:w-[1500px] sm:top-[169px] sm:w-[834px] sm:[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%)]"
        src={bg}
        width={1920}
        height={1920}
        alt=""
        loading="eager"
        aria-hidden
      />
      <StaticImage
        className="!absolute left-[40.2%] top-[101px] w-[957px] xl:left-[40.1%] xl:top-[4.3%] xl:w-[740px] lg:left-[40.25%] lg:top-[83px] lg:w-[618px] md:left-[40.3%] md:top-[21.05%] md:w-[746px] sm:top-[44%] sm:w-[417px]"
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
