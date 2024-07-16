// import copyToClipboard from 'copy-to-clipboard';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import buttonClick from 'utils/use-landing-simple-tracking';

const TITLE = 'The Notification Framework for Developers and Product Teams';

const DESCRIPTION =
  'Fully extensible open source notifications infrastructure framework that empowers developers to provide an easy-to-use notifications platform to product teams.';

const Hero = () => (
    <section className="hero pt-[339px] pb-[180px] lg:pt-[196px] lg:pb-[200px] md:pt-[98px] md:pb-0">
      <div className="container-xl relative">
        <div className="max-w-[562px] lg:max-w-md md:max-w-none md:px-16 sm:px-0">
          <h1 className="text-[52px] leading-denser tracking-snug font-medium lg:text-5xl md:text-4xl sm:text-[30px] sm:text-center">
            {TITLE}
          </h1>
          <p className="mt-4 text-lg font-book leading-snug text-white/70 md:max-w-md md:mt-3 md:text-base sm:max-w-none sm:text-center">
            {DESCRIPTION}
          </p>
          <div className="relative mt-11 flex items-center justify-left gap-x-7 gap-y-5 sm:mt-7 sm:gap-x-4 sm-xs:grid sm-xs:w-full sm-xs:grid-cols-2">
            <Button
              className="w-[152px] sm-xs:w-full"
              size="sm"
              theme="white-filled"
              {...LINKS.getStarted}
              onClick={buttonClick('get_started', { type: 'homepage' })}
            >
              Create Account
            </Button>
            <Button
              className="w-[152px] sm-xs:w-full"
              size="sm"
              theme="white-outline"
              {...LINKS.BAM}
              onClick={buttonClick('book_a_meeting', { type: 'homepage' })}
            >
              Book a Session
            </Button>
          </div>

          <div className="absolute w-full h-full left-0 top-0 z-0 md:relative md:w-[702px] md:mx-auto md:h-auto md:aspect-[1.2] sm:w-80 sm:aspect-[0.65]">
            <StaticImage
              className="!absolute w-[1696px] h-auto left-[-188px] top-[-797px] lg:w-[1263px] lg:left-[-76px] lg:top-[-530px] md:w-[1397px] md:left-[-621px] md:top-[-456px] sm:w-[994px] sm:left-[-466px] sm:top-[-280px]"
              src="./images/illustration.png"
              alt=""
              width={1696}
              height={1552}
              loading="eager"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );

export default Hero;
