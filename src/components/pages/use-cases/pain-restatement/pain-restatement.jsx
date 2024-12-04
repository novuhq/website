import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const PainRestatement = ({ title, description, cards }) => (
  <section className="painRestatement safe-paddings mb-44 mt-[192px] lg:mb-[124px] lg:mt-[148px] md:mb-[88px] md:mt-[120px] sm:mb-14 sm:mt-20">
    <div className="container flex flex-col items-center">
      <Heading
        className="mx-auto text-center font-medium leading-denser tracking-snug lg:max-w-[624px] lg:text-5xl sm:text-[32px]"
        size="44"
        tag="h2"
        theme="white"
      >
        {title}
      </Heading>
      <p className="mx-auto mt-4 max-w-[800px] text-center text-lg font-book leading-snug text-gray-9 lg:mt-5 lg:max-w-[624px] md:mt-4 md:max-w-[590px] sm:mt-3 sm:text-base">
        {description}
      </p>
      <div className="mt-16 grid grid-cols-3 gap-x-10 lg:mt-14 lg:gap-x-7 md:mt-12 md:grid-cols-1 md:gap-y-6 sm:mt-8 sm:gap-y-5">
        {cards.map(({ title, description, image }, index) => (
          <div
            className="rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] lg:rounded-2xl"
            key={index}
          >
            <div className="p-8 lg:p-5">
              <div className="flex h-18 w-18 items-center justify-center lg:h-16 lg:w-16 md:h-14 md:w-14 sm:h-12 sm:w-12">
                {image}
              </div>
              <Heading
                className="mt-5 leading-snug lg:text-2xl md:mt-[18px] sm:text-xl"
                tag="h3"
                size="sm"
                theme="white"
              >
                {title}
              </Heading>
              <p className="mt-3 font-book leading-snug text-gray-9 lg:mt-2.5 sm:mt-1.5">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

PainRestatement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default PainRestatement;
