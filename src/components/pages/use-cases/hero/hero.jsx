import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import buttonClick from 'utils/use-landing-simple-tracking';

const Hero = ({ title, description, links }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);

  return (
    <section className="safe-paddings relative overflow-hidden pt-[138px] lg:pt-32 md:pt-[120px] sm:pt-[100px]">
      <div className="container relative z-10 flex flex-col items-center">
        <Heading
          className="mx-auto max-w-3xl text-center font-medium leading-denser tracking-snug lg:max-w-[717px] lg:text-6xl md:max-w-[659px] md:text-[44px] sm:text-5xl"
          tag="h1"
          theme="white"
          size="2xl"
        >
          {title}
        </Heading>
        <p className="mx-auto mt-4 max-w-[623px] text-center text-lg font-book leading-snug text-white/70 lg:max-w-xl md:mt-3.5 sm:text-base">
          {description}
        </p>
        <div className="mt-10 flex justify-center gap-x-7 lg:mt-9 md:mt-8 sm-xs:flex-col sm-xs:items-center sm-xs:gap-y-4">
          {links.map(({ text, url, target }, index) => (
            <Button
              className="-mt-px h-14 min-w-[216px] text-sm lg:h-12"
              key={index}
              theme={index === 0 ? 'white-filled' : 'gray-outline'}
              to={url}
              target={target}
              onClick={buttonClick('book_a_call', { type: 'usecase' })}
            >
              {text}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Hero;
