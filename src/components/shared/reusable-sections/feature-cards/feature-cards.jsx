import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const FeatureCards = ({ title, description, cards, columns = 3 }) => (
  <section className="feature-cards safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div
      className={clsx('container-lg', {
        'max-w-[960px]': columns === 2,
      })}
    >
      <Heading
        className="font-medium max-w-[500px] mx-auto text-center leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {title}
      </Heading>
      <p className="mt-3 max-w-[692px] mx-auto text-gray-9 font-[350] leading-snug md:mt-2 text-center text-lg">
        {description}
      </p>
      <ul
        className={clsx(
          'grid gap-8 mt-12 lg:grid-cols-2 lg:gap-7 md:gap-6 sm:grid-cols-1 auto-rows-[260px]',
          {
            'grid-cols-3': columns === 3,
            'grid-cols-2': columns === 2,
          }
        )}
      >
        {cards.map(({ title, description, linkTitle, linkUrl }, index) => (
          <li className="bg-common-card-border rounded-xl" key={index}>
            <div className="m-px w-full h-full rounded-xl p-8 bg-[#0F0F15] lg:p-6 flex flex-col items-start">
              <Heading className="lg:text-xl" size="xs" tag="h3" theme="white">
                {title}
              </Heading>
              <p className="mt-3 text-gray-9 font-light leading-snug md:mt-2">{description}</p>
              <Link
                className="mt-auto !tracking-normal font-medium leading-none text-[13px] md:mt-4 sm:mt-5"
                theme="primary-underline"
                to={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkTitle}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

FeatureCards.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeatureCards;