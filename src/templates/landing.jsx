/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Languages from 'components/pages/old-homepage/languages';
import Features from 'components/pages/landing/features';
import Hero from 'components/pages/landing/hero';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';
import getReactContentWithLazyBlocks from 'utils/get-react-content-with-lazy-blocks';

const LandingPage = ({
  data: {
    wpPage: { content },
  },
}) => {
  const contentWithLazyBlocks = getReactContentWithLazyBlocks(content, {
    landinghero: Hero,
    landingfeatures: Features,
    landingcodeblock: Languages,
    landingcta: GetStarted,
  });

  return (
    <Layout>
      {contentWithLazyBlocks}
      <Separator backgroundColor="black" />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      url: uri
      ...wpPageSeo
    }
  }
`;

export default LandingPage;

export const Head = ({
  data: {
    wpPage: { seo },
  },
}) => {
  const pageMetadata = {
    ...seo,
    description: seo.description || seo.defaultDescription,
  };
  return <SEO {...pageMetadata} />;
};
