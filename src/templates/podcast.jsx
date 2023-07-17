/* eslint-disable react/prop-types */
// import { graphql } from 'gatsby';
// import { getSrc } from 'gatsby-plugin-image';
// import React from 'react';

// import Pagination from 'components/pages/blog/pagination';
// import Hero from 'components/pages/podcast/hero';
// import PodcastList from 'components/pages/podcast/podcast-list';
// import Layout from 'components/shared/layout';
// import SEO from 'components/shared/seo';
// import Separator from 'components/shared/separator';
// import Subscribe from 'components/shared/subscribe';
// import getSlugForPodcast from 'utils/get-slug-for-podcast';

// const PodcastPage = (props) => {
//   const {
//     data: {
//       allFeedPodcast: { nodes: podcasts },
//     },
//     pageContext,
//   } = props;

//   const podcastList = {
//     items: podcasts.map(
//       ({ title, enclosure: { url, type }, itunes: { episode, image, subtitle }, ...props }) => ({
//         title,
//         subtitle,
//         episode,
//         audio: {
//           src: url,
//           type,
//         },
//         slug: `/${pageContext.podcastPageUrl}/${getSlugForPodcast(title)}/`,
//         imageUrl: image,
//         ...props,
//       })
//     ),
//   };

//   return (
//     <Layout>
//       <Hero />
//       <div className="bg-gray-2 py-20 lg:py-16 md:py-14 sm:py-10">
//         <PodcastList {...podcastList} />
//         {pageContext.pageCount > 1 && (
//           <>
//             <Separator className="mt-14" size="lg" backgroundColor="gray" />
//             <Pagination
//               pageCount={pageContext.pageCount}
//               currentPageIndex={pageContext.currentPage}
//               blogPageURL={pageContext.blogPageURL}
//               categoryPath={pageContext.categoryPath}
//             />
//           </>
//         )}
//       </div>

//       <Subscribe />
//       <Separator backgroundColor="black" />
//     </Layout>
//   );
// };

// export const pageQuery = graphql`
//   query ($skip: Int, $limit: Int) {
//     allFeedPodcast(limit: $limit, skip: $skip, sort: { fields: itunes___episode, order: DESC }) {
//       nodes {
//         author
//         title
//         link
//         itunes {
//           episode
//           image
//           subtitle
//         }
//         enclosure {
//           url
//           type
//         }
//       }
//     }

//     ogImage: file(relativePath: { eq: "podcast/social-preview.jpg" }) {
//       childImageSharp {
//         gatsbyImageData(formats: [JPG], width: 1200, height: 630)
//       }
//     }
//   }
// `;

// export default PodcastPage;

// export const Head = ({ data: { ogImage }, pageContext }) => {
//   const pageMetadata = {
//     title: `Novu Podcast`,
//     // description: '',
//     slug: `/${pageContext.podcastPageUrl}/`,
//     ogImage: getSrc(ogImage.childImageSharp),
//   };
//   return <SEO {...pageMetadata} />;
// };
