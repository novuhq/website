import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorWithDate from 'components/shared/author-with-date';
import CategoryLabel from 'components/shared/category-label';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import BlogPostCardPropTypes from '../blog-post-card-prop-types';

const BlogPostCardLarge = ({
  className,
  title,
  category,
  date,
  url,
  image,
  description,
  author,
  blogPageURL,
}) => (
  <article className={clsx('safe-paddings py-28 md:py-10', className)}>
    <div className="container-lg grid grid-cols-12 items-center gap-x-8 lg:gap-x-7 md:flex md:flex-col">
      <div className="col-start-1 col-end-6 flex flex-col md:order-2 md:mt-5">
        <header>
          <CategoryLabel url={blogPageURL + category.slug} theme={category.color} size="xs">
            {category.name}
          </CategoryLabel>
          <Heading
            className="mt-4 line-clamp-3 font-medium leading-denser md:line-clamp-none sm:text-3xl"
            size="lg"
            tag="h1"
            theme="white"
          >
            <Link className="align-top" to={url} theme="white">
              {title}
            </Link>
          </Heading>
          <p className="mt-2.5 line-clamp-3 text-gray-9 xl:line-clamp-2 md:line-clamp-3">
            {description}
          </p>
        </header>
        <footer className="mt-5 flex items-center space-x-4">
          <AuthorWithDate author={author} date={date} />
        </footer>
      </div>

      <Link
        className="col-start-7 col-end-13 w-full md:order-1 md:block"
        to={url}
        aria-label={title}
      >
        <GatsbyImage
          className="h-full w-full"
          imgClassName="rounded-lg"
          image={getImage(image.localFile)}
          alt={image.alternativeText || ''}
        />
      </Link>
    </div>
  </article>
);

BlogPostCardLarge.propTypes = {
  className: PropTypes.string,
  ...BlogPostCardPropTypes,
};

BlogPostCardLarge.defaultProps = {
  className: null,
};

export default BlogPostCardLarge;
