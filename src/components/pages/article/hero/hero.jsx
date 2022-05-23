import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorWithDate from 'components/shared/author-with-date';
import CategoryLabel from 'components/shared/category-label';
import Heading from 'components/shared/heading';

const Hero = ({ title, description, author, date, image, category, blogPageURL }) => (
  <section>
    <CategoryLabel url={`/${blogPageURL}/${category.slug}`} theme={category.color} size="sm">
      {category.name}
    </CategoryLabel>
    <Heading className="mt-5 leading-tight" size="lg" tag="h1" theme="white">
      {title}
    </Heading>
    <p className="mt-5 text-lg text-gray-8">{description}</p>
    <AuthorWithDate className="mt-5" author={author} date={date} />
    <GatsbyImage
      className="mt-7 w-full"
      imgClassName="rounded-xl"
      image={getImage(image.localFile)}
      alt={image.alternativeText}
      loading="eager"
    />
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.any.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.shape({
    alternativeText: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.any.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

export default Hero;
