import clsx from 'clsx';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import Arrow from './images/arrow.inline.svg';

const Categories = ({ items, activeCategoryId, blogPageURL }) => {
  const allItems = [{ id: 'none', name: 'All articles', slug: '' }, ...items];

  const selectValue = allItems.find(({ id }) => id === activeCategoryId).slug;

  const handleLinkClick = (event) => {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute('href'), { state: { preventScroll: true } });
  };

  const handleSelectChange = ({ target: { value } }) => {
    navigate(value ? blogPageURL + value : blogPageURL, { state: { preventScroll: true } });
  };

  return (
    <div className="safe-paddings bg-gray-2 pt-10">
      <div className="container-lg">
        <ul className="scrollbar-hidden flex space-x-4 overflow-auto md:hidden">
          {allItems.map(({ id, name, slug }, index) => (
            <li key={index}>
              <Link
                className={clsx(
                  'inline-block whitespace-nowrap rounded-full py-2.5 px-4 align-top text-base font-medium leading-none',
                  activeCategoryId === id
                    ? 'bg-primary-1'
                    : 'hover:text-primary-2 transition-colors duration-200'
                )}
                to={slug ? `/${blogPageURL}/${slug}` : `/${blogPageURL}`}
                onClick={handleLinkClick}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative hidden md:block">
          <select
            className="ml-auto w-full appearance-none rounded-full bg-primary-1 py-1.5 pr-8 pl-3 text-sm font-medium outline-none"
            value={selectValue}
            onChange={handleSelectChange}
          >
            {allItems.map(({ name, slug }, index) => (
              <option value={slug} key={index}>
                {name}
              </option>
            ))}
          </select>
          <Arrow className="absolute top-1/2 right-3 w-3 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeCategoryId: PropTypes.string.isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

export default Categories;
