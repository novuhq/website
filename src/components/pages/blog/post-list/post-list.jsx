import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';

import './post-list.css';

const getAdditionalProps = (index) => {
  switch (index) {
    // Define the element that should be stretched to the full width of the screen
    case 6:
      return {
        // exit the width of the parent container to apply the background
        className: 'col-span-12 ml-[calc(-50vw+50%)] w-screen bg-black',
        size: 'lg',
      };
    default:
      return {
        className: 'col-span-4 md:col-span-6',
        size: 'md',
      };
  }
};

const PostList = ({ items, blogPageURL }) => (
  <section className="safe-paddings mt-10 overflow-x-hidden">
    <div className="article-list-inner container-lg grid grid-cols-12 gap-x-8 gap-y-16 lg:gap-x-7 md:gap-x-5">
      {items.map((item, index) => {
        const { className, size } = getAdditionalProps(index);

        return (
          <BlogPostCard
            className={className}
            size={size}
            image={size === 'lg' ? item.imageLarge : item.imageMedium}
            author={item.author}
            blogPageURL={blogPageURL}
            key={index}
            {...item}
          />
        );
      })}
    </div>
  </section>
);

PostList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
      date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      imageMedium: PropTypes.shape({
        altText: PropTypes.string,
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.any.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      imageLarge: PropTypes.shape({
        altText: PropTypes.string,
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.any.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
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
    })
  ).isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

export default PostList;
