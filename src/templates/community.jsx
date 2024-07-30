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
import Separator from 'components/shared/separator';
import LINKS from 'constants/links';

const CommunityPage = (props) => {
  const {
    data: {
      allWpPost: { nodes: articles },
      github: githubData,
    },
    pageContext,
  } = props;

  const latestBlogPosts = {
    items: articles.map((post) => ({
      title: post.title,
      category: {
        name: post.categories.nodes[0].name,
        slug: post.categories.nodes[0].slug,
        color: post.categories.nodes[0].categories.color,
      },
      date: post.date,
      url: post.url,
      image: post.pageBlogPost.imageMedium,
      description: post.pageBlogPost.description,
      author: {
        name: post.pageBlogPost.author.title,
        photo: post.pageBlogPost.author.postAuthor?.photo,
      },
    })),
    blogPageURL: LINKS.blog.to,
  };
  console.log(githubData);

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
      <Separator backgroundColor="gray" />
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
    allWpPost(sort: { date: DESC }, limit: 3) {
      nodes {
        title
        url: uri
        date
        categories {
          nodes {
            name
            slug
            categories {
              color
            }
          }
        }
        pageBlogPost {
          description
          author {
            ... on WpPostAuthors {
              title
              postAuthor {
                photo {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 36, height: 36)
                    }
                  }
                }
              }
            }
          }
          imageMedium: image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 384, height: 214)
              }
            }
            altText
          }
          imageLarge: image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 592, height: 333)
              }
            }
            altText
          }
        }
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
