import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import CategoryLabel from 'components/shared/category-label';
import Heading from 'components/shared/heading';

const Hero = ({
  title,
  description,
  author: { name: authorName, avatar: authorPhoto },
  createdAt,
  image,
  category,
  blogPageURL,
}) => (
  <section>
    <CategoryLabel url={`/${blogPageURL}/${category.slug}`} theme={category.color} size="sm">
      {category.name}
    </CategoryLabel>
    <Heading className="mt-5 text-[40px] leading-tight" size="md" tag="h1" theme="white">
      {title}
    </Heading>
    <p className="mt-5 text-lg font-book text-gray-8">{description}</p>
    <div className="mt-5 flex items-center">
      <GatsbyImage
        imgClassName="rounded-full"
        image={getImage(authorPhoto.localFile)}
        alt={authorPhoto.alternativeText || authorName}
        loading="eager"
      />
      <div className="ml-4 flex  items-center">
        <span className="text-sm">{authorName}</span>
        <span className="mx-3.5 block h-5 w-px bg-gray-6" />
        <span className="text-sm text-gray-6">{createdAt}</span>
      </div>
    </div>
    <GatsbyImage
      className="mt-7"
      imgClassName="rounded-xl"
      image={getImage(image.localFile)}
      alt={image.alternativeText || authorName}
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
  createdAt: PropTypes.string.isRequired,
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
