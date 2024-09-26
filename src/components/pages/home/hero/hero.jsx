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
  <section className="hero pt-[152px] mb-20 lg:pt-[196px] md:pt-[98px] sm:mb-10 relative">
    <div className="container-xl relative xl:px-10 lg:px-8 lg:max-w-none md:max-w-3xl sm:max-w-lg sm:px-5 z-10">
      <div className="flex flex-col items-center">
        <h1 className="text-[52px] leading-denser tracking-snug font-medium max-w-[690px] lg:text-5xl md:text-4xl sm:text-[30px] text-center">
          {TITLE}
        </h1>
        <p className="mt-5 text-lg font-book leading-snug text-white/70 max-w-xl text-center">
          {DESCRIPTION}
        </p>
        <div className="relative mt-11 z-10 flex items-center justify-left gap-x-7 gap-y-5 sm:mt-7 sm:gap-x-4 sm:justify-center 2xs:flex-wrap">
          <Button
            className="w-[190px] sm:text-xs sm-xs:w-full"
            size="sm"
            theme="white-filled"
            {...LINKS.getStarted}
            onClick={useLandingSimpleTracking('get_started', { type: 'homepage' })}
          >
            Create Free Account
          </Button>
          <Button
            className="w-[190px] sm:text-xs sm-xs:w-full"
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
    <div className="hidden absolute pointer-events-none w-full h-full left-0 top-0 z-0 md:block md:relative md:w-[702px] md:mx-auto md:h-auto md:aspect-[1.2] sm:w-80 sm:aspect-[0.65]">
      <StaticImage
        className="!absolute w-[1652px] h-auto left-[-188px] top-[-797px] lg:w-[1246px] lg:left-[-93px] lg:top-[-538px] md:w-[1353px] md:left-[-616px] md:top-[-454px] sm:w-[994px] sm:left-[-466px] sm:top-[-280px]"
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
