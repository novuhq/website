import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const FeatureCards = ({ title, titleSize = '44', description, cards, columns = 3 }) => (
  <section className="feature-cards safe-paddings relative mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <StaticImage src="./images/bg-blur.svg" alt="" loading="" width={1652} height={928} />
    </div>
    <div
      className={clsx('container-lg relative z-10', {
        'max-w-[960px]': columns === 2,
      })}
    >
      <Heading
        className="mx-auto max-w-[700px] text-center font-medium leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size={titleSize}
        theme="white"
      >
        {title}
      </Heading>
      <p className="mx-auto mt-3 max-w-[710px] text-center text-lg font-[350] leading-snug text-gray-8 md:mt-2">
        {description}
      </p>
      <ul
        className={clsx(
          'mt-12 grid auto-rows-[260px] gap-8 lg:grid-cols-2 lg:gap-7 md:gap-6 sm:grid-cols-1',
          {
            'grid-cols-3': columns === 3,
            'grid-cols-2': columns === 2,
          }
        )}
      >
        {cards.map(({ title, description, linkTitle, linkUrl }, index) => (
          <li className="rounded-xl bg-common-card-border" key={index}>
            <div
              className={clsx(
                'm-px flex h-[calc(100%-2px)] w-[calc(100%-2px)] flex-col items-start rounded-xl bg-[#0F0F15] lg:p-6',
                {
                  'p-[26px]': columns === 3,
                  'p-8': columns === 2,
                }
              )}
            >
              <Heading className="lg:text-xl" size="sm" tag="h3" theme="white">
                {title}
              </Heading>
              <p className="mt-3 font-light leading-snug text-gray-8 md:mt-2">{description}</p>
              <Link
                className="mt-auto text-[13px] font-medium leading-none !tracking-normal md:mt-4 sm:mt-5"
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
