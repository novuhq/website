import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import Card from './card';

const PodcastList = ({ items }) => (
  <section className="safe-paddings">
    <div className="container-lg">
      <Heading className="leading-tight" tag="h2" theme="white" size="md">
        All episodes
      </Heading>
      <div className="grid grid-cols-12 gap-x-8 gap-y-16 lg:gap-x-7 md:gap-x-5">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);

PodcastList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      episode: PropTypes.string.isRequired,
      audio: PropTypes.shape({
        src: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }).isRequired,
      slug: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PodcastList;
