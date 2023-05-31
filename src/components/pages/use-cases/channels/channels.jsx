import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

import CheckIcon from './images/check.inline.svg';
import ResetIcon from './images/reset.inline.svg';

const Item = ({ name, value, numberOfItems, handleOnClick, isActive }) => (
  <li
    className={clsx(
      'group flex cursor-pointer items-center justify-between py-2 text-base text-gray-10',
      {
        'text-primary-1': isActive,
      }
    )}
    tabIndex={0}
    role="button"
    onClick={handleOnClick(value)}
  >
    <div className="flex items-center gap-x-2">
      <CheckIcon
        className={clsx('h-4 text-gray-3', {
          '!text-primary-1': isActive,
        })}
      />
      <span className="text-base transition-colors duration-200 group-hover:text-primary-1">
        {name}
      </span>
    </div>
    <span className="text-xs text-gray-8">{numberOfItems}</span>
  </li>
);

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
        'sticky top-10 h-fit max-w-[224px] rounded-[20px] border border-gray-3 px-6 py-5',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">Channels</span>
        <span className="text-xs text-gray-8">{numberOfItems}</span>
      </div>
      <ul className="mt-2 flex flex-col">
        {items?.map((item, index) => {
          const isActive = selectedChannels.includes(item.value);
          return <Item handleOnClick={handleOnClick} isActive={isActive} key={index} {...item} />;
        })}
      </ul>
      {selectedChannels.length > 0 && (
        <Button
          className="mt-6 w-full space-x-2.5"
          theme="gray-outline"
          size="xs"
          onClick={() => setSelectedChannels([])}
        >
          <ResetIcon className="w-3 flex-shrink-0 text-white" />
          <span>Reset all filters</span>
        </Button>
      )}
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
