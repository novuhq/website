import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const GetInvolved = ({ title, items, bottomMargin }) => (
  <section
    className={clsx(
      'get-involved safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20',
      bottomMargin
    )}
  >
    <div className="container grid grid-cols-12 grid-gap-x z-10">
      <Heading
        className="font-medium col-span-full text-center leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {title}
      </Heading>
      <ul className="col-span-8 col-start-3 mt-14 grid grid-cols-3 gap-y-8 gap-x-16 lg:col-span-full lg:gap-x-7 lg:mt-12 md:mt-11 md:gap-x-5 sm:grid-cols-1 sm:mt-8">
        {items.map(({ icon, title, description, linkText, linkUrl }, index) => (
          <li key={index} className="flex flex-col items-center">
            <img className="w-auto h-10 md:h-9 sm:h-8" src={icon} alt="" width={40} height={40} />
            <h3 className="mt-6 text-3xl font-medium leading-tight text-center lg:text-2xl md:mt-5 md:text-xl sm:mt-4">
              {title}
            </h3>
            <p className="mt-1.5 text-gray-9 text-center font-light leading-snug md:mt-2 sm:max-w-[280px]">
              {description}
            </p>
            <Link
              className="mt-6 !tracking-normal font-medium leading-none text-[13px] md:mt-4 sm:mt-5"
              theme="primary-underline"
              to={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

GetInvolved.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  bottomMargin: PropTypes.string,
};

GetInvolved.defaultProps = {
  bottomMargin: '',
};

export default GetInvolved;
