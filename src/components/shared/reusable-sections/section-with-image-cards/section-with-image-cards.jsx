import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const SectionWithImageCards = ({ title, cards }) => (
  <section className="section-with-cards safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-lg">
      <Heading
        className="font-medium max-w-[960px] mx-auto text-center leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {title}
      </Heading>
      <ul className="grid grid-cols-3 gap-8 mt-11 lg:grid-cols-2 lg:gap-7 md:gap-6 sm:grid-cols-1">
        {cards.map(({ title, description, image }, index) => (
          <li className="bg-common-card-border rounded-xl" key={index}>
            <div className="m-px w-full h-full rounded-xl bg-[#0F0F15] lg:p-6">
              {image ? (
                <img
                  className="w-[384px] h-[214px] bg-[#161622] block rounded-t-xl"
                  src={image}
                  alt=""
                />
              ) : (
                <span className="w-[384px] h-[214px] bg-[#161622] block rounded-t-xl" />
              )}
              <div className="px-6 pb-7">
                <Heading
                  className="mt-5 lg:text-xl lg:mt-4 md:mt-3.5"
                  tag="h3"
                  size="xs"
                  theme="white"
                >
                  {title}
                </Heading>
                <p className="mt-3 text-gray-9 font-light leading-snug md:mt-2">{description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SectionWithImageCards;

SectionWithImageCards.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
