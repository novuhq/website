/* eslint-disable react/prop-types */

import { graphql } from 'gatsby';
import React from 'react';

import Pagination from 'components/pages/blog/pagination';
import Hero from 'components/pages/podcast/hero';
import PodcastList from 'components/pages/podcast/podcast-list';
import AudioPlayer from 'components/shared/audio-player';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';
import Subscribe from 'components/shared/subscribe';
import { AudioProvider } from 'context/audio-player';

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
    items: podcasts.map(
      ({ title, enclosure: { url, type }, itunes: { episode, image }, ...props }) => ({
        title,
        episode,
        audio: {
          src: url,
          type,
        },
        slug: `/${pageContext.podcastPageUrl}/${title.toLowerCase().replace(/\s/g, '-')}/`,
        imageUrl: image,
        ...props,
      })
    ),
  };

  return (
    <AudioProvider>
      <Layout>
        <Hero />

        <div className="bg-gray-2 py-20">
          <PodcastList {...podcastList} />
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
        <div className="fixed left-0 bottom-0 z-10 w-full">
          <AudioPlayer />
        </div>
      </Layout>
    </AudioProvider>
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
          image
        }
        enclosure {
          url
          type
        }
      }
    }
  }
`;

export default PodcastPage;
