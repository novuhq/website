import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TITLE = 'Check out our latest blog posts';

const BlogPosts = ({ items, blogPageURL }) => (
  <section className="blog-posts safe-paddings mt-40 mb-[120px]">
    <div className="container grid grid-cols-12 grid-gap-x">
      <Heading
        className="font-medium col-span-full text-[44px] text-center leading-tight"
        tag="h2"
        theme="white"
      >
        {TITLE}
      </Heading>
      <div className="article-list-inner mt-14 col-span-10 col-start-2 grid grid-cols-3 gap-x-8 xl:mt-8 lg:grid-cols-2 lg:gap-x-7 md:gap-x-5">
        {items.map((item, index) => (
          <BlogPostCard
            className={clsx()}
            {...item}
            size="md"
            blogPageURL={blogPageURL}
            key={index}
          />
        ))}
      </div>
      <Button
        className="mt-14 text-sm text-center col-span-full w-fit mx-auto"
        theme="gray-outline"
        size="sm"
      >
        Submit Your Content
      </Button>
    </div>
  </section>
);

BlogPosts.propTypes = {
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

export default BlogPosts;
