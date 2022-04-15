import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorWithDate from 'components/shared/author-with-date';
import CategoryLabel from 'components/shared/category-label';
import Link from 'components/shared/link';

import ArticleCardPropTypes from '../article-card-prop-types';

const ArticleCardLarge = ({
  className,
  title,
  category,
  createdAt,
  slug,
  cover,
  description,
  author,
  blogPageURL,
}) => (
  <article className={clsx('grid-gap grid grid-cols-2 lg:block', className)}>
    <Link className="lg:block" to={slug}>
      <GatsbyImage
        className="h-full"
        imgClassName="rounded-lg"
        image={getImage(cover.localFile)}
        alt={cover.alternativeText || ''}
      />
    </Link>
    <div className="flex flex-col justify-between lg:mt-5">
      <header>
        <CategoryLabel url={`/${blogPageURL}/${category.slug}`} theme={category.color}>
          {category.name}
        </CategoryLabel>
        <h1 className="mt-4 text-4xl font-bold leading-tight">
          <Link
            className="line-clamp-2 md:line-clamp-none inline-block align-top"
            to={slug}
            theme="black"
          >
            {title}
          </Link>
        </h1>
        <p className="line-clamp-3 xl:line-clamp-1 md:line-clamp-none mt-2.5 text-gray-8">
          {description}
        </p>
      </header>
      <footer className="mt-5 flex items-center space-x-4">
        <AuthorWithDate author={author} date={createdAt} />
      </footer>
    </div>
  </article>
);

ArticleCardLarge.propTypes = {
  className: PropTypes.string,
  ...ArticleCardPropTypes,
};

ArticleCardLarge.defaultProps = {
  className: null,
};

export default ArticleCardLarge;
