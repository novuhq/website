import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ChannelLabel from 'components/pages/use-case/channel-label';
import ProviderLabel from 'components/pages/use-case/provider-label';
import Button from 'components/shared/button';
import Tooltip from 'components/shared/tooltip';

const Card = ({ channels, title, slug, providers }) => {
  const tooltipProviders =
    providers.length < 6 ? null : providers?.slice(6).map(({ name }) => name);

  return (
    <article className="rounded-xl bg-gray-gradient-3 p-5">
      <div className="flex items-center justify-between">
        <div>
          <ul className="flex gap-x-1.5">
            {channels?.map(({ name, value }, index) => (
              <li
                className="flex items-center gap-x-1.5 rounded-xl px-2 py-1 text-xs font-medium leading-none text-gray-7 shadow-[0px_1px_6px_rgba(0,0,0,0.3)]"
                key={index}
                style={{
                  background:
                    'linear-gradient(126.94deg, #262626 15.2%, rgba(20, 20, 20, 0.7) 159.26%)',
                }}
              >
                <ChannelLabel theme="gradient-shadow" icon={value}>
                  {name}
                </ChannelLabel>
              </li>
            ))}
          </ul>
          <h3 className="mt-3 text-lg leading-tight">{title}</h3>
        </div>
        <Button to={slug?.current || slug} theme="gray-outline-primary" size="xs">
          Learn
        </Button>
      </div>
      <div
        className={clsx(
          'mt-4 flex items-center gap-x-2.5 rounded border border-dashed border-gray-4 px-3 py-2',
          providers.length > 2 && 'sm:flex-col sm:items-start'
        )}
      >
        <span
          className={clsx(
            '-mt-px text-xs leading-none text-gray-9',
            providers.length > 2 && 'sm:mt-0'
          )}
        >
          Providers:
        </span>
        <ul
          className={clsx('flex flex-wrap gap-x-1.5 gap-y-2', providers.length > 2 && 'sm:mt-2.5')}
        >
          {providers?.slice(0, 5).map(({ name }, index) => (
            <ProviderLabel tagName="li" key={index}>
              {name}
            </ProviderLabel>
          ))}
          {tooltipProviders && (
            <li
              className="flex h-[22px] cursor-pointer items-center rounded border border-gray-3 px-2.5 text-xs leading-none tracking-[0.01em] text-gray-9 transition-colors duration-200 hover:bg-gray-3"
              data-tooltip-id="tooltip"
              data-tooltip-content={tooltipProviders.join(', ')}
            >
              +{tooltipProviders.length}
              <Tooltip className="max-w-[268px]" theme="gray-2" />
            </li>
          )}
        </ul>
      </div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  providers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  slug: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      current: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

export default Card;
