import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';

const Benefits = ({ title, description, sections }) => (
  <section className="benefits bg-gray-2 pt-[104px] pb-44 lg:pt-24 lg:pb-34 md:pb-[104px] md:pt-18 sm:pt-12 sm:pb-14">
    <Heading
      className="mx-auto text-center font-medium leading-denser tracking-snug max-w-[812px] lg:text-[44px] md:text-5xl sm:text-3xl"
      size="xl"
      tag="h2"
      theme="white"
    >
      {title}
    </Heading>
    <p className="mx-auto max-w-[712px] mt-4 text-center text-lg leading-snug font-book text-gray-9 sm:text-base sm:mt-3.5">
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
