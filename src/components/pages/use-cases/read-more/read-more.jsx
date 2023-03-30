import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

const ReadMore = ({ items }) => (
  <section className="safe-paddings mt-30 py-28 sm:mt-20 sm:py-20">
    <div className="container-lg">
      <h2 className="text-[40px] leading-tight">Other use cases</h2>
      <div className="mt-12 flex flex-col gap-y-4">
        {items.map(({ title, channels, slug }, index) => (
          <div
            className="flex items-center justify-between rounded-xl bg-gray-gradient-3 p-4"
            key={index}
          >
            <div>
              <h3 className="text-lg leading-tight">{title}</h3>
              <ul className="mt-3 flex gap-x-1.5">
                {channels.map(({ channel }, index) => (
                  <li
                    className="flex h-6 items-center rounded-xl border border-gray-3 px-2 text-xs font-medium leading-none text-gray-7"
                    key={index}
                  >
                    {channel.name}
                  </li>
                ))}
              </ul>
            </div>
            <Button to={slug.current} theme="gray-outline" size="xs">
              Learn
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

ReadMore.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      channels: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ReadMore;
