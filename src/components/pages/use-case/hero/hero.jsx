import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const Hero = ({ title, description, channels, providers }) => (
  <div>
    <Heading className="font-medium leading-denser sm:text-3xl" size="lg" tag="h1" theme="white">
      {title}
    </Heading>
    <p className="mt-10 text-lg font-light md:text-base">{description}</p>
    <div className="mt-10">
      <div className="flex">
        <span className="text-lg font-medium">Channels:</span>
        <div className="ml-2 text-lg font-light">{channels.map(({ name }) => name).join(', ')}</div>
      </div>

      <div className="flex">
        <span className="text-lg font-medium">Providers:</span>
        <div className="ml-2 text-lg font-light">
          {providers?.map(({ provider }) => provider.name).join(', ')}
        </div>
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
      provider: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default Hero;
