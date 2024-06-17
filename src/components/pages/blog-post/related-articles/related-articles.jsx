import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';

const RelatedArticles = ({ items, blogPageURL }) => (
  <section className="safe-paddings mt-30 bg-gray-2 py-28 sm:mt-20 sm:py-20">
    <div className="container-lg">
      <h2 className="text-[40px] leading-tight">Related Posts</h2>
      <div className="mt-14 grid grid-cols-12 gap-x-8 gap-y-9 xl:mt-8 lg:gap-x-7 lg:gap-y-10 md:gap-x-5">
        {items.map((item, index) => (
          <BlogPostCard
            className="col-span-4 md:col-span-6 xs:col-span-full"
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
      url: PropTypes.string.isRequired,
      category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
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
    })
  ).isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

export default RelatedArticles;
