import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const Item = ({ list, imageClassNames, starsMin, starsMax, icon, title, description, theme }) => {
  const [isShownMore, setIsShownMore] = useState(false);

  const listFiltered = list
    .filter((l) => l.totalPulls >= starsMin && l.totalPulls <= starsMax && !l.teammate)
    .sort((a, b) => moment(b.pulls[0].merged_at).toDate() - moment(a.pulls[0].merged_at).toDate());

  useMemo(() => listFiltered, [listFiltered]);

  const items = isShownMore ? listFiltered : listFiltered.slice(0, 6);

  return (
    <div className="col-start-2 col-end-12 flex border-b border-dashed border-gray-4 py-20 first:pt-0 last:border-none last:pb-0 lg:py-16 sm:flex-col sm:py-11">
      <GatsbyImage className={imageClassNames} image={getImage(icon)} alt={`${title} icon`} />
      <div className="flex w-full flex-col sm:mt-6">
        <Heading
          className="leading-tight md:text-[30px] sm:text-3xl"
          size="md"
          tag="h3"
          theme="white"
        >
          {title}
        </Heading>
        <p className="mt-4 text-lg font-light leading-snug text-gray-10 md:text-base">
          {description}
        </p>
        <div className="mt-10 grid w-full grid-cols-2 gap-8 lg:gap-7 md:mt-8 md:gap-5 sm:mt-6 sm:flex sm:flex-col sm:gap-0 sm:space-y-4">
          {items.map(({ name: userName, github: url }, index) => (
            <Link
              className={clsx(
                'group flex items-center rounded-xl p-5',
                theme === 'gray'
                  ? 'bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)]'
                  : 'bg-black'
              )}
              to={`/contributors/${url}`}
              key={index}
            >
              <img
                className="mr-3 rounded-full grayscale transition-all duration-200 group-hover:grayscale-0"
                width={48}
                height={48}
                src={`https://avatars.githubusercontent.com/${url}?v=3`}
                loading="lazy"
                alt={`${userName} avatar`}
              />
              <div className="flex flex-col">
                <span className="text-lg leading-denser">{userName || `@${url}`}</span>
                <span className="mt-1.5 text-sm font-book text-primary-1 transition-colors duration-200 group-hover:text-white">
                  View profile
                </span>
                {/* <span className="mt-1.5 text-sm leading-denser">
                  Last activity:{' '}
                  <span className="text-secondary-2">
                    {moment(moment()).diff(pulls[0].merged_at, 'day') === 0
                    ? 'today'
                    : `${moment(moment()).diff(pulls[0].merged_at, 'day')} days ago`}
                  </span>
               </span> */}
              </div>
            </Link>
          ))}
        </div>
        {!isShownMore && listFiltered.length > 6 && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link
            className="relative left-1/2 mt-8 max-w-fit -translate-x-1/2 pb-1.5 uppercase leading-none tracking-wide text-primary-1 transition-colors duration-200 hover:text-primary-1 sm:text-sm"
            type="button"
            theme="primary-underline"
            onClick={() => setIsShownMore(true)}
          >
            Show more
          </Link>
        )}{' '}
      </div>
    </div>
  );
};

Item.propTypes = {
  imageClassNames: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.any.isRequired,
    }).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      totalPulls: PropTypes.number,
      pulls: PropTypes.arrayOf(
        PropTypes.shape({
          merged_at: PropTypes.string.isRequired,
        })
      ).isRequired,
      name: PropTypes.string,
      github: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.string,
};

Item.defaultProps = {
  theme: null,
};

export default Item;
