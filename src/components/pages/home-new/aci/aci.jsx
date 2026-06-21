import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

import heroIllustrationMobile from './images/image-mobile.png';
import heroIllustration from './images/image.png';

const ACI = ({ label, title, description, button }) => (
  <section className="integrations-hero safe-paddings overflow-hidden pb-[196px] pt-40 xl:pt-[210px] lg:pb-[126px] md:pb-0 md:pt-0">
    <div className="mx-auto w-full max-w-[1216px] px-8 sm:px-5">
      <div className="grid grid-cols-2 gap-[132px] xl:gap-12 lg:gap-6 md:grid-cols-1 md:gap-0">
        <div className="relative z-10 order-2 flex flex-col items-start gap-7 md:order-1 md:items-center md:gap-8">
          <div className="flex flex-col items-start md:items-center">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 bg-primary-1" aria-hidden />
              <span className="text-sm font-normal uppercase leading-none text-[#CCF7FF]">
                {label}
              </span>
            </div>
            <h2 className="mt-5 text-[48px] font-medium leading-denser tracking-tighter lg:text-[40px] md:text-center md:text-[32px] sm:text-[28px]">
              {title}
            </h2>
            <p className="mt-4 max-w-[524px] text-base font-book leading-normal tracking-tighter text-gray-8 md:max-w-[480px] md:text-center md:text-lg sm:text-base">
              {description}
            </p>
          </div>
          <Button
            className="!px-5 sm:h-10 sm:text-xs"
            size="sm"
            theme="white-filled"
            to={button.link}
          >
            {button.label}
          </Button>
        </div>
        <div
          className="pointer-events-none relative order-1 min-h-[520px] w-full md:order-2 md:-mt-60 md:min-h-0 sm:-mt-[100px]"
          aria-hidden
        >
          <div className="desktop absolute left-1/2 top-1/2 aspect-[1073/1021] w-[974px] -translate-x-[calc(50%+100px)] -translate-y-[calc(50%+80px)] xl:w-[1000px] lg:w-[914px] md:hidden">
            <img
              src={heroIllustration}
              alt=""
              className="h-full w-full object-cover object-center"
              width={2146}
              height={2042}
              loading="lazy"
            />
          </div>
          <div className="mobile mx-auto hidden aspect-[768/787] w-full max-w-[768px] md:block sm:w-[109%] sm:max-w-[460px]">
            <img
              src={heroIllustrationMobile}
              alt=""
              className=""
              width={1536}
              height={1574}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

ACI.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ACI;
