import PropTypes from 'prop-types';
import React from 'react';

import ArticletCard from 'components/shared/article-card';

const ArticlesList = ({ items, blogPageURL }) => (
  <section className="safe-paddings bg-gray-2 pt-10">
    <div className="container-lg grid grid-cols-12 gap-x-10 gap-y-16 md:block md:space-y-4">
      {items.slice(0, 6).map((item, index) => (
        <ArticletCard
          {...item}
          className="col-span-4 lg:col-span-6 md:mx-auto md:min-h-0 md:max-w-[384px]"
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
        <div className="container-lg grid grid-cols-12 gap-x-10 gap-y-16 md:block md:space-y-4">
          {items.slice(6, 7).map((item, index) => (
            <ArticletCard
              {...item}
              className="col-span-12 my-8 lg:my-8 md:hidden"
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
      <div className="container-lg mt-28 grid grid-cols-12 gap-x-10 gap-y-16 md:block md:space-y-4">
        {items.slice(7, items.length).map((item, index) => (
          <ArticletCard
            {...item}
            className="col-span-4 min-h-[478px] xl:min-h-[450px] lg:col-span-6 md:mx-auto md:min-h-0 md:max-w-[384px]"
            size="md"
            image={item.imageMedium}
            author={item.author}
            blogPageURL={blogPageURL}
            key={index}
          />
        ))}
      </div>
    )}
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
