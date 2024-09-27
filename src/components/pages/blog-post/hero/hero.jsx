import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorWithDate from 'components/shared/author-with-date';
import CategoryLabel from 'components/shared/category-label';
import Heading from 'components/shared/heading';
import { getFormattedDate } from 'utils/get-formatted-date';

const Hero = ({ className, title, description, author, date, image, category, blogPageURL }) => {
  const formattedDate = getFormattedDate(date);
  return (
    <section className={className}>
      <div className="flex items-center gap-x-[19px]">
        <CategoryLabel url={blogPageURL + category.slug} theme={category.color} size="sm">
          {category.name}
        </CategoryLabel>
        <span className="text-sm leading-none uppercase text-gray-8 relative before:absolute before:left-[-11px] before:top-1/2 before:-translate-y-1/2 before:h-[3px] before:w-[3px] before:rounded-full before:bg-[#2E3038] md:hidden">
          {formattedDate}
        </span>
      </div>
      <Heading className="mt-5 leading-tight" size="lg" tag="h1" theme="white">
        {title}
      </Heading>
      <p className="mt-5 text-lg text-gray-9">{description}</p>
      <AuthorWithDate className="mt-5 hidden md:flex" author={author} date={date} />
      <GatsbyImage
        className="mt-7 w-full"
        imgClassName="rounded-xl"
        image={getImage(image.localFile)}
        alt={image.altText}
        loading="eager"
      />
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      altText: PropTypes.string,
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
    altText: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.any.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  className: '',
};

export default Hero;
