import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const SectionWithBigIcons = ({ title, items }) => (
  <section className="section-with-big-icons safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container grid grid-cols-12 grid-gap-x relative z-10">
      <Heading
        className="font-medium col-span-full text-center leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {title}
      </Heading>
      <ul className="col-span-10 col-start-2 px-11 mt-12 grid grid-cols-3 gap-x-14 gap-y-12 xl:px-0 lg:col-span-full lg:gap-x-8 md:mt-[58px] md:grid-cols-2 md:gap-x-5 md:gap-y-9 sm:mt-8 sm:grid-cols-1 sm:gap-y-8">
        {items.map(({ icon, title, description, linkUrl }, index) => (
          <li key={index} className="flex flex-col">
            <img
              className="w-fit h-10 sm:h-8"
              src={icon}
              alt=""
              width={40}
              height={40}
              loading="lazy"
            />
            <h3 className="mt-6 text-2xl leading-snug lg:mt-4 md:text-xl sm:mt-3.5 sm:text-lg">
              {title}
            </h3>
            <p className="mt-2 text-gray-9 font-light leading-snug sm:mt-1">{description}</p>
            <Link
              className="mt-2.5 !tracking-normal font-light leading-snug text-sm"
              theme="primary"
              to={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{title} - </span>Learn more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

SectionWithBigIcons.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SectionWithBigIcons;
