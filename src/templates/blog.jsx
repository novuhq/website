/* eslint-disable react/prop-types */
import clsx from 'clsx';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import React from 'react';

import Categories from 'components/pages/blog/categories';
import Hero from 'components/pages/blog/hero';
import Pagination from 'components/pages/blog/pagination';
import PostList from 'components/pages/blog/post-list';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

const BlogPage = (props) => {
  const {
    data: {
      featuredPost: {
        nodes: { 0: featuredPost },
      },
      allWpCategory: { nodes: categories },
      allWpPost: { nodes: articles },
    },
    pageContext,
  } = props;

  const hero = {
    title: featuredPost.title,
    description: featuredPost.pageBlogPost.description,
    url: featuredPost.url,
    category: {
      name: featuredPost.categories.nodes[0].name,
      url: `${pageContext.blogPageURL}${featuredPost.categories.nodes[0].slug}/`,
      color: featuredPost.categories.nodes[0].categories.color,
    },
    image: featuredPost.pageBlogPost.image,
    date: featuredPost.date,
    author: {
      name: featuredPost.pageBlogPost.author.title,
      photo: featuredPost.pageBlogPost.author.postAuthor?.photo,
    },
  };

  const postsList = {
    items: articles.map((post) => ({
      title: post.title,
      category: {
        name: post.categories.nodes[0].name,
        slug: post.categories.nodes[0].slug,
        color: post.categories.nodes[0].categories.color,
      },
      date: post.date,
      url: post.url,
      imageMedium: post.pageBlogPost.imageMedium,
      imageLarge: post.pageBlogPost.imageLarge,
      description: post.pageBlogPost.description,
      author: {
        name: post.pageBlogPost.author.title,
        photo: post.pageBlogPost.author.postAuthor?.photo,
      },
    })),
    blogPageURL: pageContext.blogPageURL,
  };

  const mainHeading = !pageContext?.categoryPath
    ? 'Blog Novu'
    : `Blog Novu - ${
        pageContext?.seo?.title?.split('-')[0].trim() || pageContext?.categoryPath.slice(0, -1)
      }`;

  return (
    <Layout>
      <h1 className="sr-only">{mainHeading}</h1>
      <Hero {...hero} />

      <div
        className={clsx('bg-gray-2 pb-20', {
          '!pb-0': postsList.items.length === 7 && pageContext.pageCount <= 1,
        })}
      >
        <Categories
          items={categories}
          activeCategoryId={pageContext.categoryId || 'none'}
          blogPageURL={pageContext.blogPageURL}
        />
        <PostList {...postsList} />

        {pageContext.pageCount > 1 && (
          <>
            <Separator className="mt-14" size="lg" backgroundColor="gray" />
            <Pagination
              pageCount={pageContext.pageCount}
              currentPageIndex={pageContext.currentPage}
              blogPageURL={pageContext.blogPageURL}
              categoryPath={pageContext.categoryPath}
            />
          </>
        )}
      </div>
      {postsList.items.length === 7 && pageContext.pageCount <= 1 && (
        <Separator backgroundColor="black" />
      )}
      <CtaWithForm
        className="mb-[192px] mt-[238px] text-center"
        title="You're five minutes away from your first Novu-powered notification"
        description="Create a free account, send your first notification, all before your coffee gets cold... no credit card required."
        leftItem={{
          text: 'Get started',
          link: 'https://dashboard.novu.co/?utm_campaign=blog_cta',
        }}
        rightItem={{
          text: 'Contact us',
          link: 'https://novu.co/contact-us/?utm_campaign=blog_cta',
        }}
      />
      <Separator backgroundColor="black" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!, $featuredPostId: String!, $categoryId: String, $skip: Int!, $limit: Int!) {
    wpPage(id: { eq: $id }) {
      ...wpPageSeo
    }
    featuredPost: allWpPost(filter: { id: { eq: $featuredPostId } }) {
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
          image {
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
    allWpPost(
      filter: {
        id: { ne: $featuredPostId }
        categories: { nodes: { elemMatch: { id: { eq: $categoryId } } } }
      }
      sort: { date: DESC }
      limit: $limit
      skip: $skip
    ) {
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
    allWpCategory(
      filter: { posts: { nodes: { elemMatch: { id: { ne: null } } } } }
      sort: { name: ASC }
    ) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export default BlogPage;

export const Head = ({
  data: {
    wpPage: { seo },
  },
  pageContext,
}) => {
  const categoryPageSeo = pageContext.seo
    ? {
        title: pageContext.seo.title,
        description: pageContext.seo.metaDesc,
        preventIndexing: pageContext.seo.metaRobotsNoindex,
        slug: pageContext.seo.opengraphUrl.replace('/category', ''),
        ogImage: getSrc(pageContext.seo.opengraphImage?.childImageSharp),
      }
    : null;
  const pageMetadata = categoryPageSeo || seo;
  return <SEO {...pageMetadata} />;
};
