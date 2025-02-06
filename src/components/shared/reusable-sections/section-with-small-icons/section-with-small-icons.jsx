import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import OutroText from 'components/shared/outro-text';

const SectionWithSmallIcons = ({
  title,
  description,
  descriptionClassName,
  items,
  hasOutroText,
}) => (
  <section className="section-with-small-icons safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-md px-8 sm:w-full sm:px-5">
      <Heading
        className="mx-auto max-w-3xl text-center font-medium leading-denser tracking-snug lg:max-w-2xl lg:text-[32px] md:text-3xl"
        size="lg"
        tag="h2"
      >
        {title}
      </Heading>
      {description && (
        <p
          className={clsx(
            'mt-5 text-center text-[18px] font-light leading-snug tracking-snug text-gray-8 md:text-sm',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
      <ul className="mt-[58px] grid grid-cols-3 grid-rows-2 gap-x-16 gap-y-[28px] lg:mt-12 lg:max-w-none lg:gap-x-[52px] lg:px-9 md:mt-10 md:gap-x-7 md:gap-y-8 md:px-0 sm:mt-8 sm:grid-cols-2 sm:gap-7 sm-xs:grid-cols-1">
        {items.map(({ title, description, image }, index) => (
          <li key={index}>
            <div className="flex items-center">
              <img
                className="mr-2.5"
                src={image}
                alt={title}
                width={20}
                height={20}
                loading="lazy"
              />
              <h3 className="font-medium leading-denser tracking-snug md:text-[15px]">{title}</h3>
            </div>
            <p className="mt-2.5 text-[15px] font-light leading-snug tracking-snug text-gray-8 md:text-sm">
              {description}
            </p>
          </li>
        ))}
      </ul>
      {hasOutroText && <OutroText />}
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
  hasOutroText: PropTypes.bool,
  description: PropTypes.string,
  descriptionClassName: PropTypes.string,
};

SectionWithSmallIcons.defaultProps = {
  hasOutroText: false,
  description: null,
  descriptionClassName: null,
};

export default SectionWithSmallIcons;
