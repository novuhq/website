import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

// eslint-disable-next-line no-unused-vars
const Hero = ({ title, description, features, hubspotFormId }) => (
  <section className="safe-paddings relative py-48 pb-16 lg:py-36 md:pb-10 md:pt-28 sm:pt-18">
    <div className="container-lg grid-gap-x relative grid grid-cols-12 xl:px-0 lg:px-10 md:flex md:flex-col md:px-7 sm:px-4">
      <div className="col-start-1 col-end-6">
        <Heading
          className="font-bold leading-denser md:text-5xl sm:text-4xl"
          tag="h1"
          size="3xl"
          theme="white"
        >
          {title}
        </Heading>
        <p className="mt-4 text-lg text-white text-opacity-70 md:text-base">{description}</p>
        {features.length > 0 && (
          <ul className="mt-11 flex flex-col gap-y-8 pl-6 md:gap-y-2.5 md:pl-8">
            {features.map(({ title, description }, idx) => (
              <li
                className="relative before:absolute before:-left-4 before:top-3 before:h-2 before:w-2 before:-translate-x-full before:rounded-full before:bg-primary-1"
                key={idx}
              >
                <h2 className="text-2xl leading-snug md:text-xl">{title}</h2>
                <p className="mt-2 text-base font-light leading-snug text-gray-9">{description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="col-start-7 col-end-13 md:mt-20 sm:mt-16">Form</div>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  hubspotFormId: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  description: '',
  features: [],
};

export default Hero;
