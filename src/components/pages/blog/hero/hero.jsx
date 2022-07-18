import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorWithDate from 'components/shared/author-with-date';
import CategoryLabel from 'components/shared/category-label';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import bg from './images/bg.svg';

const Hero = ({ title, category, date, url, image, description, author }) => (
  <section className="safe-paddings relative overflow-hidden py-36 lg:py-32 md:pt-28 md:pb-10 sm:pt-18">
    <div className="container-lg relative z-10">
      <article className="grid grid-cols-12 items-center gap-x-8 lg:gap-x-7 md:flex md:flex-col">
        <div className="col-start-1 col-end-6 flex flex-col md:order-2 md:mt-5">
          <header>
            <CategoryLabel url={category.url} theme={category.color} size="xs">
              {category.name}
            </CategoryLabel>
            <Heading
              className="mt-4 font-medium leading-denser sm:text-3xl"
              size="lg"
              tag="h1"
              theme="white"
            >
              <Link
                className="inline-block align-top line-clamp-3 md:line-clamp-none"
                to={url}
                theme="white"
              >
                {title}
              </Link>
            </Heading>
            <p className="mt-2.5 text-gray-9 line-clamp-3 xl:line-clamp-2 md:line-clamp-3">
              {description}
            </p>
          </header>

          <footer className="mt-5 flex items-center space-x-4">
            <AuthorWithDate author={author} date={date} />
          </footer>
        </div>

        <Link className="col-start-7 col-end-13 w-full md:order-1 md:block" to={url}>
          <GatsbyImage
            className="h-full w-full"
            imgClassName="rounded-lg"
            image={getImage(image.localFile)}
            alt={image.altText || ''}
          />
        </Link>
      </article>
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.shape({
    altText: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.any.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
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
};

export default Hero;
