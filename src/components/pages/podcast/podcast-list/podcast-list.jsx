import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import Card from './card';

const PodcastList = ({ items }) => (
  <section className="safe-paddings">
    <div className="container-lg md:mx-auto md:max-w-[500px]">
      <Heading
        className="leading-tight md:text-[30px] sm:text-3xl"
        tag="h2"
        theme="white"
        size="md"
      >
        All episodes
      </Heading>
      <div className="mt-14 grid grid-cols-12 gap-x-8 gap-y-16 lg:gap-x-7 md:mt-10 md:flex md:flex-col md:gap-x-0 md:gap-y-10 sm:mt-9">
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
