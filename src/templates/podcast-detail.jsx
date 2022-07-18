/* eslint-disable react/prop-types */

import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/podcast-detail/content';
import Hero from 'components/pages/podcast-detail/hero';
import AudioPlayer from 'components/shared/audio-player';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';
import Subscribe from 'components/shared/subscribe';

const PodcastDetailPage = ({ data: { feedPodcast: podcast }, location }) => {
  const seo = {
    title: `Novu Podcast - ${podcast.title}`,
    description: `${podcast.itunes.subtitle}`,
    slug: `podcast/${podcast.title.toLowerCase().replace(/\s/g, '-')}/`,
  };

  const hero = {
    imageUrl: podcast.itunes.image,
    url: location.href,
    author: podcast.author,
  };

  const content = {
    title: podcast.title,
    subtitle: podcast.itunes.subtitle,
    episode: podcast.itunes.episode,
    audio: {
      src: podcast.enclosure.url,
      type: podcast.enclosure.type,
    },
    text: podcast?.content?.encoded,
    date: podcast.pubDate,
    url: location.href,
  };

  return (
    <Layout seo={seo}>
      <section className="safe-paddings pt-36 pb-28 lg:pt-32 md:pt-28 md:pb-10 sm:pt-18">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-8 gap-y-16 lg:gap-x-7 sm:flex sm:flex-col sm:gap-x-0 sm:gap-y-10">
            <Hero className="col-span-4" {...hero} />
            <Content className="col-span-8" {...content} />
          </div>
        </div>
      </section>
      <Subscribe />
      <Separator backgroundColor="black" />
      <div className="fixed left-0 bottom-0 z-10 w-full">
        <AudioPlayer />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    feedPodcast(id: { eq: $id }) {
      author
      title
      link
      itunes {
        episode
        image
        subtitle
      }
      enclosure {
        url
        type
      }
      content {
        encoded
      }
      pubDate
    }
  }
`;

export default PodcastDetailPage;
