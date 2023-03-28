import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import CheckIcon from './images/check.inline.svg';

const Channels = ({ className, items, numberOfItems, selectedChannels, setSelectedChannels }) => {
  const handleOnClick = (value) => () => {
    const index = selectedChannels.indexOf(value);
    if (index > -1) {
      setSelectedChannels(selectedChannels.filter((item) => item !== value));
    } else {
      setSelectedChannels([...selectedChannels, value]);
    }
  };

  return (
    <div
      className={clsx(
        'sticky top-10 h-fit max-w-[224px] rounded-[20px] border border-gray-3 py-5 px-6',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">Chanels</span>
        <span className="text-xs text-gray-8">{numberOfItems}</span>
      </div>
      <ul className="mt-4 gap-y-4">
        {items.map(({ name, value, numberOfItems }, index) => (
          <li
            className={clsx(
              'flex cursor-pointer items-center justify-between text-base text-gray-10',
              {
                'text-primary-1': selectedChannels.includes(value.current),
              }
            )}
            key={index}
            tabIndex={0}
            role="button"
            onClick={handleOnClick(value.current)}
            onKeyDown={handleOnClick(value.current)}
          >
            <div className="flex items-center gap-x-2">
              <CheckIcon
                className={clsx('h-4 text-gray-3', {
                  '!text-primary-1': selectedChannels.includes(value.current),
                })}
              />
              <span>{name}</span>
            </div>
            <span className="text-xs text-gray-8">{numberOfItems}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Channels.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      numberOfItems: PropTypes.number,
    }).isRequired
  ).isRequired,
  numberOfItems: PropTypes.number.isRequired,
  selectedChannels: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedChannels: PropTypes.func.isRequired,
};

Channels.defaultProps = {
  className: null,
};

export default Channels;
