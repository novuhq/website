import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const SectionWithCards = ({ title, cards }) => (
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
      <ul className="grid grid-cols-3 gap-x-8 mt-12">
        {cards.map(({ icon, title, description }, index) => (
          <li className="bg-common-card-border rounded-xl" key={index}>
            <div className="m-px w-full h-full rounded-xl p-8 bg-[#0F0F15]">
              <img src={icon} alt="" width={72} height={72} />
              <Heading className="mt-5" size="xs" tag="h3" theme="white">
                {title}
              </Heading>
              <p className="mt-3 text-gray-9 font-light leading-snug">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

SectionWithCards.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SectionWithCards;
