import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import useLandingSimpleTracking from 'utils/use-landing-simple-tracking';

import Animation from './animation';

const TITLE = 'The <Inbox /> infrastructure for modern products';

const DESCRIPTION =
  'The notification platform that turns complex multi-channel delivery into a single <Inbox /> component. Built for developers, designed for growth, powered by open source.';

const Hero = () => (
  <section className="hero relative pt-[88px] lg:pt-16 md:pt-11 sm:pt-9">
    <div className="container-xl xl:px-10 lg:max-w-none lg:px-8 md:max-w-3xl sm:max-w-lg sm:px-5">
      <div className="flex flex-col items-center">
        <h1 className="relative z-10 max-w-[690px] text-center text-[52px] font-medium leading-denser tracking-snug lg:max-w-[674px] lg:text-6xl md:max-w-[612px] md:text-[44px] sm:text-3xl">
          {TITLE}
        </h1>
        <p className="relative z-10 mt-4 max-w-[738px] text-center text-lg leading-normal tracking-snug text-gray-8 md:max-w-[640px] sm:mt-[18px] sm:text-base">
          {DESCRIPTION}
        </p>
        <div className="justify-left relative z-10 mt-7 flex items-center gap-x-7 gap-y-5 sm:mt-4 sm:justify-center sm:gap-x-4 2xs:flex-wrap">
          <Button
            className="w-[157px] sm:h-10 sm:w-[140px] sm:px-5 sm:text-xs sm-xs:w-full"
            size="sm"
            theme="white-filled"
            {...LINKS.getStarted}
            onClick={useLandingSimpleTracking('get_started', { type: 'homepage' })}
          >
            Start Building
          </Button>
          <Button
            className="w-[157px] sm:h-10 sm:w-[125px] sm:px-5 sm:text-xs sm-xs:w-full"
            size="sm"
            theme="gray-outline"
            {...LINKS.documentation}
            onClick={useLandingSimpleTracking('visit_docs', { type: 'homepage' })}
          >
            Visit Docs
          </Button>
        </div>
        <Animation />
      </div>
    </div>
  </section>
);

export default Hero;
