/* eslint-disable react/prop-types */

// import { graphql } from 'gatsby';
// import React from 'react';

// import Content from 'components/pages/podcast-detail/content';
// import Hero from 'components/pages/podcast-detail/hero';
// import Layout from 'components/shared/layout';
// import SEO from 'components/shared/seo';
// import Separator from 'components/shared/separator';
// import Subscribe from 'components/shared/subscribe';
// import getSlugForPodcast from 'utils/get-slug-for-podcast';

// const PodcastDetailPage = ({ data: { feedPodcast: podcast }, location }) => {
//   const hero = {
//     imageUrl: podcast.itunes.image,
//     url: location.href,
//     author: podcast.author,
//   };

//   const content = {
//     title: podcast.title,
//     subtitle: podcast.itunes.subtitle,
//     episode: podcast.itunes.episode,
//     audio: {
//       src: podcast.enclosure.url,
//       type: podcast.enclosure.type,
//     },
//     text: podcast?.content?.encoded,
//     date: podcast.pubDate,
//     url: location.href,
//   };

//   return (
//     <Layout>
//       <section className="safe-paddings pt-36 pb-28 lg:pt-32 md:pt-28 md:pb-10 sm:pt-18">
//         <div className="container">
//           <div className="grid grid-cols-12 gap-x-8 gap-y-16 lg:gap-x-7 sm:flex sm:flex-col sm:gap-x-0 sm:gap-y-10">
//             <Hero className="col-span-4" {...hero} />
//             <Content className="col-span-8" {...content} />
//           </div>
//         </div>
//       </section>
//       <Subscribe />
//       <Separator backgroundColor="black" />
//     </Layout>
//   );
// };

// export const pageQuery = graphql`
//   query ($id: String!) {
//     feedPodcast(id: { eq: $id }) {
//       author
//       title
//       link
//       itunes {
//         episode
//         image
//         subtitle
//       }
//       enclosure {
//         url
//         type
//       }
//       content {
//         encoded
//       }
//       pubDate
//     }
//   }
// `;

// export default PodcastDetailPage;

// export const Head = ({ data: { feedPodcast: podcast } }) => {
//   const pageMetadata = {
//     title: `Novu Podcast - ${podcast.title.replace(/w\//g, '')}`,
//     description: `${podcast.itunes.subtitle}`,
//     slug: `/podcast/${getSlugForPodcast(podcast.title)}/`,
//   };
//   return <SEO {...pageMetadata} />;
// };
