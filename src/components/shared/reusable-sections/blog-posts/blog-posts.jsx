import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const BlogPosts = ({ title, buttonText, buttonUrl, items, blogPageURL }) => (
  <section className="blog-posts relative safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container relative z-10 grid grid-cols-12 grid-gap-x">
      <Heading
        className="font-medium col-span-full text-center leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {title}
      </Heading>
      <div className="mt-14 col-span-10 col-start-2 grid grid-cols-12 gap-x-8 gap-y-9 lg:mt-12 lg:col-span-full lg:gap-x-7 md:mt-11 md:gap-x-5 xs:mt-8 xs:gap-y-10">
        {items?.map((item, index) => (
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
        className="mt-14 text-sm text-center col-span-full w-fit mx-auto lg:mt-12 md:mt-10 md:h-11 sm:mt-8"
        to={buttonUrl}
        theme="gray-outline"
        size="sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </Button>
    </div>
    <div
      className="absolute w-[1472px] h-[679px] bg-[linear-gradient(-81.41deg,#F575E0_21.93%,rgba(117,153,245,0.7)_84.89%)] left-1/2 -top-7 -translate-x-1/2 pointer-events-none rounded-[50%] opacity-5 blur-3xl z-0"
      aria-hidden
    />
  </section>
);

BlogPosts.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
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
