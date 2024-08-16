import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const PainRestatement = ({ title, description, cards }) => (
  <section className="painRestatement safe-paddings mt-[192px] mb-44 lg:mt-[148px] lg:mb-[124px] md:mt-[120px] md:mb-[88px] sm:mt-20 sm:mb-14">
    <div className="container flex flex-col items-center">
      <Heading
        className="mx-auto text-center leading-denser tracking-snug font-medium lg:max-w-[624px] lg:text-5xl sm:text-[32px]"
        size="44"
        tag="h2"
        theme="white"
      >
        {title}
      </Heading>
      <p className="mx-auto mt-4 max-w-[800px] text-center text-lg leading-snug font-book text-gray-9 lg:mt-5 lg:max-w-[624px] md:mt-4 md:max-w-[590px] sm:text-base sm:mt-3">
        {description}
      </p>
      <div className="mt-16 grid grid-cols-3 gap-x-10 lg:gap-x-7 lg:mt-14 md:mt-12 md:grid-cols-1 md:gap-y-6 sm:gap-y-5 sm:mt-8">
        {cards.map(({ title, description, image }, index) => (
          <div
            className="rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] lg:rounded-2xl"
            key={index}
          >
            <div className="p-8 lg:p-5">
              <div className="w-18 h-18 flex items-center justify-center lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-12 sm:h-12">
                {image}
              </div>
              <Heading
                className="leading-snug mt-5 lg:text-2xl md:mt-[18px] sm:text-xl"
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
