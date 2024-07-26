// import copyToClipboard from 'copy-to-clipboard';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import buttonClick from 'utils/use-landing-simple-tracking';

const TITLE = 'The JavaScript-native Notification Framework for Developers';

const DESCRIPTION =
  'Fully extensible open source notifications infrastructure framework for NextJS and more that empowers developers to provide an easy-to-use notifications platform to product teams.';

const Hero = () => (
  <section className="hero pt-[339px] pb-[180px] lg:pt-[196px] lg:pb-[200px] md:pt-[98px] md:pb-0">
    <div className="container-xl relative xl:px-10 lg:px-8 lg:max-w-none md:max-w-3xl sm:max-w-lg sm:px-5">
      <div className="max-w-[562px] lg:max-w-md md:max-w-none md:px-16 sm:px-0">
        <h1 className="relative text-[52px] z-10 leading-denser tracking-snug font-medium lg:text-5xl md:text-4xl sm:text-[30px] sm:text-center">
          {TITLE}
        </h1>
        <p className="relative mt-4 text-lg z-10 font-book leading-snug text-white/70 md:max-w-md md:mt-3 md:text-base sm:max-w-none sm:text-center">
          {DESCRIPTION}
        </p>
        <div className="relative mt-11 z-10 flex items-center justify-left gap-x-7 gap-y-5 sm:mt-7 sm:gap-x-4 sm-xs:grid sm-xs:w-full sm-xs:grid-cols-2">
          <Button
            className="w-[190px] sm-xs:w-full"
            size="sm"
            theme="white-filled"
            {...LINKS.getStarted}
            onClick={buttonClick('get_started', { type: 'homepage' })}
          >
            Create Free Account
          </Button>
          <Button
            className="w-[190px] sm-xs:w-full"
            size="sm"
            theme="gray-outline"
            {...LINKS.contactUsCTA}
            onClick={buttonClick('contact_us', { type: 'homepage' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="absolute pointer-events-none w-full h-full left-0 top-0 z-0 md:relative md:w-[702px] md:mx-auto md:h-auto md:aspect-[1.2] sm:w-80 sm:aspect-[0.65]">
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
    </div>
  </section>
);

export default Hero;
