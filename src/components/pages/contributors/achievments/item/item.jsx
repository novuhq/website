import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const Item = ({ icon, title, description, users, theme }) => (
  <div className="col-start-2 col-end-12 flex border-b border-dashed border-gray-5 py-20 first:pt-0 last:border-none last:pb-0 lg:py-16 sm:flex-col sm:py-11">
    {icon}
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
        {users.map(({ userName, avatar, lastActivity }, index) => (
          <div
            className={clsx(
              'flex items-center rounded-xl p-5',
              theme === 'gray' ? 'bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)]' : 'bg-black'
            )}
            key={index}
          >
            <img
              className="mr-3 rounded-full"
              width={48}
              height={48}
              src={avatar}
              loading="lazy"
              alt={`${userName} avatar`}
            />
            <div className="flex flex-col">
              <span className="text-lg leading-denser text-primary-1">@{userName}</span>
              <span className="mt-1.5 text-sm leading-denser">
                Last activity: <span className="text-secondary-2">{lastActivity}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Item.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      lastActivity: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.string,
};

Item.defaultProps = {
  theme: null,
};

export default Item;
