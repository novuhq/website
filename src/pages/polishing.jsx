import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/polishing/content';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const PolishingPage = ({
  data: {
    githubData: {
      rawResult: {
        data: {
          repository: { issues },
        },
      },
    },
  },
}) => (
  <Layout>
    <Content issues={issues.nodes} />
  </Layout>
);

export const pageQuery = graphql`
  query {
    githubData {
      rawResult {
        data {
          repository {
            issues {
              nodes {
                assignees {
                  nodes {
                    name
                    avatarUrl
                    login
                    url
                  }
                }
                author {
                  avatarUrl
                  login
                  url
                }
                number
                title
                url
                state
              }
            }
          }
        }
      }
    }
  }
`;

export default PolishingPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/polishing/',
    title: 'Polishing Season - Novu',
    description:
      'Polishing season is about turning that “someday” into “today”. It’s about dedicating time to quality work. To replace flaws and friction with polish and delight.',
    ogImage: `/images/social-preview-polishing.jpg`,
  };
  return <SEO {...pageMetadata} />;
};
