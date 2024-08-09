import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';

const Benefits = ({ title, description, sections }) => (
  <section className="benefits bg-gray-2 py-20 lg:py-18 md:py-16 sm:py-12">
    <Heading
      className="mx-auto text-center font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
      size="xl"
      tag="h2"
      theme="white"
    >
      {title}
    </Heading>
    <p className="mx-auto max-w-3xl mt-4 text-center text-[17px] leading-snug font-book text-gray-9 lg:mt-5 md:mt-4 md:text-base sm:mt-3">
      {description}
    </p>
    {sections.map(({ title, description, image }, index) => (
      <TextWithPicture
        key={index}
        title={title}
        description={description}
        image={image}
        theme={index % 2 === 0 ? 'imageRight' : 'imageLeft'}
      />
    ))}
  </section>
);

Benefits.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Benefits;
