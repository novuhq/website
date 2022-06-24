import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import React from 'react';

import Achievements from 'components/pages/contributor/achievements';
import Activity from 'components/pages/contributor/activity';
import Profile from 'components/pages/contributor/profile';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const ContributorPage = ({
  data: {
    allImagesOfContributor: {
      nodes: {
        0: { images },
      },
    },
  },
  location,
  pageContext: { contributor },
}) => {
  const SEO = {
    title: `Novu - ${contributor.github || contributor.name}`,
    description: `Come and meet our awesome contributor ${contributor.github || contributor.name}`,
    slug: `contributor/${contributor.github}`,
    preventIndexing: false,
    ogImage: getSrc(images[0].local.childImageSharp),
  };

  return (
    <Layout seo={SEO}>
      <div className="safe-paddings pt-44 md:pt-30 sm:pt-22">
        <div className="container-lg grid grid-cols-12 items-start gap-x-8 lg:gap-x-7 md:flex md:flex-col md:gap-x-0">
          <Profile contributor={contributor} />
          <div className="col-span-8">
            <Achievements contributor={contributor} generatedImages={images} url={location.href} />
            <Separator className="px-0 pt-8 pb-20 sm:pb-16" backgroundColor="black" />
            <Activity contributor={contributor} />
          </div>
        </div>
      </div>
      <GetStarted />
      <Separator backgroundColor="black" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($userName: String!) {
    allImagesOfContributor(filter: { userName: { eq: $userName } }) {
      nodes {
        images {
          type
          local {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default ContributorPage;
