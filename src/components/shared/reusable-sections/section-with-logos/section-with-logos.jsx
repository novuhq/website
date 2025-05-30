import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const SectionWithLogos = ({ className, title, description, logos, containerSize = 'md' }) => {
  const gridCols = Math.round(logos.length / 2);
  return (
    <section className={clsx('section-with-logos safe-paddings', className)}>
      <div
        className={clsx('flex flex-col items-center text-center md:px-8 sm:w-full sm:px-5', {
          'container-md': containerSize === 'md',
          'container-lg': containerSize === 'lg',
        })}
      >
        <Heading
          className="text-balance font-medium leading-denser tracking-snug lg:text-[32px] md:text-3xl"
          size="lg"
          tag="h2"
        >
          {title}
        </Heading>
        <p
          className={clsx(
            'mx-auto mt-3 text-balance text-lg font-book tracking-snug text-gray-8 md:text-base',
            {
              'max-w-lg': containerSize === 'md',
              'max-w-[580px]': containerSize === 'lg',
            }
          )}
        >
          {description}
        </p>
        <ul
          className={clsx('mt-11 grid lg:mt-10 md:mt-8 sm:mt-7 sm:grid-cols-2', {
            'grid-cols-1': gridCols === 1,
            'grid-cols-2': gridCols === 2,
            'grid-cols-3': gridCols === 3,
            'grid-cols-4': gridCols === 4,
            'grid-cols-5': gridCols === 5,
            'grid-cols-6': gridCols === 6,
            'grid-cols-7': gridCols === 7,
            'grid-cols-8': gridCols === 8,
          })}
        >
          {logos.map(({ title, src }, index) => (
            <li
              className={clsx('border-gray-2 p-8 lg:py-7 md:p-5 sm:px-[30px] sm:py-6', {
                'border-b': index < gridCols,
                'border-r': (index + 1) % gridCols !== 0,
                'sm:border-r': index % 2 === 0,
                'sm:border-r-0': index % 2 !== 0,
                'sm:border-b': index < 8,
              })}
              key={index}
            >
              <img
                className="mx-auto"
                src={src}
                alt={title}
                width={128}
                height={44}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

SectionWithLogos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

SectionWithLogos.defaultProps = {
  className: 'mt-40 lg:mt-30 md:mt-[100px] sm:mt-20',
};

export default SectionWithLogos;
