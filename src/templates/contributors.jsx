import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { axios } from 'helpers/axios';
import React from 'react';

import Achievments from 'components/pages/contributors/achievments';
import Hero from 'components/pages/contributors/hero';
import HowItWorks from 'components/pages/contributors/how-it-works/how-it-works';
import Issues from 'components/pages/contributors/issues';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const ContributorsPage = ({ serverData: { issues }, data: { ogImage }, pageContext }) => {
  const SEO = {
    title: 'Novu - Contributors',
    description:
      'The ultimate library for managing multi-channel transactional notifications with a single API.',
    slug: '/contributors/',
    ogImage: getSrc(ogImage.childImageSharp),
  };

  return (
    <Layout seo={SEO}>
      <Hero />
      <Achievments list={pageContext.contributors.list} />
      <HowItWorks />
      <Issues issues={issues} />
      <GetStarted />
      <Separator backgroundColor="black" />
    </Layout>
  );
};

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

export async function getServerData() {
  try {
    const issues = await axios.get(`/issues`);

    return {
      props: {
        issues: issues.data.issues,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
