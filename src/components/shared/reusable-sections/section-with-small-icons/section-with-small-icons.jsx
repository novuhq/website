import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const SectionWithSmallIcons = ({ title, items }) => (
  <section className="section-with-small-icons safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-md md:px-8 sm:w-full sm:px-5">
      <Heading
        className="leading-tight tracking-snug font-medium text-center max-w-3xl mx-auto lg:text-[32px] lg:max-w-2xl md:text-3xl"
        size="lg"
        tag="h2"
      >
        {title}
      </Heading>
      <ul className="grid grid-cols-3 grid-rows-2 mt-12 ml-8 max-w-[928px] gap-y-12 gap-x-8 lg:mt-[44px] lg:gap-x-[52px] lg:ml-0 lg:max-w-none lg:px-9 md:px-0 md:mt-9 md:gap-x-7 md:gap-y-8 sm:grid-cols-2 sm-xs:grid-cols-1 sm:gap-y-[27px] sm:mt-8">
        {items.map(({ title, description, image }, index) => (
          <li key={index}>
            <div className="flex items-center">
              <img
                className="mr-3 md:w-5 md:h-5 md:mr-2.5"
                src={image}
                alt={title}
                width={22}
                height={22}
                loading="lazy"
              />
              <h3 className="font-medium leading-snug tracking-snug md:text-[15px]">{title}</h3>
            </div>
            <p className="text-[15px] font-light leading-snug text-gray-9 mt-2.5 md:text-sm">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

SectionWithSmallIcons.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SectionWithSmallIcons;
