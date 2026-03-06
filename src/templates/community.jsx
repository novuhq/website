import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from 'components/pages/community/blog-posts';
import Contribute from 'components/pages/community/contribute';
import Events from 'components/pages/community/events';
import GetInvolved from 'components/pages/community/get-involved';
import GitHubStat from 'components/pages/community/github-stat';
import Hero from 'components/pages/community/hero';
import MembersMap from 'components/pages/community/members-map';
import OpenIssues from 'components/pages/community/open-issues';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import GITHUB from 'constants/github';
import LINKS from 'constants/links';

const CommunityPage = (props) => {
  const {
    data: { sanityLatestBlogPosts: blogPosts, github: githubData = GITHUB },
    pageContext,
  } = props;

  const latestBlogPosts = {
    items: blogPosts || [],
    blogPageURL: LINKS.blog.to,
  };

  return (
    <Layout className="bg-[#09050B]" headerTheme="community">
      <div className="relative overflow-hidden">
        <Hero />
        <GetInvolved />
        <GitHubStat {...githubData} />
      </div>
      <Events />
      <MembersMap contributors={pageContext.contributors} />
      <OpenIssues
        issues={pageContext.labeledIssues}
        reposWithIssues={pageContext.repositoriesWithLabeledIssues}
      />
      <Contribute />
      <BlogPosts {...latestBlogPosts} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    github {
      count
      commits
      closedIssues
      contributors
      forks
      pullRequests
      openIssues
    }
    sanityLatestBlogPosts {
      title
      slug {
        current
      }
      caption
      publishedAt
      pathname
      cover
      category {
        title
        slug {
          current
        }
      }
      authors {
        name
        position
        photo
      }
    }
  }
`;

export default CommunityPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/community/',
    title: 'Community - Novu',
    description:
      'Join the Novu community, contribute code, meet new friends, learn, create and innovate with us!',
  };
  return <SEO {...pageMetadata} />;
};
