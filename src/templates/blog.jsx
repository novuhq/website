/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import ArticlesList from 'components/pages/blog/articles-list';
import Categories from 'components/pages/blog/categories';
import Pagination from 'components/pages/blog/pagination';
import ArticleCard from 'components/shared/article-card';
import Layout from 'components/shared/layout';

const BlogPage = ({
  data: {
    strapiBlog: page,
    allStrapiCategory: { nodes: categories },
    allStrapiArticle: articles,
  },
  pageContext,
}) => {
  const seo = {
    title: page.seo?.title,
    description: page.seo?.description,
    slug: page.slug,
    preventIndexing: page.seo?.preventIndexing,
    keywords: page.seo?.keywords,
    ogImage: page.seo?.ogImage?.localFile.publicURL,
  };

  const featuredPost = {
    title: page.featuredPost.title,
    description: page.featuredPost.description,
    slug: `${pageContext.blogPageURL}/${page.featuredPost.slug}`,
    category: page.featuredPost.category,
    image: page.featuredPost.cover,
    date: page.featuredPost.date,
    author: page.featuredPost.author,
    blogPageURL: pageContext.blogPageURL,
  };

  const articlesList = {
    items: articles.nodes,
    blogPageURL: pageContext.blogPageURL,
  };

  return (
    <Layout seo={seo}>
      <div className="container-lg pt-8">
        <ArticleCard size="lg" {...featuredPost} />
      </div>
      <Categories
        items={categories}
        activeCategoryId={pageContext.categoryId || 'none'}
        blogPageURL={pageContext.blogPageURL}
      />
      <ArticlesList {...articlesList} />
      {pageContext.pageCount > 1 && (
        <Pagination
          pageCount={pageContext.pageCount}
          currentPageIndex={pageContext.currentPage}
          blogPageURL={pageContext.blogPageURL}
          categoryPath={pageContext.categoryPath}
        />
      )}
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($featuredPostId: String!, $categoryId: String, $skip: Int!, $limit: Int!) {
    strapiBlog {
      id
      slug
      featuredPost {
        id
        title
        description
        slug
        category {
          name
          slug
          color
        }
        date(formatString: "MMMM D, YYYY")
        author {
          name
          avatar {
            alternativeText
            localFile {
              url
              childImageSharp {
                gatsbyImageData(width: 36, height: 36)
              }
            }
          }
        }
        cover {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 644, height: 360)
            }
          }
        }
      }

      seo {
        title
        description
        preventIndexing
        keywords
        ogImage {
          localFile {
            publicURL
          }
        }
      }
    }

    allStrapiCategory(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        slug
      }
    }

    allStrapiArticle(
      filter: { id: { ne: $featuredPostId }, category: { id: { eq: $categoryId } } }
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        slug
        date(formatString: "MMMM D, YYYY")
        category {
          color
          name
          slug
        }
        title
        description
        author {
          name
          avatar {
            alternativeText
            localFile {
              url
              childImageSharp {
                gatsbyImageData(width: 36, height: 36)
              }
            }
          }
        }
        imageMedium: cover {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 380, height: 212)
            }
          }
        }
        imageLarge: cover {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 644, height: 360)
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
