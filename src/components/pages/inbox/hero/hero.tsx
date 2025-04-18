import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import { StaticImage } from 'gatsby-plugin-image';

const Hero = ({ sectionOffsets, title, description, button }) => {
  return (
    <section
      className={clsx(
        'inbox safe-paddings mt-[140px] pb-3.5 text-white lg:mt-36 md:mt-[60px] sm:mt-14',
        sectionOffsets
      )}
    >
      <div className="container-lg flex items-center gap-x-[85px] sm:flex-col">
        <div className="flex items-center justify-center pl-6 md:pl-0 sm:order-last">
          <div className="relative w-full max-w-[628px] shrink-0 lg:w-[531px] md:max-w-[380px] sm:w-full sm:max-w-[440px]">
            <div className={clsx('relative h-full w-full sm:left-1/2 sm:-translate-x-1/2')}>
              <StaticImage
                className="z-10"
                src="./images/dark-novu-inbox.png"
                alt=""
                width={619}
                height={648}
                loading="eager"
              />
              <div
                className="pointer-events-none absolute left-[13.3757%] top-[-23.3687%] z-0 h-[68.2852%] w-[39.8089%] rotate-90 bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)] blur-[22px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-[4.5523%] top-[-23.3687%] z-0 h-[91.9575%] w-[76.1146%] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-[-17.5159%] top-[-44.006%] z-0 h-[154.7799%] w-[131.8471%] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)]"
                aria-hidden
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-[480px] sm:mb-6 sm:max-w-lg sm:pl-0 sm:text-center">
          <Heading
            className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
            tag="h1"
            size="xl"
            theme="white"
            asHTML={false}
          >
            {title}
          </Heading>
          <p className="mt-5 text-lg tracking-snug text-gray-8 md:text-sm">{description}</p>
          {button && (
            <Button
              className="mt-8"
              theme="gray-outline"
              size="sm"
              to={button.link}
              rel={button.rel}
              target={button.target}
            >
              {button.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  sectionOffsets: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
};

Hero.defaultProps = {
  sectionOffsets: '',
  button: null,
};

export default Hero;
