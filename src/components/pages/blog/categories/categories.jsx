import clsx from 'clsx';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import Arrow from 'images/arrow.inline.svg';

const Categories = ({ items, activeCategoryId, blogPageURL }) => {
  const allItems = [{ id: 'none', name: 'All categories', slug: '' }, ...items];

  const selectValue = allItems.find(({ id }) => id === activeCategoryId).id;

  const animateScroll = () => {
    // eslint-disable-next-line global-require
    require('smooth-scroll')().animateScroll(document.querySelector(`.categories`), undefined, {
      speed: 500,
    });
  };

  const navigateOnScrollEnd = (href) => {
    const changeUrl = () => {
      navigate(href, {
        state: { preventScroll: true },
      });
      document.removeEventListener('scrollStop', changeUrl, false);
    };
    document.addEventListener('scrollStop', changeUrl, false);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    navigateOnScrollEnd(href);
    animateScroll();
  };

  const handleSelectChange = (event) => {
    const categoryId = event.currentTarget.value;

    if (categoryId === 'none') {
      navigateOnScrollEnd(blogPageURL);
      animateScroll();
      return;
    }

    const categorySlug = items.find((item) => item.id === categoryId).slug;
    navigateOnScrollEnd(`${blogPageURL}${categorySlug}/`);
    animateScroll();
  };

  return (
    <div className="categories safe-paddings bg-gray-2 pt-10">
      <div className="container-lg">
        <ul className="scrollbar-hidden relative flex space-x-10 overflow-auto after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-4 md:hidden">
          {allItems.map(({ id, name, slug }, index) => (
            <li key={index}>
              <Link
                className={clsx(
                  'relative inline-block whitespace-nowrap rounded-full py-4 align-top text-xs font-medium uppercase leading-none',
                  activeCategoryId === id
                    ? 'text-primary-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-primary-1'
                    : 'transition-colors duration-200 hover:text-primary-1'
                )}
                to={slug ? `${blogPageURL}${slug}/` : blogPageURL}
                onClick={handleLinkClick}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative hidden after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-4 md:block">
          <select
            className="ml-auto w-full appearance-none rounded-full bg-gray-2 py-4 pr-8 text-base font-medium uppercase outline-none"
            value={selectValue}
            onChange={handleSelectChange}
          >
            {allItems.map(({ id, name }, index) => (
              <option value={id} key={index}>
                {name}
              </option>
            ))}
          </select>
          <Arrow className="absolute right-3 top-1/2 h-auto w-2.5 -translate-y-1/2 -rotate-90 text-white" />
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
