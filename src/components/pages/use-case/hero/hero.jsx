import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import ChannelLabel from '../channel-label';
import ProviderLabel from '../provider-label';

const Hero = ({ title, description, channels, providers }) => (
  <div>
    <Heading className="font-medium leading-denser sm:text-3xl" size="lg" tag="h1" theme="white">
      {title}
    </Heading>
    <p className="mt-3 text-lg font-light md:text-base">{description}</p>
    <div className="mt-6">
      <div className="flex gap-x-3">
        <span className="text-sm font-light text-gray-10">Channels:</span>
        <ul className="flex flex-wrap gap-2.5 text-lg font-light">
          {channels?.map(({ name, value }, index) => (
            <li key={name} className="flex items-center gap-x-1.5">
              <ChannelLabel icon={value}>
                {name}
                {index < channels.length - 1 && `,`}
              </ChannelLabel>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex gap-x-3">
        <span className="text-sm font-light text-gray-10">Providers:</span>
        <ul className="flex flex-wrap gap-x-1.5 gap-y-2">
          {providers.map(({ name }, index) => (
            <ProviderLabel key={index} tagName="li">
              {name}
            </ProviderLabel>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
};

export default Hero;
