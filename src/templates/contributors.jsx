import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import React from 'react';

import Achievements from 'components/pages/contributors/achievements';
import Hero from 'components/pages/contributors/hero';
import HowItWorks from 'components/pages/contributors/how-it-works/how-it-works';
import GetStarted from 'components/shared/get-started';
import Issues from 'components/shared/issues';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const ContributorsPage = ({ pageContext }) => (
  <Layout>
    <Hero />
    <Achievements list={pageContext.contributors.list} />
    <HowItWorks />
    <Issues className="py-40 lg:py-32 md:py-20 sm:py-16" />
    <GetStarted />
  </Layout>
);

export default ContributorsPage;

export const pageQuery = graphql`
  query {
    ogImage: file(relativePath: { eq: "contributors/social-preview.jpg" }) {
      childImageSharp {
        gatsbyImageData(formats: [JPG], width: 1200, height: 630)
      }
    }
  }
`;

export const Head = ({ data: { ogImage } }) => {
  const pageMetadata = {
    title: 'Novu - Contributors',
    description:
      'The ultimate library for managing multi-channel transactional notifications with a single API.',
    slug: '/contributors/',
    ogImage: getSrc(ogImage.childImageSharp),
  };
  return <SEO {...pageMetadata} />;
};
