/* eslint-disable react/prop-types */

import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/shared/content/content';
import Heading from 'components/shared/heading';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';
import Subscribe from 'components/shared/subscribe';

const StaticPage = ({
  data: {
    wpPage: { content, title, seo },
  },
}) => (
  <Layout seo={seo}>
    <section className="safe-paddings pt-40 pb-28 sm:pt-28">
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
    <Separator backgroundColor="black" />
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
