import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorWithDate from 'components/shared/author-with-date';
import CategoryLabel from 'components/shared/category-label';
import Link from 'components/shared/link';

import BlogPostCardPropTypes from '../blog-post-card-prop-types';

const BlogPostCardMedium = ({
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
  <article className={clsx('flex flex-col', className)}>
    <Link to={url} aria-label={title}>
      <GatsbyImage
        className="w-full"
        imgClassName="rounded-lg"
        image={getImage(image.localFile)}
        alt={image.alternativeText || ''}
      />
    </Link>
    <div className="mt-5 flex grow flex-col">
      <header className="space-y-3.5">
        <CategoryLabel url={blogPageURL + category.slug} theme={category.color} size="xs">
          {category.name}
        </CategoryLabel>
        <h1 className="line-clamp-2 text-[22px] font-medium leading-denser lg:text-lg 2xs:text-base">
          <Link className="align-top" to={url} theme="white">
            {title}
          </Link>
        </h1>
        <p className="line-clamp-3 text-base font-book text-gray-9">{description}</p>
      </header>
      <footer className="mt-3.5 flex items-center space-x-3 md:mt-5">
        <AuthorWithDate author={author} date={date} />
      </footer>
    </div>
  </article>
);

BlogPostCardMedium.propTypes = {
  className: PropTypes.string,
  ...BlogPostCardPropTypes,
};

BlogPostCardMedium.defaultProps = {
  className: null,
};

export default BlogPostCardMedium;
