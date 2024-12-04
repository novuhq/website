import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TITLE = 'Check out our latest blog posts';
const BUTTON_TEXT = 'Submit Your Content';

const BlogPosts = ({ items, blogPageURL }) => (
  <section className="blog-posts safe-paddings mb-[120px] mt-40 lg:mb-20 lg:mt-[120px] md:mb-16 md:mt-[100px] sm:mb-14 sm:mt-20">
    <div className="container grid-gap-x grid grid-cols-12">
      <Heading
        className="col-span-full text-center font-medium leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {TITLE}
      </Heading>
      <div className="col-span-10 col-start-2 mt-14 grid grid-cols-12 gap-x-8 gap-y-9 lg:col-span-full lg:mt-12 lg:gap-x-7 md:mt-11 md:gap-x-5 xs:mt-8 xs:gap-y-10">
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
      <Button
        className="col-span-full mx-auto mt-14 w-fit text-center text-sm lg:mt-12 md:mt-10 md:h-11 sm:mt-8"
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
