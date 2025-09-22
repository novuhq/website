/* eslint-disable react/prop-types */

import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/shared/content/content';
import Heading from 'components/shared/heading';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Subscribe from 'components/shared/subscribe';

const StaticPage = ({
  data: {
    wpPage: { content, title },
  },
}) => (
  <Layout>
    <section className="safe-paddings pb-28 pt-40 sm:pt-28">
      <div className="container-sm">
        <Heading
          className="font-semibold leading-denser sm:text-3xl"
          size="lg"
          tag="h1"
          theme="white"
        >
          {title}
        </Heading>
        <Content content={content} asHTML />
      </div>
    </section>

    <Subscribe />
  </Layout>
);

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      content
      title
      url: uri
      ...wpPageSeo
    }
  }
`;

export default StaticPage;

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
