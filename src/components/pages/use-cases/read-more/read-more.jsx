import PropTypes from 'prop-types';
import React from 'react';

import Card from 'components/pages/use-case/card';

const ReadMore = ({ items }) => (
  <section className="safe-paddings mt-28 py-[72px] sm:mt-20 sm:py-20">
    <div className="container-lg">
      <h2 className="text-[40px] leading-tight">Other use cases</h2>
      <div className="mt-12 flex flex-col gap-y-4">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);

ReadMore.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      channels: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      url: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ReadMore;
