import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import useLandingSimpleTracking from 'utils/use-landing-simple-tracking';

import Animation from './animation';

const TITLE = 'Robust and flexible notification building blocks';

const DESCRIPTION =
  'Open source JavaScript-native notifications framework for developers that makes it easy to build powerful notifications capabilities for your product teams.';

const Hero = () => (
  <section className="hero relative mb-20 pt-[152px] lg:pt-[196px] md:pt-[98px] sm:mb-10">
    <div className="container-xl relative z-10 xl:px-10 lg:max-w-none lg:px-8 md:max-w-3xl sm:max-w-lg sm:px-5">
      <div className="flex flex-col items-center">
        <h1 className="max-w-[690px] text-center text-[52px] font-medium leading-denser tracking-snug lg:text-5xl md:text-4xl sm:text-[30px]">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-xl text-center text-lg font-book leading-snug text-white/70">
          {DESCRIPTION}
        </p>
        <div className="justify-left relative z-10 mt-11 flex items-center gap-x-7 gap-y-5 sm:mt-7 sm:justify-center sm:gap-x-4 2xs:flex-wrap">
          <Button
            className="w-[208px] sm:text-xs sm-xs:w-full"
            size="sm"
            theme="white-filled"
            {...LINKS.getStarted}
            onClick={useLandingSimpleTracking('get_started', { type: 'homepage' })}
          >
            Create Free Account
          </Button>
          <Button
            className="w-[208px] sm:text-xs sm-xs:w-full"
            size="sm"
            theme="gray-outline"
            {...LINKS.contactUsCTA}
            onClick={useLandingSimpleTracking('contact_us', { type: 'homepage' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-full md:relative md:mx-auto md:block md:aspect-[1.2] md:h-auto md:w-[702px] sm:aspect-[0.65] sm:w-80">
      <StaticImage
        className="!absolute left-[-188px] top-[-797px] h-auto w-[1652px] lg:left-[-93px] lg:top-[-538px] lg:w-[1246px] md:left-[-616px] md:top-[-454px] md:w-[1353px] sm:left-[-466px] sm:top-[-280px] sm:w-[994px]"
        src="./images/illustration.png"
        alt=""
        width={1652}
        height={1371}
        loading="eager"
        quality={100}
        aria-hidden
      />
    </div>
    <Animation />
  </section>
);

export default Hero;
