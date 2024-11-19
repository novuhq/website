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
    <div className="container-md px-8 sm:w-full sm:px-5">
      <Heading
        className="text-pretty text-center font-medium leading-denser tracking-snug lg:text-[32px] md:text-3xl"
        tag="h2"
        size="lg"
        theme="white"
      >
        {title}
      </Heading>
      <ul className="mt-14 grid grid-cols-3 gap-x-16 lg:mt-12 lg:max-w-none lg:gap-x-[52px] lg:px-9 md:mt-10 md:gap-x-7 md:gap-y-8 md:px-0 sm:mt-8 sm:grid-cols-1 sm:gap-7">
        {items.map(({ icon, title, description, linkText, linkUrl }, index) => (
          <li key={index} className="flex flex-col items-center">
            <img
              className="size-10 w-auto md:size-9 sm:size-8"
              src={icon}
              alt=""
              width={40}
              height={40}
            />
            <h3 className="mt-5 text-center text-2xl font-medium leading-tight tracking-snug lg:text-2xl md:mt-5 md:text-xl sm:mt-4">
              {title}
            </h3>
            <p className="mt-2 text-center text-[15px] font-book leading-snug tracking-snug text-gray-8 md:mt-2 sm:max-w-[280px]">
              {description}
            </p>
            <Link
              className="mt-2.5 w-fit text-[15px] font-book leading-snug !tracking-normal"
              theme="primary"
              to={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              withArrow
            >
              <span className="sr-only">{title} - </span>
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
