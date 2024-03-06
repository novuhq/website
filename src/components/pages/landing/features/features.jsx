import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const Features = ({ title, description, features }) => (
  <section className="safe-paddings pb-40 pt-20">
    <div className="container-lg flex flex-col items-center">
      <Heading
        className="max-w-[550px] text-center leading-tight sm:text-3xl"
        tag="h2"
        size="xl"
        theme="white"
      >
        {title}
      </Heading>
      <p className="mt-5 max-w-[800px] text-center text-lg font-light leading-snug text-gray-9 md:text-base">
        {description}
      </p>
      {features.length > 0 && (
        <ul className="mt-10 grid grid-cols-3 gap-8 lg:gap-7 md:block md:max-w-[712px] md:gap-0 md:space-y-7 sm:mt-9 sm:space-y-5">
          {features.map(({ title, description, linkText, linkUrl }, idx) => (
            <li
              className="flex flex-col items-start rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] p-8 lg:rounded-2xl lg:p-5"
              key={idx}
            >
              <Heading
                className="leading-snug lg:text-2xl md:text-3xl sm:text-2xl"
                tag="h3"
                size="sm"
                theme="white"
              >
                {title}
              </Heading>
              <p className="my-6 font-book leading-snug text-gray-9 sm:mt-2.5">{description}</p>
              <Link className="mt-auto uppercase" theme="primary-underline" size="sm" to={linkUrl}>
                {linkText}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  </section>
);

Features.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      linkText: PropTypes.string,
      linkUrl: PropTypes.string,
    })
  ),
};

Features.defaultProps = {
  description: '',
  features: [],
};

export default Features;
