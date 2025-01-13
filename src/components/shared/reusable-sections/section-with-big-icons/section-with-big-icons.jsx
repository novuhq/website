import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const SectionWithBigIcons = ({ className, title, items, isCentered }) => (
  <section
    className={clsx(
      'section-with-big-icons safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20',
      className
    )}
  >
    <div className="container-md px-8 sm:w-full sm:px-5">
      <Heading
        className="text-center font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="lg"
        theme="white"
      >
        {title}
      </Heading>
      <ul className="grid-rows-auto mt-14 grid grid-cols-3 gap-x-16 gap-y-12 lg:mt-12 lg:max-w-none lg:gap-x-9 lg:px-9 md:mt-10 md:gap-x-7 md:gap-y-8 md:px-0 sm:mt-8 sm:grid-cols-2 sm:gap-7 sm-xs:grid-cols-1">
        {items.map(({ icon, title, description, linkUrl, linkText }, index) => (
          <li key={index} className={clsx('flex flex-col', isCentered && 'items-center')}>
            <img
              className="h-10 w-fit sm:h-8"
              src={icon}
              alt=""
              width={40}
              height={40}
              loading="lazy"
            />
            <h3 className="mt-5 text-xl leading-denser tracking-snug lg:mt-4 md:text-xl sm:mt-3.5 sm:text-lg">
              {title}
            </h3>
            <p className="mt-2 text-[15px] font-light leading-snug tracking-snug text-gray-8">
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
              {linkText || (
                <>
                  <span className="sr-only">{title} - </span>Learn more
                </>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

SectionWithBigIcons.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
      linkText: PropTypes.string,
    })
  ).isRequired,
  isCentered: PropTypes.bool,
};

SectionWithBigIcons.defaultProps = {
  className: '',
  isCentered: false,
};

export default SectionWithBigIcons;
