import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ArticletCard from 'components/shared/article-card';

const wrapperItemsClassNames =
  'container-lg grid grid-cols-12 gap-x-10 gap-y-16 sm:block sm:space-y-10';

const ArticlesList = ({ items, blogPageURL }) => (
  <section className="safe-paddings mt-10">
    <div className="sm:hidden">
      <div className={clsx(wrapperItemsClassNames)}>
        {items.slice(0, 6).map((item, index) => (
          <ArticletCard
            {...item}
            className="col-span-4 md:col-span-6"
            size="md"
            image={item.imageMedium}
            author={item.author}
            blogPageURL={blogPageURL}
            key={index}
          />
        ))}
      </div>

      {!!items.slice(6, 7).length && (
        <div className="mt-28 bg-black">
          <div className={clsx(wrapperItemsClassNames)}>
            {items.slice(6, 7).map((item, index) => (
              <ArticletCard
                {...item}
                className="col-span-12 my-8 lg:my-8"
                size="lg"
                image={item.imageLarge}
                author={item.author}
                blogPageURL={blogPageURL}
                key={index}
              />
            ))}
          </div>
        </div>
      )}

      {!!items.slice(7, items.length).length && (
        <div className={clsx('mt-28 sm:mt-0', wrapperItemsClassNames)}>
          {items.slice(7, items.length).map((item, index) => (
            <ArticletCard
              {...item}
              className="col-span-4 md:col-span-6"
              size="md"
              image={item.imageMedium}
              author={item.author}
              blogPageURL={blogPageURL}
              key={index}
            />
          ))}
        </div>
      )}
    </div>

    <div className={clsx('hidden', wrapperItemsClassNames)}>
      {items.map((item, index) => (
        <ArticletCard
          {...item}
          className="sm:mx-auto sm:max-w-[384px]"
          size="md"
          image={item.imageMedium}
          author={item.author}
          blogPageURL={blogPageURL}
          key={index}
        />
      ))}
    </div>
  </section>
);

ArticlesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
      date: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      imageMedium: PropTypes.shape({
        alternativeText: PropTypes.string,
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.any.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      imageLarge: PropTypes.shape({
        alternativeText: PropTypes.string,
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.any.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
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
    })
  ).isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

export default ArticlesList;
