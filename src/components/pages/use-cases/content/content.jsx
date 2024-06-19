import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import Card from 'components/pages/use-case/card';
import Button from 'components/shared/button';
import ArrowIcon from 'images/arrow.inline.svg';

import CheckIcon from './images/check.inline.svg';
import CloseIcon from './images/close.inline.svg';

const Content = ({
  className,
  title,
  description,
  items,
  channels,
  selectedChannels,
  setSelectedChannels,
}) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOnClick = (value) => () => {
    const index = selectedChannels.indexOf(value);
    if (index > -1) {
      setSelectedChannels(selectedChannels.filter((item) => item !== value));
    } else {
      setSelectedChannels([...selectedChannels, value]);
    }
  };

  const handleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useClickAway(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  return (
    <div className={className}>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="mt-5 max-w-[590px] text-lg text-gray-8">{description}</p>

      <div className="relative mt-6 hidden md:block">
        <div className="flex gap-x-2.5">
          <Button
            className="gap-x-4"
            size="xs"
            theme={selectedChannels.length > 0 ? 'primary' : 'gray-outline'}
            onClick={handleDropdown}
          >
            Channels {selectedChannels.length > 0 && `(${selectedChannels.length})`}{' '}
            <ArrowIcon
              className={clsx('h-2.5 -rotate-90 text-white transition-transform duration-200', {
                'rotate-90 !text-black': isDropdownOpen,
              })}
            />
          </Button>
          {selectedChannels.length > 0 && (
            <Button size="xs" theme="gray-outline" onClick={() => setSelectedChannels([])}>
              <CloseIcon className="h-2 w-2 text-white" />
            </Button>
          )}
        </div>

        <AnimatePresence>
          {isDropdownOpen && (
            <LazyMotion features={domAnimation}>
              <m.ul
                className="absolute left-0 top-full mt-4 flex w-full max-w-[190px] flex-col rounded-xl bg-gray-4 px-5 py-3.5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                ref={dropdownRef}
              >
                {channels?.map(({ name, value, numberOfItems }, index) => {
                  const isActive = selectedChannels.includes(value);
                  return (
                    <li
                      className={clsx(
                        'flex cursor-pointer select-none items-center justify-between py-[7px] text-base text-gray-10',
                        {
                          'text-primary-1': isActive,
                        }
                      )}
                      key={index}
                      tabIndex={0}
                      role="button"
                      onClick={handleOnClick(value)}
                    >
                      <div className="flex items-center gap-x-2">
                        <CheckIcon
                          className={clsx('h-4 text-gray-6', {
                            '!text-primary-1': isActive,
                          })}
                        />
                        <span className="text-base">{name}</span>
                      </div>
                      <span className="text-xs text-gray-8">{numberOfItems}</span>
                    </li>
                  );
                })}
              </m.ul>
            </LazyMotion>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-12 flex flex-col gap-y-4">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

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
      slug: PropTypes.shape({
        current: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

Content.defaultProps = {
  className: null,
};

export default Content;
