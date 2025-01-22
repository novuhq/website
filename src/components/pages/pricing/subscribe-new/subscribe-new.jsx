import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import CtaWithSubscribeForm from 'components/shared/cta-with-subscribe-form';
import Heading from 'components/shared/heading';

import background from './images/bg.png';

const SubscribeNew = ({ className, title, description }) => (
  <section
    className={clsx(
      'subscribe-form safe-paddings relative mb-[250px] mt-[177px] lg:mt-[192px] md:mb-[258px] md:mt-[234px] sm:mt-[152px]',
      className
    )}
  >
    <div className="container-sm relative md:px-8 sm:w-full sm:px-5">
      <div className="relative z-10 flex flex-col items-center">
        <Heading
          className="max-w-4xl text-center font-medium leading-denser tracking-snug md:text-[40px]"
          size="44"
          tag="h2"
        >
          {title}
        </Heading>
        <p
          className="mt-3 max-w-[464px] text-center text-lg font-book tracking-snug text-gray-8 md:max-w-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <CtaWithSubscribeForm className="mt-[31px] h-12 max-w-[392px] bg-black" />
      </div>
      <img
        className="pointer-events-none absolute bottom-[-435px] left-[-357px] z-0 max-w-none md:left-1/2 md:-translate-x-1/2"
        src={background}
        width={1523}
        height={1012}
        alt=""
        loading="lazy"
        aria-hidden
      />
    </div>
  </section>
);

SubscribeNew.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

SubscribeNew.defaultProps = {
  className: '',
};

export default SubscribeNew;
