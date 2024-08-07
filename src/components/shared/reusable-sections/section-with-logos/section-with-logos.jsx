import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const SectionWithLogos = ({ title, description, logos }) => (
  <section className="libraries safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-md text-center md:px-8 sm:w-full sm:px-5">
      <Heading
        className="leading-tight tracking-snug font-medium lg:text-[32px] md:text-3xl"
        size="lg"
        tag="h2"
      >
        {title}
      </Heading>
      <p className="text-[17px] leading-snug font-book text-gray-9 mt-3 max-w-lg mx-auto lg:max-w-md md:text-base">
        {description}
      </p>
      <ul className="grid grid-cols-5 mt-10 px-1 lg:mt-8 md:mt-7 sm:grid-cols-2 sm:mt-8">
        {logos.map(({ title, src }, index) => (
          <li
            className={clsx('p-8 border-gray-2 lg:py-7 md:p-5 sm:px-[30px] sm:py-6', {
              'border-b': index < 5,
              'border-r': (index + 1) % 5 !== 0,
              'sm:border-r': index % 2 === 0,
              'sm:border-r-0': index % 2 !== 0,
              'sm:border-b': index < 8,
            })}
            key={index}
          >
            <img className="mx-auto" src={src} alt={title} width={128} height={44} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

SectionWithLogos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SectionWithLogos;
