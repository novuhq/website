/* eslint-disable react/prop-types */
import clsx from 'clsx';
import { graphql } from 'gatsby';
import React from 'react';

import ArticlesList from 'components/pages/blog/articles-list';
import Categories from 'components/pages/blog/categories';
import Pagination from 'components/pages/blog/pagination';
import Hero from 'components/pages/podcast/hero';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';
import Subscribe from 'components/shared/subscribe';

const PodcastPage = (props) => {
  const {
    data: {
      allFeedPodcast: { nodes: podcasts },
    },
    pageContext,
  } = props;

  // const seo = {
  //   title: page.seo?.title,
  //   description: page.seo?.description,
  //   slug: page.slug,
  //   preventIndexing: page.seo?.preventIndexing,
  //   keywords: page.seo?.keywords,
  //   ogImage: page.seo?.ogImage?.localFile.publicURL,
  // };

  const podcastList = {
    items: podcasts.map((podcast) => ({
      ...podcast,
      slug: `/${pageContext.podcastPageURL}/${podcast.title.toLowerCase().replace(/\s/g, '-')}/`,
    })),
    podcastPageURL: pageContext.podcastPageURL,
  };
  console.log(podcastList);
  return (
    <Layout>
      <Hero />

      <div className={clsx('bg-gray-2 pb-20')}>
        {/* <ArticlesList {...articlesList} /> */}
        {pageContext.pageCount > 1 && (
          <>
            <Separator className="mt-14" size="lg" backgroundColor="gray" />
            <Pagination
              pageCount={pageContext.pageCount}
              currentPageIndex={pageContext.currentPage}
              blogPageURL={pageContext.blogPageURL}
              categoryPath={pageContext.categoryPath}
            />
          </>
        )}
      </div>

      <Subscribe />
      <Separator backgroundColor="black" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($skip: Int, $limit: Int) {
    allFeedPodcast(limit: $limit, skip: $skip) {
      nodes {
        author
        title
        link
        itunes {
          episode
        }
        enclosure {
          url
        }
      }
    }
  }
`;

export default PodcastPage;
