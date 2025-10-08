import clsx from 'clsx';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

function splitIntoRows(items, rows) {
  if (!items.length || rows <= 0) return [];

  const sortedItems = [...items].sort((a, b) => {
    const priorityA = a.priority ?? 0;
    const priorityB = b.priority ?? 0;

    return priorityB - priorityA;
  });

  const result = Array.from({ length: rows }, () => []);

  sortedItems.forEach((item, index) => {
    const targetRow = item.rowIndex !== undefined ? item.rowIndex : index % rows;

    if (targetRow >= 0 && targetRow < rows) {
      result[targetRow].push(item);
    }
  });

  return result;
}

const List = ({ items, ariaHidden = false }) => (
  <ul
    className="flex gap-9 group-odd:animate-logos-backward group-even:animate-logos-forward sm:gap-6"
    aria-hidden={ariaHidden}
  >
    {items.map(({ src, title }, index) => {
      if (!src || !title) return null;

      return (
        <li
          className="flex h-10 w-[180px] shrink-0 items-center justify-center md:h-8 md:w-[140px] sm:h-6 sm:w-[106px]"
          key={index}
        >
          <img className="block h-auto w-max max-w-full" src={src} alt={title} loading="lazy" />
        </li>
      );
    })}
  </ul>
);

const SectionWithLogosAnimated = ({ className, title, description, items, rows }) => {
  const logosLists = splitIntoRows(items, rows);

  return (
    <section
      className={clsx(
        'section-with-logos-animated safe-paddings mb-[200px] mt-[152px] px-8 lg:mb-36 lg:mt-28 md:my-24 sm:mb-[84px] sm:mt-[104px]',
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <Heading
          className="font-medium tracking-snug lg:text-[32px] md:text-3xl sm:mx-auto sm:max-w-60 sm:text-center sm:leading-denser"
          size="lg"
          tag="h2"
        >
          {title}
        </Heading>
        {description && (
          <p className="mt-0.5 text-lg font-light leading-normal tracking-snug text-gray-8 lg:mt-2 lg:text-base sm:mt-3 sm:text-center">
            {description}
          </p>
        )}
        <Link to="/customers" className="w-full cursor-pointer">
          {logosLists.map((list, index) => (
            <div
              className={clsx(
                'group flex w-full items-center gap-9 overflow-hidden [mask-image:linear-gradient(90deg,transparent_3%,rgba(0,0,0,.5)_20%,#000_30%,#000_70%,rgba(0,0,0,.5)_80%,transparent_97%)] sm:gap-6',
                index === 0 ? 'mt-16 lg:mt-14 md:mt-11 sm:mt-8' : 'mt-11 lg:mt-10 md:mt-8 sm:mt-7'
              )}
              key={index}
            >
              <List items={list} />
              <List items={list} ariaHidden />
            </div>
          ))}
        </Link>
      </div>
    </section>
  );
};

SectionWithLogosAnimated.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      priority: PropTypes.number,
      rowIndex: PropTypes.number,
    })
  ).isRequired,
  rows: PropTypes.number,
};

SectionWithLogosAnimated.defaultProps = {
  className: '',
  description: '',
  rows: 1,
};

export default SectionWithLogosAnimated;
