import PropTypes from 'prop-types';
import React from 'react';

import ArticleCard from 'components/shared/article-card';

const RelatedArticles = ({ items, blogPageURL }) => (
  <section className="safe-paddings mt-30 bg-gray-2 py-28 sm:mt-20 sm:py-20">
    <div className="container">
      <h2 className="text-[40px] leading-tight">Related Posts</h2>
      <div className="grid-gap-x mt-14 grid grid-cols-3 xl:mt-8 lg:grid-cols-2 md:block md:space-y-10">
        {items.map((item, index) => (
          <ArticleCard
            className="lg:last:hidden md:last:block"
            {...item}
            size="md"
            blogPageURL={blogPageURL}
            key={index}
          />
        ))}
      </div>
    </div>
  </section>
);

RelatedArticles.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
      date: PropTypes.string.isRequired,
      image: PropTypes.shape({
        alternativeText: PropTypes.string,
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.any.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
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

export default RelatedArticles;
