import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TITLE = 'Check out our latest blog posts';
const BUTTON_TEXT = 'Submit Your Content';

const BlogPosts = ({ items, blogPageURL }) => (
  <section className="blog-posts safe-paddings mt-40 mb-[120px] lg:mt-[120px] lg:mb-20 md:mt-[100px] md:mb-16 sm:mt-20 sm:mb-14">
    <div className="container grid grid-cols-12 grid-gap-x">
      <Heading
        className="font-medium col-span-full text-center leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {TITLE}
      </Heading>
      <div className="article-list-inner mt-14 col-span-10 col-start-2 grid grid-cols-3 gap-x-8 gap-y-9 lg:mt-12 lg:col-span-full lg:gap-x-7 md:grid-cols-2 md:mt-11 md:gap-x-5 sm:mt-8 sm:grid-cols-1 sm:gap-y-10">
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
        className="mt-14 text-sm text-center col-span-full w-fit mx-auto lg:mt-12 md:mt-10 md:h-11 sm:mt-8"
        to="https://github.com/novuhq/blog"
        theme="gray-outline"
        size="sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {BUTTON_TEXT}
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
