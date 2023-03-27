import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

const Content = ({ className, title, description, items }) => (
  <div className={clsx('', className)}>
    <h1 className="text-5xl font-bold">{title}</h1>
    <p className="mt-5 max-w-[590px] text-lg text-gray-8">{description}</p>

    <div className="mt-12 flex flex-col gap-y-4">
      {items.map(({ title, channels, url }, index) => (
        <div
          className="flex items-center justify-between rounded-xl bg-gray-gradient-3 p-4"
          key={index}
        >
          <div>
            <h3 className="text-lg leading-tight">{title}</h3>
            <ul className="mt-3 flex gap-x-1.5">
              {channels.map(({ name }, index) => (
                <li
                  className="flex h-6 items-center rounded-xl border border-gray-3 px-2 text-xs font-medium leading-none text-gray-7"
                  key={index}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <Button to={url} theme="gray-outline" size="xs">
            Learn
          </Button>
        </div>
      ))}
    </div>
  </div>
);

Content.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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

Content.defaultProps = {
  className: null,
};

export default Content;
